import type { NonceProps, VerifyProps } from '@/features/auth/types'

import status from 'http-status'
import { SiweMessage, generateNonce } from 'siwe'

import { NonceStore } from '@/features/auth/repository'
import logger from '@/libs/logger'
import { response } from '@/utils/response'

class AuthController {
	private nonceStore: NonceStore

	constructor() {
		this.nonceStore = new NonceStore()
	}

	public nonce({ c }: NonceProps) {
		const token = generateNonce()
		this.nonceStore.set(token)

		return response({
			c,
			message: 'Successfully generated nonce!',
			data: {
				token,
			},
		})
	}

	public async verify({ c, nonce, message, signature }: VerifyProps) {
		const exists = this.nonceStore.has(nonce)
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
			return response({
				c,
				message: 'Successfully verified!',
				data,
			})
		} catch (e) {
			logger.error(e)
			return response({
				c,
				message: 'Failed to verify signature',
			})
		}
	}
}

export default AuthController
