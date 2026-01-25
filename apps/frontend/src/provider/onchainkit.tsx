import '@coinbase/onchainkit/styles.css'
import type React from 'react'

import { type AppConfig, OnchainKitProvider } from '@coinbase/onchainkit'
import { baseSepolia } from 'wagmi/chains'

const config: AppConfig = {
	analytics: false,
	appearance: {
		name: 'Leap dApps',
		logo: '/favicon.svg',
		mode: 'auto',
		theme: 'default',
	},
	wallet: {
		display: 'modal',
	},
}

const OnchainkitProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return (
		<OnchainKitProvider
			apiKey={import.meta.env.VITE_ONCHAINKIT_API_KEY}
			chain={baseSepolia}
			config={config}
		>
			{children}
		</OnchainKitProvider>
	)
}

export default OnchainkitProvider
