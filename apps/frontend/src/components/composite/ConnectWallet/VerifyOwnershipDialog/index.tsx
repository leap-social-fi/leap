import type React from 'react'

import { IconX } from '@tabler/icons-react'

import Button from '@/components/base/Button'
import Dialog from '@/components/base/Dialog'

interface VerifyOwnershipDialogProps {
	isOpen: boolean
	onClose: () => void
	onVerify: () => void
}

const VerifyOwnershipDialog: React.FC<VerifyOwnershipDialogProps> = ({
	isOpen,
	onClose,
	onVerify,
}) => {
	return (
		<Dialog open={isOpen}>
			<Dialog.Content
				className="flex w-86 flex-col gap-6"
				showCloseButton={false}
			>
				<div className="flex items-center justify-between gap-4">
					<div className="font-medium text-base text-typography">
						Verify Ownership
					</div>
					<IconX
						className="cursor-pointer text-typography-secondary"
						size={20}
						onClick={onClose}
					/>
				</div>
				<div className="text-md text-typography-secondary">
					Your wallet is connected, but the signature session has expired.
					Please sign again to verify ownership.
				</div>

				<Button onClick={onVerify}>Verify</Button>
			</Dialog.Content>
		</Dialog>
	)
}

export default VerifyOwnershipDialog
