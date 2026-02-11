import { IconWriting } from '@tabler/icons-react'

import Each from '@/components/base/Each'

export const HowItWorks = () => {
	const stepList = [
		{
			title: '1. Write',
			description: 'Create high-quality content directly on the blockchain.',
			icon: <IconWriting className="text-primary" size={32} />,
		},
		{
			title: '2. Tokenize',
			description: 'Turn your articles into unique, tradable digital assets.',
			icon: (
				<span className="material-symbols-outlined text-3xl text-primary">
					generating_tokens
				</span>
			),
		},
		{
			title: '3. Pool Liquidity',
			description:
				'Provide liquidity to article pools and earn from trading volume.',
			icon: (
				<span className="material-symbols-outlined text-3xl text-primary">
					water_drop
				</span>
			),
		},
		{
			title: '4. Earn',
			description: 'Receive rewards and royalties as your ideas grow.',
			icon: (
				<span className="material-symbols-outlined text-3xl text-primary">
					payments
				</span>
			),
		},
	]
	return (
		<section className="panel relative flex min-h-screen flex-col items-center justify-center bg-foreground py-16">
			<div className="panel-inner max-w-300 px-6">
				<h4 className="mb-3 text-center font-black text-[10px] text-primary uppercase tracking-[0.3em]">
					Platform Flow
				</h4>
				<h2 className="mb-10 text-center font-bold text-2xl text-typography">
					How It Works
				</h2>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
					<Each
						of={stepList}
						render={(step, index) => (
							<div
								className="flex flex-col items-start justify-center gap-5 rounded-3xl border border-border bg-foreground p-5 shadow-lg dark:border-border/40 dark:bg-secondary/40"
								key={index}
							>
								<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
									{step.icon}
								</div>
								<div>
									<h3 className="mb-1 font-bold text-lg text-typography">
										{step.title}
									</h3>
									<p className="text-sm text-typography leading-relaxed">
										{step.description}
									</p>
								</div>
							</div>
						)}
					/>
				</div>
			</div>
		</section>
	)
}
