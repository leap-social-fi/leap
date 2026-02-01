import type React from 'react'

import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/libs/utils'

const DrawerDescription: React.FC<
	React.ComponentProps<typeof DrawerPrimitive.Description>
> = ({ className, ...props }) => {
	return (
		<DrawerPrimitive.Description
			data-slot="drawer-description"
			className={cn('text-muted-foreground text-sm', className)}
			{...props}
		/>
	)
}

export default DrawerDescription
