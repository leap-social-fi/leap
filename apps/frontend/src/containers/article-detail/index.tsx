import { IconChevronLeft, IconShare } from '@tabler/icons-react'
import { useNavigate } from '@tanstack/react-router'

import CommentsDrawer from '@/containers/article-detail/components/CommentsDrawer'
import { useDisclosure } from '@/hooks/useDisclosure'

const ArticleDetailPageContainer = () => {
	const navigate = useNavigate()
	const { isOpen, onOpen, onClose } = useDisclosure({ open: false })
	return (
		<>
			{/* Comments Drawer */}
			{isOpen && <CommentsDrawer isOpen={isOpen} onClose={onClose} />}

			<div className="min-h-screen bg-background pb-22 text-slate-100">
				<div className="fixed top-0 right-0 left-0 z-50 mx-auto flex h-16 max-w-120 items-center justify-between bg-white/90 px-4 backdrop-blur-xl dark:bg-background/80">
					<div
						className="flex cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white p-1.5 dark:border-white/10 dark:bg-surface"
						onClick={() => navigate({ to: '/home' })}
					>
						<IconChevronLeft
							size={22}
							className="text-gray-500 dark:text-white"
						/>
					</div>
					<div className="flex cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white p-2 text-slate-700 dark:border-white/10 dark:bg-surface dark:text-white">
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
						<h1 className="mb-6 font-extrabold text-3xl text-slate-700 leading-tight dark:text-white">
							Zero-Knowledge Proofs: The End of Digital Surveillance?
						</h1>
						<div className="mb-8 flex items-center justify-between border-black/10 border-y py-4">
							<div className="flex items-center gap-3">
								<div className="relative">
									<img
										alt="Author Avatar"
										className="h-12 w-12 rounded-full border-2 border-primary/80"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsYncJCB0DmP5CJON5XZcoXAlSZNGLiHqpxPpSSOuPbNyAS2LkyeLUYHLEHHzV4L-UaAwpWs3Ckp60CdF1S3rAae_G7l7ok6V17fCIePKCICoUu753ez28zJ_XtqnGTC2D48Z5ZXNWU5jZVDmejWOQsb5wdoJZ5V4Nj0Bgp6o--gXKktMDeVvMUS88n2kHiIsYd9YArVvQJbb5_iFF9LPKP_JDxKiE9JOWVlJpNq4Msf8XXt2PsFhaPfVDkDMDe-vuPcVHc_8Gcjkf"
									/>
								</div>
								<div>
									<span className="font-bold text-slate-700 dark:text-white">
										@vitalik_watcher
									</span>
									<p className="mt-0.5 text-slate-500 text-xs">6 min read</p>
								</div>
							</div>
						</div>
						<div className="prose prose-invert max-w-none">
							<p className="mb-6 text-lg text-slate-700 leading-relaxed dark:text-slate-300">
								As digital privacy continues to erode in our hyper-connected
								world, a new technological frontier is emerging to reclaim our
								right to anonymity. Zero-Knowledge Proofs (ZKPs) represent more
								than just a cryptographic breakthrough they are the foundation
								for a new social contract on the web.
							</p>
							<p className="mb-6 text-lg text-slate-700 leading-relaxed dark:text-slate-300">
								Traditional digital systems require us to hand over vast amounts
								of personal data to prove our identity, our wealth, or our
								qualifications. ZKPs flip this script entirely. They allow one
								party to prove to another that a statement is true, without
								revealing any information beyond the validity of the statement
								itself.
							</p>
							<div className="my-8 rounded-3xl border border-gray-200 bg-gray-100 p-6 dark:border-white/5 dark:bg-surface">
								<h3 className="mb-3 flex items-center gap-2 font-bold text-lg text-slate-700 dark:text-white">
									<span className="material-symbols-rounded text-primary">
										psychology
									</span>
									The Core Paradox
								</h3>
								<p className="text-slate-700 text-sm italic dark:text-slate-400">
									"Imagine proving you have the key to a locked room without
									showing the key, opening the door, or even letting anyone see
									what's inside. That is the magic of Z-SNARKs."
								</p>
							</div>
							<p className="mb-8 text-lg text-slate-700 leading-relaxed dark:text-slate-300">
								In the context of SocialFi, this means being able to participate
								in governed DAOs, trade high-value assets, and interact with
								global communities without ever exposing your real - world
								identity to centralized surveillance engines.
							</p>
						</div>
					</div>
				</div>
				<div className="fixed right-0 bottom-0 left-0 z-50 mx-auto max-w-120 p-4">
					<div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/60 p-4 shadow-2xl backdrop-blur-xl dark:bg-slate-800/50">
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
								<span className="font-bold text-lg text-slate-700 dark:text-white">
									2.45 ETH
								</span>
								<span className="font-bold text-emerald-500 text-xs">
									+14.2%
								</span>
							</div>
							<p className="font-bold text-[10px] text-slate-500 uppercase tracking-widest">
								Asset Value
							</p>
						</div>
						<div className="flex items-center gap-2">
							<div className="flex h-10 w-10 items-center justify-center text-slate-400 transition-colors active:text-red-500">
								<span className="material-symbols-rounded">favorite</span>
							</div>
							<div
								className="flex h-10 w-10 cursor-pointer items-center justify-center text-slate-400 transition-colors hover:text-primary active:text-primary"
								onClick={onOpen}
							>
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
		</>
	)
}

export default ArticleDetailPageContainer
