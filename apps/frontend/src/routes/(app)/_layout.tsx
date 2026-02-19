import { Outlet, createFileRoute } from '@tanstack/react-router'

import { BottomBar } from '@/components/composite/BottomBar'
import Sidebar from '@/components/composite/Sidebar'
import { useWindowSize } from '@/hooks/useWindowSize'

export const Route = createFileRoute('/(app)/_layout')({
	component: Layout,
})

function Layout() {
	const { width = 0 } = useWindowSize()

	return (
		<div className="flex flex-col md:flex-row">
			{width >= 768 && <Sidebar />}
			<Outlet />

			{width < 768 && <BottomBar />}
		</div>
	)
}
