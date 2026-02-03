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

function auth(mode: AuthMode = 'auth'): MiddlewareHandler<AuthMiddleware> {
	const { AUTH_JWT_SECRET } = config()

	return createMiddleware<AuthMiddleware>(async (ctx: Context, next: Next) => {
		const token = getCookie(ctx, KEY_ACCESS_TOKEN)

		if (!token) {
			if (mode === 'bypass') return await next()
			throw new ApiError(status.UNAUTHORIZED, 'Authorization token is missing')
		}

		try {
			const payload = await verify(token, AUTH_JWT_SECRET, 'HS256')

			if (mode === 'identity') {
				if (!payload) {
					throw new Error('Token verification failed')
				}

				ctx.set('jwt', payload)
				ctx.set('token', token)
				await next()
				return
			}

			if (
				!payload ||
				typeof payload.id !== 'string' ||
				BigInt(payload.id) <= 0n
			) {
				throw new Error('Token verification failed')
			}

			const isBlacklist = await repo.blacklist.has(token)
			if (isBlacklist) {
				throw new Error('Token is invalid, please login again')
			}

			const userId = payload.id
			const user = await repo.getUserMeById(BigInt(userId))
			if (!user) {
				throw new Error('User not found')
			}

			ctx.set('user', user)
			ctx.set('jwt', payload)
			ctx.set('token', token)
		} catch (err) {
			if (err instanceof ApiError) {
				throw err
			}

			throw new ApiError(status.UNAUTHORIZED, (err as Error).message)
		}

		await next()
	})
}

export default auth
