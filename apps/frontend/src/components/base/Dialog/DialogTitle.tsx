import type React from 'react'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'

import { cn } from '@/libs/utils'

const DialogTitle: React.FC<DialogPrimitive.Title.Props> = ({
	className,
	...props
}) => {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={cn('font-medium text-base leading-none', className)}
			{...props}
		/>
	)
}

export default DialogTitle
