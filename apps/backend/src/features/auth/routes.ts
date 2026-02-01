import {
	meResponseSchema,
	newUserRequestSchema,
	nonceResponseSchema,
	verifyRequestSchema,
} from '@leap/shared/schema/auth'
import { baseResponse } from '@leap/shared/schema/response'
import { Hono } from 'hono'
import { describeRoute, resolver } from 'hono-openapi'

import AuthController from '@/features/auth/controller'
import auth from '@/middlewares/auth'
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

app.get(
	'/me',
	describeRoute({
		tags: ['Auth'],
		description: 'Get current user information',
		security: [{ accessToken: [] }],
		responses: {
			200: {
				description: 'Current user information',
				content: {
					'application/json': {
						schema: resolver(baseResponse(meResponseSchema)),
					},
				},
			},
		},
	}),
	auth('identity'),
	(c) => {
		const user = c.get('user')
		return controller.me({ c, user })
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
						schema: resolver(baseResponse(meResponseSchema)),
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

app.post(
	'/new-user',
	describeRoute({
		tags: ['Auth'],
		description: 'Create a new user',
		security: [{ accessToken: [] }],
		responses: {
			200: {
				description: 'User created successfully',
				content: {
					'application/json': {
						schema: resolver(baseResponse(meResponseSchema)),
					},
				},
			},
		},
	}),
	auth('identity'),
	validator('json', newUserRequestSchema),
	async (c) => {
		const val = c.req.valid('json')
		const user = c.get('user')
		const jwt = c.get('jwt')

		return controller.newUser({ c, ...val, user, jwt })
	},
)

app.post(
	'/logout',
	describeRoute({
		tags: ['Auth'],
		description: 'Logout user',
		security: [{ accessToken: [] }],
		responses: {
			200: {
				description: 'User logged out successfully',
				content: {
					'application/json': {
						schema: resolver(baseResponse()),
					},
				},
			},
		},
	}),
	auth('bypass'),
	async (c) => {
		const token = c.get('token')
		const jwt = c.get('jwt')
		return controller.logout({ c, token, jwt })
	},
)

export default app
