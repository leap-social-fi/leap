import type { IUploadType } from '@leap/shared/types/storage'
import type { UploadProps } from '@/features/storage/types'

import { UPLOAD_OPTIONS } from '@leap/shared/constants/storage'

import { StorageRepository } from '@/features/storage/repository'
import config, { type Config } from '@/libs/config'
import logger from '@/libs/logger'
import { type IMinio, minio } from '@/libs/minio'
import { id } from '@/utils/app'
import { parseDuration } from '@/utils/datetime'
import { response } from '@/utils/response'
import { getStorageUrl } from '@/utils/url'

export default class StorageController {
	private conf: Config
	private minio: IMinio
	private repo: StorageRepository

	constructor() {
		this.conf = config()
		this.minio = minio()
		this.repo = new StorageRepository()
	}

	public getFileName(identity: string, ext: string) {
		return `${identity}.${ext}`
	}

	public getTempPath(type: IUploadType, fileName: string) {
		return `temp/${type}/${fileName}`
	}

	public async upload({ c, file, type }: UploadProps) {
		try {
			const options = UPLOAD_OPTIONS[type]

			const identity = id()
			const { seconds } = parseDuration(options.duration)

			const buffer = Buffer.from(await file.arrayBuffer())
			const ext = file.name.split('.').pop() || 'bin'
			const fileName = this.getFileName(identity.toString(), ext)
			const fullPath = this.getTempPath(type, fileName)

			await this.minio.putObject(
				this.conf.MINIO_BUCKET_NAME,
				fullPath,
				buffer,
				buffer.length,
				{
					'Content-Type': file.type,
				},
			)

			this.repo.create({ id: identity, ext, type, duration: seconds })
			this.repo.temp.set(identity, seconds)

			return response({
				c,
				message: 'Successfully uploaded file!',
				data: {
					type: type,
					file: getStorageUrl(fullPath),
				},
			})
		} catch {
			return response({
				c,
				message: 'Failed to upload file!',
			})
		}
	}

	public async initializeActiveStorage() {
		const actives = await this.repo.getActive()
		await Promise.all(
			actives.map(async (active) => {
				await this.repo.temp.set(active.id, active.duration)
			}),
		)
	}

	protected async removeTemporaryStorage(
		id: bigint,
		type: IUploadType,
		ext: string,
	) {
		const fileName = this.getFileName(id.toString(), ext)
		const fullPath = this.getTempPath(type, fileName)

		await this.repo.temp.del(id)
		await this.minio.removeObject(this.conf.MINIO_BUCKET_NAME, fullPath)
	}

	public async cleanupExpiredStorage() {
		const expired = await this.repo.getExpired()
		if (!expired || expired.length === 0) return

		logger.info(`Found ${expired.length} expired storage items to clean up.`)
		for (const item of expired) {
			await this.removeTemporaryStorage(item.id, item.type, item.ext)
		}

		const ids = expired.map((item) => item.id)
		await this.repo.deleteBatch(ids)
		logger.info(
			`Successfully cleaned up ${expired.length} expired storage items.`,
		)
	}

	public async cleanupSelectedId(id: bigint) {
		const item = await this.repo.getById(id)
		if (!item) return
		await this.removeTemporaryStorage(item.id, item.type, item.ext)
		await this.repo.deleteById(item.id)
	}
}
