import type { RedisClient } from 'bun'
import type { BaseQueue } from '@/services/queue/type'

import { isValidId } from '@leap/shared/utils/check'

import StorageController from '@/features/storage/controller'
import logger from '@/libs/logger'

class StorageQueue implements BaseQueue {
	static KEY = 'storage_queue'

	public name = 'storage'

	protected conn: RedisClient
	protected service: StorageController

	constructor(conn: RedisClient) {
		this.conn = conn
		this.service = new StorageController()
	}

	async init(): Promise<void> {
		this.service.initializeActiveStorage()
		this.service.cleanupExpiredStorage()
	}

	isQueue(message: string): boolean {
		const validPrefix = message.startsWith(StorageQueue.KEY)
		if (!validPrefix) return false
		const [_, snowflakeId] = message.split(':')
		if (!snowflakeId) return false
		return isValidId(snowflakeId)
	}

	static newKey(id: bigint) {
		return `${StorageQueue.KEY}:${id}`
	}

	getId(message: string): bigint {
		if (!this.isQueue(message)) {
			throw new Error('Not a storage queue message')
		}

		const [_, snowflakeId] = message.split(':')
		return BigInt(snowflakeId)
	}

	async action(message: string) {
		const id = this.getId(message)
		logger.info(`Cleanup storage queue for id: ${id.toString()}`)
		await this.service.cleanupSelectedId(id)
	}
}

export default StorageQueue
