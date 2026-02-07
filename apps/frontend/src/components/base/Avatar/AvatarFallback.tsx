import type React from 'react'

import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar'

import { cn } from '@/libs/utils'

const AvatarFallback: React.FC<AvatarPrimitive.Fallback.Props> = ({
	className,
	...props
}) => {
	return (
		<AvatarPrimitive.Fallback
			data-slot="avatar-fallback"
			className={cn(
				'flex size-full items-center justify-center rounded-full bg-muted text-muted-foreground text-sm group-data-[size=sm]/avatar:text-xs',
				className,
			)}
			{...props}
		/>
	)
}

export default AvatarFallback
