const footerLinks = {
	product: [
		{ label: 'Features', href: '#features' },
		{ label: 'Ecosystem', href: '#ecosystem' },
		{ label: 'Tokenomics', href: '#' },
		{ label: 'Roadmap', href: '#' },
	],
	company: [
		{ label: 'About', href: '#' },
		{ label: 'Blog', href: '#' },
		{ label: 'Careers', href: '#' },
		{ label: 'Press Kit', href: '#' },
	],
	resources: [
		{ label: 'Documentation', href: '#' },
		{ label: 'API Reference', href: '#' },
		{ label: 'Help Center', href: '#' },
		{ label: 'Community', href: '#' },
	],
	legal: [
		{ label: 'Privacy Policy', href: '#' },
		{ label: 'Terms of Service', href: '#' },
		{ label: 'Cookie Policy', href: '#' },
	],
}

const socialLinks = [
	{ icon: 'X', href: '#', label: 'Twitter' },
	{ icon: 'discord', href: '#', label: 'Discord' },
	{ icon: 'telegram', href: '#', label: 'Telegram' },
	{ icon: 'code', href: '#', label: 'GitHub' },
]

export const Footer = () => {
	return (
		<footer className="relative overflow-hidden border-white/5 border-t pt-20 pb-10 font-inter">
			{/* Background */}
			<div className="absolute inset-0">
				<div className="orb orb-blue -bottom-48 -left-48 h-96 w-96 opacity-20" />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
					{/* Brand Column */}
					<div className="col-span-2">
						{/* Logo */}
						<div className="mb-6 flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400">
								<span
									className="material-symbols-outlined text-white"
									style={{ fontSize: 24 }}
								>
									token
								</span>
							</div>
							<span className="font-bold text-white text-xl">Leap</span>
						</div>

						<p className="mb-6 max-w-xs text-slate-400 text-sm leading-relaxed">
							The decentralized ecosystem where creators monetize ideas and
							investors discover alpha together.
						</p>

						{/* Social Links */}
						<div className="flex gap-3">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									className="glass flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
									aria-label={social.label}
								>
									<span className="material-symbols-outlined text-lg">
										{social.icon}
									</span>
								</a>
							))}
						</div>
					</div>

					{/* Links Columns */}
					<div>
						<h4 className="mb-4 font-semibold text-sm text-white uppercase tracking-wider">
							Product
						</h4>
						<ul className="space-y-3">
							{footerLinks.product.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="text-slate-400 text-sm transition-colors duration-200 hover:text-white"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="mb-4 font-semibold text-sm text-white uppercase tracking-wider">
							Company
						</h4>
						<ul className="space-y-3">
							{footerLinks.company.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="text-slate-400 text-sm transition-colors duration-200 hover:text-white"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="mb-4 font-semibold text-sm text-white uppercase tracking-wider">
							Resources
						</h4>
						<ul className="space-y-3">
							{footerLinks.resources.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="text-slate-400 text-sm transition-colors duration-200 hover:text-white"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="mb-4 font-semibold text-sm text-white uppercase tracking-wider">
							Legal
						</h4>
						<ul className="space-y-3">
							{footerLinks.legal.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="text-slate-400 text-sm transition-colors duration-200 hover:text-white"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-white/5 border-t pt-8">
					<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
						<p className="text-slate-500 text-sm">
							© 2026 Leap. All rights reserved.
						</p>
						<div className="flex items-center gap-2 text-slate-500 text-sm">
							<span>Built with</span>
							<span className="text-red-500">♥</span>
							<span>for the decentralized future</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
