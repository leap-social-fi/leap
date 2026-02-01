import { parse } from 'tinyduration'

import { RedisStore } from '@/libs/redis'

export class NonceStore extends RedisStore {
	readonly key = 'nonce'

	public async set(nonce: string) {
		const expired = parse(this.conf.AUTH_NONCE_EXPIRES_IN)?.seconds || 0
		await this.redis.hsetex(this.key, 'EX', expired, 'FIELDS', 1, nonce, '')
	}

	public async has(nonce: string): Promise<boolean> {
		return await this.redis.hexists(this.key, nonce)
	}

	public async delete(nonce: string) {
		await this.redis.hdel(this.key, nonce)
	}
}

export default NonceStore
