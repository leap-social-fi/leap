import { useCallback } from 'react'
import { createSiweMessage } from 'viem/siwe'
import {
	type Connector,
	type CreateConnectorFn,
	useConnect,
	useConnectors,
	useDisconnect,
	useSignMessage,
} from 'wagmi'

import Button from '@/components/base/Button'
import { useAuthVerify } from '@/modules/auth/hooks/mutations'
import { useAuthNonce } from '@/modules/auth/hooks/queries'

const WalletOptions = () => {
	const connectors = useConnectors()
	const { mutateAsync } = useConnect()
	const { refetch: refetchNonce } = useAuthNonce()
	const { mutateAsync: signMessageAsync } = useSignMessage()
	const { mutate: verify } = useAuthVerify()
	const { mutate: disconnect } = useDisconnect()

	const handleConnect = useCallback(
		async (connector: Connector<CreateConnectorFn>) => {
			try {
				const { accounts, chainId } = await mutateAsync({ connector })
				if (!chainId || accounts.length === 0) return

				const { data: dataNonce } = await refetchNonce()
				if (!dataNonce?.data.token) throw new Error('Failed to get nonce')

				const message = createSiweMessage({
					address: accounts[0],
					chainId: chainId,
					domain: window.location.host,
					nonce: dataNonce?.data.token,
					uri: window.location.origin,
					version: '1',
					statement: 'Sign in to leap',
				})

				const signature = await signMessageAsync(
					{ message },
					{
						onError: () => disconnect(),
					},
				)

				await verify({
					nonce: dataNonce.data.token,
					message,
					signature,
				})
			} catch {
				disconnect()
			}
		},
		[disconnect, mutateAsync, refetchNonce, signMessageAsync, verify],
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

export default WalletOptions
