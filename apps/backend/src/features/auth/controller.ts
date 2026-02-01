import type { AuthJwtPayload } from '@leap/shared/types/auth'
import type { DiceBearAvatar } from '@leap/shared/types/user'
import type {
	AuthCache,
	LogoutProps,
	MeProps,
	NewUserProps,
	NonceProps,
	VerifyProps,
} from '@/features/auth/types'

import { DICE_BEAR_PREFIX } from '@leap/shared/constants/user'
import { diceBearUrl } from '@leap/shared/utils/url'
import { add, getUnixTime } from 'date-fns'
import { deleteCookie, setCookie } from 'hono/cookie'
import { sign } from 'hono/jwt'
import status from 'http-status'
import { SiweMessage, generateNonce } from 'siwe'
import { parse } from 'tinyduration'

import { KEY_ACCESS_TOKEN } from '@/constants/key'
import { AuthRepository } from '@/features/auth/repository'
import config, { type Config } from '@/libs/config'
import logger from '@/libs/logger'
import { response } from '@/utils/response'

class AuthController {
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

	public me({ c, user }: MeProps) {
		return response({
			c,
			message: 'Successfully retrieved user information!',
			data: this.userMe(user),
		})
	}

	public async verify({ c, nonce, message, signature }: VerifyProps) {
		const exists = this.repo.nonce.has(nonce)
		if (!exists) {
			return response({
				c,
				message: 'Invalid nonce',
				status: status.UNPROCESSABLE_ENTITY,
			})
		}

		try {
			const siwe = new SiweMessage(message)
			const { data } = await siwe.verify({ signature })

			const address = data.address
			const user = await this.repo.getUserMeByAddress(address)
			if (user) {
				await this.repo.updateLastLoggedIn(user.id)
			}

			const { token, maxAge } = await this.setAccessToken(address, user?.id)
			setCookie(c, KEY_ACCESS_TOKEN, token, {
				httpOnly: true,
				secure: true,
				sameSite: 'Strict',
				path: '/',
				maxAge,
			})

			return response({
				c,
				message: 'Successfully verified!',
				data: this.userMe(user),
			})
		} catch (e) {
			logger.error(e)
			return response({
				c,
				status: status.INTERNAL_SERVER_ERROR,
				message: 'Failed to verify signature',
			})
		}
	}

	protected async setAccessToken(address: string, userId?: bigint) {
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
			maxAge: duration.seconds || 0,
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

			const { token, maxAge } = await this.setAccessToken(
				newUser.address,
				newUser.id,
			)
			setCookie(c, KEY_ACCESS_TOKEN, token, {
				httpOnly: true,
				secure: true,
				sameSite: 'Strict',
				path: '/',
				maxAge,
			})

			return response({
				c,
				message: 'Successfully update user!',
				data: this.userMe(newUser),
			})
		} catch (e) {
			logger.error(e)
			return response({
				c,
				status: status.INTERNAL_SERVER_ERROR,
				message: 'Failed to update user!',
			})
		}
	}

	public async logout({ c, jwt, token }: LogoutProps) {
		deleteCookie(c, KEY_ACCESS_TOKEN)

		if (!jwt || !token) {
			return response({
				c,
				message: 'Successfully logged out!',
			})
		}

		await this.repo.blacklist.set(token, jwt.exp).catch((err) => {
			logger.error('Failed to blacklist token during logout:', err)
		})

		return response({
			c,
			message: 'Successfully logged out!',
		})
	}

	protected userMe(user?: AuthCache | null) {
		if (!user) return null

		return {
			...user,
			avatar: this.getAvatar(user.avatar, user.username),
		}
	}

	protected getAvatar(avatar: string, username = 'username'): string {
		const isDiceBear = avatar.startsWith(DICE_BEAR_PREFIX)
		if (isDiceBear) {
			const style = avatar.substring(DICE_BEAR_PREFIX.length) as DiceBearAvatar
			return diceBearUrl(style, username)
		}

		return avatar
	}
}

export default AuthController
