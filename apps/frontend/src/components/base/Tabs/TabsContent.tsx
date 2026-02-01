import type React from 'react'

import { Tabs as TabsPrimitive } from '@base-ui/react/tabs'

import { cn } from '@/libs/utils'

const TabsContent: React.FC<TabsPrimitive.Panel.Props> = ({
	className,
	...props
}) => {
	return (
		<TabsPrimitive.Panel
			data-slot="tabs-content"
			className={cn('flex-1 text-sm outline-none', className)}
			{...props}
		/>
	)
}

export default TabsContent
