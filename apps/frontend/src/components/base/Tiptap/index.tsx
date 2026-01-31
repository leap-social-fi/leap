import './styles.scss'

import type React from 'react'

import { TextStyleKit } from '@tiptap/extension-text-style'
import { Placeholder } from '@tiptap/extensions'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import MenuBar from '@/components/base/Tiptap/MenuBar'
import { cn } from '@/libs/utils'

const extensions = [
	TextStyleKit,
	StarterKit,
	Placeholder.configure({
		placeholder: 'Write your story...',
	}),
]

interface TiptapProps {
	className?: string
}

const Tiptap: React.FC<TiptapProps> = ({ className }) => {
	const editor = useEditor({
		extensions,
		content: ``,
	})
	return (
		<div className={cn('flex flex-col gap-5', className)}>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} className="tiptap prose lg:prose-xl" />
		</div>
	)
}

export default Tiptap
