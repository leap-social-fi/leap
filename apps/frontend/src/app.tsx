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
					<RouteProvider />
				</OnchainkitProvider>
			</QueryClientProvider>
			<Toaster />
		</WagmiProvider>
	)
}

export default App
