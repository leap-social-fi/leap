import { RedisClient } from 'bun'

import config, { type Config } from './config'

let redisClient: RedisClient | undefined
let subscribeClient: RedisClient | undefined

export async function initRedis() {
	const conf = config()

	redisClient = new RedisClient(
		`redis://${conf.REDIS_USERNAME}:${conf.REDIS_PASSWORD}@${conf.REDIS_HOST}:${conf.REDIS_PORT}/${conf.REDIS_DB}`,
		{
			autoReconnect: true,
			maxRetries: 10,
		},
	)

	await redisClient.connect()
	subscribeClient = await redisClient.duplicate()
}

export function redis() {
	if (!redisClient) {
		throw new Error(
			'Redis client not initialized. Please call initRedis() first.',
		)
	}

	return redisClient
}

export function redisSubscribe() {
	if (!subscribeClient) {
		throw new Error(
			'Redis subscribe client not initialized. Please call initRedis() first.',
		)
	}

	return subscribeClient
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
