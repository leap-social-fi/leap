import type React from 'react'

import { del, get, set } from 'idb-keyval'
import { baseSepolia, mainnet } from 'viem/chains'
import {
	WagmiProvider as BaseWagmiProvider,
	createConfig,
	createStorage,
	http,
} from 'wagmi'

const config = createConfig({
	chains: [baseSepolia, mainnet],
	storage: createStorage({
		storage: {
			async getItem(name) {
				return get(name)
			},
			async setItem(name, value) {
				await set(name, value)
			},
			async removeItem(name) {
				await del(name)
			},
		},
	}),
	transports: {
		[baseSepolia.id]: http(),
		[mainnet.id]: http(),
	},
})

const WagmiProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <BaseWagmiProvider config={config}>{children}</BaseWagmiProvider>
}

export default WagmiProvider
