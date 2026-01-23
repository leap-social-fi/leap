import PrivyProvider from '@/provider/privy'
import QueryClientProvider from '@/provider/query-client'
import RouteProvider from '@/provider/router'
import WagmiProvider from '@/provider/wagmi'

function App() {
	return (
		<PrivyProvider>
			<QueryClientProvider>
				<WagmiProvider>
					<RouteProvider />
				</WagmiProvider>
			</QueryClientProvider>
		</PrivyProvider>
	)
}

export default App
