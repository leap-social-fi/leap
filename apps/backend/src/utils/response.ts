import type { Context } from 'hono'
import type { StatusCode } from 'hono/utils/http-status'

import httpStatus from 'http-status'

interface BaseResponseProps {
	c: Context
	message?: string
	status?: StatusCode
	others?: Record<string, unknown>
}

interface ResponseProps<T = unknown> extends BaseResponseProps {
	data?: T | null
}

const getHttpMessage = (status: StatusCode) => {
	return (
		httpStatus?.[`${status}_NAME` as keyof typeof httpStatus] ||
		httpStatus['200_NAME']
	)
}

const buildResponse = ({
	c,
	message,
	status = httpStatus.OK,
	others = {},
}: BaseResponseProps) => {
	const httpMessage = getHttpMessage(status)
	c.status(status)

	return {
		message: message ?? httpMessage,
		...others,
	}
}

export const response = <T>({
	c,
	data = null,
	message,
	status,
	others,
}: ResponseProps<T>): Response => {
	const baseResponse = buildResponse({ c, message, status, others })

	return c.json({
		data,
		...baseResponse,
	})
}
