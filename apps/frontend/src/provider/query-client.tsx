import type React from 'react'

import { QueryClientProvider as BaseQueryClientProvider } from '@tanstack/react-query'

import queryClient from '@/libs/query-client'

const QueryClientProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return (
		<BaseQueryClientProvider client={queryClient}>
			{children}
		</BaseQueryClientProvider>
	)
}

export default QueryClientProvider
