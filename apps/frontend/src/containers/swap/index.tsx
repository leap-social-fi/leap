import { IconChevronDown, IconTransferVertical } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const SwapPageContainer = () => {
	return (
		<div className="bg-background font-display text-white dark:bg-background">
			<div className="relative mx-auto flex min-h-screen w-full flex-col overflow-x-hidden">
				<div className="sticky top-0 z-20 flex items-center justify-center bg-background/80 p-5 backdrop-blur-md dark:bg-background/80">
					<h2 className="flex-1 text-center font-bold text-lg text-slate-700 leading-tight tracking-[-0.015em] dark:text-white">
						Token Swap
					</h2>
				</div>
				<div className="flex-1 px-4 py-6">
					<div className="relative space-y-2 rounded-xl border border-gray-200 p-4 dark:border-white/5">
						<div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-surface/5 p-4 dark:border-white/5 dark:bg-surface">
							<div className="flex items-center justify-between">
								<span className="font-medium text-slate-700 text-sm dark:text-[#9da6b9]">
									From
								</span>
								<span className="text-slate-700 text-sm dark:text-[#9da6b9]">
									Balance: 1.24 ETH
								</span>
							</div>
							<div className="flex items-center justify-between gap-4">
								<div className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-400/10 bg-white px-3 py-2 dark:bg-white/10">
									<div
										className="aspect-square size-6 rounded-full bg-center bg-cover bg-no-repeat"
										data-alt="Ethereum token logo"
										// style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-C43bEBva3yvhfEnHTV-9ProeEh1CP1UJEKdin8orZDjwYPuI-idPbSiuF0qdf5K9K_f1Q1UU2FPhAdNmSujpp7RHTo1XaamHZzgT-elS5uob34OFHd0RAAryatRzg2O3KtzdWWNhns9klf52TI1G5Zyok-GoYIhc1OrZzLTxDfYNBvFDLAuY-pT2rTnxId6vWaBwsh3F5r67UC5rfF7iLpfeBt5_MzNsRI-eJpuKfajAvXB49eWVN5q5So_78ldUXhDgboy2eFoK");'
									></div>
									<span className="font-bold text-slate-700 dark:text-white">
										ETH
									</span>
									<IconChevronDown className="text-gray-400 dark:text-white" />
								</div>
								<Input
									className="w-full border-none bg-transparent p-0 text-right font-bold text-2xl! text-slate-700 focus:ring-0 dark:text-white"
									placeholder="0.00"
									type="text"
									value="0.50"
								/>
							</div>
						</div>

						<div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
							<div className="flex size-10 cursor-pointer items-center justify-center rounded-full border-4 border-background bg-primary text-white dark:border-background">
								<IconTransferVertical />
							</div>
						</div>

						<div className="rounded-xl border border-gray-100 bg-surface/5 p-4 dark:border-white/5 dark:bg-surface">
							<div className="mb-4 flex items-center justify-between">
								<span className="font-medium text-slate-700 text-sm dark:text-[#9da6b9]">
									To
								</span>
								<span className="text-slate-700 text-sm dark:text-[#9da6b9]">
									Balance: 0.00 SFT
								</span>
							</div>
							<div className="flex items-center justify-between gap-4">
								<div className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-400/10 bg-white px-3 py-2 dark:bg-white/10">
									<div
										className="aspect-square size-6 rounded-full bg-center bg-cover bg-no-repeat"
										data-alt="SocialFi token logo"
										// style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWqVE5f_MW_Fljs9DZlyYtt8xKCGfTuDxx0dKyTJoHJC7UY9AItPopLx4a-aHjI16H9QJ4D-UFPsZ64zYDtjunAVmFd2xXLX0IedqVuG2dXm3-5rBoUFMfaZp5nPisEpjMK27Ti1Ys2gnqmF49m5dHCqwY3YccUAbzDB-i-Wyx1YIAxgDgJvENTjKEqF6vZR4ZD6c__DeKz4cPpFzDtsqRjXE-SDyZPSBKY4eJ-T0kdMMbYulo93tU9dMJLqTuxOrfrs_J9eHAhFJi");'
									></div>
									<span className="font-bold text-slate-700 dark:text-white">
										SFT
									</span>
									<IconChevronDown className="text-gray-400 dark:text-white" />
								</div>
								<Input
									className="w-full border-none bg-transparent p-0 text-right font-bold text-2xl! text-slate-700 focus:ring-0 dark:text-white"
									placeholder="0.00"
									// readonly=""
									type="text"
									value="1240.50"
								/>
							</div>
						</div>
					</div>

					<div className="mt-6 rounded-xl border border-gray-200 p-4 dark:border-white/5 dark:bg-surface/40">
						<div className="flex justify-between gap-x-6 py-2">
							<p className="font-normal text-slate-700 text-sm leading-normal dark:text-[#9da6b9]">
								Price Impact
							</p>
							<p className="text-right font-normal text-slate-700 text-sm leading-normal dark:text-white">
								&lt; 0.01%
							</p>
						</div>
						<div className="flex justify-between gap-x-6 py-2">
							<p className="font-normal text-slate-700 text-sm leading-normal dark:text-[#9da6b9]">
								Network Fee
							</p>
							<div className="flex flex-col items-end">
								<p className="text-right font-normal text-slate-700 text-sm leading-normal dark:text-white">
									0.002 ETH
								</p>
								<p className="text-primary text-xs">$4.52</p>
							</div>
						</div>
						<div className="flex justify-between gap-x-6 py-2">
							<p className="font-normal text-slate-700 text-sm leading-normal dark:text-[#9da6b9]">
								Minimum Received
							</p>
							<p className="text-right font-normal text-slate-700 text-sm leading-normal dark:text-white">
								1,238 SFT
							</p>
						</div>
					</div>

					<Button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-6! font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90">
						<span>Swap Tokens</span>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default SwapPageContainer
