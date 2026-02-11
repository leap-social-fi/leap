import ConnectWallet from '@/components/composite/ConnectWallet'

export const Navbar = () => {
	return (
		<nav className="navbar sticky top-0 z-10 border-border border-b backdrop-blur-md dark:border-slate-800 dark:bg-background/80">
			<div className="mx-auto flex max-w-300 items-center justify-between px-4 py-4">
				<div className="flex items-center gap-2.5">
					<div className="flex h-8 w-8 items-center justify-center rounded-3xl border border-white/20 bg-linear-to-br from-primary to-blue-400 shadow-[0_0_50px_rgba(43,108,238,0.4)]">
						<span
							className="material-symbols-outlined text-typography-light"
							style={{ fontSize: 24 }}
						>
							token
						</span>
					</div>
					<h2 className="font-bold text-typography text-xl tracking-tight">
						Leap
					</h2>
				</div>
				<div className="flex items-center gap-3">
					<ConnectWallet />
				</div>
			</div>
		</nav>
	)
}
