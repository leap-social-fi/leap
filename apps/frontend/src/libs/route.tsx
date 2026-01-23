import { createRouter } from '@tanstack/react-router'

import LoadingScreen from '@/components/loading-screen'
import { routeTree } from '@/routeTree.gen'

const router = createRouter({
	routeTree,
	defaultPreload: false,
	defaultGcTime: 0,
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPendingComponent: () => <LoadingScreen message="Loading pages..." />,
	defaultNotFoundComponent: () => (
		<div className="flex h-full min-h-screen w-full items-center justify-center">
			<h1 className="font-bold text-3xl">Page Not Found</h1>
		</div>
	),
	notFoundMode: 'root',
})

export default router
