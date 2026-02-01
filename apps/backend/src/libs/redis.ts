import { RedisClient } from 'bun'

import config, { type Config } from './config'
import logger from './logger'

let redisClient: RedisClient | undefined

export function initRedis() {
	const conf = config()

	redisClient = new RedisClient(
		`redis://${conf.REDIS_USERNAME}:${conf.REDIS_PASSWORD}@${conf.REDIS_HOST}:${conf.REDIS_PORT}/${conf.REDIS_DB}`,
		{
			autoReconnect: true,
			maxRetries: 10,
		},
	)

	redisClient.connect().catch((err: Error) => {
		logger.error({ err }, 'Failed to connect to Redis')
	})
}

export function redis() {
	if (!redisClient) {
		throw new Error(
			'Redis client not initialized. Please call initRedis() first.',
		)
	}

	return redisClient
}

export class RedisStore {
	protected redis: RedisClient
	protected conf: Config

	constructor() {
		this.redis = redis()
		this.conf = config()
	}
}

export default redis
