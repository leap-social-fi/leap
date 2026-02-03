import { Features } from '@/containers/landing-page/components/Features'
import { Footer } from '@/containers/landing-page/components/Footer'
import { HeroSection } from '@/containers/landing-page/components/HeroSection'
import { Metrics } from '@/containers/landing-page/components/Metrics'
import { Navbar } from '@/containers/landing-page/components/Navbar'
import { SocialEcosystem } from '@/containers/landing-page/components/SocialEcosystem'

const LandingPageContainer: React.FC = () => {
	return (
		<div className="min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
			{/* Fixed Navbar */}
			<Navbar />

			{/* Main Content */}
			<main>
				<HeroSection />
				<Features />
				<SocialEcosystem />
				<Metrics />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}

export default LandingPageContainer
