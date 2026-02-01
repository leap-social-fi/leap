import type React from 'react'

import { IconSend2, IconX } from '@tabler/icons-react'

import Button from '@/components/base/Button'
import Drawer from '@/components/base/Drawer'
import Input from '@/components/base/Input'
import { CommentItem } from '@/containers/article-detail/components/CommentsDrawer/CommentItem'

interface CommentsDrawerProps {
	isOpen: boolean
	onClose: () => void
}

const CommentsDrawer: React.FC<CommentsDrawerProps> = ({ isOpen, onClose }) => {
	return (
		<Drawer open={isOpen} onOpenChange={onClose}>
			<Drawer.Content className="mx-auto min-h-[95dvh] max-w-120 rounded-t-4xl">
				<div className="flex h-12 items-center justify-between rounded-t-2xl border-slate-100 border-b bg-white/80 px-5 dark:border-slate-800 dark:bg-background">
					<div className="flex items-center gap-2">
						<h1 className="font-bold text-lg text-slate-900 dark:text-slate-200">
							Comments
						</h1>
						<span className="font-medium text-slate-400 text-sm dark:text-slate-200">
							(124)
						</span>
					</div>
					<div
						className="flex cursor-pointer items-center justify-center rounded-full p-1 text-slate-600 transition-transform dark:text-slate-200"
						onClick={onClose}
					>
						<IconX />
					</div>
				</div>

				<div className="flex max-h-[calc(100dvh-200px)] flex-col space-y-8 overflow-y-auto p-4">
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
				</div>

				{/* Comment Input */}
				<div className="fixed right-0 bottom-0 left-0 z-50 border-gray-200 border-t bg-white/95 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-background">
					<div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-100 p-2 pl-3 dark:border-slate-700/50 dark:bg-transparent">
						<img
							alt="Your Avatar"
							className="h-8 w-8 rounded-full border border-primary/80"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPQkLx0WyEsBK8-DwHD-W45SCVLk_kD-gtjdT8sfi_yGfDolyFbSRX-s5TVelXr9XX-wfSCPBM4AlD1R0QT_H0GlPhOOPrZvR6qVWILSh3OjknooqxcZQ_ejMULxwTht7VvBGx1d9LPNc49h-pQQz5XaezFgjYUdXtv6C2igft5qcRqY-NYMwhKg5o3_XvfqQexOzHZqLi5aFfr-nrf3lYEnPlFmB7sYylCmuKjmJsnSkgD3teeqTejEJ7Ifz6tUklQhnOuS5sAZbj"
						/>
						<Input
							className="flex-1 border-none bg-transparent text-slate-900 text-sm placeholder-slate-400 dark:text-slate-200"
							placeholder="Write a comment..."
							type="text"
						/>
						<Button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white transition-transform active:scale-95">
							<IconSend2 />
						</Button>
					</div>
				</div>
			</Drawer.Content>
		</Drawer>
	)
}

export default CommentsDrawer
