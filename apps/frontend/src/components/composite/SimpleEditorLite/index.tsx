import './SimpleEditorLite.styles.scss'

import type React from 'react'
import type { SimpleEditorLiteProps } from '@/components/composite/SimpleEditorLite/SimpleEditorLite.types'

import { IconBold, IconItalic, IconLink } from '@tabler/icons-react'
import CharacterCount from '@tiptap/extension-character-count'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor, useEditorState } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import Button from '@/components/base/Button'
import { normalizeUrl } from '@/libs/common'

const SimpleEditorLite: React.FC<SimpleEditorLiteProps> = ({
	maxCharacter,
	label,
	output = 'json',
	value = null,
	onChange,
}) => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Placeholder.configure({
				placeholder: 'Write your bio...',
			}),
			CharacterCount.configure({
				limit: maxCharacter,
			}),
		],
		content: value,
		onUpdate({ editor }) {
			if (!onChange) return
			const text = editor.getText().trim()

			if (editor.isEmpty || text.length === 0) {
				onChange(null)
			} else if (output === 'json') {
				onChange(editor.getJSON())
			} else if (output === 'html') {
				onChange(editor.getHTML())
			}
		},
	})

	const editorState = useEditorState({
		editor,
		selector: (ctx) => {
			return {
				isBold: ctx.editor.isActive('bold') ?? false,
				canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
				isItalic: ctx.editor.isActive('italic') ?? false,
				canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
				isHyperlink: ctx.editor.isActive('link'),
				canHyperlink: !ctx.editor.state.selection.empty,
				charactersCount: ctx.editor.storage.characterCount.characters(),
			}
		},
	})

	const handleToggleLink = () => {
		if (!editor) return

		if (editorState?.isHyperlink) {
			editor.chain().focus().extendMarkRange('link').unsetLink().run()
			return
		}

		if (editor.state.selection.empty) {
			alert('Select some text first!')
			return
		}

		const url = window.prompt('Enter URL')
		if (!url) return

		editor
			.chain()
			.focus()
			.extendMarkRange('link')
			.setLink({ href: normalizeUrl(url) })
			.run()
	}

	const handleOnFocus = () => {
		editor.chain().focus().run()
	}

	return (
		<div className="flex flex-col gap-2">
			{label && (
				<div className="font-medium text-slate-700 dark:text-slate-200">
					{label}
				</div>
			)}

			<div className="rounded-lg border border-gray-300">
				{/* MenuBar */}
				<div className="flex w-full border-gray-200 border-b">
					<Button
						disabled={!editorState.canBold}
						className={editorState.isBold ? 'menu is-active' : 'menu'}
						onClick={() => editor.chain().focus().toggleBold().run()}
					>
						<IconBold size={32} />
					</Button>
					<Button
						disabled={!editorState.canItalic}
						className={editorState.isItalic ? 'menu is-active' : 'menu'}
						onClick={() => editor.chain().focus().toggleItalic().run()}
					>
						<IconItalic size={32} />
					</Button>
					<Button
						disabled={!editorState.canHyperlink}
						className={editorState.isHyperlink ? 'menu is-active' : 'menu'}
						onClick={() => handleToggleLink()}
					>
						<IconLink size={32} />
					</Button>
				</div>

				<div
					className="h-32 overflow-y-auto px-2.5 py-1"
					onClick={handleOnFocus}
				>
					<EditorContent editor={editor} maxLength={20} />
				</div>

				{/* Character Count */}
				<div className="flex items-center justify-end px-2.5 py-2">
					<div className="text-slate-700 dark:text-slate-200">
						{editorState.charactersCount} / {maxCharacter}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SimpleEditorLite
