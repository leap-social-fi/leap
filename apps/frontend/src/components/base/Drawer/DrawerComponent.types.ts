import type { Drawer as DrawerPrimitive } from 'vaul'
import type DrawerClose from '@/components/base/Drawer/DrawerClose'
import type DrawerContent from '@/components/base/Drawer/DrawerContent'
import type DrawerDescription from '@/components/base/Drawer/DrawerDescription'
import type DrawerFooter from '@/components/base/Drawer/DrawerFooter'
import type DrawerHeader from '@/components/base/Drawer/DrawerHeader'
import type DrawerOverlay from '@/components/base/Drawer/DrawerOverlay'
import type DrawerPortal from '@/components/base/Drawer/DrawerPortal'
import type DrawerTitle from '@/components/base/Drawer/DrawerTitle'
import type DrawerTrigger from '@/components/base/Drawer/DrawerTrigger'

export type DrawerComponent = React.FC<
	React.ComponentProps<typeof DrawerPrimitive.Root>
> & {
	Close: typeof DrawerClose
	Content: typeof DrawerContent
	Description: typeof DrawerDescription
	Footer: typeof DrawerFooter
	Header: typeof DrawerHeader
	Overlay: typeof DrawerOverlay
	Portal: typeof DrawerPortal
	Title: typeof DrawerTitle
	Trigger: typeof DrawerTrigger
}
