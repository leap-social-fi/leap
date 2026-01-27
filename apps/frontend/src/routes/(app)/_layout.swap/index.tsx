import { createFileRoute } from '@tanstack/react-router'

import SwapPageContainer from '@/containers/swap'

export const Route = createFileRoute('/(app)/_layout/swap/')({
	component: SwapPageContainer,
})
