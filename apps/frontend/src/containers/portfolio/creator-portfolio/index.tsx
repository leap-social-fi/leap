import { IconCircleCheck } from '@tabler/icons-react'

import Button from '@/components/base/Button'

const CreatorPortfolio: React.FC = () => {
	return (
		<div className="px-5 pb-22">
			<section className="pt-8 pb-6 text-center">
				<p className="mb-1 font-semibold text-slate-500 text-sm dark:text-slate-400">
					Total Balance
				</p>
				<h2 className="mb-2 font-800 text-5xl text-slate-900 tracking-tight dark:text-white">
					$12,450.84
				</h2>
				<div className="mx-auto flex w-fit items-center justify-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 font-bold text-emerald-500 text-sm">
					<span className="material-symbols-rounded text-[18px]">
						trending_up
					</span>
					<span>+4.2% This Month</span>
				</div>
			</section>
			<section className="mb-8">
				<div className="mb-4 flex items-center justify-between">
					<h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest">
						Creator Earnings
					</h3>
				</div>
				<div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-slate-800 dark:bg-surface">
					<div className="mb-6 flex items-center justify-between">
						<div>
							<p className="mb-1 font-semibold text-slate-500 text-xs dark:text-slate-400">
								Unclaimed Revenue
							</p>
							<p className="font-800 text-3xl text-slate-900 dark:text-white">
								$842.10
							</p>
						</div>
						<Button className="rounded-xl bg-primary px-5 py-2.5 font-bold text-sm text-white shadow-lg shadow-primary/20 transition-transform active:scale-95">
							Claim
						</Button>
					</div>
					<div className="grid grid-cols-2 gap-4 border-slate-50 border-t pt-4 dark:border-slate-800">
						<div>
							<div className="mb-1 flex items-center gap-1">
								<span className="material-symbols-rounded text-slate-400 text-sm">
									visibility
								</span>
								<p className="font-bold text-[10px] text-slate-400 uppercase tracking-wider">
									Article Views
								</p>
							</div>
							<p className="font-bold text-lg text-slate-900 dark:text-white">
								45.2K
							</p>
						</div>
						<div>
							<div className="mb-1 flex items-center gap-1">
								<span className="material-symbols-rounded text-slate-400 text-sm">
									payments
								</span>
								<p className="font-bold text-[10px] text-slate-400 uppercase tracking-wider">
									Total Revenue
								</p>
							</div>
							<p className="font-bold text-lg text-slate-900 dark:text-white">
								$2,140.50
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-8">
				<div className="mb-4 flex items-center justify-between">
					<h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest">
						Claim History
					</h3>
				</div>
				<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-surface">
					<div className="divide-y divide-slate-50 dark:divide-slate-800">
						<div className="flex items-center justify-between p-4">
							<div className="flex flex-col">
								<span className="font-bold text-slate-900 text-sm dark:text-white">
									Dec 24, 2023
								</span>
								<span className="font-medium text-[11px] text-slate-500 uppercase">
									Batch #1209
								</span>
							</div>
							<div className="text-right">
								<p className="font-bold text-slate-900 text-sm dark:text-white">
									$450.00
								</p>

								<div className="flex items-center gap-1">
									<IconCircleCheck size={14} className="text-emerald-500" />
									<span className="flex items-center justify-end gap-0.5 font-bold text-emerald-500 text-xs">
										Success
									</span>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-between p-4">
							<div className="flex flex-col">
								<span className="font-bold text-slate-900 text-sm dark:text-white">
									Dec 24, 2023
								</span>
								<span className="font-medium text-[11px] text-slate-500 uppercase">
									Batch #1209
								</span>
							</div>
							<div className="text-right">
								<p className="font-bold text-slate-900 text-sm dark:text-white">
									$450.00
								</p>

								<div className="flex items-center gap-1">
									<IconCircleCheck size={14} className="text-emerald-500" />
									<span className="flex items-center justify-end gap-0.5 font-bold text-emerald-500 text-xs">
										Success
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mb-4 flex items-center justify-between">
					<h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest">
						Your Assets
					</h3>
				</div>
				<div className="space-y-3">
					<div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 dark:border-slate-800 dark:bg-surface">
						<div className="flex items-center gap-4">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30">
								<span className="material-symbols-rounded">
									currency_bitcoin
								</span>
							</div>
							<div>
								<p className="font-bold text-slate-900 dark:text-white">
									Bitcoin
								</p>
								<p className="font-semibold text-[11px] text-slate-500">
									0.14 BTC
								</p>
							</div>
						</div>
						<div className="text-right">
							<p className="font-bold text-slate-900 dark:text-white">
								$8,940.20
							</p>
							<p className="font-bold text-[10px] text-emerald-500">+1.2%</p>
						</div>
					</div>
					<div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 dark:border-slate-800 dark:bg-surface">
						<div className="flex items-center gap-4">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
								<span className="material-symbols-rounded">diamond</span>
							</div>
							<div>
								<p className="font-bold text-slate-900 dark:text-white">
									Ethereum
								</p>
								<p className="font-semibold text-[11px] text-slate-500">
									1.25 ETH
								</p>
							</div>
						</div>
						<div className="text-right">
							<p className="font-bold text-slate-900 dark:text-white">
								$3,125.40
							</p>
							<p className="font-bold text-[10px] text-rose-500">-0.8%</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default CreatorPortfolio
