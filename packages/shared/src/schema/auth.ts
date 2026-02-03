import z from 'zod'

import { address, avatar, image, name, snowflakeId, username } from './base'

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

export const newUserRequestSchema = z.object({
	name,
	username,
	avatar,
})

export type NewUserRequest = z.infer<typeof newUserRequestSchema>

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
