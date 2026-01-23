import { RouterProvider } from '@tanstack/react-router'
import React from 'react'

import LoadingScreen from '@/components/loading-screen'
import router from '@/libs/route'

function RouteProvider() {
	return (
		<React.Suspense fallback={<LoadingScreen message="Loading the route..." />}>
			<RouterProvider router={router} />
		</React.Suspense>
	)
}

export default RouteProvider
