import type { AuthJwtPayload, AuthMe } from '@leap/shared/types/auth'
import type { Context, MiddlewareHandler, Next } from 'hono'

import { getCookie } from 'hono/cookie'
import { createMiddleware } from 'hono/factory'
import { verify } from 'hono/jwt'
import status from 'http-status'

import { KEY_ACCESS_TOKEN } from '@/constants/key'
import { AuthRepository } from '@/features/auth/repository'
import config from '@/libs/config'
import { ApiError } from '@/libs/error'

interface AuthMiddleware {
	Variables: {
		user: AuthMe
		jwt: AuthJwtPayload
		token: string
	}
}

export type AuthProps = AuthMiddleware['Variables']
export type AuthMode = 'auth' | 'bypass' | 'identity'

const repo = new AuthRepository()

const retrieveToken = (c: Context): string | undefined => {
	return getCookie(c, KEY_ACCESS_TOKEN)
}

const parseJwt = async (token: string): Promise<AuthJwtPayload> => {
	const { AUTH_JWT_SECRET } = config()
	try {
		const payload = await verify(token, AUTH_JWT_SECRET, 'HS256')
		if (!payload) throw new Error()
		return payload as AuthJwtPayload
	} catch {
		throw new ApiError(status.UNAUTHORIZED, 'Token verification failed')
	}
}

const validateBlacklist = async (token: string): Promise<void> => {
	const isBlacklisted = await repo.blacklist.has(token)
	if (isBlacklisted) {
		throw new ApiError(
			status.UNAUTHORIZED,
			'Token is invalid, please login again',
		)
	}
}

const resolveUser = async (id: string): Promise<AuthMe | null> => {
	try {
		const userId = BigInt(id)
		if (userId <= 0n) return null
		return await repo.getUserMeById(userId)
	} catch {
		return null
	}
}

const processUserSession = async (
	c: Context,
	payload: AuthJwtPayload,
	mode: AuthMode,
): Promise<void> => {
	if (!payload.id) {
		if (mode === 'auth')
			throw new ApiError(status.UNAUTHORIZED, 'Invalid user ID')
		return
	}

	const user = await resolveUser(String(payload.id))
	if (!user && mode === 'auth') {
		throw new ApiError(status.UNAUTHORIZED, 'User not found')
	}

	if (user) {
		c.set('user', user)
	}
}

const authenticate = async (c: Context, mode: AuthMode): Promise<void> => {
	const token = retrieveToken(c)

	if (!token) {
		if (mode === 'bypass') return
		throw new ApiError(status.UNAUTHORIZED, 'Authorization token is missing')
	}

	const payload = await parseJwt(token)
	await validateBlacklist(token)

	c.set('jwt', payload)
	c.set('token', token)

	await processUserSession(c, payload, mode)
}

function auth(mode: AuthMode = 'auth'): MiddlewareHandler<AuthMiddleware> {
	return createMiddleware<AuthMiddleware>(async (c: Context, next: Next) => {
		try {
			await authenticate(c, mode)
		} catch (err) {
			if (err instanceof ApiError) throw err
			throw new ApiError(status.UNAUTHORIZED, (err as Error).message)
		}

		await next()
	})
}

export default auth
