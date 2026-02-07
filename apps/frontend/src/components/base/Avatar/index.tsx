import type React from 'react'

import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar'

import AvatarBadge from '@/components/base/Avatar/AvatarBadge'
import AvatarFallback from '@/components/base/Avatar/AvatarFallback'
import AvatarGroup from '@/components/base/Avatar/AvatarGroup'
import AvatarGroupCount from '@/components/base/Avatar/AvatarGroupCount'
import AvatarImage from '@/components/base/Avatar/AvatarImage'
import { cn } from '@/libs/utils'

const Avatar: React.FC<
	AvatarPrimitive.Root.Props & {
		size?: 'default' | 'sm' | 'md' | 'lg'
	}
> = ({ className, size = 'default', ...props }) => {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			data-size={size}
			className={cn(
				'group/avatar relative flex size-12 shrink-0 select-none rounded-full after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-20 data-[size=md]:size-16 data-[size=sm]:size-8 dark:after:mix-blend-lighten',
				className,
			)}
			{...props}
		/>
	)
}

export default Object.assign(Avatar, {
	Image: AvatarImage,
	Fallback: AvatarFallback,
	Group: AvatarGroup,
	GroupCount: AvatarGroupCount,
	Badge: AvatarBadge,
})
