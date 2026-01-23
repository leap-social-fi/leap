import type React from 'react'

import {
	QueryClientProvider as BaseQueryClientProvider,
	QueryClient,
} from '@tanstack/react-query'

const QueryClientProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const queryClient = new QueryClient()
	return (
		<BaseQueryClientProvider client={queryClient}>
			{children}
		</BaseQueryClientProvider>
	)
}

export default QueryClientProvider
