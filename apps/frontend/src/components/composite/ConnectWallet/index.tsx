import type React from 'react'
import type { PropsWithChildren } from 'react'

import { IconWallet } from '@tabler/icons-react'
import { useConnection } from 'wagmi'

import Button from '@/components/base/Button'
import Dialog from '@/components/base/Dialog'
import Connection from '@/components/composite/ConnectWallet/Connection'
import WalletOptions from '@/components/composite/ConnectWallet/WalletOptions'
import { cn } from '@/libs/utils'

interface ConnectWalletProps extends PropsWithChildren {
	className?: string
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({
	className,
	children,
}) => {
	const { isConnected } = useConnection()
	if (isConnected) return <Connection />
	return (
		<Dialog>
			<Dialog.Trigger>
				{children ? (
					children
				) : (
					<Button
						className={cn(
							'flex w-max items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 font-bold text-white shadow-primary/30 shadow-xl transition-all hover:bg-blue-600',
							className,
						)}
					>
						<IconWallet size={40} />
						Connect Wallet
					</Button>
				)}
			</Dialog.Trigger>

			<Dialog.Content showCloseButton={false}>
				<WalletOptions />
			</Dialog.Content>
		</Dialog>
	)
}

export default ConnectWallet
