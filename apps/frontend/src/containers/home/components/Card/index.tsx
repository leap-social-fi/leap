import { useNavigate } from '@tanstack/react-router'

export const Card = () => {
	const navigate = useNavigate()
	return (
		<article
			className="cursor-pointer rounded-[24px] border border-slate-100 bg-background p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800/50"
			onClick={() => navigate({ to: '/articles/1' })}
		>
			<div className="mb-4 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<img
						alt="Author"
						className="h-6 w-6 rounded-full"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsYncJCB0DmP5CJON5XZcoXAlSZNGLiHqpxPpSSOuPbNyAS2LkyeLUYHLEHHzV4L-UaAwpWs3Ckp60CdF1S3rAae_G7l7ok6V17fCIePKCICoUu753ez28zJ_XtqnGTC2D48Z5ZXNWU5jZVDmejWOQsb5wdoJZ5V4Nj0Bgp6o--gXKktMDeVvMUS88n2kHiIsYd9YArVvQJbb5_iFF9LPKP_JDxKiE9JOWVlJpNq4Msf8XXt2PsFhaPfVDkDMDe-vuPcVHc_8Gcjkf"
					/>
					<span className="font-semibold text-slate-700 text-xs dark:text-slate-300">
						@vitalik_watcher
					</span>
					<span className="text-[10px] text-slate-400">• 6 min read</span>
				</div>
				<span className="rounded-md bg-emerald-50 px-2 py-1 font-bold text-[10px] text-emerald-600 uppercase tracking-wider dark:bg-emerald-500/10">
					Trending
				</span>
			</div>
			<div className="relative mb-5 aspect-video overflow-hidden rounded-2xl">
				<img
					alt="3D abstract concept"
					className="h-full w-full object-cover"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG-73Za-VDvpAFmRv1JNOz0dPlJBVgrplrXkSUQy1zEzx57sGWC9j5rs-1WnK7SrQzKeEuwcjGtqI3Sh83KmGH4oQg5gF-uGRauDTp7ZjSNh78Srkyebxf-coA1-fZHn7_yCiS9HTDoU50_Ymw1_OGojFt697Ws-uFA5kUzkkjan0R2qv-0jHGFInZDtD0ZENfY9kKP2kKH0uCht5W8LjE3xK5k14Nj60orKqe6mpOvSDnTFDqPtl3zli-te9_XYtM_aWEMoQ7VGcC"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
			</div>
			<h2 className="mb-3 font-bold text-slate-900 text-xl leading-tight dark:text-white">
				Zero-Knowledge Proofs: The End of Digital Surveillance?
			</h2>
			<p className="mb-6 line-clamp-2 text-slate-500 text-sm dark:text-slate-400">
				How ZK-rollups are moving beyond scalability into the realm of radical
				personal privacy for the modern web...
			</p>
			<div className="mb-6 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800/50 dark:bg-slate-900/50">
				<div className="mb-2 flex items-center justify-between">
					<div>
						<p className="font-bold text-[10px] text-slate-400 uppercase tracking-wide">
							Price Trend
						</p>
						<div className="mt-0.5 flex items-baseline gap-1.5">
							<span className="font-bold text-base text-slate-900 dark:text-white">
								2.45 ETH
							</span>
							<span className="font-semibold text-emerald-500 text-xs">
								+14.2%
							</span>
						</div>
					</div>
					<div className="h-8 w-20">
						<svg
							className="h-full w-full fill-none stroke-2 stroke-current text-emerald-500"
							viewBox="0 0 100 40"
						>
							<path
								d="M0 30 Q 15 10 25 25 T 50 15 T 75 30 T 100 10"
								stroke-linecap="round"
							></path>
						</svg>
					</div>
				</div>
				<div className="mt-4 flex items-center justify-between">
					<p className="font-bold text-[10px] text-slate-400 uppercase tracking-wide">
						Liquidity
					</p>
					<div className="ml-6 flex flex-1 items-center gap-3">
						<div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
							<div className="h-full w-2/3 rounded-full bg-primary"></div>
						</div>
						<span className="font-bold text-[11px] text-slate-700 dark:text-slate-300">
							$124k
						</span>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-5">
					<div className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-primary dark:text-slate-400">
						<span className="material-symbols-rounded text-[20px]">
							favorite
						</span>
						<span className="font-bold text-xs">1.2k</span>
					</div>
					<div className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-primary dark:text-slate-400">
						<span className="material-symbols-rounded text-[20px]">
							chat_bubble
						</span>
						<span className="font-bold text-xs">84</span>
					</div>
					<div className="flex items-center text-slate-500 dark:text-slate-400">
						<span className="material-symbols-rounded text-[20px]">share</span>
					</div>
				</div>
				<div className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-sm text-white shadow-lg shadow-primary/25 transition-transform active:scale-95">
					<span className="material-symbols-rounded text-[18px]">
						swap_horiz
					</span>
					Trade
				</div>
			</div>
		</article>
	)
}
