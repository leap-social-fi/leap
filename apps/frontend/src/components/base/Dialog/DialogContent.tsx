import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'
import { IconX } from '@tabler/icons-react'

import Button from '@/components/base/Button'
import Dialog from '@/components/base/Dialog'
import { cn } from '@/libs/utils'

const DialogContent = ({
	className,
	children,
	showCloseButton = true,
	...props
}: DialogPrimitive.Popup.Props & {
	showCloseButton?: boolean
}) => {
	return (
		<Dialog.Portal>
			<Dialog.Overlay />
			<DialogPrimitive.Popup
				data-slot="dialog-content"
				className={cn(
					'data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border/30 bg-foreground p-4 text-sm outline-none ring-1 ring-foreground/10 drop-shadow-2xl/50 drop-shadow-primary/30 duration-100 data-closed:animate-out data-open:animate-in sm:max-w-sm dark:drop-shadow-primary/40',
					className,
				)}
				{...props}
			>
				{children}
				{showCloseButton && (
					<DialogPrimitive.Close
						data-slot="dialog-close"
						render={
							<Button
								variant="ghost"
								className="absolute top-2 right-2"
								size="icon-sm"
							/>
						}
					>
						<IconX />
						<span className="sr-only">Close</span>
					</DialogPrimitive.Close>
				)}
			</DialogPrimitive.Popup>
		</Dialog.Portal>
	)
}

export default DialogContent
