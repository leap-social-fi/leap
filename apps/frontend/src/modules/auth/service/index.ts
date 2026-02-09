import type { NewUserRequest, VerifyRequest } from '@leap/shared/schema/auth'

import httpService from '@/libs/httpService'

export const AuthServices = {
	nonce: () => httpService.get('/auth/nonce').then((res) => res.data),

	me: () => httpService.get('/auth/me').then((res) => res.data),

	verify: (bodyRequest: VerifyRequest) =>
		httpService.post('/auth/verify', bodyRequest).then((res) => res.data),

	newUser: (bodyRequest: NewUserRequest) =>
		httpService.post('/auth/new-user', bodyRequest).then((res) => res.data),

	logout: () => httpService.post('/auth/logout').then((res) => res.data),
}
