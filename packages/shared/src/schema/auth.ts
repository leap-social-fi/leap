import z from 'zod'

export const verifyRequestSchema = z.object({
	nonce: z.string(),
	message: z.string(),
	signature: z.string(),
})

export type VerifyRequest = z.infer<typeof verifyRequestSchema>

export const nonceResponseSchema = z.object({
	token: z.string(),
})

export type NonceResponse = z.infer<typeof nonceResponseSchema>

export const verifyResponseSchema = z.any()

export type VerifyResponse = z.infer<typeof verifyResponseSchema>
