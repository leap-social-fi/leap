import LeapIconSVG from '@/assets/svg/leap-icon.svg'
import Avatar from '@/components/base/Avatar'
import ConnectWallet from '@/components/composite/ConnectWallet'

export const Navbar = () => {
	return (
		<nav className="navbar sticky top-0 z-10 border-border border-b backdrop-blur-md dark:border-slate-800 dark:bg-background/80">
			<div className="mx-auto flex max-w-300 items-center justify-between px-4 py-4">
				<div className="flex items-center gap-2">
					<Avatar className="size-7">
						<Avatar.Image src={LeapIconSVG} className="h-7 w-7" />
					</Avatar>
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
