import { IconLogout } from '@tabler/icons-react'
import { useCallback } from 'react'
import { useConnection, useDisconnect } from 'wagmi'

import { useClickOutside } from '@/hooks/useClickOutside'
import { useDisclosure } from '@/hooks/useDisclosure'

const Connection = () => {
	const { address, isConnected } = useConnection()
	const { mutate: disconnect } = useDisconnect()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const handleClose = useCallback(() => onClose(), [onClose])
	const optionsRef = useClickOutside(() => handleClose())

	const isLogin = isConnected && address

	return (
		<div ref={optionsRef} className="relative">
			{isLogin && (
				<div
					className="max-w-36 cursor-pointer truncate rounded-2xl bg-primary/10 px-4 py-1.5"
					onClick={onOpen}
				>
					{address}
				</div>
			)}

			{isOpen && (
				<div
					className="absolute top-11 flex w-full cursor-pointer items-center gap-2 rounded-lg border bg-white px-3 py-1.5 hover:bg-slate-50 dark:bg-[#121c2f] dark:hover:bg-[#0d1421]"
					onClick={() => disconnect()}
				>
					<IconLogout size={18} />
					<div className="text-sm">Logout</div>
				</div>
			)}
		</div>
	)
}

export default Connection
