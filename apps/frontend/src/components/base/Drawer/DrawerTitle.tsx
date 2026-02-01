import type React from 'react'

import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/libs/utils'

const DrawerTitle: React.FC<
	React.ComponentProps<typeof DrawerPrimitive.Title>
> = ({ className, ...props }) => {
	return (
		<DrawerPrimitive.Title
			data-slot="drawer-title"
			className={cn('font-medium text-base text-foreground', className)}
			{...props}
		/>
	)
}

export default DrawerTitle
