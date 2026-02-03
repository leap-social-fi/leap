import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const avatars = [
	{ id: 1, color: 'from-blue-500 to-cyan-400', x: 50, y: 30, delay: 0 },
	{ id: 2, color: 'from-cyan-400 to-blue-500', x: 150, y: 60, delay: 0.5 },
	{ id: 3, color: 'from-blue-600 to-cyan-500', x: 250, y: 40, delay: 1 },
	{ id: 4, color: 'from-cyan-500 to-blue-400', x: 350, y: 70, delay: 1.5 },
	{ id: 5, color: 'from-blue-400 to-cyan-400', x: 100, y: 130, delay: 0.3 },
	{ id: 6, color: 'from-cyan-400 to-blue-600', x: 200, y: 150, delay: 0.8 },
	{ id: 7, color: 'from-blue-500 to-cyan-500', x: 300, y: 120, delay: 1.3 },
	{ id: 8, color: 'from-cyan-500 to-blue-500', x: 80, y: 220, delay: 0.6 },
	{ id: 9, color: 'from-blue-400 to-cyan-500', x: 180, y: 240, delay: 1.1 },
	{ id: 10, color: 'from-cyan-400 to-blue-400', x: 280, y: 210, delay: 0.2 },
	{ id: 11, color: 'from-blue-600 to-cyan-400', x: 130, y: 300, delay: 0.9 },
	{ id: 12, color: 'from-cyan-500 to-blue-600', x: 230, y: 320, delay: 1.4 },
]

export const SocialEcosystem = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const headerRef = useRef<HTMLDivElement>(null)
	const visualRef = useRef<HTMLDivElement>(null)

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

			// Avatars stagger in
			gsap.fromTo(
				'.avatar-node',
				{
					opacity: 0,
					scale: 0,
				},
				{
					opacity: 1,
					scale: 1,
					duration: 0.6,
					stagger: 0.1,
					ease: 'back.out(1.7)',
					scrollTrigger: {
						trigger: visualRef.current,
						start: 'top 70%',
						toggleActions: 'play none none reverse',
					},
				},
			)

			// Connection lines draw
			gsap.fromTo(
				'.eco-connection',
				{ strokeDashoffset: 200 },
				{
					strokeDashoffset: 0,
					duration: 1.5,
					stagger: 0.1,
					ease: 'power2.inOut',
					scrollTrigger: {
						trigger: visualRef.current,
						start: 'top 70%',
						toggleActions: 'play none none reverse',
					},
				},
			)

			// Floating animation for avatars
			gsap.to('.avatar-node', {
				y: 'random(-10, 10)',
				x: 'random(-5, 5)',
				duration: 'random(2, 4)',
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
				stagger: {
					each: 0.2,
					from: 'random',
				},
			})

			// Pulse effect on center node
			gsap.to('.center-pulse', {
				scale: 1.5,
				opacity: 0,
				duration: 2,
				repeat: -1,
				ease: 'power2.out',
			})
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			id="ecosystem"
			ref={sectionRef}
			className="relative overflow-hidden py-24 font-inter sm:py-32"
		>
			{/* Background */}
			<div className="absolute inset-0">
				<div
					className="orb orb-purple -top-48 left-1/4 h-96 w-96 opacity-40"
					style={{ animationDelay: '2s' }}
				/>
				<div
					className="orb orb-blue right-1/4 bottom-0 h-64 w-64 opacity-30"
					style={{ animationDelay: '7s' }}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Visual */}
					<div ref={visualRef} className="relative order-2 lg:order-1">
						<div className="relative mx-auto aspect-square w-full max-w-md">
							{/* SVG for connections */}
							<svg
								viewBox="0 0 400 400"
								className="absolute inset-0 h-full w-full"
								fill="none"
							>
								<defs>
									<linearGradient
										id="lineGradient"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%"
									>
										<stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
										<stop offset="100%" stopColor="rgba(34, 211, 238, 0.3)" />
									</linearGradient>
								</defs>
								{/* Draw connections between nearby avatars */}
								<g className="stroke-[url(#lineGradient)]" strokeWidth="1">
									<path
										className="eco-connection"
										d="M75 55 L175 85"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M175 85 L275 65"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M125 155 L225 175"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M225 175 L325 145"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M105 245 L205 265"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M75 55 L125 155"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M175 85 L125 155"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M175 85 L225 175"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M275 65 L325 145"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M125 155 L105 245"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M225 175 L205 265"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M155 325 L255 345"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M105 245 L155 325"
										strokeDasharray="200"
									/>
									<path
										className="eco-connection"
										d="M205 265 L255 345"
										strokeDasharray="200"
									/>
								</g>
							</svg>

							{/* Avatar nodes */}
							{avatars.map((avatar) => (
								<div
									key={avatar.id}
									className="avatar-node absolute"
									style={{ left: avatar.x, top: avatar.y }}
								>
									<div
										className={`h-12 w-12 rounded-full bg-gradient-to-br ${avatar.color} flex items-center justify-center shadow-lg`}
									>
										<span className="material-symbols-outlined text-lg text-white">
											person
										</span>
									</div>
								</div>
							))}

							{/* Center glow */}
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
								<div className="center-pulse absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30" />
								<div className="glow-blue-intense flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400">
									<span
										className="material-symbols-outlined text-white"
										style={{ fontSize: 32 }}
									>
										token
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Content */}
					<div
						ref={headerRef}
						className="order-1 text-center lg:order-2 lg:text-left"
					>
						<span className="glass mb-6 inline-block rounded-full px-4 py-2 font-semibold text-cyan-400 text-xs uppercase tracking-widest">
							Social Ecosystem
						</span>
						<h2 className="mb-6 font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
							Connect, Create,{' '}
							<span className="text-gradient-blue">Thrive Together</span>
						</h2>
						<p className="mb-8 text-lg text-slate-400 leading-relaxed">
							Join a vibrant community of creators, investors, and visionaries.
							Watch your network grow as your content connects with like-minded
							individuals across the decentralized web.
						</p>

						<div className="mx-auto grid max-w-sm grid-cols-2 gap-6 lg:mx-0">
							<div className="glass rounded-xl p-4 text-center">
								<div className="mb-1 font-bold text-2xl text-white">50K+</div>
								<div className="text-slate-400 text-sm">Active Creators</div>
							</div>
							<div className="glass rounded-xl p-4 text-center">
								<div className="mb-1 font-bold text-2xl text-white">1M+</div>
								<div className="text-slate-400 text-sm">Community Members</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
