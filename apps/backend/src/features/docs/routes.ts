import type { Hono } from 'hono'
import type { Config } from '@/libs/config'

import { swaggerUI } from '@hono/swagger-ui'
import { basicAuth } from 'hono/basic-auth'
import { openAPIRouteHandler } from 'hono-openapi'

import { KEY_ACCESS_TOKEN } from '@/constants/key'
import config from '@/libs/config'

class Docs {
	readonly app: Hono
	readonly conf: Config
	readonly basePath: string

	constructor(app: Hono, basePath = '/docs') {
		this.app = app
		this.conf = config()
		this.basePath = basePath
	}

	public routes() {
		const username = this.conf.SWAGGER_USER
		const password = this.conf.SWAGGER_PASSWORD
		if (username !== '' || password !== '') {
			this.app.use(
				`${this.basePath}/*`,
				basicAuth({
					username,
					password,
					realm: 'Swagger UI',
				}),
			)
		}

		this.app.get(
			`${this.basePath}`,
			swaggerUI({
				url: `${this.basePath}/openapi`,
			}),
		)

		this.app.get(
			`${this.basePath}/openapi`,
			openAPIRouteHandler(this.app, {
				documentation: {
					components: {
						securitySchemes: {
							accessToken: {
								type: 'apiKey',
								in: 'cookie',
								name: KEY_ACCESS_TOKEN,
								description: 'Access token for API',
							},
						},
					},
					info: {
						title: 'Leap API',
						version: '0.0.0',
						description: 'The core of Leap API',
					},
				},
			}),
		)
	}
}

export default Docs
