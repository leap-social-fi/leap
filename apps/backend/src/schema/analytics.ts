import { relations } from 'drizzle-orm'
import {
	bigint,
	boolean,
	pgTable,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core'

import { articles } from './articles'
import { users } from './users'

export const articleViews = pgTable('article_views', {
	id: bigint('id', { mode: 'bigint' }).primaryKey(),
	articleId: bigint('article_id', { mode: 'bigint' })
		.notNull()
		.references(() => articles.id),
	viewerId: bigint('viewer_id', { mode: 'bigint' })
		.notNull()
		.references(() => users.id),
	ipAddress: varchar('ip_address', { length: 45 }).notNull(),
	deviceType: varchar('device_type', { length: 20 }),
	browserName: varchar('browser_name', { length: 50 }),
	os: varchar('os', { length: 50 }),
	isBot: boolean('is_bot').default(false).notNull(),
	viewedAt: timestamp('viewed_at').defaultNow().notNull(),
})

export const articleViewsRelations = relations(articleViews, ({ one }) => ({
	article: one(articles, {
		fields: [articleViews.articleId],
		references: [articles.id],
	}),
	viewer: one(users, {
		fields: [articleViews.viewerId],
		references: [users.id],
	}),
}))
