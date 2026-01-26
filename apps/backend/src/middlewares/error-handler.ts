import type { ErrorHandler } from 'hono'
import type { StatusCode } from 'hono/utils/http-status'

import { HTTPException } from 'hono/http-exception'
import httpStatus from 'http-status'
import { ZodError } from 'zod'

import { IS_PRODUCTION } from '@/constants/app'
import { ERROR_MESSAGES } from '@/constants/error'
import { ApiError } from '@/libs/error'
import { response } from '@/utils/response'
import { formatZodError } from '@/utils/zod'

export function errorConverter(err: unknown): ApiError {
	if (err instanceof ApiError) {
		return err
	}

	// Handle ZodError for validation errors
	if (err instanceof ZodError) {
		return new ApiError(
			httpStatus.BAD_REQUEST,
			ERROR_MESSAGES.VALIDATION,
			formatZodError(err),
		)
	}

	// Handle SyntaxError for JSON parsing errors
	if (
		err instanceof SyntaxError &&
		err.message.includes('Unexpected end of JSON input')
	) {
		return new ApiError(httpStatus.BAD_REQUEST, ERROR_MESSAGES.JSON)
	}

	// Handle other errors
	const castedErr =
		typeof err === 'object' && err !== null
			? (err as Record<string, unknown>)
			: {}
	let statusCode: StatusCode = httpStatus.INTERNAL_SERVER_ERROR
	if (typeof castedErr.statusCode === 'number') {
		statusCode = castedErr.statusCode as StatusCode
	}

	let message: string =
		httpStatus[statusCode.toString() as keyof typeof httpStatus].toString()
	if (typeof castedErr.description === 'string') {
		message = castedErr.description
	} else if (typeof castedErr.message === 'string') {
		message = castedErr.message
	}

	return new ApiError(statusCode, message, false)
}

const errorHandler: ErrorHandler = async (err, c) => {
	if (err instanceof HTTPException) {
		return err.getResponse()
	}

	const error = errorConverter(err)
	if (IS_PRODUCTION && !error.isOperational) {
		error.statusCode = httpStatus.INTERNAL_SERVER_ERROR
		error.message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR].toString()
	}

	return response({
		c,
		status: error.statusCode,
		message: error.message,
		data: error?.data ?? null,
		others: {
			...(!IS_PRODUCTION && { stack: err.stack }),
		},
	})
}

export default errorHandler
