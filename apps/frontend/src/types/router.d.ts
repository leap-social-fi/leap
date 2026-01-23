import type { router } from '@/provider/router'

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}
