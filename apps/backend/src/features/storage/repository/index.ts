import type { CreateTemporaryStorage } from '@/features/storage/types'

import { eq, gt, inArray, lt, sql } from 'drizzle-orm'

import TemporaryStore from '@/features/storage/repository/temporary'
import { type DBClient, postgres } from '@/libs/postgresql'
import { temporaryStorage } from '@/schema'
import { takeUniqueOrThrow } from '@/utils/drizzle'

export class StorageRepository {
	private db: DBClient

	public temp: TemporaryStore

	constructor() {
		this.db = postgres()
		this.temp = new TemporaryStore()
	}

	public async create({ id, ext, type, duration }: CreateTemporaryStorage) {
		return await this.db.insert(temporaryStorage).values({
			id,
			ext,
			type,
			expiredAt: sql`CURRENT_TIMESTAMP + INTERVAL '1 SECOND' * ${duration}`,
		})
	}

	public async getExpired() {
		return await this.db
			.select({
				id: temporaryStorage.id,
				type: temporaryStorage.type,
				ext: temporaryStorage.ext,
			})
			.from(temporaryStorage)
			.where(lt(temporaryStorage.expiredAt, sql`CURRENT_TIMESTAMP`))
	}

	public async getById(id: bigint) {
		return await this.db
			.select()
			.from(temporaryStorage)
			.where(eq(temporaryStorage.id, id))
			.then(takeUniqueOrThrow)
	}

	public async getActive() {
		return this.db
			.select({
				id: temporaryStorage.id,
				duration: sql<number>`ROUND(EXTRACT(EPOCH FROM ${temporaryStorage.expiredAt} - CURRENT_TIMESTAMP))::INT`,
			})
			.from(temporaryStorage)
			.where(gt(temporaryStorage.expiredAt, sql`CURRENT_TIMESTAMP`))
	}

	public async deleteById(id: bigint) {
		return await this.db
			.delete(temporaryStorage)
			.where(eq(temporaryStorage.id, id))
	}

	public async deleteBatch(ids: bigint[]) {
		return await this.db
			.delete(temporaryStorage)
			.where(inArray(temporaryStorage.id, ids))
	}
}
