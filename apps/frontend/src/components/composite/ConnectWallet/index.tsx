import type React from 'react'
import type { PropsWithChildren } from 'react'

import { IconWallet } from '@tabler/icons-react'

import Button from '@/components/base/Button'
import Conditional from '@/components/base/Conditional'
import AuthStepDialog from '@/components/composite/ConnectWallet/AuthStepDialog'
import Connection from '@/components/composite/ConnectWallet/Connection'
import WalletOptionsDialog from '@/components/composite/ConnectWallet/WalletOptionsDialog'
import { cn } from '@/libs/utils'
import { useConnectWallet } from '@/modules/auth/hooks/useConnectWallet'

interface ConnectWalletProps extends PropsWithChildren {
	className?: string
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({
	className,
	children,
}) => {
	const {
		isConnected,
		walletOptionsDialog,
		authStepDialog,
		verifySignStatus,
		connectWalletStatus,
		handleConnector,
	} = useConnectWallet()

	return (
		<>
			{/* AuthStepDialog */}
			<AuthStepDialog
				isOpen={authStepDialog.isOpen}
				verifySignStatus={verifySignStatus}
				connectWalletStatus={connectWalletStatus}
			/>

			{/* WalletOptionsDialog */}
			<WalletOptionsDialog
				isOpen={walletOptionsDialog.isOpen}
				onSelectConnector={handleConnector}
				onClose={walletOptionsDialog.onClose}
			/>

			<Conditional if={isConnected}>
				<Connection />
			</Conditional>

			<Conditional if={!isConnected}>
				{children ? (
					children
				) : (
					<Button
						className={cn(
							'flex w-max items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 font-bold text-white shadow-primary/30 shadow-xl transition-all hover:bg-blue-600',
							className,
						)}
						onClick={walletOptionsDialog.onOpen}
					>
						<IconWallet size={40} />
						Connect Wallet
					</Button>
				)}
			</Conditional>
		</>
	)
}

export default ConnectWallet
