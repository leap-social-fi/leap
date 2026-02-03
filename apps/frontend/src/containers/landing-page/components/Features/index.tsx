import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const features = [
	{
		icon: 'auto_awesome',
		title: 'Content Tokenization',
		description:
			'Transform your ideas into tradable digital assets with one click.',
		gradient: 'from-blue-500 to-cyan-400',
	},
	{
		icon: 'water_drop',
		title: 'Liquidity Pools',
		description:
			'Provide liquidity to content pools and earn from trading volume.',
		gradient: 'from-cyan-500 to-blue-400',
	},
	{
		icon: 'group',
		title: 'Social Discovery',
		description:
			'Discover trending ideas and creators through community curation.',
		gradient: 'from-blue-600 to-cyan-500',
	},
	{
		icon: 'payments',
		title: 'Instant Rewards',
		description: 'Earn rewards and royalties as your content gains traction.',
		gradient: 'from-cyan-400 to-blue-500',
	},
]

export const Features = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const headerRef = useRef<HTMLDivElement>(null)
	const cardsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Header animation
			gsap.fromTo(
				headerRef.current,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: headerRef.current,
						start: 'top 80%',
						toggleActions: 'play none none reverse',
					},
				},
			)

			// Staggered cards animation
			const cards = cardsRef.current?.querySelectorAll('.feature-card')
			if (cards) {
				gsap.fromTo(
					cards,
					{
						opacity: 0,
						y: 80,
						scale: 0.9,
					},
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.8,
						stagger: 0.15,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: cardsRef.current,
							start: 'top 75%',
							toggleActions: 'play none none reverse',
						},
					},
				)
			}
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			id="features"
			ref={sectionRef}
			className="relative overflow-hidden py-24 font-inter sm:py-32"
		>
			{/* Background elements */}
			<div className="absolute inset-0">
				<div
					className="orb orb-blue -top-32 right-0 h-64 w-64 opacity-50"
					style={{ animationDelay: '3s' }}
				/>
				<div
					className="orb orb-cyan bottom-0 left-1/4 h-48 w-48 opacity-40"
					style={{ animationDelay: '8s' }}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div ref={headerRef} className="mb-16 text-center sm:mb-20">
					<span className="glass mb-6 inline-block rounded-full px-4 py-2 font-semibold text-cyan-400 text-xs uppercase tracking-widest">
						Platform Features
					</span>
					<h2 className="mb-6 font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
						Everything You Need to{' '}
						<span className="text-gradient-blue">Succeed</span>
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-slate-400">
						A complete toolkit for creators and investors in the decentralized
						content economy.
					</p>
				</div>

				{/* Features Grid */}
				<div
					ref={cardsRef}
					className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
				>
					{features.map((feature) => (
						<div
							key={feature.title}
							className="feature-card group glass relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-white/10 sm:p-8"
						>
							{/* Hover glow effect */}
							<div className="glow-blue absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

							{/* Icon */}
							<div
								className={`relative h-14 w-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
							>
								<span className="material-symbols-outlined text-2xl text-white">
									{feature.icon}
								</span>
							</div>

							{/* Content */}
							<h3 className="relative mb-3 font-bold text-white text-xl">
								{feature.title}
							</h3>
							<p className="relative text-slate-400 text-sm leading-relaxed">
								{feature.description}
							</p>

							{/* Bottom border animation */}
							<div className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 transform rounded-b-2xl bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
