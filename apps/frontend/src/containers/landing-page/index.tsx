import { Button } from '@/components/ui/button'
import { Hero } from '@/containers/landing-page/Hero'
import { HowItWorks } from '@/containers/landing-page/HowItWorks'
import { TrendingArticles } from '@/containers/landing-page/TrendingArticles'
import { useToggleDarkMode } from '@/hooks/useToggleDarkMode'

export const LandingPageContainer: React.FC = () => {
	const { handleToggleDarkMode } = useToggleDarkMode()
	return (
		<div className="min-h-screen bg-background-light text-slate-900 selection:bg-primary selection:text-white dark:bg-background-dark dark:text-white">
			<nav className="sticky top-0 z-50 border-slate-200 border-b bg-background-light/80 backdrop-blur-md dark:border-white/5 dark:bg-background-dark/80">
				<div className="flex items-center justify-between px-4 py-4">
					<div className="flex items-center gap-2.5">
						<div className="flex h-8 w-8 items-center justify-center rounded-3xl border border-white/20 bg-linear-to-br from-primary to-blue-400 shadow-[0_0_50px_rgba(43,108,238,0.4)]">
							<span
								className="material-symbols-outlined text-white"
								style={{ fontSize: 24 }}
							>
								token
							</span>
						</div>
						<h2 className="font-bold text-xl tracking-tight dark:text-white">
							Leap
						</h2>
					</div>
					<div className="flex items-center gap-3">
						<Button
							className="rounded-full bg-primary px-5 py-2 font-bold text-white text-xs shadow-lg shadow-primary/20"
							onClick={handleToggleDarkMode}
						>
							Connect
						</Button>
					</div>
				</div>
			</nav>

			<Hero />
			<HowItWorks />
			<TrendingArticles />
		</div>
	)
}
