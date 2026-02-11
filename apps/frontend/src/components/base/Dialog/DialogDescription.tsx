import type React from 'react'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'

import { cn } from '@/libs/utils'

const DialogDescription: React.FC<DialogPrimitive.Description.Props> = ({
	className,
	...props
}) => {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={cn(
				'text-sm text-typography *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
				className,
			)}
			{...props}
		/>
	)
}

export default DialogDescription
