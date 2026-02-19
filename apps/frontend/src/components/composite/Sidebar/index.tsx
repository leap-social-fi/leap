import { useNavigate, useRouterState } from '@tanstack/react-router'

import LeapIconSVG from '@/assets/svg/leap-icon.svg'
import Avatar from '@/components/base/Avatar'
import Each from '@/components/base/Each'
import { MENU_LIST } from '@/constants/menu'
import { cn } from '@/libs/utils'

const Sidebar = () => {
	const navigate = useNavigate()
	const routerState = useRouterState()
	return (
		<div className="sticky top-0 flex h-screen w-60 flex-col gap-10 border-border/60 border-r bg-white p-4 dark:bg-background">
			<div className="flex items-center gap-2">
				<Avatar className="size-7">
					<Avatar.Image src={LeapIconSVG} className="h-7 w-7" />
				</Avatar>
				<h2 className="font-bold text-typography text-xl tracking-tight">
					Leap
				</h2>
			</div>

			<div className="flex flex-col gap-2">
				<Each
					of={MENU_LIST}
					render={(menu, index) => (
						<div
							key={index}
							className={cn(
								'flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2.5 text-typography-secondary hover:bg-secondary/80',
								{
									'bg-secondary text-primary':
										routerState.location.pathname === menu.pathname,
								},
							)}
							onClick={() => navigate({ to: menu.pathname })}
						>
							{menu.icon}
							<div
								className={cn('text-sm text-typography-secondary', {
									'font-medium text-primary':
										routerState.location.pathname === menu.pathname,
								})}
							>
								{menu.label}
							</div>
						</div>
					)}
				/>
			</div>
		</div>
	)
}

export default Sidebar
