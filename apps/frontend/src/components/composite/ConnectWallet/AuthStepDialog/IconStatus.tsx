import type React from 'react'
import type { StatusAuthType } from '@/contexts/auth/Auth.context'

import { IconCheck, IconX } from '@tabler/icons-react'

import Spinner from '@/components/base/Spinner'

interface IconStatusProps {
	status: StatusAuthType
}

export const IconStatus: React.FC<IconStatusProps> = ({ status }) => {
	if (status === 'connect') return <IconCheck className="text-primary" />
	if (status === 'loading') return <Spinner wrapperClassName="h-6 w-6" />
	if (status === 'disconnect') return <IconX className="text-red-500" />
}
