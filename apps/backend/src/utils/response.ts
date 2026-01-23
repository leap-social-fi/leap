import type { Context } from 'hono'
import type { StatusCode } from 'hono/utils/http-status'

import httpStatus from 'http-status'

import { ERROR_MESSAGES } from '@/constants/error'

interface BaseResponseProps {
	c: Context
	message?: string
	status?: StatusCode
	other?: Record<string, unknown>
}

interface ResponseProps<T = unknown> extends BaseResponseProps {
	data?: T | null
}

function buildResponse({
	c,
	message,
	status = httpStatus.OK,
	other = {},
}: BaseResponseProps) {
	const httpMessage = httpStatus[`${status}_NAME` as keyof typeof httpStatus] as
		| string
		| undefined
	c.status(status)

	return {
		message: message ?? httpMessage ?? httpStatus['200_NAME'],
		...other,
	}
}

export function response<T>({
	c,
	data = null,
	message,
	status,
	other,
}: ResponseProps<T>): Response {
	const baseResponse = buildResponse({ c, message, status, other })

	return c.json({
		data,
		...baseResponse,
	})
}

interface ValidationErrorResponseProps extends Pick<BaseResponseProps, 'c'> {
	error: Record<string, string>
}

export function validationErrorResponse({
	c,
	error,
}: ValidationErrorResponseProps): Response {
	return response({
		c,
		message: ERROR_MESSAGES.VALIDATION,
		status: httpStatus.BAD_REQUEST,
		data: error,
	})
}

interface UniqueErrorRule {
	match: string
	field?: string
	message: string
}

export function handleUniqueConstraintError(
	c: Context,
	error: unknown,
	rules: UniqueErrorRule[],
) {
	const dbError = error as { code?: string; sqlMessage?: string }

	if (dbError.code === 'ER_DUP_ENTRY' && dbError.sqlMessage) {
		const matchedRule = rules.find((rule) =>
			dbError.sqlMessage?.includes(rule.match),
		)

		if (matchedRule) {
			return validationErrorResponse({
				c,
				error: {
					[matchedRule?.field ?? matchedRule.match]: matchedRule.message,
				},
			})
		}
	}

	throw error
}
