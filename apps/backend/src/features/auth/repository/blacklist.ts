import { RedisStore } from '@/libs/redis'

export class BlacklistStore extends RedisStore {
	readonly key = 'auth:blacklist'

	public async set(token: string, expired: number) {
		await this.redis.hsetex(this.key, 'EXAT', expired, 'FIELDS', 1, token, '')
	}

	public async has(blacklist: string): Promise<boolean> {
		return await this.redis.hexists(this.key, blacklist)
	}
}

export default BlacklistStore
