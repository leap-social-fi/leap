import process from 'node:process'
import { z } from 'zod'

import { getErrorPhrase } from '@/utils/zod'

import logger from './logger'

const configSchema = z.object({
	PORT: z.coerce.number().default(3000),
	SWAGGER_USER: z.string().default(''),
	SWAGGER_PASSWORD: z.string().default(''),
	CORS_ORIGIN: z
		.string()
		.transform((val) => val.split(',').map((item) => item.trim()))
		.pipe(z.array(z.string()))
		.default(['*']),
	CORS_ALLOW_METHODS: z
		.string()
		.transform((val) => val.split(',').map((item) => item.trim()))
		.pipe(z.array(z.enum(['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'])))
		.default(['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']),
	CORS_ALLOW_HEADERS: z
		.string()
		.transform((val) => val.split(',').map((item) => item.trim()))
		.pipe(z.array(z.string()))
		.default(['Content-Type']),
	POSTGRES_DB_URL: z.string(),
	REDIS_HOST: z.string().default('localhost'),
	REDIS_PORT: z.coerce.number().default(6379),
	REDIS_USERNAME: z.string().default(''),
	REDIS_PASSWORD: z.string().default(''),
	REDIS_DB: z.coerce
		.number()
		.min(0, { message: 'REDIS_DB must be 0 or greater' })
		.default(0),

	AUTH_JWT_SECRET: z.string().min(32, {
		message: 'AUTH_JWT_SECRET must be at least 32 characters long',
	}),
	AUTH_JWT_EXPIRES_IN: z.iso.duration().default('P7D'),
	AUTH_NONCE_EXPIRES_IN: z.iso.duration().default('P2M'),
	AUTH_CACHE_EXPIRES_IN: z.iso.duration().default('P5M'),
	MINIO_ENDPOINT: z.string().default('localhost'),
	MINIO_PORT: z.coerce.number().default(9000),
	MINIO_USE_SSL: z.stringbool().default(false),
	MINIO_ACCESS_KEY: z.string(),
	MINIO_SECRET_KEY: z.string(),
	MINIO_BUCKET_NAME: z.string().default('leap'),
	MINIO_PUBLIC_URL: z.url().default('http://localhost:9000'),
})

export type Config = z.infer<typeof configSchema>

let valConfig: Config | undefined

export function initConfig(skipLogger = false) {
	const parseConfig = configSchema.safeParse(process.env)
	if (!parseConfig.success) {
		if (!skipLogger) {
			logger.error('Invalid environment variables...')
			logger.error(getErrorPhrase(parseConfig.error, true))
			logger.error('Exiting...')
		}
		process.exit(0)
	}

	valConfig = parseConfig.data
}

export function config() {
	if (!valConfig) {
		throw new Error('Config not initialized. Please call initConfig() first.')
	}

	return valConfig
}

export default config
