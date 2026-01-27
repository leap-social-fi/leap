import { Outlet, createFileRoute } from '@tanstack/react-router'

import { BottomBar } from '@/components/BottomBar'
import { useToggleDarkMode } from '@/hooks/useToggleDarkMode'

export const Route = createFileRoute('/(app)/_layout')({
	component: Layout,
})

function Layout() {
	useToggleDarkMode()

	return (
		<div className="flex flex-col">
			<Outlet />
			<BottomBar />
		</div>
	)
}
