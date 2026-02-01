import type React from 'react'

import { Drawer as DrawerPrimitive } from 'vaul'

const DrawerPortal: React.FC<
	React.ComponentProps<typeof DrawerPrimitive.Portal>
> = ({ ...props }) => {
	return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

export default DrawerPortal
