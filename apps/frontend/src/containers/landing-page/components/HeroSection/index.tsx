import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const HeroSection = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const headlineRef = useRef<HTMLHeadingElement>(null)
	const subtextRef = useRef<HTMLParagraphElement>(null)
	const ctaRef = useRef<HTMLDivElement>(null)
	const visualRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Split headline text for character animation
			const headline = headlineRef.current
			if (headline) {
				const words = headline.innerText.split(' ')
				headline.innerHTML = words
					.map(
						(word) =>
							`<span class="word inline-block overflow-hidden"><span class="word-inner inline-block">${word}</span></span>`,
					)
					.join(' ')

				gsap.fromTo(
					'.word-inner',
					{
						y: '100%',
						opacity: 0,
					},
					{
						y: '0%',
						opacity: 1,
						duration: 0.8,
						stagger: 0.08,
						ease: 'power3.out',
						delay: 0.5,
					},
				)
			}

			// Subtext fade in
			gsap.fromTo(
				subtextRef.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power2.out',
					delay: 1.2,
				},
			)

			// CTA buttons slide up
			gsap.fromTo(
				ctaRef.current,
				{ opacity: 0, y: 40 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power2.out',
					delay: 1.5,
				},
			)

			// Visual network animation
			gsap.fromTo(
				visualRef.current,
				{ opacity: 0, scale: 0.8 },
				{
					opacity: 1,
					scale: 1,
					duration: 1.2,
					ease: 'power2.out',
					delay: 0.8,
				},
			)

			// Animate network nodes
			gsap.to('.node', {
				scale: 1.1,
				duration: 2,
				repeat: -1,
				yoyo: true,
				stagger: 0.3,
				ease: 'sine.inOut',
			})

			// // Animate connection lines
			// gsap.fromTo(
			//   '.connection-line',
			//   { pathLength: 0 },
			//   {
			//     pathLength: 1,
			//     duration: 2,
			//     stagger: 0.2,
			//     ease: 'power2.inOut',
			//     delay: 1,
			//   },
			// )
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-20 font-inter"
		>
			{/* Background Gradient Orbs */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="orb orb-blue -top-48 -left-48 h-96 w-96" />
				<div
					className="orb orb-cyan animation-delay-1000 top-1/4 right-0 h-80 w-80"
					style={{ animationDelay: '5s' }}
				/>
				<div
					className="orb orb-purple bottom-0 left-1/3 h-72 w-72"
					style={{ animationDelay: '10s' }}
				/>
			</div>

			{/* Grid pattern overlay */}
			<div className="grid-pattern absolute inset-0 opacity-50" />

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Text Content */}
					<div className="text-center lg:text-left">
						<div className="mb-6">
							<span className="glass inline-block rounded-full px-4 py-2 font-semibold text-blue-400 text-xs uppercase tracking-widest">
								The Future of Social Finance
							</span>
						</div>

						<h1
							ref={headlineRef}
							className="mb-6 font-bold text-4xl text-white leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
						>
							Where Social Meets DeFi
						</h1>

						<p
							ref={subtextRef}
							className="mx-auto mb-10 max-w-xl text-lg text-slate-400 leading-relaxed sm:text-xl lg:mx-0"
						>
							Join the decentralized ecosystem where creators monetize ideas,
							investors discover alpha, and communities thrive together.
						</p>

						<div
							ref={ctaRef}
							className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
						>
							<button
								type="button"
								className="btn-gradient animate-pulse-glow rounded-xl px-8 py-4 font-semibold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
							>
								Get Started
							</button>
							<button
								type="button"
								className="glass group flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-lg text-white transition-all duration-300 hover:bg-white/10"
							>
								<span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">
									play_circle
								</span>
								Watch Demo
							</button>
						</div>
					</div>

					{/* Visual - Network Graph */}
					<div
						ref={visualRef}
						className="relative flex items-center justify-center"
					>
						<div className="relative aspect-square w-full max-w-lg">
							{/* SVG Network */}
							<svg
								viewBox="0 0 400 400"
								className="h-full w-full"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{/* Connection Lines */}
								<g className="stroke-blue-500/30" strokeWidth="1">
									<path className="connection-line" d="M200 80 L120 160" />
									<path className="connection-line" d="M200 80 L280 160" />
									<path className="connection-line" d="M120 160 L80 260" />
									<path className="connection-line" d="M120 160 L200 240" />
									<path className="connection-line" d="M280 160 L320 260" />
									<path className="connection-line" d="M280 160 L200 240" />
									<path className="connection-line" d="M80 260 L160 340" />
									<path className="connection-line" d="M200 240 L160 340" />
									<path className="connection-line" d="M200 240 L240 340" />
									<path className="connection-line" d="M320 260 L240 340" />
								</g>

								{/* Glow filters */}
								<defs>
									<filter
										id="glow"
										x="-50%"
										y="-50%"
										width="200%"
										height="200%"
									>
										<feGaussianBlur stdDeviation="4" result="coloredBlur" />
										<feMerge>
											<feMergeNode in="coloredBlur" />
											<feMergeNode in="SourceGraphic" />
										</feMerge>
									</filter>
								</defs>

								{/* Nodes */}
								<g filter="url(#glow)">
									{/* Center top */}
									<circle
										className="node fill-blue-500"
										cx="200"
										cy="80"
										r="16"
									/>
									{/* Left mid */}
									<circle
										className="node fill-cyan-400"
										cx="120"
										cy="160"
										r="12"
									/>
									{/* Right mid */}
									<circle
										className="node fill-blue-400"
										cx="280"
										cy="160"
										r="12"
									/>
									{/* Far left */}
									<circle
										className="node fill-cyan-500"
										cx="80"
										cy="260"
										r="10"
									/>
									{/* Center */}
									<circle
										className="node fill-blue-500"
										cx="200"
										cy="240"
										r="14"
									/>
									{/* Far right */}
									<circle
										className="node fill-cyan-400"
										cx="320"
										cy="260"
										r="10"
									/>
									{/* Bottom left */}
									<circle
										className="node fill-blue-400"
										cx="160"
										cy="340"
										r="8"
									/>
									{/* Bottom right */}
									<circle
										className="node fill-cyan-500"
										cx="240"
										cy="340"
										r="8"
									/>
								</g>
							</svg>

							{/* Floating badges */}
							<div className="glass absolute top-1/4 -left-4 rounded-lg px-3 py-2">
								<span className="font-semibold text-emerald-400 text-xs">
									+24.5%
								</span>
							</div>
							<div className="glass absolute -right-4 bottom-1/4 rounded-lg px-3 py-2">
								<span className="font-semibold text-blue-400 text-xs">
									$2.4M TVL
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500">
				<span className="text-xs uppercase tracking-widest">Scroll</span>
				<div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-600 pt-2">
					<div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
				</div>
			</div>
		</section>
	)
}
