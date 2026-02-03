import { baseResponse } from '@leap/shared/schema/response'
import {
	updateUserRequestSchema,
	userResponseSchema,
} from '@leap/shared/schema/user'
import { Hono } from 'hono'
import { describeRoute, resolver } from 'hono-openapi'

import { UserController } from '@/features/user/controller'
import auth from '@/middlewares/auth'
import validator from '@/middlewares/validator'

const app = new Hono()
const controller = new UserController()

app.get(
	'/me',
	describeRoute({
		tags: ['User'],
		description: 'Get current user information',
		security: [{ accessToken: [] }],
		responses: {
			200: {
				description: 'Current user information',
				content: {
					'application/json': {
						schema: resolver(baseResponse(userResponseSchema)),
					},
				},
			},
		},
	}),
	auth(),
	(c) => {
		const user = c.get('user')
		return controller.me({ c, user })
	},
)

app.put(
	'/me',
	describeRoute({
		tags: ['User'],
		description: 'Update current user information',
		security: [{ accessToken: [] }],
		responses: {
			200: {
				description: 'Updated user information',
				content: {
					'application/json': {
						schema: resolver(baseResponse(userResponseSchema)),
					},
				},
			},
		},
	}),
	auth(),
	validator('json', updateUserRequestSchema),
	async (c) => {
		const user = c.get('user')
		const val = c.req.valid('json')
		return controller.update({ c, user, ...val })
	},
)

export default app
