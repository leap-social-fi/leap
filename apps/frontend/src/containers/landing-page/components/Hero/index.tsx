import { IconWallet } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

export const Hero = () => {
	return (
		<section className="relative overflow-hidden light:bg-blue-50/40 px-6 pt-12 pb-16">
			<div className="relative z-10 mx-auto flex max-w-md flex-col items-center">
				<div className="relative mb-10 flex aspect-square w-full items-center justify-center">
					<div className="relative">
						<div className="absolute top-1/2 left-1/2 z-20 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/20 bg-linear-to-br from-primary to-blue-400 shadow-[0_0_50px_rgba(43,108,238,0.4)]">
							<span
								className="material-symbols-outlined text-white"
								style={{ fontSize: 120 }}
							>
								token
							</span>
						</div>
					</div>
				</div>
				<div className="space-y-4 text-center">
					<h1 className="font-black text-4xl text-slate-900 leading-[1.1] tracking-tight dark:text-white">
						The Future of <br />{' '}
						<span className="text-primary">Content Ownership</span>
					</h1>
					<p className="mx-auto max-w-70 text-base text-slate-600 leading-relaxed dark:text-slate-400">
						The decentralized ecosystem where creators and investors thrive
						together.
					</p>
				</div>
				<div className="mt-10 flex w-full flex-col items-center gap-3">
					<Button className="flex w-max items-center justify-center gap-2 rounded-xl bg-primary px-10 py-6 font-bold text-white shadow-primary/30 shadow-xl transition-all hover:bg-blue-600">
						<IconWallet size={40} />
						Connect Wallet
					</Button>
				</div>
			</div>
		</section>
	)
}
