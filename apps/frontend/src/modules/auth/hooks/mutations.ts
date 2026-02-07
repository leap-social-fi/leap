import type {
	MeResponse,
	NewUserRequest,
	VerifyRequest,
} from '@leap/shared/schema/auth'
import type { BaseResponse } from '@leap/shared/types/response'

import { type UseMutationOptions, useMutation } from '@tanstack/react-query'

import { AuthServices } from '@/modules/auth/service'

export const useAuthVerify = (
	options?: UseMutationOptions<BaseResponse<MeResponse>, Error, VerifyRequest>,
) =>
	useMutation({
		mutationFn: (data) => AuthServices.verify(data),
		...options,
	})

export const useAuthNewUser = (
	options?: UseMutationOptions<BaseResponse<MeResponse>, Error, NewUserRequest>,
) =>
	useMutation({
		mutationFn: (data) => AuthServices.newUser(data),
		...options,
	})

export const useLogout = (
	options?: UseMutationOptions<BaseResponse<null>, Error>,
) =>
	useMutation({
		mutationFn: () => AuthServices.logout(),
		...options,
	})
