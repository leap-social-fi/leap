import type { MeResponse, VerifyRequest } from '@leap/shared/schema/auth'
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
