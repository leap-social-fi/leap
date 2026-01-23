import type { ZodError } from 'zod'

export function formatZodError(error: ZodError): Record<string, string> {
	const objError: Record<string, string> = {}

	for (const err of error.issues) {
		if (err.path.length <= 0) {
			continue
		}

		const key = err.path.join('.')
		if (!objError[key]) {
			objError[key] = err.message
		}
	}

	return objError
}

export function getErrorPhrase(error: ZodError, withKey = false): string {
	const message = error.issues[0].message
	if (!withKey) {
		return message
	}

	const path = error.issues[0].path.toString()
	return `${path}: ${message}`
}
