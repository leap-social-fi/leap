import { UPLOAD_TYPES } from '@leap/shared/constants/storage'
import { baseResponse } from '@leap/shared/schema/response'
import {
	uploadRequestSchema,
	uploadResponseSchema,
} from '@leap/shared/schema/storage'
import { Hono } from 'hono'
import { describeRoute, resolver } from 'hono-openapi'

import StorageController from '@/features/storage/controller'
import auth from '@/middlewares/auth'
import validator from '@/middlewares/validator'

const app = new Hono()
const controller = new StorageController()

app.post(
	'/upload',
	describeRoute({
		tags: ['Storage'],
		description: 'Upload a file',
		security: [{ accessToken: [] }],
		requestBody: {
			content: {
				'multipart/form-data': {
					schema: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
								enum: UPLOAD_TYPES,
							},
							file: {
								type: 'string',
								format: 'binary',
							},
						},
						required: ['type', 'file'],
					},
				},
			},
		},
		responses: {
			200: {
				description: 'File uploaded successfully',
				content: {
					'application/json': {
						schema: resolver(baseResponse(uploadResponseSchema)),
					},
				},
			},
		},
	}),
	auth(),
	validator('form', uploadRequestSchema, undefined, true),
	async (c) => {
		const val = c.req.valid('form')
		const user = c.get('user')
		return controller.upload({ c, ...val, user })
	},
)

export default app
