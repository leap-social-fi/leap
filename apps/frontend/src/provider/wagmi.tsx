import type React from 'react'

import {
	WagmiProvider as BaseWagmiProvider,
	createConfig,
} from '@privy-io/wagmi'
import { baseSepolia } from 'viem/chains'
import { http } from 'wagmi'

export const config = createConfig({
	chains: [baseSepolia],
	transports: {
		[baseSepolia.id]: http(),
	},
})

const WagmiProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <BaseWagmiProvider config={config}>{children}</BaseWagmiProvider>
}

export default WagmiProvider
