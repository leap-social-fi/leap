import config from '@/libs/config'

export const getStorageUrl = (path: string) => {
	const conf = config()
	return `${conf.MINIO_PUBLIC_URL}/${conf.MINIO_BUCKET_NAME}/${path}`
}
