import type React from 'react'

import { cn } from '@/libs/utils'

const AvatarGroup: React.FC<React.ComponentProps<'div'>> = ({
	className,
	...props
}) => {
	return (
		<div
			data-slot="avatar-group"
			className={cn(
				'group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background',
				className,
			)}
			{...props}
		/>
	)
}

export default AvatarGroup
