import type { Hono } from 'hono'
import type { EnvVarsSchemaType } from '@/libs/config'

import { swaggerUI } from '@hono/swagger-ui'
import { basicAuth } from 'hono/basic-auth'
import { openAPIRouteHandler } from 'hono-openapi'

import config from '@/libs/config'

class Docs {
	private app: Hono
	private conf: EnvVarsSchemaType
	private basePath: string

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
