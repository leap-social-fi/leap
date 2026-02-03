import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
	{ label: 'Total Value Locked', value: '$24.5M', icon: 'account_balance' },
	{ label: 'Active Users', value: '125K+', icon: 'group' },
	{ label: 'Articles Created', value: '89K', icon: 'article' },
	{ label: 'Trading Volume', value: '$12.8M', icon: 'trending_up' },
]

const partners = [
	'Coinbase',
	'Uniswap',
	'Aave',
	'Compound',
	'MakerDAO',
	'Chainlink',
	'The Graph',
	'Polygon',
]

export const Metrics = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const metricsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Metrics cards stagger animation
			const cards = metricsRef.current?.querySelectorAll('.metric-card')
			if (cards) {
				gsap.fromTo(
					cards,
					{
						opacity: 0,
						y: 50,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						stagger: 0.1,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: metricsRef.current,
							start: 'top 80%',
							toggleActions: 'play none none reverse',
						},
					},
				)
			}

			// Counter animation for metrics values
			const values = document.querySelectorAll('.metric-value')
			values.forEach((value) => {
				gsap.fromTo(
					value,
					{ opacity: 0, scale: 0.5 },
					{
						opacity: 1,
						scale: 1,
						duration: 0.8,
						ease: 'back.out(1.7)',
						scrollTrigger: {
							trigger: value,
							start: 'top 85%',
							toggleActions: 'play none none reverse',
						},
					},
				)
			})
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			id="metrics"
			ref={sectionRef}
			className="relative overflow-hidden py-24 font-inter sm:py-32"
		>
			{/* Background */}
			<div className="absolute inset-0">
				<div
					className="orb orb-cyan -top-40 -right-40 h-80 w-80 opacity-30"
					style={{ animationDelay: '4s' }}
				/>
				<div
					className="orb orb-blue bottom-0 left-0 h-64 w-64 opacity-25"
					style={{ animationDelay: '9s' }}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-16 text-center">
					<span className="glass mb-6 inline-block rounded-full px-4 py-2 font-semibold text-blue-400 text-xs uppercase tracking-widest">
						Platform Metrics
					</span>
					<h2 className="mb-6 font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
						Trusted by <span className="text-gradient-blue">Thousands</span>
					</h2>
				</div>

				{/* Metrics Grid */}
				<div
					ref={metricsRef}
					className="mb-20 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
				>
					{metrics.map((metric) => (
						<div
							key={metric.label}
							className="metric-card glass group rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/10 sm:p-8"
						>
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 transition-transform duration-300 group-hover:scale-110">
								<span className="material-symbols-outlined text-white text-xl">
									{metric.icon}
								</span>
							</div>
							<div className="metric-value mb-2 font-bold text-2xl text-white sm:text-3xl">
								{metric.value}
							</div>
							<div className="text-slate-400 text-sm">{metric.label}</div>
						</div>
					))}
				</div>

				{/* Partners Marquee */}
				<div className="relative overflow-hidden py-8">
					<div className="absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-950 to-transparent" />
					<div className="absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l from-slate-950 to-transparent" />

					<div className="flex">
						{/* First marquee set */}
						<div className="flex animate-marquee items-center gap-12">
							{[...partners, ...partners].map((partner, index) => (
								<div
									key={`${partner}-${index}`}
									className="glass flex-shrink-0 rounded-xl px-8 py-4"
								>
									<span className="font-semibold text-lg text-slate-400 transition-colors duration-300 hover:text-blue-400">
										{partner}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
