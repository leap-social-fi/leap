import { Outlet, createFileRoute } from '@tanstack/react-router'

import { BottomBar } from '@/components/composite/BottomBar'

export const Route = createFileRoute('/(app)/_layout')({
	component: Layout,
})

function Layout() {
	return (
		<div className="flex flex-col">
			<Outlet />
			<BottomBar />
		</div>
	)
}
