import type { NonceResponse, VerifyResponse } from '@leap/shared/schema/auth'
import type { BaseResponse } from '@leap/shared/types/response'

import { useCallback } from 'react'
import { createSiweMessage } from 'viem/siwe'
import {
	type Connector,
	type CreateConnectorFn,
	useConnect,
	useConnectors,
	useSignMessage,
} from 'wagmi'

import { Button } from '@/components/ui/button'
import axios from '@/libs/axios'

const WalleteOptions = () => {
	const { mutateAsync } = useConnect()
	const connectors = useConnectors()
	const { mutateAsync: signMessageAsync } = useSignMessage()

	const handleConnect = useCallback(
		async (connector: Connector<CreateConnectorFn>) => {
			try {
				const { accounts, chainId } = await mutateAsync({ connector })
				if (!chainId || accounts.length === 0) return

				const res = await axios.get<BaseResponse<NonceResponse>>('/auth/nonce')
				const nonce = res.data?.data?.token
				if (!nonce) throw new Error('Failed to get nonce')

				const message = createSiweMessage({
					address: accounts[0],
					chainId: chainId,
					domain: window.location.host,
					nonce,
					uri: window.location.origin,
					version: '1',
					statement: 'Sign in to leap',
				})

				const signature = await signMessageAsync({ message })

				await axios.post<BaseResponse<VerifyResponse>>('/auth/verify', {
					nonce,
					message,
					signature,
				})
			} catch {
				console.log('ERROR')
			}
		},
		[],
	)

	return (
		<div className="flex flex-col gap-4">
			{connectors.map((connector) => (
				<Button
					key={connector.id}
					onClick={() => handleConnect(connector)}
					className="flex justify-start gap-4 border-slate-300 bg-white py-6! text-slate-700 hover:bg-slate-200"
				>
					<img src={connector.icon} alt="ICON Wallet" width={24} height={24} />
					<div>{connector.name}</div>
				</Button>
			))}
		</div>
	)
}

export default WalleteOptions
