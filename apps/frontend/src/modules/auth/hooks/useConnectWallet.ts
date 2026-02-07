import type { VerifyRequest } from '@leap/shared/schema/auth'

import { useCallback } from 'react'
import { createSiweMessage } from 'viem/siwe'
import {
	type Connector,
	type CreateConnectorFn,
	useConnect,
	useConnection,
	useDisconnect,
	useSignMessage,
} from 'wagmi'

import { useAuthContext } from '@/contexts/auth/Auth.context'
import { useDisclosure } from '@/hooks/useDisclosure'
import { useAuthVerify } from '@/modules/auth/hooks/mutations'
import { useAuthNonce } from '@/modules/auth/hooks/queries'

export const useConnectWallet = () => {
	const {
		verifySignStatus,
		connectWalletStatus,
		setAuth,
		setVerifySignStatus,
		setConnectWalletStatus,
	} = useAuthContext()
	const walletOptionsDialog = useDisclosure({ open: false })
	const authStepDialog = useDisclosure({ open: false })

	const { isConnected } = useConnection()
	const { mutate: disconnectWallet } = useDisconnect()
	const { mutateAsync: connectWallet } = useConnect()
	const { refetch: refetchNonce } = useAuthNonce()
	const { mutateAsync: verify } = useAuthVerify()
	const { mutateAsync: signMessageAsync } = useSignMessage()

	const handleSelectConnector = () => {
		setConnectWalletStatus('loading')
		walletOptionsDialog.onClose()
		authStepDialog.onOpen()
	}

	const handleVerify = async ({ nonce, message, signature }: VerifyRequest) => {
		const responseVerify = await verify({
			nonce: nonce,
			message,
			signature,
		})
		setVerifySignStatus('connect')

		if (responseVerify.data) {
			setAuth({ ...responseVerify.data })
		}
		authStepDialog.onClose()
	}

	const handleCancelConnect = () => {
		authStepDialog.onClose()
		walletOptionsDialog.onClose()
		setVerifySignStatus('disconnect')
		setConnectWalletStatus('disconnect')
		disconnectWallet()
	}

	const handleConnector = useCallback(
		async (connector: Connector<CreateConnectorFn>) => {
			handleSelectConnector()

			try {
				const { accounts, chainId } = await connectWallet({ connector })
				if (!chainId || accounts.length === 0) return

				const { data: dataNonce } = await refetchNonce()
				if (!dataNonce?.data.token) throw new Error('Failed to get nonce')

				// Handle Sign Message for Verify
				const message = createSiweMessage({
					address: accounts[0],
					chainId: chainId,
					domain: window.location.host,
					nonce: dataNonce?.data.token,
					uri: window.location.origin,
					version: '1',
					statement: 'Sign in to leap',
				})

				setVerifySignStatus('loading')
				const signature = await signMessageAsync(
					{ message },
					{
						onError: () => disconnectWallet(),
					},
				)

				await handleVerify({
					nonce: dataNonce.data.token,
					message,
					signature,
				})
			} catch {
				handleCancelConnect()
			}
		},
		[disconnectWallet, connectWallet, refetchNonce, signMessageAsync, verify],
	)

	return {
		isConnected,
		authStepDialog,
		walletOptionsDialog,
		verifySignStatus,
		connectWalletStatus,
		handleConnector,
	}
}
