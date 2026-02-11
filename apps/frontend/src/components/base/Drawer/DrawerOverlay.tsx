import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/libs/utils'

const DrawerOverlay: React.FC<
	React.ComponentProps<typeof DrawerPrimitive.Overlay>
> = ({ className, ...props }) => {
	return (
		<DrawerPrimitive.Overlay
			data-slot="drawer-overlay"
			className={cn(
				'data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 z-50 bg-background/10 data-closed:animate-out data-open:animate-in supports-backdrop-filter:backdrop-blur-xs',
				className,
			)}
			{...props}
		/>
	)
}

export default DrawerOverlay
