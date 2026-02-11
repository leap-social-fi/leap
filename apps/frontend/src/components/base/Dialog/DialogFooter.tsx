import type React from 'react'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'

import Button from '@/components/base/Button'
import { cn } from '@/libs/utils'

const DialogFooter: React.FC<
	React.ComponentProps<'div'> & {
		showCloseButton?: boolean
	}
> = ({ className, showCloseButton = false, children, ...props }) => {
	return (
		<div
			data-slot="dialog-footer"
			className={cn(
				'-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-typography/50 p-4 sm:flex-row sm:justify-end',
				className,
			)}
			{...props}
		>
			{children}
			{showCloseButton && (
				<DialogPrimitive.Close render={<Button variant="outline" />}>
					Close
				</DialogPrimitive.Close>
			)}
		</div>
	)
}

export default DialogFooter
