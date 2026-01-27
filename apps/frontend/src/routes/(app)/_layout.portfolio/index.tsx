import { createFileRoute } from '@tanstack/react-router'

import PortfolioPageContainer from '@/containers/portfolio'

export const Route = createFileRoute('/(app)/_layout/portfolio/')({
	component: PortfolioPageContainer,
})
