import { z } from 'zod'

import { address, avatar, bio, name, snowflakeId, username } from './base'

export const updateUserRequestSchema = z.object({
	name,
	username,
	// bio,
	avatar,
})

export const userResponseSchema = z.object({
	id: snowflakeId,
	address,
	name,
	username,
	bio,
	avatar,
	totalArticles: z.number(),
	totalReactions: z.number(),
	totalViewed: z.number(),
	totalFollowers: z.number(),
	totalFollowing: z.number(),
})

export type UpdateUserRequest = z.infer<typeof updateUserRequestSchema>
export type UserResponse = z.infer<typeof userResponseSchema>
