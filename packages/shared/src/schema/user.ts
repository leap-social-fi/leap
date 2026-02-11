import { z } from 'zod'

import { EDITOR_TYPE } from '../constants/tiptap'
import { address, avatar, content, name, snowflakeId, username } from './base'

export const updateUserRequestSchema = z.object({
	name,
	username,
	avatar,
	bio: content(EDITOR_TYPE.LITE, true, true),
})

export const userResponseSchema = z.object({
	id: snowflakeId,
	address,
	name,
	username,
	bio: content(EDITOR_TYPE.LITE, true),
	avatar,
	totalArticles: z.number(),
	totalReactions: z.number(),
	totalViewed: z.number(),
	totalFollowers: z.number(),
	totalFollowing: z.number(),
})

export type UpdateUserRequest = z.infer<typeof updateUserRequestSchema>
export type UserResponse = z.infer<typeof userResponseSchema>
