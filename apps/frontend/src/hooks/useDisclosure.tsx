import { useState } from 'react'

export const useDisclosure = ({ open = false }) => {
	const [isOpen, setIsOpen] = useState(open)

	const onOpen = () => setIsOpen(true)
	const onClose = () => setIsOpen(false)
	const onToggle = () => setIsOpen((prev) => !prev)

	return { isOpen, onOpen, onClose, onToggle }
}
