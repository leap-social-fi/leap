import { RedisStore } from '@/libs/redis'
import StorageQueue from '@/services/queue/storage'

export class TemporaryStore extends RedisStore {
	public async set(id: bigint, expired: number) {
		await this.redis.setex(StorageQueue.newKey(id), expired, '1')
	}

	public async del(id: bigint) {
		await this.redis.del(StorageQueue.newKey(id))
	}
}

export default TemporaryStore
