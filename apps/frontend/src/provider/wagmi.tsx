import type React from 'react'

import { del, get, set } from 'idb-keyval'
import { baseSepolia, mainnet } from 'viem/chains'
import {
	WagmiProvider as BaseWagmiProvider,
	createConfig,
	createStorage,
	http,
	// injected,
} from 'wagmi'

// import { baseAccount, metaMask } from 'wagmi/connectors'

const configWagmi = createConfig({
	chains: [baseSepolia, mainnet],
	// connectors: [
	// 	baseAccount(),
	// 	metaMask({}),
	// 	injected({
	// 		target: () => {
	// 			if (typeof window === 'undefined') return undefined

	// 			const phantomProvider = (window as any)?.phantom?.ethereum
	// 			if (phantomProvider?.isPhantom) {
	// 				return {
	// 					id: 'leap.phantom',
	// 					name: 'Phantom',
	// 					provider: phantomProvider,
	// 					icon: 'https://api.dicebear.com/9.x/adventurer/svg?seed=ganna',
	// 				}
	// 			}

	// 			return undefined
	// 		},
	// 		// target: () => {
	// 		// 	const phantomProvider =
	// 		// 		typeof window !== 'undefined'
	// 		// 			? ((window as any)?.phantom?.ethereum ?? (window as any)?.ethereum)
	// 		// 			: undefined

	// 		// 	if (!phantomProvider) return undefined

	// 		// 	return {
	// 		// 		id: 'app.phantom',
	// 		// 		name: 'Phantom',
	// 		// 		icon: 'https://api.dicebear.com/9.x/adventurer/svg?seed=ganna',
	// 		// 		provider: phantomProvider,
	// 		// 	}
	// 		// },
	// 		shimDisconnect: true,
	// 	}),
	// ],
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
	return <BaseWagmiProvider config={configWagmi}>{children}</BaseWagmiProvider>
}

export default WagmiProvider
