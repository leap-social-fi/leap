import type React from 'react'

import { Tabs as TabsPrimitive } from '@base-ui/react/tabs'

import TabsContent from '@/components/base/Tabs/TabsContent'
import TabsList from '@/components/base/Tabs/TabsList'
import TabsTrigger from '@/components/base/Tabs/TabsTrigger'
import { cn } from '@/libs/utils'

const Tabs: React.FC<TabsPrimitive.Root.Props> = ({
	className,
	orientation = 'horizontal',
	...props
}) => {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			data-orientation={orientation}
			className={cn(
				'group/tabs flex gap-2 data-[orientation=horizontal]:flex-col',
				className,
			)}
			{...props}
		/>
	)
}

export default Object.assign(Tabs, {
	Content: TabsContent,
	List: TabsList,
	Trigger: TabsTrigger,
})
