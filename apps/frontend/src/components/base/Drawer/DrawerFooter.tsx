import type React from 'react'

import { cn } from '@/libs/utils'

const DrawerFooter: React.FC<React.ComponentProps<'div'>> = ({
	className,
	...props
}) => {
	return (
		<div
			data-slot="drawer-footer"
			className={cn('mt-auto flex flex-col gap-2 p-4', className)}
			{...props}
		/>
	)
}

export default DrawerFooter
