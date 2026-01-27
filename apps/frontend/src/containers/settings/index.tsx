import { IconCopy, IconLogout } from '@tabler/icons-react'
import { useNavigate } from '@tanstack/react-router'

import { Switch } from '@/components/ui/switch'
import { useToggleDarkMode } from '@/hooks/useToggleDarkMode'

const SettingsPageContainer: React.FC = () => {
	const { isDarkMode, handleToggleDarkMode } = useToggleDarkMode()
	const navigate = useNavigate()

	return (
		<div className="flex flex-col">
			<header className="sticky top-0 z-30 bg-charcoal/80 px-5 pt-12 pb-6 backdrop-blur-md">
				<div className="flex flex-col items-center gap-4">
					<div className="relative">
						<div className="h-24 w-24 rounded-full border-2 border-primary/30 p-1">
							<img
								alt="User Profile"
								className="h-full w-full rounded-full object-cover"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrEoYXSCwJ0vXdVAUQROvZkkQ5KNKoUM12X9pSZHm4nJ1qgUdd3egCiZmIogwE_Ctq0gPM8hvqVidbhW5X5Ro5RMxHM8s7KE7BRRL0ebo1x3nxZ6cGXAVxn3InU4GqGGeN6VO7eP_duIn-p6DkIKK-nB740-f_E2jPFGlw1eZOWOLUWVxcv-oh3LmCtEJJJI88PjCZyA95F90hObBQ7tHb_n1AOlzMi_XHHqvSJw1-1JxZ-zBacmlD3xuw0eqy1lIvinhwJNrbLB92"
							/>
						</div>
					</div>
					<div className="flex flex-col items-center gap-2">
						<h1 className="font-bold text-xl tracking-tight">Alex Rivera</h1>
						<div className="flex items-center justify-center gap-2">
							<code className="rounded-full border border-slate-800 px-3 py-1 text-slate-400 text-xs dark:bg-surface">
								0x71C...3A94
							</code>
							<div className="cursor-pointer text-slate-500 hover:text-slate-600">
								<IconCopy size={20} />
							</div>
						</div>
					</div>
				</div>
			</header>
			<main className="space-y-6 px-5 pb-32">
				<section>
					<div className="overflow-hidden rounded-2xl shadow-sm dark:bg-surface">
						<div className="flex w-full items-center justify-between border-gray-100 border-b px-4 py-4 transition-colors active:bg-white/5 dark:border-white/5">
							<div className="flex items-center gap-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
									<span className="material-symbols-rounded filled">
										person
									</span>
								</div>
								<div className="text-left">
									<p className="font-semibold light:text-white">Profile</p>
									<p className="text-slate-400 text-xs">
										Personal information and branding
									</p>
								</div>
							</div>
							<span className="material-symbols-rounded text-slate-600">
								chevron_right
							</span>
						</div>
						<div className="flex w-full items-center justify-between border-white/5 border-b px-4 py-4">
							<div className="flex items-center gap-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
									<span className="material-symbols-rounded filled">
										dark_mode
									</span>
								</div>
								<div className="text-left">
									<p className="font-semibold light:text-white">Theme</p>
									<p className="text-slate-400 text-xs">Dark mode active</p>
								</div>
							</div>
							<Switch
								checked={isDarkMode}
								className="cursor-pointer"
								onClick={handleToggleDarkMode}
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="overflow-hidden rounded-2xl shadow-sm dark:bg-surface">
						<div
							className="flex w-full cursor-pointer items-center justify-between px-4 py-4 transition-colors active:bg-white/5"
							onClick={() => navigate({ to: '/' })}
						>
							<div className="flex items-center gap-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
									<IconLogout size={20} />
								</div>
								<div className="text-left">
									<p className="font-semibold light:text-white">Logout</p>
									<p className="text-slate-400 text-xs">
										Disconnect from the app
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default SettingsPageContainer
