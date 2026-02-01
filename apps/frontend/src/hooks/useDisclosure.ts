import { useState } from 'react'

interface useDisclosureProps {
	open?: boolean
}

export const useDisclosure = (props?: useDisclosureProps) => {
	const [isOpen, setIsOpen] = useState(props?.open)

	const onOpen = () => setIsOpen(true)
	const onClose = () => setIsOpen(false)
	const onToggle = () => setIsOpen((prev) => !prev)

	return { isOpen, onOpen, onClose, onToggle }
}
