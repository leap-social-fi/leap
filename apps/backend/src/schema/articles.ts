import { relations } from 'drizzle-orm'
import {
	bigint,
	boolean,
	integer,
	pgTable,
	primaryKey,
	text,
	timestamp,
	unique,
	varchar,
} from 'drizzle-orm/pg-core'

import { articleReactionTypeEnum, articleStatusEnum } from './enums'
import { users } from './users'

export const articles = pgTable('articles', {
	id: bigint('id', { mode: 'bigint' }).primaryKey(),
	authorId: bigint('author_id', { mode: 'bigint' })
		.notNull()
		.references(() => users.id),
	title: varchar('title', { length: 64 }).notNull(),
	slug: varchar('slug', { length: 64 }).notNull().unique(),
	excerpt: varchar('excerpt', { length: 160 }).notNull(),
	thumbnail: varchar('thumbnail', { length: 16 }).notNull(),
	content: text('content').notNull(),
	isToken: boolean('is_token').default(false).notNull(),
	status: articleStatusEnum('status').default('draft').notNull(),
	totalReactions: integer('total_reactions').default(0).notNull(),
	totalViews: integer('total_views').default(0).notNull(),
	totalComments: integer('total_comments').default(0).notNull(),
	totalLikes: integer('total_likes').default(0).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at'),
})

export const tags = pgTable('tags', {
	id: bigint('id', { mode: 'bigint' }).primaryKey(),
	name: varchar('name', { length: 32 }).notNull().unique(),
	slug: varchar('slug', { length: 32 }).notNull().unique(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const articleTags = pgTable(
	'article_tags',
	{
		articleId: bigint('article_id', { mode: 'bigint' })
			.notNull()
			.references(() => articles.id),
		tagId: bigint('tag_id', { mode: 'bigint' })
			.notNull()
			.references(() => tags.id),
	},
	(t) => [primaryKey({ columns: [t.articleId, t.tagId] })],
)

export const articleComments = pgTable('article_comments', {
	id: bigint('id', { mode: 'bigint' }).primaryKey(),
	articleId: bigint('article_id', { mode: 'bigint' })
		.notNull()
		.references(() => articles.id),
	userId: bigint('user_id', { mode: 'bigint' })
		.notNull()
		.references(() => users.id),
	parentId: bigint('parent_id', { mode: 'bigint' }),
	content: varchar('content', { length: 1000 }).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at'),
})

export const articleReactions = pgTable(
	'article_reactions',
	{
		id: bigint('id', { mode: 'bigint' }).primaryKey(),
		articleId: bigint('article_id', { mode: 'bigint' })
			.notNull()
			.references(() => articles.id),
		userId: bigint('user_id', { mode: 'bigint' })
			.notNull()
			.references(() => users.id),
		type: articleReactionTypeEnum('type').notNull(),
		createdAt: timestamp('created_at').defaultNow().notNull(),
	},
	(t) => [unique().on(t.articleId, t.userId)],
)

export const bookmarks = pgTable(
	'bookmarks',
	{
		userId: bigint('user_id', { mode: 'bigint' })
			.notNull()
			.references(() => users.id),
		articleId: bigint('article_id', { mode: 'bigint' })
			.notNull()
			.references(() => articles.id),
		createdAt: timestamp('created_at').defaultNow().notNull(),
	},
	(t) => [primaryKey({ columns: [t.userId, t.articleId] })],
)

export const articlesRelations = relations(articles, ({ one, many }) => ({
	author: one(users, {
		fields: [articles.authorId],
		references: [users.id],
	}),
	tags: many(articleTags),
	comments: many(articleComments),
	reactions: many(articleReactions),
	bookmarks: many(bookmarks),
}))

export const articleTagsRelations = relations(articleTags, ({ one }) => ({
	article: one(articles, {
		fields: [articleTags.articleId],
		references: [articles.id],
	}),
	tag: one(tags, {
		fields: [articleTags.tagId],
		references: [tags.id],
	}),
}))

export const articleCommentsRelations = relations(
	articleComments,
	({ one, many }) => ({
		article: one(articles, {
			fields: [articleComments.articleId],
			references: [articles.id],
		}),
		user: one(users, {
			fields: [articleComments.userId],
			references: [users.id],
		}),
		parent: one(articleComments, {
			fields: [articleComments.parentId],
			references: [articleComments.id],
			relationName: 'comment_replies',
		}),
		replies: many(articleComments, { relationName: 'comment_replies' }),
	}),
)

export const articleReactionsRelations = relations(
	articleReactions,
	({ one }) => ({
		article: one(articles, {
			fields: [articleReactions.articleId],
			references: [articles.id],
		}),
		user: one(users, {
			fields: [articleReactions.userId],
			references: [users.id],
		}),
	}),
)

export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
	user: one(users, {
		fields: [bookmarks.userId],
		references: [users.id],
	}),
	article: one(articles, {
		fields: [bookmarks.articleId],
		references: [articles.id],
	}),
}))
