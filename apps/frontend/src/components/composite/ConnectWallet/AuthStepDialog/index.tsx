import type { StatusAuthType } from '@/contexts/auth/Auth.context'

import Dialog from '@/components/base/Dialog'
import { IconStatus } from '@/components/composite/ConnectWallet/AuthStepDialog/IconStatus'

interface AuthStepDialogProps {
	isOpen: boolean
	verifySignStatus: StatusAuthType
	connectWalletStatus: StatusAuthType
}

const AuthStepDialog: React.FC<AuthStepDialogProps> = ({
	isOpen,
	connectWalletStatus,
	verifySignStatus,
}) => {
	return (
		<Dialog open={isOpen}>
			<Dialog.Content showCloseButton={false}>
				<div className="flex items-center justify-between">
					<span className="font-semibold text-lg">Connect to Leap</span>
				</div>
				<div className="flex flex-col gap-5">
					<span className="dark:text-white">
						You will receive two wallet pop-ups. Check your wallet app or
						browser extensions if nothing pops up.
					</span>
					<div className="flex items-center gap-2">
						<IconStatus status={connectWalletStatus} />
						<div>Connect Wallet</div>
					</div>
					<div className="flex items-center gap-2">
						<IconStatus status={verifySignStatus} />
						<span>Verify Ownership</span>
					</div>
				</div>
			</Dialog.Content>
		</Dialog>
	)
}

export default AuthStepDialog
