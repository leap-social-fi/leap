import { useNavigate, useRouterState } from '@tanstack/react-router'

import Each from '@/components/base/Each'
import { MENU_LIST } from '@/constants/menu'
import { cn } from '@/libs/utils'

export const BottomBar = () => {
	const router = useRouterState()
	const navigate = useNavigate()

	return (
		<nav className="fixed right-0 bottom-0 left-0 z-50 mx-auto flex items-end justify-around border border-border/50 border-t-2 border-b-0 bg-white px-4 py-3 dark:bg-background">
			<Each
				of={MENU_LIST}
				render={(menu, index) => (
					<div
						className={cn(
							'flex flex-1 cursor-pointer flex-col items-center gap-1',
							router.location.pathname === menu.pathname
								? 'text-primary'
								: 'text-typography-secondary',
						)}
						key={index}
						onClick={() => navigate({ to: menu.pathname })}
					>
						{menu.icon}
						<span className="font-bold text-[10px]">{menu.label}</span>
					</div>
				)}
			/>
		</nav>
	)
}
