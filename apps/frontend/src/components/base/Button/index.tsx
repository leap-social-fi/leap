import type React from 'react'
import type { ButtonProps } from '@/components/base/Button/Button.types'

import { Button as ButtonPrimitive } from '@base-ui/react/button'

import { buttonVariants } from '@/components/base/Button/Button.variants'
import { cn } from '@/libs/utils'

const Button: React.FC<ButtonProps> = ({
	className,
	variant = 'default',
	size = 'default',
	...props
}) => {
	return (
		<ButtonPrimitive
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export default Button
