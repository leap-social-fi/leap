import type { Context, Next } from 'hono'

import logger from '@/libs/logger'

function humanize(times: string[]) {
	const [delimiter, separator] = [',', '.']
	const orderTimes = times.map((v) =>
		v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${delimiter}`),
	)
	return orderTimes.join(separator)
}

function time(start: number) {
	const delta = Date.now() - start
	return humanize([
		delta < 1000 ? `${delta}ms` : `${Math.round(delta / 1000)}s`,
	])
}

function logging() {
	return async (c: Context, next: Next) => {
		const { method, url } = c.req
		const path = url.slice(url.indexOf('/', 8))
		const start = Date.now()
		await next()
		logger.info(`[${method}] ${path} [${c.res.status}] (${time(start)})`)
	}
}

export default logging
