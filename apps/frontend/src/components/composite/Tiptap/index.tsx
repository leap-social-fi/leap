import './Tiptap.styles.scss'

import type React from 'react'
import type { TiptapProps } from '@/components/composite/Tiptap/Tiptap.types'

import Placeholder from '@tiptap/extension-placeholder'
import { TextStyleKit } from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import MenuBar from '@/components/composite/Tiptap/MenuBar'
import { cn } from '@/libs/utils'

const extensions = [
	TextStyleKit,
	StarterKit,
	Placeholder.configure({
		placeholder: 'Write your story...',
	}),
]

const Tiptap: React.FC<TiptapProps> = ({ className }) => {
	const editor = useEditor({
		extensions,
		content: `<div>Hello</div>`,
	})
	return (
		<div className={cn('flex flex-col gap-5', className)}>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} className="tiptap prose lg:prose-xl" />
		</div>
	)
}

export default Tiptap
