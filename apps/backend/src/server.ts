import { access, readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { Hono } from 'hono'
import { inspectRoutes } from 'hono/dev'
import httpStatus from 'http-status'

import { IS_PRODUCTION } from './constants/app'
import Docs from './features/docs/routes'
import { ApiError } from './libs/error'
import logger from './libs/logger'
import errorHandler from './middlewares/error-handler'
import { response } from './utils/response'

export class Server {
	private app: Hono

	constructor(app: Hono) {
		this.app = app
	}

	public async configure() {
		this.app.get('/', (c) => {
			return response({
				c,
				data: {
					name: 'Leap API',
					developers: [
						{
							name: 'Muhamad Rizal Arfiyan',
							github: 'https://github.com/rizalarfiyan',
							website: 'https://rizalarfiyan.com',
						},
						{
							name: 'Ganna Hinggil Anugrah Prasetya',
							github: 'https://github.com/GannaHup',
							website: 'https://gannaprasetya.com',
						},
					],
				},
			})
		})

		await this.loadRouter()

		this.app.notFound(() => {
			throw new ApiError(httpStatus.NOT_FOUND, 'Not found')
		})

		this.app.onError(errorHandler)
		this.availableRoutes()
	}

	private async loadRouter() {
		try {
			const featuresDir = resolve(import.meta.dir, 'features')
			const featureFolders = await readdir(featuresDir, { withFileTypes: true })

			if (featureFolders.length > 0) {
				logger.info('Available features:')
			}

			for (const folder of featureFolders) {
				if (!folder.isDirectory()) {
					continue
				}

				const name = folder.name
				if (name === 'docs') {
					continue
				}

				const routePath = resolve(featuresDir, name, 'routes.ts')

				try {
					await access(routePath)
				} catch {
					logger.warn(`- ${name} (skipped): File "routes.ts" not found`)
					continue
				}

				const route = (await import(routePath)) as { default?: Hono }
				if (route.default && route.default instanceof Hono) {
					this.app.route(name, route.default)
					logger.info(`- ${name}`)
					continue
				}

				logger.warn(
					`- ${name} (skipped): No default export or not an instance of Hono`,
				)
			}

			const docs = new Docs(this.app)
			docs.routes()
		} catch (error) {
			logger.error(
				`Error loading routes: ${error instanceof Error ? error.message : String(error)}`,
			)
		}
	}

	private availableRoutes() {
		if (IS_PRODUCTION) {
			return
		}

		logger.info('Available routes:')
		const routes = inspectRoutes(this.app).filter(
			({ isMiddleware }) => !isMiddleware,
		)
		for (const route of routes) {
			const method = `[${route.method}]`.padEnd(8)
			logger.info(`- ${method} ${route.path}`)
		}
	}
}
