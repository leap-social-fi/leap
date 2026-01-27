import type { NonceResponse, VerifyResponse } from '@leap/shared/schema/auth'
import type { BaseResponse } from '@leap/shared/types/response'
import type React from 'react'

import {
	Address,
	Avatar,
	EthBalance,
	Identity,
	Name,
} from '@coinbase/onchainkit/identity'
import {
	ConnectWallet,
	Wallet,
	WalletDropdown,
	WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet'
import { useCallback } from 'react'
import { toast } from 'sonner'
import { createSiweMessage } from 'viem/siwe'
import { useAccount, useDisconnect, useSignMessage } from 'wagmi'

import axios from '@/libs/axios'

// TODO: fix me move to better folder
const Connect: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { chainId, address } = useAccount()
	const { disconnect } = useDisconnect()
	const { signMessageAsync } = useSignMessage()

	const handleSiwe = useCallback(async () => {
		if (!address || !chainId) return

		try {
			const res = await axios.get<BaseResponse<NonceResponse>>('/auth/nonce')
			const nonce = res.data?.data?.token
			if (!nonce) throw new Error('Failed to get nonce')

			const message = createSiweMessage({
				address: address,
				chainId,
				domain: window.location.host,
				nonce,
				uri: window.location.origin,
				version: '1',
				statement: 'Sign in to leap',
			})

			const signature = await signMessageAsync({ message })

			const verify = await axios.post<BaseResponse<VerifyResponse>>(
				'/auth/verify',
				{
					nonce,
					message,
					signature,
				},
			)

			console.log(verify?.data?.data)
		} catch (error) {
			disconnect()
			console.error('SIWE error: ', error)
			toast.error('Failed to verify signature, please try again')
		}
	}, [disconnect, chainId, address, signMessageAsync])

	return (
		<ConnectWallet onConnect={() => handleSiwe()}>{children}</ConnectWallet>
	)
}

const WalletAddress: React.FC = () => {
	return (
		<div>
			<Wallet>
				<Connect>
					<Avatar className="h-6 w-6" />
					<Name />
				</Connect>
				<WalletDropdown>
					<Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
						<Avatar />
						<Name />
						<Address />
						<EthBalance />
					</Identity>
					<WalletDropdownDisconnect />
				</WalletDropdown>
			</Wallet>
		</div>
	)
}

export default WalletAddress
