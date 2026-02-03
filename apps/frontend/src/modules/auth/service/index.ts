import type { VerifyRequest } from '@leap/shared/schema/auth'

import httpService from '@/libs/httpService'

export const AuthServices = {
	nonce: () => httpService.get('/auth/nonce').then((res) => res.data),

	verify: (bodyRequest: VerifyRequest) =>
		httpService.post('/auth/verify', bodyRequest).then((res) => res.data),
}
