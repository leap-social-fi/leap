import { useNavigate } from '@tanstack/react-router'

import Button from '@/components/base/Button'
import Each from '@/components/base/Each'

export const TrendingArticles = () => {
	const navigate = useNavigate()

	const articles = [
		{
			changes: '+12.5%',
			username: '@crypto_king',
			title: 'The Future of Decentralized Media Networks',
			description:
				'As digital privacy continues to erode in our hyper-connected world, a new technological frontier is emerging to reclaim our right to anonymity. Zero-Knowledge Proofs (ZKPs) represent more than just a cryptographic breakthrough they are the foundation for a new social contract on the web.',
			price: '0.45 ETH',
		},
		{
			changes: '+12.5%',
			username: '@crypto_king',
			title: 'The Future of Decentralized Media Networks',
			description:
				'As digital privacy continues to erode in our hyper-connected world, a new technological frontier is emerging to reclaim our right to anonymity. Zero-Knowledge Proofs (ZKPs) represent more than just a cryptographic breakthrough they are the foundation for a new social contract on the web.',
			price: '0.45 ETH',
		},
		{
			changes: '+12.5%',
			username: '@crypto_king',
			title: 'The Future of Decentralized Media Networks',
			description:
				'As digital privacy continues to erode in our hyper-connected world, a new technological frontier is emerging to reclaim our right to anonymity. Zero-Knowledge Proofs (ZKPs) represent more than just a cryptographic breakthrough they are the foundation for a new social contract on the web.',
			price: '0.45 ETH',
		},
	]
	return (
		<section className="panel flex h-screen items-center justify-center bg-background py-16">
			<div className="flex w-300 flex-col gap-4">
				<div className="mb-8 flex items-center justify-between px-6">
					<h2 className="font-black text-2xl tracking-tight dark:text-white">
						Trending Articles
					</h2>
					<Button
						className="flex items-center gap-1 font-bold text-sm text-white"
						onClick={() => navigate({ to: '/home' })}
					>
						See all
					</Button>
				</div>
				<div className="space-y-4 px-6">
					<Each
						of={articles}
						render={(article, index) => (
							<div
								key={index}
								className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-3 dark:border-border/40 dark:bg-secondary/40"
							>
								<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
									<div className="absolute inset-0 bg-linear-to-br from-primary/40 to-purple-600/40"></div>
									<div className="flex h-full w-full items-center justify-center">
										<span className="material-symbols-outlined text-2xl text-white/50">
											auto_awesome
										</span>
									</div>
								</div>
								<div className="flex flex-1 flex-col justify-between gap-4 py-1">
									<div className="space-y-1">
										<h3 className="line-clamp-2 font-bold text-sm text-typography leading-tight">
											{article.title}
										</h3>
										<p className="line-clamp-2 text-sm text-typography-secondary">
											{article.description}
										</p>
									</div>
									<div className="mt-auto flex items-center justify-between">
										<span className="font-medium text-sm text-typography">
											{article.username}
										</span>

										<div className="flex items-center gap-2">
											<span className="font-black text-primary text-xs">
												{article.price}
											</span>
											<span className="font-medium text-emerald-500 text-xs">
												+12.5%
											</span>
										</div>
									</div>
								</div>
							</div>
						)}
					/>
				</div>
			</div>
		</section>
	)
}
