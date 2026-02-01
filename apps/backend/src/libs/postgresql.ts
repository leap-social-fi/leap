import { drizzle } from 'drizzle-orm/node-postgres'

import config from './config'

export type DBClient = ReturnType<typeof drizzle>

let dbClient: DBClient | undefined

export function initPostgres() {
	const conf = config()

	dbClient = drizzle(conf.POSTGRES_DB_URL)
}

export function postgres() {
	if (!dbClient) {
		throw new Error(
			'Postgres client not initialized. Please call initPostgres() first.',
		)
	}

	return dbClient
}

export function checkConnection() {
	const conn = postgres()
	try {
		conn.execute('SELECT 1')
	} catch {
		throw new Error('Postgres connection error!')
	}
}

export default postgres
