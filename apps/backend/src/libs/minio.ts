import * as Minio from 'minio'

import config from '@/libs/config'
import logger from '@/libs/logger'

let minioClient: Minio.Client | undefined

export function initMinio() {
	const conf = config()
	minioClient = new Minio.Client({
		endPoint: conf.MINIO_ENDPOINT,
		port: conf.MINIO_PORT,
		useSSL: conf.MINIO_USE_SSL,
		accessKey: conf.MINIO_ACCESS_KEY,
		secretKey: conf.MINIO_SECRET_KEY,
	})
}

export async function createBucketIfNotExists(bucketName: string) {
	const storage = minio()

	const exists = await storage.bucketExists(bucketName)
	if (exists) {
		logger.info(`Bucket "${bucketName}" already exists.`)
		return
	}

	await storage.makeBucket(bucketName)
	logger.info(`Bucket "${bucketName}" created successfully.`)
}

export function minio() {
	if (!minioClient) {
		throw new Error(
			'MinIO client not initialized. Please call initMinio() first.',
		)
	}

	return minioClient
}

export default minio
