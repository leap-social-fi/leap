import type React from 'react'

import { useAccount } from 'wagmi'

import ConnectWalletButton from '@/containers/home/components/connect'

const WalletAddress: React.FC = () => {
	const { address } = useAccount()
	return (
		<div>
			<p>Wallet address: {address}</p>
			<ConnectWalletButton />
		</div>
	)
}

export default WalletAddress
