import { createFileRoute } from '@tanstack/react-router'

import HomePageContainer from '@/containers/home'

export const Route = createFileRoute('/(app)/_layout/home/')({
	component: HomePageContainer,
})
