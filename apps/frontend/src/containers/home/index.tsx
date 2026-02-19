import { useNavigate, useRouterState } from '@tanstack/react-router'

import Each from '@/components/base/Each'
import Tabs from '@/components/base/Tabs'
import { ROUTES } from '@/constants/routes'
import SearchBar from '@/containers/home/components/SearchBar'
import { useAuthContext } from '@/contexts/auth/Auth.context'

import { ArticleCard } from './components/ArticleCard'

const HomePageContainer = () => {
	const router = useRouterState()
	const navigate = useNavigate()
	const { avatar, name } = useAuthContext()
	const listTab = [
		{
			name: 'Latest',
			onClick: () =>
				navigate({ to: ROUTES.home.path, search: { feed: 'latest' } }),
		},
		{
			name: 'Trending',
			onClick: () =>
				navigate({ to: ROUTES.home.path, search: { feed: 'trending' } }),
		},
		{
			name: 'Library',
			onClick: () =>
				navigate({ to: ROUTES.home.path, search: { feed: 'library' } }),
		},
	]

	return (
		<div className="min-h-screen w-full bg-background text-typography backdrop-blur-xl">
			<div className="sticky top-0 z-30 flex items-center justify-between gap-4 bg-white px-5 py-4 dark:bg-background">
				<SearchBar />

				<div
					className="relative flex cursor-pointer items-center gap-2 rounded-full bg-slate-200/50 py-1.5 pr-3 pl-2.5 dark:bg-surface"
					onClick={() => navigate({ to: ROUTES.settings.path })}
				>
					<div className="flex h-8 w-8 items-center justify-center overflow-hidden">
						<img
							alt="User Profile"
							className="h-full w-full object-cover"
							src={avatar}
						/>
					</div>
					<div className="line-clamp-1 max-w-20 text-sm text-typography">
						{name}
					</div>
				</div>
			</div>

			<div className="sticky top-19 z-10 flex gap-8 border-border border-b bg-white px-5 dark:border-border dark:bg-background">
				<Tabs defaultValue={router.location.search.feed || 'latest'}>
					<Tabs.List variant="line">
						<Each
							of={listTab}
							render={(item) => (
								<Tabs.Trigger
									value={item.name.toLowerCase()}
									onClick={item.onClick}
								>
									{item.name}
								</Tabs.Trigger>
							)}
						/>
					</Tabs.List>
				</Tabs>
			</div>

			<main className="space-y-4 p-4">
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</main>
		</div>
	)
}

export default HomePageContainer
