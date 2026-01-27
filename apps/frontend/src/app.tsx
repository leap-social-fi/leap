import { sdk } from '@farcaster/miniapp-sdk'
import { useEffect } from 'react'

import { Toaster } from '@/components/ui/sonner'
import OnchainkitProvider from '@/provider/onchainkit'
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
				<OnchainkitProvider>
					<div className="relative mx-auto max-w-120 border-slate-200 dark:border-slate-800">
						<RouteProvider />
					</div>
				</OnchainkitProvider>
			</QueryClientProvider>
			<Toaster />
		</WagmiProvider>
	)
}

export default App
