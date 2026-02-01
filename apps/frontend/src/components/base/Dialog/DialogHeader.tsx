import type React from 'react'

import { cn } from '@/libs/utils'

const DialogHeader: React.FC<React.ComponentProps<'div'>> = ({
	className,
	...props
}) => {
	return (
		<div
			data-slot="dialog-header"
			className={cn('flex flex-col gap-2', className)}
			{...props}
		/>
	)
}

export default DialogHeader
