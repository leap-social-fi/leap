import { IconChevronLeft, IconShare } from '@tabler/icons-react'
import { useNavigate } from '@tanstack/react-router'

const ArticleDetailPageContainer = () => {
	const navigate = useNavigate()
	return (
		<div className="min-h-screen bg-background pb-32 text-slate-100">
			<div className="fixed top-0 right-0 left-0 z-50 mx-auto flex h-16 max-w-120 items-center justify-between bg-background/80 px-4 backdrop-blur-xl">
				<div
					className="flex cursor-pointer items-center justify-center rounded-full border border-white/10 bg-surface p-1.5 text-white"
					onClick={() => navigate({ to: '/home' })}
				>
					<IconChevronLeft size={22} />
				</div>
				<div className="flex cursor-pointer items-center justify-center rounded-full border border-white/10 bg-surface p-2 text-white">
					<IconShare size={20} />
				</div>
			</div>

			<div className="pt-16">
				<div className="relative aspect-4/3 w-full overflow-hidden">
					<img
						alt="Zero-Knowledge Proofs Concept"
						className="h-full w-full object-cover"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG-73Za-VDvpAFmRv1JNOz0dPlJBVgrplrXkSUQy1zEzx57sGWC9j5rs-1WnK7SrQzKeEuwcjGtqI3Sh83KmGH4oQg5gF-uGRauDTp7ZjSNh78Srkyebxf-coA1-fZHn7_yCiS9HTDoU50_Ymw1_OGojFt697Ws-uFA5kUzkkjan0R2qv-0jHGFInZDtD0ZENfY9kKP2kKH0uCht5W8LjE3xK5k14Nj60orKqe6mpOvSDnTFDqPtl3zli-te9_XYtM_aWEMoQ7VGcC"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
				</div>
				<div className="relative z-10 -mt-12 px-5">
					<h1 className="mb-6 font-extrabold text-3xl text-white leading-tight">
						Zero-Knowledge Proofs: The End of Digital Surveillance?
					</h1>
					<div className="mb-8 flex items-center justify-between border-white/10 border-y py-4">
						<div className="flex items-center gap-3">
							<div className="relative">
								<img
									alt="Author Avatar"
									className="h-12 w-12 rounded-full border-2 border-primary/20"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsYncJCB0DmP5CJON5XZcoXAlSZNGLiHqpxPpSSOuPbNyAS2LkyeLUYHLEHHzV4L-UaAwpWs3Ckp60CdF1S3rAae_G7l7ok6V17fCIePKCICoUu753ez28zJ_XtqnGTC2D48Z5ZXNWU5jZVDmejWOQsb5wdoJZ5V4Nj0Bgp6o--gXKktMDeVvMUS88n2kHiIsYd9YArVvQJbb5_iFF9LPKP_JDxKiE9JOWVlJpNq4Msf8XXt2PsFhaPfVDkDMDe-vuPcVHc_8Gcjkf"
								/>
							</div>
							<div>
								<span className="font-bold text-white">@vitalik_watcher</span>
								<p className="mt-0.5 text-slate-500 text-xs">6 min read</p>
							</div>
						</div>
					</div>
					<div className="prose prose-invert max-w-none">
						<p className="mb-6 text-lg text-slate-300 leading-relaxed">
							As digital privacy continues to erode in our hyper-connected
							world, a new technological frontier is emerging to reclaim our
							right to anonymity. Zero-Knowledge Proofs (ZKPs) represent more
							than just a cryptographic breakthrough; they are the foundation
							for a new social contract on the web.
						</p>
						<p className="mb-6 text-lg text-slate-300 leading-relaxed">
							Traditional digital systems require us to hand over vast amounts
							of personal data to prove our identity, our wealth, or our
							qualifications. ZKPs flip this script entirely. They allow one
							party to prove to another that a statement is true, without
							revealing any information beyond the validity of the statement
							itself.
						</p>
						<div className="my-8 rounded-3xl border border-white/5 bg-surface p-6">
							<h3 className="mb-3 flex items-center gap-2 font-bold text-lg text-white">
								<span className="material-symbols-rounded text-primary">
									psychology
								</span>
								The Core Paradox
							</h3>
							<p className="text-slate-400 text-sm italic">
								"Imagine proving you have the key to a locked room without
								showing the key, opening the door, or even letting anyone see
								what's inside. That is the magic of Z-SNARKs."
							</p>
						</div>
						<p className="mb-8 text-lg text-slate-300 leading-relaxed">
							In the context of SocialFi, this means being able to participate
							in governed DAOs, trade high-value assets, and interact with
							global communities without ever exposing your real-world identity
							to centralized surveillance engines.
						</p>
					</div>
				</div>
			</div>

			<div className="fixed right-0 bottom-0 left-0 z-50 mx-auto max-w-120 p-4">
				<div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-800/50 p-4 shadow-2xl backdrop-blur-xl">
					<div className="flex flex-col">
						<div className="flex items-center gap-2">
							<span className="font-bold text-lg text-white">2.45 ETH</span>
							<span className="font-bold text-neon-green text-xs">+14.2%</span>
						</div>
						<p className="font-bold text-[10px] text-slate-500 uppercase tracking-widest">
							Asset Value
						</p>
					</div>
					<div className="flex items-center gap-2">
						<div className="flex h-10 w-10 items-center justify-center text-slate-400 transition-colors active:text-red-500">
							<span className="material-symbols-rounded">favorite</span>
						</div>
						<div className="flex h-10 w-10 items-center justify-center text-slate-400 transition-colors active:text-primary">
							<span className="material-symbols-rounded">chat_bubble</span>
						</div>
						<div className="ml-1 flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-sm text-white shadow-lg shadow-primary/20 transition-all active:scale-95">
							<span className="material-symbols-rounded text-sm">
								swap_horiz
							</span>
							Trade
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArticleDetailPageContainer
