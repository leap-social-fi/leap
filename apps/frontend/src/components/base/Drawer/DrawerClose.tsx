import type React from 'react'

import { Drawer as DrawerPrimitive } from 'vaul'

const DrawerClose: React.FC<
	React.ComponentProps<typeof DrawerPrimitive.Close>
> = ({ ...props }) => {
	return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

export default DrawerClose
