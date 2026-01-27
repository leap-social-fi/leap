import { createFileRoute } from '@tanstack/react-router'

import SettingsPageContainer from '@/containers/settings'

export const Route = createFileRoute('/(app)/_layout/settings/')({
	component: SettingsPageContainer,
})
