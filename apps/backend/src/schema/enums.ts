import { pgEnum } from 'drizzle-orm/pg-core'

export const articleStatusEnum = pgEnum('article_status', [
	'draft',
	'published',
])
export const articleReactionTypeEnum = pgEnum('article_reaction_type', ['like'])
