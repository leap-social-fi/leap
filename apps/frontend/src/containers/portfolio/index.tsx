import { useNavigate, useRouterState } from '@tanstack/react-router'

import Each from '@/components/base/Each'
import Tabs from '@/components/base/Tabs'
import CollectorPortfolio from '@/containers/portfolio/collector-portfolio'
import CreatorPortfolio from '@/containers/portfolio/creator-portfolio'

const PortfolioPageContainer = () => {
	const router = useRouterState()
	const navigate = useNavigate()

	const listTabs = [
		{
			label: 'Creator',
			value: 'creator',
			onClick: () => navigate({ to: '/portfolio', search: { tab: 'creator' } }),
		},
		{
			label: 'Collector',
			value: 'collector',
			onClick: () =>
				navigate({ to: '/portfolio', search: { tab: 'collector' } }),
		},
	]
	return (
		<div className="min-h-screen bg-background text-slate-900 dark:bg-background dark:text-slate-100">
			<Tabs
				defaultValue={router.location.search.tab || 'creator'}
				className="w-full"
			>
				<div className="sticky top-0 z-30 flex border-gray-200 border-b bg-white px-4 py-5 dark:border-surface dark:bg-background">
					<Tabs.List className="flex w-full gap-1 border-slate-100 border-b dark:border-slate-800 dark:bg-surface">
						<Each
							of={listTabs}
							render={(item, index) => (
								<Tabs.Trigger
									value={item.value}
									className={
										item.value === (router.location.search.tab || 'creator')
											? 'bg-primary! font-bold! text-white!'
											: 'font-medium! text-slate-500!'
									}
									key={index}
									onClick={item.onClick}
								>
									{item.label}
								</Tabs.Trigger>
							)}
						/>
					</Tabs.List>
				</div>
				<Tabs.Content value="creator">
					<CreatorPortfolio />
				</Tabs.Content>
				<Tabs.Content value="collector">
					<CollectorPortfolio />
				</Tabs.Content>
			</Tabs>
		</div>
	)
}

export default PortfolioPageContainer
