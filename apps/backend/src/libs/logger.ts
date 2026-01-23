import pino from 'pino'

import { IS_PRODUCTION } from '@/constants/app'

const logger = pino.pino({
	level: IS_PRODUCTION ? 'info' : 'debug',
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true,
			levelFirst: true,
			translateTime: 'SYS:HH:MM:ss',
		},
	},
})

export default logger
