import { relations } from 'drizzle-orm'
import {
	bigint,
	integer,
	pgTable,
	primaryKey,
	text,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core'

import {
	articleComments,
	articleReactions,
	articles,
	bookmarks,
} from './articles'

export const users = pgTable('users', {
	id: bigint('id', { mode: 'bigint' }).primaryKey(),
	address: varchar('address', { length: 42 }).notNull().unique(),
	name: varchar('name', { length: 64 }).notNull(),
	username: varchar('username', { length: 32 }).notNull().unique(),
	bio: text('bio'),
	avatar: varchar('avatar', { length: 32 }).notNull(),
	lastLoggedIn: timestamp('last_logged_in').defaultNow().notNull(),
	totalArticles: integer('total_articles').default(0).notNull(),
	totalReactions: integer('total_reactions').default(0).notNull(),
	totalViewed: integer('total_viewed').default(0).notNull(),
	totalFollowers: integer('total_followers').default(0).notNull(),
	totalFollowing: integer('total_following').default(0).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at'),
})

export const followers = pgTable(
	'followers',
	{
		followerId: bigint('follower_id', { mode: 'bigint' })
			.notNull()
			.references(() => users.id),
		followingId: bigint('following_id', { mode: 'bigint' })
			.notNull()
			.references(() => users.id),
		createdAt: timestamp('created_at').defaultNow().notNull(),
	},
	(t) => [primaryKey({ columns: [t.followerId, t.followingId] })],
)

export const usersRelations = relations(users, ({ many }) => ({
	articles: many(articles),
	comments: many(articleComments),
	reactions: many(articleReactions),
	bookmarks: many(bookmarks),
	followers: many(followers, { relationName: 'user_followers' }),
	following: many(followers, { relationName: 'user_following' }),
}))

export const followersRelations = relations(followers, ({ one }) => ({
	follower: one(users, {
		fields: [followers.followerId],
		references: [users.id],
		relationName: 'user_following',
	}),
	following: one(users, {
		fields: [followers.followingId],
		references: [users.id],
		relationName: 'user_followers',
	}),
}))
