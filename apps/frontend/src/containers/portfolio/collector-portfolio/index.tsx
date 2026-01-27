const CollectorPortfolio: React.FC = () => {
	return (
		<div className="px-5 pb-22">
			<section className="pt-8 pb-6 text-center">
				<p className="mb-1 font-semibold text-slate-400 text-sm">
					Collection Value
				</p>
				<h2 className="mb-2 font-800 text-5xl text-ios-text tracking-tight">
					$8,214.50
				</h2>
				<div className="mx-auto flex w-fit items-center justify-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 font-bold text-emerald-500 text-sm">
					<span className="material-symbols-rounded text-[18px]">
						trending_up
					</span>
					<span>+12.5% This Week</span>
				</div>
			</section>
			<section className="mb-8">
				<div className="mb-4 flex items-center justify-between">
					<h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest">
						Your Collection
					</h3>
					<div className="font-bold text-primary text-xs">View All</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="overflow-hidden rounded-2xl border border-gray-200 transition-transform active:scale-95 dark:border-white/5 dark:bg-surface">
						<div className="relative aspect-4/3 w-full overflow-hidden">
							<img
								alt="Article 1"
								className="h-full w-full object-cover"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN_PfFSth9atGqkXYSZuhS2-W8Lg4WC_0N5ESnuJfjsb8HCG-pHvol-xNQ298eZx7HikYLqIVwILuFs9ppYTz2Yh9OWC9lNkUUfx3FTNVeW4HLEDLElxAu7YaMRzQle9KWSw9GvPd8CYegHOzWsOeDlwoV2GitC5E0TwLIzhmS8WUOKn_MTksNIqt1Z9CMa4-VuZE_rvp7ljgh_rb1LtT7-L19pv28-sTslxn31PeUaGvg5BFWei2dZdb_ApGX2rCyzBO_Gz6ziibW"
							/>
						</div>
						<div className="p-3">
							<h4 className="mb-1 line-clamp-1 font-bold text-ios-text text-sm">
								The Web3 Era
							</h4>
							<p className="mb-2 font-bold text-[10px] text-slate-400 uppercase tracking-tighter">
								Creator: @SatoshiVibes
							</p>
							<div className="flex flex-col border-black/5 border-t pt-2">
								<span className="font-bold text-[9px] text-slate-400 uppercase">
									Floor Price
								</span>
								<span className="font-800 text-ios-text text-sm">0.45 ETH</span>
							</div>
						</div>
					</div>

					<div className="overflow-hidden rounded-2xl border border-gray-200 transition-transform active:scale-95 dark:border-white/5 dark:bg-surface">
						<div className="relative aspect-4/3 w-full overflow-hidden">
							<img
								alt="Article 2"
								className="h-full w-full object-cover"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdyOpU5C7c_1LX9qAYH0kSVRV0YL2AP2D27QS29jom42wK4RUvUtL-DB6FcaeD5uZqcL1JEcVEHZktzGimtulb4GSSui6NwVAPYIx5AIRyLOszAEI9C6ZneaI_ZW4Knrm3wAimhb9zGlwDHEvIkau_7oPJ5neCpNLNxKtMYZe4y1LNqDAIBKSJf9-8LO5sSz0IZsZuzp1bJ3Oj6pYTxLfW2cXj4Qz1ihKzqfC3NKfwDZ1Lcw2WGhQ9kJyUaqo3EDlWTX3sm18-m_r"
							/>
						</div>
						<div className="p-3">
							<h4 className="mb-1 line-clamp-1 font-bold text-ios-text text-sm">
								Decentralized Art
							</h4>
							<p className="mb-2 font-bold text-[10px] text-slate-400 uppercase tracking-tighter">
								Creator: @NakamotoX
							</p>
							<div className="flex flex-col border-black/5 border-t pt-2">
								<span className="font-bold text-[9px] text-slate-400 uppercase">
									Floor Price
								</span>
								<span className="font-800 text-ios-text text-sm">1.20 ETH</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-8">
				<div className="mb-4 flex items-center justify-between">
					<h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest">
						Acquisition History
					</h3>
				</div>
				<div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/5 dark:bg-surface">
					<div className="divide-y divide-black/5">
						<div className="flex items-center justify-between border-gray-100 border-b p-4 dark:border-white/5">
							<div className="flex items-center gap-3">
								<div className="h-10 w-10 overflow-hidden rounded-lg bg-gray-100">
									<img
										alt="History 1"
										className="h-full w-full object-cover"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuDazpUz2vUaAJeTHvpStX5VdYHinNUYOSPbb68sLeYXg2MCvTd0R1GOfC_19omnU0bmok3OSDqOYlrr6XHyAWehAH7Xsb6WGBGCb3Or91eTIKKjElcOaumABBwHgbzD7tZlGy3i8qwTh1AP6Jt_pmnARFJdM9TbFejTeBxTLC988P0FTIIdGM7naZauTbQwjvLg9EfABLE1807T9UhpeHf8OUzDdwTz5STlnB7FJy8FqHiliQFcc5B4_JW_FvJew5EgTCkIG-Tq1ess"
									/>
								</div>
								<div className="flex flex-col">
									<span className="font-bold text-ios-text text-sm">
										Future of DeFi
									</span>
									<span className="font-medium text-[11px] text-slate-400">
										Bought Dec 28, 2023
									</span>
								</div>
							</div>
							<div className="text-right">
								<p className="font-800 text-ios-text text-sm">0.15 ETH</p>
								<span className="font-bold text-[10px] text-slate-400">
									$284.12
								</span>
							</div>
						</div>

						<div className="flex items-center justify-between p-4">
							<div className="flex items-center gap-3">
								<div className="h-10 w-10 overflow-hidden rounded-lg bg-gray-100">
									<img
										alt="History 2"
										className="h-full w-full object-cover"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2yFCy5romzRdMmKCtInusSdJ5-EXrLbAD7wWeFQtn2sZRhypQCSsbFsAsooUjruPM1MEAIwpW3v_r_PBPEBx4tl0GyoLUiTA5duAly-TQ6fE6DH9jV0bxYsYqKkGWoBNuS-P2hpKrpniJFiw5N3wWLYTf4dxoXOTlBRT6k0lezyutQiB41GtRhHjlRI4K2uiO9Vwh_oqqdT9ydajeU8MMTsQjhh1LycK2fL-4WvaRoj_f7maJoEm10PJfsHlNTkHIijDHZGfjieSA"
									/>
								</div>
								<div className="flex flex-col">
									<span className="font-bold text-ios-text text-sm">
										Mining Secrets
									</span>
									<span className="font-medium text-[11px] text-slate-400">
										Bought Dec 15, 2023
									</span>
								</div>
							</div>
							<div className="text-right">
								<p className="font-800 text-ios-text text-sm">0.08 ETH</p>
								<span className="font-bold text-[10px] text-slate-400">
									$152.40
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default CollectorPortfolio
