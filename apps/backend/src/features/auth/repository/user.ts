import type { AuthCache } from '@/features/auth/types'

import { parse } from 'tinyduration'

import { RedisStore } from '@/libs/redis'

export class UserStore extends RedisStore {
	readonly key = 'auth:user'

	public async set(user: AuthCache) {
		const expired = parse(this.conf.AUTH_CACHE_EXPIRES_IN)?.seconds || 0
		await this.redis.hsetex(
			this.key,
			'EX',
			expired,
			'FIELDS',
			1,
			user.id.toString(),
			JSON.stringify(user),
		)
	}

	public async get(id: bigint): Promise<AuthCache | null> {
		const cache = await this.redis.hget(this.key, id.toString())
		if (cache) {
			return JSON.parse(cache) as AuthCache
		}

		return null
	}

	public async delete(id: bigint) {
		await this.redis.hdel(this.key, id.toString())
	}
}

export default UserStore
