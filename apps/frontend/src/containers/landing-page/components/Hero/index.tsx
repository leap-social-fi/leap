export const Hero = () => {
	return (
		<section className="panel relative flex h-screen items-center justify-center overflow-hidden bg-background px-6 pt-12 pb-16">
			<div className="relative z-10 flex max-w-300 flex-col items-center justify-center gap-10">
				<div className="relative flex h-56 w-56">
					<div className="absolute top-1/2 left-1/2 z-20 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/20 bg-linear-to-br from-primary to-blue-400 shadow-[0_0_50px_rgba(43,108,238,0.4)]">
						<span
							className="material-symbols-outlined text-white"
							style={{ fontSize: 120 }}
						>
							token
						</span>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4">
					<h1 className="text-center font-black text-4xl text-typography leading-[1.1] tracking-tight">
						The Future of <br />{' '}
						<span className="text-primary">Content Ownership</span>
					</h1>
					<p className="mt-4 w-102 text-center text-base text-typography-secondary leading-relaxed">
						The decentralized ecosystem where creators and investors thrive
						together.
					</p>
				</div>
			</div>
		</section>
	)
}
