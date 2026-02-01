import { sdk } from '@farcaster/miniapp-sdk'
import { useEffect } from 'react'

import { Toaster } from '@/components/ui/sonner'
import QueryClientProvider from '@/provider/query-client'
import RouteProvider from '@/provider/router'
import WagmiProvider from '@/provider/wagmi'

function App() {
	useEffect(() => {
		sdk.actions.ready()
	}, [])

	return (
		<WagmiProvider>
			<QueryClientProvider>
				<div className="relative mx-auto max-w-120 border-slate-200 dark:border-slate-800">
					<RouteProvider />
				</div>
			</QueryClientProvider>
			<Toaster />
		</WagmiProvider>
	)
}

export default App
