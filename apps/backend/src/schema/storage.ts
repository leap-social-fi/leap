import { bigint, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

import { temporaryStorageTypeEnum } from '@/schema/enums'

export const temporaryStorage = pgTable('temporary_storage', {
	id: bigint('id', { mode: 'bigint' }).primaryKey(),
	type: temporaryStorageTypeEnum('type').notNull(),
	ext: varchar('ext', { length: 16 }).notNull(),
	expiredAt: timestamp('expired_at').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
})
