import {
	IconHome,
	IconPencilPlus,
	IconSettings,
	IconTransfer,
	IconWallet,
} from '@tabler/icons-react'
import { useNavigate, useRouterState } from '@tanstack/react-router'

import { cn } from '@/libs/utils'

export const BottomBar = () => {
	const router = useRouterState()
	const navigate = useNavigate()

	return (
		<nav className="fixed right-0 bottom-0 left-0 z-50 mx-auto flex max-w-120 items-end justify-around border border-gray-50 border-t-2 border-b-0 bg-white px-4 pt-3 pb-3 dark:border-slate-800 dark:bg-background dark:bg-surface-dark/85">
			<div
				className={cn(
					'flex flex-1 cursor-pointer flex-col items-center gap-1',
					router.location.pathname === '/home'
						? 'text-primary'
						: 'text-slate-400 dark:text-slate-500',
				)}
				onClick={() => navigate({ to: '/home' })}
			>
				<IconHome />
				<span className="font-bold text-[10px]">Home</span>
			</div>
			<div
				className={cn(
					'flex flex-1 cursor-pointer flex-col items-center gap-1',
					router.location.pathname === '/swap'
						? 'text-primary'
						: 'text-slate-400 dark:text-slate-500',
				)}
				onClick={() => navigate({ to: '/swap' })}
			>
				<IconTransfer />
				<span className="font-medium text-[10px]">Swap</span>
			</div>
			<div
				className={cn(
					'flex flex-1 cursor-pointer flex-col items-center gap-1',
					router.location.pathname === '/create'
						? 'text-primary'
						: 'text-slate-400 dark:text-slate-500',
				)}
				onClick={() => navigate({ to: '/create' })}
			>
				<IconPencilPlus />
				<span className="font-medium text-[10px]">Create</span>
			</div>
			<div
				className={cn(
					'flex flex-1 cursor-pointer flex-col items-center gap-1',
					router.location.pathname === '/portfolio'
						? 'text-primary'
						: 'text-slate-400 dark:text-slate-500',
				)}
				onClick={() => navigate({ to: '/portfolio' })}
			>
				<IconWallet />
				<span className="font-medium text-[10px]">Portfolio</span>
			</div>
			<div
				className={cn(
					'flex flex-1 cursor-pointer flex-col items-center gap-1',
					router.location.pathname === '/settings'
						? 'text-primary'
						: 'text-slate-400 dark:text-slate-500',
				)}
				onClick={() => navigate({ to: '/settings' })}
			>
				<IconSettings />
				<span className="font-medium text-[10px]">Settings</span>
			</div>
		</nav>
	)
}
