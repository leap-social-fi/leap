import type React from 'react'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'

const DialogClose: React.FC<DialogPrimitive.Close.Props> = ({ ...props }) => {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

export default DialogClose
