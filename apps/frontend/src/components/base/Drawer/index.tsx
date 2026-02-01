import type * as React from 'react'
import type { DrawerComponent } from '@/components/base/Drawer/DrawerComponent.types'

import { Drawer as DrawerPrimitive } from 'vaul'

import DrawerClose from '@/components/base/Drawer/DrawerClose'
import DrawerContent from '@/components/base/Drawer/DrawerContent'
import DrawerDescription from '@/components/base/Drawer/DrawerDescription'
import DrawerFooter from '@/components/base/Drawer/DrawerFooter'
import DrawerHeader from '@/components/base/Drawer/DrawerHeader'
import DrawerOverlay from '@/components/base/Drawer/DrawerOverlay'
import DrawerPortal from '@/components/base/Drawer/DrawerPortal'
import DrawerTitle from '@/components/base/Drawer/DrawerTitle'
import DrawerTrigger from '@/components/base/Drawer/DrawerTrigger'

const DrawerRoot: React.FC<
	React.ComponentProps<typeof DrawerPrimitive.Root>
> = ({ ...props }) => {
	return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

const Drawer: DrawerComponent = Object.assign(DrawerRoot, {
	Close: DrawerClose,
	Content: DrawerContent,
	Description: DrawerDescription,
	Footer: DrawerFooter,
	Header: DrawerHeader,
	Overlay: DrawerOverlay,
	Portal: DrawerPortal,
	Title: DrawerTitle,
	Trigger: DrawerTrigger,
})

export default Drawer
