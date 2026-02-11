import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

import { Hero } from '@/containers/landing-page/components/Hero'
import { HowItWorks } from '@/containers/landing-page/components/HowItWorks'
import { Navbar } from '@/containers/landing-page/components/Navbar'
import { TrendingArticles } from '@/containers/landing-page/components/TrendingArticles'

gsap.registerPlugin(ScrollTrigger)

const LandingPageContainer: React.FC = () => {
	const pageRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!pageRef.current) return

		const showAnim = gsap
			.from('.navbar', {
				yPercent: -100,
				paused: true,
				duration: 0.2,
			})
			.progress(1)

		ScrollTrigger.create({
			start: 'top top',
			end: 'max',
			onUpdate: (self) => {
				self.direction === -1 ? showAnim.play() : showAnim.reverse()
			},
		})

		const ctx = gsap.context(() => {
			const panels = gsap.utils.toArray<HTMLElement>('.panel')
			if (!panels.length) return

			panels.forEach((panel) => {
				const panelHeight = panel.scrollHeight
				const viewportHeight = window.innerHeight
				const isTall = panelHeight > viewportHeight

				ScrollTrigger.create({
					trigger: panel,
					start: 'top top',
					end: isTall ? `+=${panelHeight - viewportHeight}` : 'bottom top',
					pin: true,
					pinSpacing: false,
				})

				if (isTall) {
					const contentToMove = panel.querySelector('.panel-inner') || panel

					gsap.to(contentToMove, {
						y: -(panelHeight - viewportHeight),
						ease: 'none',
						scrollTrigger: {
							trigger: panel,
							start: 'top top',
							end: `+=${panelHeight - viewportHeight}`,
							scrub: true,
							pinSpacing: false,
						},
					})
				}
			})
		}, pageRef)

		return () => ctx.revert()
	}, [])

	return (
		<div ref={pageRef} className="min-h-screen bg-background text-typography">
			<Navbar />

			<Hero />
			<HowItWorks />
			<TrendingArticles />
		</div>
	)
}

export default LandingPageContainer
