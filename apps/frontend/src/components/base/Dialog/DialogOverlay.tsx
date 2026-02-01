import type React from 'react'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'

import { cn } from '@/libs/utils'

export const DialogOverlay: React.FC<DialogPrimitive.Backdrop.Props> = ({
	className,
	...props
}) => {
	return (
		<DialogPrimitive.Backdrop
			data-slot="dialog-overlay"
			className={cn(
				'data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 isolate z-50 bg-black/10 duration-100 data-closed:animate-out data-open:animate-in supports-backdrop-filter:backdrop-blur-xs',
				className,
			)}
			{...props}
		/>
	)
}

export default DialogOverlay
