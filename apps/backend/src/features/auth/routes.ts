import {
	nonceResponseSchema,
	verifyRequestSchema,
	verifyResponseSchema,
} from '@leap/shared/schema/auth'
import { baseResponse } from '@leap/shared/schema/response'
import { Hono } from 'hono'
import { describeRoute, resolver } from 'hono-openapi'

import AuthController from '@/features/auth/controller'
import validator from '@/middlewares/validator'

const app = new Hono()
const controller = new AuthController()

app.get(
	'/nonce',
	describeRoute({
		tags: ['Auth'],
		description: 'Get a nonce for authentication',
		responses: {
			200: {
				description: 'Get a nonce for authentication',
				content: {
					'application/json': {
						schema: resolver(baseResponse(nonceResponseSchema)),
					},
				},
			},
		},
	}),
	(c) => {
		c.header('Cache-Control', 'no-store')
		return controller.nonce({ c })
	},
)

app.post(
	'/verify',
	describeRoute({
		tags: ['Auth'],
		description: 'Get a nonce for authentication',
		responses: {
			200: {
				description: 'Get a nonce for authentication',
				content: {
					'application/json': {
						schema: resolver(baseResponse(verifyResponseSchema)),
					},
				},
			},
		},
	}),
	validator('json', verifyRequestSchema),
	async (c) => {
		const val = c.req.valid('json')
		return controller.verify({ c, ...val })
	},
)

export default app
