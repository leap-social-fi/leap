import process from 'node:process'
import { z } from 'zod'

import { getErrorPhrase } from '@/utils/zod'

import logger from './logger'

const envVarsSchema = z.object({
	PORT: z.coerce.number().default(3000),

	SWAGGER_USER: z.string().default(''),
	SWAGGER_PASSWORD: z.string().default(''),
})

export type EnvVarsSchemaType = z.infer<typeof envVarsSchema>

let valConfig: EnvVarsSchemaType | undefined

export function initConfig(skipLogger = false) {
	const parseConfig = envVarsSchema.safeParse(process.env)
	if (!parseConfig.success) {
		if (!skipLogger) {
			logger.error('Invalid environment variables...')
			logger.error(getErrorPhrase(parseConfig.error, true))
			logger.error('Exiting...')
		}
		process.exit(0)
	}

	valConfig = parseConfig.data
}

export function config() {
	if (!valConfig) {
		throw new Error('Config not initialized. Please call initConfig() first.')
	}

	return valConfig
}

export default config
