import type { NonceResponse } from '@leap/shared/schema/auth'
import type { BaseResponse } from '@leap/shared/types/response'

import { type UseQueryOptions, useQuery } from '@tanstack/react-query'

import { AuthServices } from '@/modules/auth/service'

export const useAuthNonce = (
	options?: UseQueryOptions<BaseResponse<NonceResponse>>,
) =>
	useQuery({
		queryKey: ['nonce'],
		queryFn: () => AuthServices.nonce(),
		enabled: false,
		staleTime: 0,
		...options,
	})
