import Tiptap from '@/components/base/Tiptap'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const ArticleCreatePageContainer = () => {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex justify-between border-b p-4">
				<div className="font-semibold text-xl">Create Article</div>
				<Button>Publish</Button>
			</div>

			<div className="flex flex-col gap-4 px-3">
				<Input
					placeholder="Article Title"
					className="border-none p-0 text-xl!"
				/>
				<Tiptap />
			</div>
		</div>
	)
}

export default ArticleCreatePageContainer
