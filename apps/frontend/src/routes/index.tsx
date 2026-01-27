import { createFileRoute } from '@tanstack/react-router'

import LandingPageContainer from '@/containers/landing-page'

export const Route = createFileRoute('/')({
	component: LandingPageContainer,
})
