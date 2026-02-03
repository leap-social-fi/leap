import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const navLinks = [
	{ label: 'Features', href: '#features' },
	{ label: 'Ecosystem', href: '#ecosystem' },
	{ label: 'Metrics', href: '#metrics' },
]

export const Navbar = () => {
	const navRef = useRef<HTMLElement>(null)
	const logoRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Fade in navbar elements
			gsap.fromTo(
				'.nav-item',
				{ opacity: 0, y: -20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					stagger: 0.1,
					ease: 'power2.out',
					delay: 0.2,
				},
			)

			// Logo glow pulse
			gsap.to(logoRef.current, {
				boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
			})
		}, navRef)

		return () => ctx.revert()
	}, [])

	const handleNavClick = (href: string) => {
		const element = document.querySelector(href)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<nav
			ref={navRef}
			className="glass-strong fixed top-0 right-0 left-0 z-50 font-inter"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between sm:h-20">
					{/* Logo */}
					<div className="nav-item flex items-center gap-3">
						<div
							ref={logoRef}
							className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400"
						>
							<span
								className="material-symbols-outlined text-white"
								style={{ fontSize: 24 }}
							>
								token
							</span>
						</div>
						<span className="font-bold text-white text-xl tracking-tight">
							Leap
						</span>
					</div>

					{/* Navigation Links - Hidden on mobile */}
					<div className="nav-item hidden items-center gap-8 md:flex">
						{navLinks.map((link) => (
							<button
								key={link.label}
								type="button"
								onClick={() => handleNavClick(link.href)}
								className="group relative font-medium text-slate-300 text-sm transition-colors duration-200 hover:text-white"
							>
								{link.label}
								<span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
							</button>
						))}
					</div>

					{/* CTA Button */}
					<div className="nav-item">
						<button
							type="button"
							className="btn-gradient relative overflow-hidden rounded-xl px-5 py-2.5 font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] sm:px-6 sm:py-3"
						>
							<span className="relative z-10">Launch App</span>
							<div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-300 hover:opacity-100" />
						</button>
					</div>
				</div>
			</div>

			{/* Bottom border glow */}
			<div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
		</nav>
	)
}
