import type { InputProps } from '@/components/base/Input/Input.types'

import { Input as InputPrimitive } from '@base-ui/react/input'

import { cn } from '@/libs/utils'

const Input: React.FC<InputProps> = ({
	className,
	error,
	label,
	type,
	...props
}) => {
	return (
		<div className="flex flex-col gap-2">
			{label && <div>{label}</div>}
			<InputPrimitive
				type={type}
				aria-invalid={Boolean(error)}
				data-slot="input"
				className={cn(
					'h-8 w-full min-w-0 rounded-lg border border-border bg-transparent px-2.5 py-1 text-base outline-none transition-colors file:inline-flex file:h-6 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive/50 md:text-sm dark:bg-transparent dark:disabled:bg-input/80',
					className,
				)}
				{...props}
			/>
			{error && <div className="text-red-500 text-xs">{error}</div>}
		</div>
	)
}

export default Input
