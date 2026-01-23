import { cn } from '@/utils/class-names'

interface LoadingScreenProps {
	variant?: 'screen' | 'dashboard'
	type?: 'overlay' | 'background' | 'blur'
	message?: string
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
	type = 'background',
	variant = 'screen',
	message,
}) => {
	return (
		<div
			className={cn(
				'z-90 flex w-full flex-col items-center justify-center gap-1',
				variant === 'screen' ? 'fixed inset-0 h-full min-h-screen' : 'flex-1',
				{
					'bg-black/70 supports-backdrop-filter:backdrop-blur-sm':
						type === 'blur',
					'bg-black/60': type === 'overlay',
					'bg-background': type === 'background',
				},
			)}
		>
			Loading...
			{message && (
				<p className="mt-2 text-center font-semibold text-foreground">
					{message}
				</p>
			)}
		</div>
	)
}

export default LoadingScreen
