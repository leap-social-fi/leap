import { sdk } from '@farcaster/miniapp-sdk'
import { useEffect } from 'react'

import Toaster from '@/components/base/Toaster'
import { AuthProvider } from '@/contexts/auth/Auth.context'
import { useToggleDarkMode } from '@/hooks/useToggleDarkMode'
import QueryClientProvider from '@/provider/query-client'
import RouteProvider from '@/provider/router'
import WagmiProvider from '@/provider/wagmi'

function App() {
	useToggleDarkMode()

	useEffect(() => {
		sdk.actions.ready()
	}, [])

	return (
		<WagmiProvider>
			<QueryClientProvider>
				<AuthProvider>
					<div className="relative mx-auto border-slate-200 dark:border-slate-800">
						<RouteProvider />
					</div>
				</AuthProvider>
			</QueryClientProvider>
			<Toaster />
		</WagmiProvider>
	)
}

export default App
