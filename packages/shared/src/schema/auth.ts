import z from 'zod'

import {
	address,
	avatar,
	bio,
	// content,
	image,
	name,
	snowflakeId,
	username,
} from './base'

export const meResponseSchema = z.object({
	id: snowflakeId,
	address,
	name,
	username,
	avatar: image,
})

export type MeResponse = z.infer<typeof meResponseSchema>

export const verifyRequestSchema = z.object({
	nonce: z.string(),
	message: z.string(),
	signature: z.string(),
})

export type VerifyRequest = z.infer<typeof verifyRequestSchema>

export const newUserSchemaBase = {
	name,
	username,
	avatar,
}

// Note: For Frontend
export const newUserSchemaForm = z.object({
	...newUserSchemaBase,
	bio,
})

// Note: For Backend
export const newUserSchema = z.object({
	...newUserSchemaBase,
	// bio: content
})

export type NewUserForm = z.infer<typeof newUserSchemaForm>
export type NewUserRequest = z.infer<typeof newUserSchema>

export const nonceResponseSchema = z.object({
	token: z.string(),
})

export type NonceResponse = z.infer<typeof nonceResponseSchema>

export const checkUsernameRequestSchema = z.object({
	username,
})

export type CheckUsernameRequest = z.infer<typeof checkUsernameRequestSchema>

export const checkUsernameResponseSchema = z.object({
	available: z.boolean(),
})

export type CheckUsernameResponse = z.infer<typeof checkUsernameResponseSchema>
