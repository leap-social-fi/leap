import type { MeResponse, NonceResponse } from '@leap/shared/schema/auth'
import type { BaseResponse } from '@leap/shared/types/response'
import type { AxiosError } from 'axios'

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

export const useAuthMe = (
	options?: UseQueryOptions<BaseResponse<MeResponse>, AxiosError>,
) =>
	useQuery({
		queryKey: ['me'],
		queryFn: () => AuthServices.me(),
		staleTime: 0,
		enabled: false,
		...options,
	})
