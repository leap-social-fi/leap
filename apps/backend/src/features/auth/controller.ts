import type { AuthJwtPayload } from '@leap/shared/types/auth'
import type {
	AuthCache,
	CheckUsernameProps,
	LogoutProps,
	MeProps,
	NewUserProps,
	NonceProps,
	VerifyProps,
} from '@/features/auth/types'

import { add, getUnixTime, milliseconds } from 'date-fns'
import { deleteCookie, setCookie } from 'hono/cookie'
import { sign } from 'hono/jwt'
import status from 'http-status'
import { SiweMessage, generateNonce } from 'siwe'
import { parse } from 'tinyduration'

import { IS_PRODUCTION } from '@/constants/app'
import { KEY_ACCESS_TOKEN } from '@/constants/key'
import { AuthRepository } from '@/features/auth/repository'
import config, { type Config } from '@/libs/config'
import { isDuplicateKey } from '@/libs/error'
import logger from '@/libs/logger'
import { response } from '@/utils/response'
import { getAvatar } from '@/utils/user'

export default class AuthController {
	private repo: AuthRepository
	private conf: Config

	constructor() {
		this.repo = new AuthRepository()
		this.conf = config()
	}

	public nonce({ c }: NonceProps) {
		const token = generateNonce()
		this.repo.nonce.set(token)

		return response({
			c,
			message: 'Successfully generated nonce!',
			data: {
				token,
			},
		})
	}

	public async checkUsername({ c, username }: CheckUsernameProps) {
		const available = await this.repo.checkUsername(username)

		return response({
			c,
			message: `Username ${username} is ${available ? 'available' : 'unavailable'}`,
			data: {
				available,
			},
		})
	}

	public me({ c, user }: MeProps) {
		return response({
			c,
			message: 'Successfully retrieved user information!',
			data: this.formatUser(user),
		})
	}

	public async verify({ c, nonce, message, signature }: VerifyProps) {
		if (!this.repo.nonce.has(nonce)) {
			return response({
				c,
				status: status.UNPROCESSABLE_ENTITY,
				message: 'Invalid nonce',
			})
		}

		try {
			const siwe = new SiweMessage(message)
			const { data } = await siwe.verify({ signature })

			const user = await this.repo.getUserMeByAddress(data.address)
			if (user) {
				await this.repo.updateLastLoggedIn(user.id)
			}

			await this.setAuthCookie(c, data.address, user?.id)

			return response({
				c,
				message: 'Successfully verified!',
				data: this.formatUser(user),
			})
		} catch (error) {
			logger.error(error)
			return response({
				c,
				status: status.INTERNAL_SERVER_ERROR,
				message: 'Failed to verify signature',
			})
		}
	}

	public async newUser({ c, user, avatar, name, username, jwt }: NewUserProps) {
		if (user) {
			return response({
				c,
				status: status.UNPROCESSABLE_ENTITY,
				message: 'User has already registered!',
			})
		}

		try {
			const newUser = await this.repo.createUser({
				name,
				avatar,
				username,
				address: jwt.sub,
			})

			if (!newUser) {
				throw new Error('Failed to create user')
			}

			await this.setAuthCookie(c, newUser.address, newUser.id)

			return response({
				c,
				message: 'Successfully created user!',
				data: this.formatUser(newUser),
			})
		} catch (error) {
			return this.handleRegistrationError(c, error, username)
		}
	}

	public async logout({ c, jwt, token }: LogoutProps) {
		deleteCookie(c, KEY_ACCESS_TOKEN)

		if (jwt && token) {
			await this.repo.blacklist.set(token, jwt.exp).catch((err) => {
				logger.error('Failed to blacklist token:', err)
			})
		}

		return response({
			c,
			message: 'Successfully logged out!',
		})
	}

	/**
	 * Helpers
	 */

	private async setAuthCookie(c: any, address: string, userId?: bigint) {
		const { token, maxAge } = await this.generateAccessToken(address, userId)

		setCookie(c, KEY_ACCESS_TOKEN, token, {
			secure: IS_PRODUCTION,
			httpOnly: true,
			sameSite: IS_PRODUCTION ? 'Strict' : 'lax',
			path: '/',
			maxAge,
		})
	}

	private async generateAccessToken(address: string, userId?: bigint) {
		const now = new Date()
		const duration = parse(this.conf.AUTH_JWT_EXPIRES_IN)
		const expDate = add(now, duration)

		const payload: AuthJwtPayload = {
			sub: address,
			id: userId,
			exp: getUnixTime(expDate),
			iat: getUnixTime(now),
			nbf: getUnixTime(now),
		}

		const token = await sign(payload, this.conf.AUTH_JWT_SECRET)

		return {
			token,
			maxAge: milliseconds(duration) / 1000,
		}
	}

	private formatUser(user?: AuthCache | null) {
		if (!user) return null
		return {
			...user,
			avatar: getAvatar(user.avatar, user.username),
		}
	}

	private handleRegistrationError(c: any, error: unknown, username: string) {
		const duplicateKey = isDuplicateKey(error)
		if (!duplicateKey) {
			logger.error(error)
			return response({
				c,
				status: status.INTERNAL_SERVER_ERROR,
				message: 'Failed to create user!',
			})
		}

		switch (duplicateKey) {
			case 'username':
				return response({
					c,
					status: status.BAD_REQUEST,
					message: `Username ${username} is already taken!`,
					data: { username: 'Username already taken' },
				})

			default:
				return response({
					c,
					status: status.UNPROCESSABLE_ENTITY,
					message: `The ${duplicateKey} is already taken!`,
				})
		}
	}
}
