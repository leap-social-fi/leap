import type { VariantProps } from 'class-variance-authority'

import { Tabs as TabsPrimitive } from '@base-ui/react/tabs'

import { tabsListVariants } from '@/components/base/Tabs/TabsList.variants'
import { cn } from '@/libs/utils'

const TabsList: React.FC<
	TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>
> = ({ className, variant = 'default', ...props }) => {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			data-variant={variant}
			className={cn(tabsListVariants({ variant }), className)}
			{...props}
		/>
	)
}

export default TabsList
