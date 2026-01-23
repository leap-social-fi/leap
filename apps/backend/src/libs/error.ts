import type { StatusCode } from 'hono/utils/http-status'

import status from 'http-status'

const getMessage = (statusCode: StatusCode, message?: string): string => {
	if (message) return message

	const key = `${statusCode}_NAME` as keyof typeof status
	const name = status[key]
	if (name) return name.toString()

	return 'Api Error'
}

export class ApiError<T = unknown> extends Error {
	statusCode: StatusCode
	isOperational: boolean
	data: T | null

	constructor(
		statusCode: StatusCode,
		message?: string,
		data: T | null = null,
		isOperational = true,
	) {
		const msg = getMessage(statusCode, message)
		super(msg)
		this.statusCode = statusCode
		this.isOperational = isOperational
		this.data = data
	}
}
