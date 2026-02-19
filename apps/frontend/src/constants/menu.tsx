import {
	IconHome,
	IconPencilPlus,
	IconSettings,
	IconTransfer,
	IconWallet,
} from '@tabler/icons-react'

import { ROUTES } from '@/constants/routes'

export const MENU_LIST = [
	{ label: 'Home', icon: <IconHome size={20} />, pathname: ROUTES.home.path },
	{
		label: 'Swap',
		icon: <IconTransfer size={20} />,
		pathname: ROUTES.swap.path,
	},
	{
		label: 'Create',
		icon: <IconPencilPlus size={20} />,
		pathname: ROUTES.create.path,
	},
	{
		label: 'Portfolio',
		icon: <IconWallet size={20} />,
		pathname: ROUTES.portfolio.path,
	},
	{
		label: 'Settings',
		icon: <IconSettings size={20} />,
		pathname: ROUTES.settings.path,
	},
]
