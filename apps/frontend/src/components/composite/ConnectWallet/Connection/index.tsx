import { IconLogout } from '@tabler/icons-react'
import { useCallback } from 'react'
import { useConnection, useDisconnect } from 'wagmi'

import { useAuthContext } from '@/contexts/auth/Auth.context'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useDisclosure } from '@/hooks/useDisclosure'
import { useLogout } from '@/modules/auth/hooks/mutations'

const Connection = () => {
	const { address, isConnected } = useConnection()
	const { mutate: disconnect } = useDisconnect()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const handleClose = useCallback(() => onClose(), [onClose])
	const optionsRef = useClickOutside(() => handleClose())
	const { resetAuth } = useAuthContext()
	const { mutate: logout } = useLogout({
		onSuccess: () => {
			disconnect()
			resetAuth()
		},
	})

	const isLogin = isConnected && address

	const handleLogout = () => {
		logout()
	}

	return (
		<div ref={optionsRef} className="relative">
			{isLogin && (
				<div
					className="max-w-36 cursor-pointer truncate rounded-2xl bg-secondary px-4 py-1.5"
					onClick={onOpen}
				>
					{address}
				</div>
			)}

			{isOpen && (
				<div
					className="absolute top-11 z-10 flex w-full cursor-pointer items-center gap-2 rounded-lg border border-border bg-foreground px-3 py-1.5"
					onClick={handleLogout}
				>
					<IconLogout size={18} />
					<div className="text-sm">Logout</div>
				</div>
			)}
		</div>
	)
}

export default Connection
