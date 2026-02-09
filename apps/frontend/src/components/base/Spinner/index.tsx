import type React from 'react'
import type { SpinnerProps } from '@/components/base/Spinner/Spinner.types'

import { cn } from '@/libs/utils'

const Spinner: React.FC<SpinnerProps> = ({
	className,
	wrapperClassName,
	isShow = true,
}) => {
	if (!isShow) return
	return (
		<div
			className={cn(
				'relative flex items-center justify-center p-2',
				wrapperClassName,
			)}
		>
			<svg
				className={cn(
					'absolute inset-0 h-6 w-6 animate-spin text-primary',
					className,
				)}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" />
			</svg>

			<svg
				className={cn(
					'absolute inset-0 h-6 w-6 animate-spin-reverse text-primary',
					className,
				)}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M17 12a5 5 0 1 0 -5 5" />
			</svg>
		</div>
	)
}

export default Spinner
