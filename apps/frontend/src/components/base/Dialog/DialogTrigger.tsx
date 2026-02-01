import type React from 'react'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'

const DialogTrigger: React.FC<DialogPrimitive.Trigger.Props> = ({
	...props
}) => {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

export default DialogTrigger
