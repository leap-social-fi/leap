import type React from 'react'

import {
	PrivyProvider as BasePrivyProvider,
	type PrivyClientConfig,
} from '@privy-io/react-auth'

const config: PrivyClientConfig = {
	appearance: {
		accentColor: '#6A6FF5',
		theme: '#FFFFFF',
		showWalletLoginFirst: false,
		logo: 'https://auth.privy.io/logos/privy-logo.png',
		walletChainType: 'ethereum-only',
		walletList: [
			'detected_ethereum_wallets',
			'metamask',
			'coinbase_wallet',
			'base_account',
			'rainbow',
			'wallet_connect',
		],
	},
	loginMethods: ['google', 'twitter', 'wallet'],
	fundingMethodConfig: {
		moonpay: {
			useSandbox: true,
		},
	},
	embeddedWallets: {
		showWalletUIs: true,
		ethereum: {
			createOnLogin: 'users-without-wallets',
		},
		solana: {
			createOnLogin: 'off',
		},
	},
	mfa: {
		noPromptOnMfaRequired: false,
	},
}

const PrivyProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<BasePrivyProvider
			appId={import.meta.env.VITE_PRIVY_APP_ID}
			config={config}
		>
			{children}
		</BasePrivyProvider>
	)
}

export default PrivyProvider
