import type React from 'react'

import { type Connector, type CreateConnectorFn, useConnectors } from 'wagmi'

import Button from '@/components/base/Button'
import Dialog from '@/components/base/Dialog'

interface WalletOptionsProps {
	isOpen: boolean
	onClose: () => void
	onSelectConnector: (connector: Connector<CreateConnectorFn>) => Promise<void>
}

const WalletOptionsDialog: React.FC<WalletOptionsProps> = ({
	isOpen,
	onClose,
	onSelectConnector,
}) => {
	const connectors = useConnectors()

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<Dialog.Content showCloseButton={false}>
				<div className="flex flex-col gap-6">
					<div className="text-center font-medium text-lg text-typography">
						Connect with Leap
					</div>
					<div className="flex flex-col gap-4">
						{connectors.map((connector) => (
							<Button
								key={connector.id}
								onClick={() => onSelectConnector(connector)}
								className="flex justify-start gap-4 border-none bg-secondary py-6! text-typography hover:bg-secondary/70 dark:border-white/5 dark:bg-surface hover:dark:bg-surface/70"
							>
								<img
									src={connector.icon}
									alt="ICON Wallet"
									width={24}
									height={24}
								/>
								<div className="text-typography">{connector.name}</div>
							</Button>
						))}
					</div>
				</div>
			</Dialog.Content>
		</Dialog>
	)
}

export default WalletOptionsDialog
