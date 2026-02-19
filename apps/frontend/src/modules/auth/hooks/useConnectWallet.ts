import type { VerifyRequest } from '@leap/shared/schema/auth'

import { useNavigate, useRouterState } from '@tanstack/react-router'
import { useCallback, useEffect } from 'react'
import { createSiweMessage } from 'viem/siwe'
import {
	type Connector,
	type CreateConnectorFn,
	useConnect,
	useConnection,
	useDisconnect,
	useSignMessage,
} from 'wagmi'

import { ROUTES } from '@/constants/routes'
import { useAuthContext } from '@/contexts/auth/Auth.context'
import { useDisclosure } from '@/hooks/useDisclosure'
import { useAuthVerify } from '@/modules/auth/hooks/mutations'
import { useAuthNonce } from '@/modules/auth/hooks/queries'

export const useConnectWallet = () => {
	const routerState = useRouterState()
	const navigate = useNavigate()
	const {
		verifySignStatus,
		connectWalletStatus,
		id,
		setAuth,
		resetAuth,
		setVerifySignStatus,
		setConnectWalletStatus,
	} = useAuthContext()
	const walletOptionsDialog = useDisclosure({ open: false })
	const authStepDialog = useDisclosure({ open: false })
	const profileFormDialog = useDisclosure({ open: false })
	const verifyOwnershipDialog = useDisclosure({ open: false })

	const { isConnected, address, chainId } = useConnection()
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

			if (routerState.location.href === ROUTES.landingPage.path) {
				navigate({ to: ROUTES.home.path })
			}
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

	const handleSignMessageVerify = async () => {
		if (!address || !chainId) return

		if (!authStepDialog.isOpen) authStepDialog.onOpen()

		try {
			const { data: dataNonce } = await refetchNonce()
			if (!dataNonce?.data.token) throw new Error('Failed to get nonce')

			// Handle Sign Message for Verify
			const message = createSiweMessage({
				address: address,
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
	}

	const handleConnector = useCallback(
		async (connector: Connector<CreateConnectorFn>) => {
			handleSelectConnector()

			try {
				const { accounts, chainId } = await connectWallet({ connector })
				if (!chainId || accounts.length === 0) return

				// Handle Sign Message for Verify
				await handleSignMessageVerify()
			} catch {
				handleCancelConnect()
			}
		},
		[disconnectWallet, connectWallet, refetchNonce, signMessageAsync, verify],
	)

	// Verify Ownership Dialog
	const handleVerifyOwnershipClose = () => {
		disconnectWallet()
		resetAuth()
		verifyOwnershipDialog.onClose()
	}

	useEffect(() => {
		if (verifySignStatus === 'connect' && !id && isConnected) {
			profileFormDialog.onOpen()
		} else if (
			verifySignStatus === 'disconnect' &&
			!authStepDialog.isOpen &&
			isConnected
		) {
			verifyOwnershipDialog.onOpen()
		} else {
			profileFormDialog.onClose()
			verifyOwnershipDialog.onClose()
		}
	}, [
		id,
		isConnected,
		verifySignStatus,
		profileFormDialog,
		verifyOwnershipDialog,
		authStepDialog,
	])

	return {
		isConnected,
		authStepDialog,
		walletOptionsDialog,
		profileFormDialog,
		verifyOwnershipDialog,
		verifySignStatus,
		connectWalletStatus,
		handleSignMessageVerify,
		handleConnector,
		handleVerifyOwnershipClose,
	}
}
