import type React from 'react'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'

import DialogClose from '@/components/base/Dialog/DialogClose'
import DialogContent from '@/components/base/Dialog/DialogContent'
import DialogDescription from '@/components/base/Dialog/DialogDescription'
import DialogFooter from '@/components/base/Dialog/DialogFooter'
import DialogHeader from '@/components/base/Dialog/DialogHeader'
import DialogOverlay from '@/components/base/Dialog/DialogOverlay'
import DialogPortal from '@/components/base/Dialog/DialogPortal'
import DialogTitle from '@/components/base/Dialog/DialogTitle'
import DialogTrigger from '@/components/base/Dialog/DialogTrigger'

const Dialog: React.FC<DialogPrimitive.Root.Props> = ({ ...props }) => {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

export default Object.assign(Dialog, {
	Close: DialogClose,
	Content: DialogContent,
	Description: DialogDescription,
	Footer: DialogFooter,
	Header: DialogHeader,
	Overlay: DialogOverlay,
	Portal: DialogPortal,
	Title: DialogTitle,
	Trigger: DialogTrigger,
})
