import type { RedisClient } from 'bun'
import type { BaseQueue } from '@/services/queue/type'

import logger from '@/libs/logger'
import { redisSubscribe } from '@/libs/redis'
import StorageQueue from '@/services/queue/storage'

class QueueService {
	protected conn: RedisClient

	protected queue = new Map<string, BaseQueue>()

	static EXPIRED_CHANNEL = '__keyevent@0__:expired'

	constructor() {
		this.conn = redisSubscribe()
	}

	async init() {
		logger.info('Initializing queues:')
		await this.add('storage', new StorageQueue(this.conn))
	}

	protected async add(key: string, queue: BaseQueue) {
		if (this.queue.has(key)) {
			logger.warn(`Queue with key ${key} already exists, skipping addition.`)
		}
		logger.info(`- ${queue.constructor.name}`)
		this.queue.set(key, queue)
		await queue.init()
	}

	async subscribe() {
		logger.info('Subscribing to expired key channel for queue processing...')

		await this.conn.subscribe(QueueService.EXPIRED_CHANNEL, (message) => {
			this.processExpiredMessage(message)
		})
	}

	async unsubscribe() {
		logger.info('Unsubscribing from expired key channel...')
		await this.conn.unsubscribe(QueueService.EXPIRED_CHANNEL)
	}

	protected processExpiredMessage(message: string) {
		for (const [key, queue] of this.queue) {
			if (queue.isQueue(message)) {
				logger.info(`Processing ${key} queue for message: ${message}`)
				queue.action(message).catch((err: Error) => {
					console.error(
						{ err, message },
						'Error processing expired queue message',
					)
				})
			}
		}
	}
}

export default QueueService
