import type React from 'react'

import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar'

import { cn } from '@/libs/utils'

const AvatarImage: React.FC<AvatarPrimitive.Image.Props> = ({
	className,
	...props
}) => {
	return (
		<AvatarPrimitive.Image
			data-slot="avatar-image"
			className={cn(
				'aspect-square size-full rounded-full object-cover',
				className,
			)}
			{...props}
		/>
	)
}

export default AvatarImage
