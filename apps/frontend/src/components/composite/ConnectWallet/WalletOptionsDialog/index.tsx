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
				<div className="flex flex-col gap-4">
					{connectors.map((connector) => (
						<Button
							key={connector.id}
							onClick={() => onSelectConnector(connector)}
							className="flex justify-start gap-4 border-slate-300 bg-white py-6! text-slate-700 hover:bg-slate-200"
						>
							<img
								src={connector.icon}
								alt="ICON Wallet"
								width={24}
								height={24}
							/>
							<div>{connector.name}</div>
						</Button>
					))}
				</div>
			</Dialog.Content>
		</Dialog>
	)
}

export default WalletOptionsDialog
