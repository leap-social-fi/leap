import type React from 'react'

import { Drawer as DrawerPrimitive } from 'vaul'

const DrawerTrigger: React.FC<
	React.ComponentProps<typeof DrawerPrimitive.Trigger>
> = ({ ...props }) => {
	return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

export default DrawerTrigger
