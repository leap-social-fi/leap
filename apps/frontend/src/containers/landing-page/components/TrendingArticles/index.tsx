import { useNavigate } from '@tanstack/react-router'

import Button from '@/components/base/Button'

export const TrendingArticles = () => {
	const navigate = useNavigate()
	return (
		<section className="py-16">
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
				<div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/5 dark:bg-white/5">
					<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
						<div className="absolute inset-0 bg-linear-to-br from-primary/40 to-purple-600/40"></div>
						<div className="flex h-full w-full items-center justify-center">
							<span className="material-symbols-outlined text-2xl text-white/50">
								auto_awesome
							</span>
						</div>
					</div>
					<div className="flex min-w-0 flex-1 flex-col justify-between py-1">
						<div className="space-y-1">
							<div className="flex items-center gap-2">
								<span className="font-bold text-[10px] text-primary uppercase">
									Web3
								</span>
								<span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
								<span className="font-medium text-[10px] text-emerald-500">
									+12.5%
								</span>
							</div>
							<h3 className="line-clamp-2 font-bold text-sm leading-tight dark:text-white">
								The Future of Decentralized Media Networks
							</h3>
						</div>
						<div className="mt-auto flex items-center justify-between">
							<span className="font-medium text-[11px] text-slate-500 dark:text-slate-400">
								@crypto_king
							</span>
							<span className="font-black text-primary text-xs">0.45 ETH</span>
						</div>
					</div>
				</div>
				<div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/5 dark:bg-white/5">
					<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
						<div className="absolute inset-0 bg-linear-to-br from-indigo-600/40 to-blue-400/40"></div>
						<div className="flex h-full w-full items-center justify-center">
							<span className="material-symbols-outlined text-2xl text-white/50">
								account_balance
							</span>
						</div>
					</div>
					<div className="flex min-w-0 flex-1 flex-col justify-between py-1">
						<div className="space-y-1">
							<div className="flex items-center gap-2">
								<span className="font-bold text-[10px] text-primary uppercase">
									DAOs
								</span>
								<span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
								<span className="font-medium text-[10px] text-emerald-500">
									+4.2%
								</span>
							</div>
							<h3 className="line-clamp-2 font-bold text-sm leading-tight dark:text-white">
								Why DAO Governance is Essential for Social Scaling
							</h3>
						</div>
						<div className="mt-auto flex items-center justify-between">
							<span className="font-medium text-[11px] text-slate-500 dark:text-slate-400">
								@dao_master
							</span>
							<span className="font-black text-primary text-xs">1.20 ETH</span>
						</div>
					</div>
				</div>
				<div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/5 dark:bg-white/5">
					<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
						<div className="absolute inset-0 bg-linear-to-br from-emerald-600/40 to-teal-400/40"></div>
						<div className="flex h-full w-full items-center justify-center">
							<span className="material-symbols-outlined text-2xl text-white/50">
								monitoring
							</span>
						</div>
					</div>
					<div className="flex min-w-0 flex-1 flex-col justify-between py-1">
						<div className="space-y-1">
							<div className="flex items-center gap-2">
								<span className="font-bold text-[10px] text-primary uppercase">
									Earning
								</span>
								<span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
								<span className="font-medium text-[10px] text-emerald-500">
									+8.1%
								</span>
							</div>
							<h3 className="line-clamp-2 font-bold text-sm leading-tight dark:text-white">
								Liquidity Pools: The New Way to Monetize Ideas
							</h3>
						</div>
						<div className="mt-auto flex items-center justify-between">
							<span className="font-medium text-[11px] text-slate-500 dark:text-slate-400">
								@defi_pro
							</span>
							<span className="font-black text-primary text-xs">0.88 ETH</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
