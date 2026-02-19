import { IconChartBar } from '@tabler/icons-react'
import { useNavigate } from '@tanstack/react-router'

export const ArticleCard = () => {
	const navigate = useNavigate()
	return (
		<article
			className="flex cursor-pointer flex-col gap-4 rounded-xl border border-border/40 bg-white p-4 dark:bg-surface"
			onClick={() => navigate({ to: '/articles/1' })}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<img
						alt="Author"
						className="h-6 w-6 rounded-full"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsYncJCB0DmP5CJON5XZcoXAlSZNGLiHqpxPpSSOuPbNyAS2LkyeLUYHLEHHzV4L-UaAwpWs3Ckp60CdF1S3rAae_G7l7ok6V17fCIePKCICoUu753ez28zJ_XtqnGTC2D48Z5ZXNWU5jZVDmejWOQsb5wdoJZ5V4Nj0Bgp6o--gXKktMDeVvMUS88n2kHiIsYd9YArVvQJbb5_iFF9LPKP_JDxKiE9JOWVlJpNq4Msf8XXt2PsFhaPfVDkDMDe-vuPcVHc_8Gcjkf"
					/>
					<span className="font-semibold text-typography text-xs">
						@vitalik_watcher
					</span>
					<span className="text-[10px] text-typography-secondary">
						• 6 min read
					</span>
				</div>
			</div>

			<div className="flex gap-5 max-[576px]:flex-col">
				<div>
					<div className="relative aspect-video h-64 w-full overflow-hidden rounded-2xl min-[576px]:h-36 min-[576px]:w-36">
						<img
							alt="3D abstract concept"
							className="h-full w-full object-cover"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG-73Za-VDvpAFmRv1JNOz0dPlJBVgrplrXkSUQy1zEzx57sGWC9j5rs-1WnK7SrQzKeEuwcjGtqI3Sh83KmGH4oQg5gF-uGRauDTp7ZjSNh78Srkyebxf-coA1-fZHn7_yCiS9HTDoU50_Ymw1_OGojFt697Ws-uFA5kUzkkjan0R2qv-0jHGFInZDtD0ZENfY9kKP2kKH0uCht5W8LjE3xK5k14Nj60orKqe6mpOvSDnTFDqPtl3zli-te9_XYtM_aWEMoQ7VGcC"
						/>
						<div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
					</div>
				</div>

				<div className="flex flex-col gap-2 max-[576px]:gap-3">
					<h2 className="font-bold text-typography text-xl leading-tight">
						Zero-Knowledge Proofs: The End of Digital Surveillance?
					</h2>
					<p className="line-clamp-2 text-sm text-typography-secondary">
						As digital privacy continues to erode in our hyper-connected world,
						a new technological frontier is emerging to reclaim our right to
						anonymity. Zero-Knowledge Proofs (ZKPs) represent more than just a
						cryptographic breakthrough they are the foundation for a new social
						contract on the web. Traditional digital systems require us to hand
						over vast amounts of personal data to prove our identity, our
						wealth, or our qualifications. ZKPs flip this script entirely. They
						allow one party to prove to another that a statement is true,
						without revealing any information beyond the validity of the
						statement itself.
					</p>

					<div className="rounded-xl border border-border/35 bg-foreground p-2.5 dark:border-surface dark:bg-slate-800">
						<div className="flex flex-col justify-between">
							<p className="font-bold text-[10px] text-slate-400 uppercase tracking-wide">
								Price Trend
							</p>
							<div className="flex items-baseline gap-1.5">
								<span className="font-bold text-base text-slate-900 dark:text-white">
									2.45 ETH
								</span>
								<span className="font-semibold text-emerald-500 text-xs">
									+14.2%
								</span>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<p className="font-bold text-[10px] text-slate-400 uppercase tracking-wide">
								Liquidity
							</p>
							<div className="ml-4 flex flex-1 items-center gap-3">
								<div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
									<div className="h-full w-2/3 rounded-full bg-primary"></div>
								</div>
								<span className="font-bold text-[11px] text-slate-700 dark:text-slate-300">
									$124k
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-5">
					<div className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-primary dark:text-slate-400">
						<span className="material-symbols-rounded text-[20px]">
							favorite
						</span>
						<span className="font-bold text-sm">1.2k</span>
					</div>
					<div className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-primary dark:text-slate-400">
						<span className="material-symbols-rounded text-[20px]">
							chat_bubble
						</span>
						<span className="font-bold text-sm">84</span>
					</div>
					<div className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-primary dark:text-slate-400">
						<IconChartBar />
						<span className="font-bold text-sm">$84</span>
					</div>
				</div>
				<div className="flex items-center text-slate-500 hover:text-primary dark:text-slate-400">
					<span className="material-symbols-rounded text-[20px]">share</span>
				</div>
			</div>
		</article>
	)
}
