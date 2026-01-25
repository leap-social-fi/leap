import type { RedisClient } from 'bun'

import { parse } from 'tinyduration'

import config from '@/libs/config'
import redis from '@/libs/redis'

export class NonceStore {
	private redis: RedisClient
	readonly key = 'nonce'

	constructor() {
		this.redis = redis()
	}

	public async set(nonce: string) {
		const conf = config()
		const expired = parse(conf.AUTH_NONCE_EXPIRES_IN)?.seconds || 0
		await this.redis.hsetex(this.key, 'EX', expired, 'FIELDS', 1, nonce, '')
	}

	public async has(nonce: string): Promise<boolean> {
		return await this.redis.hexists(this.key, nonce)
	}

	public async delete(nonce: string) {
		await this.redis.hdel(this.key, nonce)
	}
}
