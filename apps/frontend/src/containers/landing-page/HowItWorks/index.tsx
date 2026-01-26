export const HowItWorks = () => {
	return (
		<section className="py-16 dark:bg-black">
			<div className="px-6">
				<h4 className="mb-3 text-center font-black text-[10px] text-primary uppercase tracking-[0.3em]">
					Platform Flow
				</h4>
				<h2 className="mb-10 text-center font-bold text-2xl dark:text-white">
					How It Works
				</h2>
				<div className="grid grid-cols-1 gap-4">
					<div className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#0d1421]">
						<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
							<span className="material-symbols-outlined text-3xl text-primary">
								stylus_note
							</span>
						</div>
						<div>
							<h3 className="mb-1 font-bold text-lg dark:text-white">
								1. Write
							</h3>
							<p className="text-slate-500 text-sm leading-relaxed dark:text-slate-400">
								Create high-quality content directly on the blockchain.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#0d1421]">
						<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
							<span className="material-symbols-outlined text-3xl text-primary">
								generating_tokens
							</span>
						</div>
						<div>
							<h3 className="mb-1 font-bold text-lg dark:text-white">
								2. Tokenize
							</h3>
							<p className="text-slate-500 text-sm leading-relaxed dark:text-slate-400">
								Turn your articles into unique, tradable digital assets.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#0d1421]">
						<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
							<span className="material-symbols-outlined text-3xl text-primary">
								water_drop
							</span>
						</div>
						<div>
							<h3 className="mb-1 font-bold text-lg dark:text-white">
								3. Pool Liquidity
							</h3>
							<p className="text-slate-500 text-sm leading-relaxed dark:text-slate-400">
								Provide liquidity to article pools and earn from trading volume.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#0d1421]">
						<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
							<span className="material-symbols-outlined text-3xl text-primary">
								payments
							</span>
						</div>
						<div>
							<h3 className="mb-1 font-bold text-lg dark:text-white">
								4. Earn
							</h3>
							<p className="text-slate-500 text-sm leading-relaxed dark:text-slate-400">
								Receive rewards and royalties as your ideas grow.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
