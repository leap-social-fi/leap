import { IconHeart } from '@tabler/icons-react'

export const CommentItem = () => {
	return (
		<div className="flex gap-3">
			<img
				alt="User"
				className="h-10 w-10 shrink-0 rounded-full border-2 border-primary/80 object-cover"
				src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsYncJCB0DmP5CJON5XZcoXAlSZNGLiHqpxPpSSOuPbNyAS2LkyeLUYHLEHHzV4L-UaAwpWs3Ckp60CdF1S3rAae_G7l7ok6V17fCIePKCICoUu753ez28zJ_XtqnGTC2D48Z5ZXNWU5jZVDmejWOQsb5wdoJZ5V4Nj0Bgp6o--gXKktMDeVvMUS88n2kHiIsYd9YArVvQJbb5_iFF9LPKP_JDxKiE9JOWVlJpNq4Msf8XXt2PsFhaPfVDkDMDe-vuPcVHc_8Gcjkf"
			/>
			<div className="flex-1 space-y-2">
				<div className="flex items-center gap-2">
					<span className="font-bold text-slate-900 text-sm dark:text-slate-200">
						@alex_crypto
					</span>
					<span className="text-[10px] text-slate-400">• 2h ago</span>
				</div>

				<div className="flex justify-between gap-2">
					<p className="text-md text-slate-600 leading-relaxed dark:text-slate-300">
						The explanation of Z-SNARKs here is the most intuitive I've read so
						far. Great breakdown on the core paradox!
					</p>
					<div className="flex flex-col items-center gap-0.5">
						<IconHeart size={20} />
						<span className="font-medium text-slate-500 text-sm dark:text-slate-200">
							190k
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
