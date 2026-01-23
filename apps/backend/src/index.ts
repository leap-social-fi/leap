import process from 'node:process'
import { compress } from '@hono/bun-compress'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { trimTrailingSlash } from 'hono/trailing-slash'

import logging from '@/middlewares/logging'

import config, { initConfig } from './libs/config'
import logger from './libs/logger'
import { Server } from './server'
import './utils/zod'

async function main() {
	logger.info('Parsing environment variables...')
	initConfig()

	const conf = config()

	logger.info('Starting backend server...')
	const app = new Hono()

	app.use(logging())
	app.use(cors())
	app.use(compress())
	app.use(trimTrailingSlash())

	const server = new Server(app)
	server.configure().catch((err: Error) => {
		logger.error({ err }, 'Error configuring server')
		process.exit(1)
	})

	process.on('SIGTERM', () => {
		logger.info('SIGTERM signal received')
		logger.info('Closing http server')
		process.exit(0)
	})

	const serve = Bun.serve({
		port: conf.PORT,
		fetch: app.fetch,
	})

	logger.info(
		`Started ${serve.development ? 'development' : 'production'} server on ${serve.url}`,
	)
}

main().catch((err: Error) => {
	logger.error({ err }, 'Error starting server')
	process.exit(1)
})
