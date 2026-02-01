import {
	IconArrowBackUp,
	IconArrowForwardUp,
	IconBlockquote,
	IconBold,
	IconCode,
	IconH1,
	IconH2,
	IconH3,
	IconH4,
	IconH5,
	IconH6,
	IconItalic,
	IconList,
	IconListNumbers,
	IconStrikethrough,
} from '@tabler/icons-react'
import { type Editor, useEditorState } from '@tiptap/react'
import './styles.scss'

import Button from '@/components/base/Button'

const MenuBar = ({ editor }: { editor: Editor }) => {
	const editorState = useEditorState({
		editor,
		selector: (ctx) => {
			return {
				isBold: ctx.editor.isActive('bold') ?? false,
				canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
				isItalic: ctx.editor.isActive('italic') ?? false,
				canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
				isStrike: ctx.editor.isActive('strike') ?? false,
				canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
				isHeading1: ctx.editor.isActive('heading', { level: 1 }) ?? false,
				isHeading2: ctx.editor.isActive('heading', { level: 2 }) ?? false,
				isHeading3: ctx.editor.isActive('heading', { level: 3 }) ?? false,
				isHeading4: ctx.editor.isActive('heading', { level: 4 }) ?? false,
				isHeading5: ctx.editor.isActive('heading', { level: 5 }) ?? false,
				isHeading6: ctx.editor.isActive('heading', { level: 6 }) ?? false,
				isBulletList: ctx.editor.isActive('bulletList') ?? false,
				isOrderedList: ctx.editor.isActive('orderedList') ?? false,
				isCodeBlock: ctx.editor.isActive('codeBlock') ?? false,
				isBlockquote: ctx.editor.isActive('blockquote') ?? false,
				canUndo: ctx.editor.can().chain().undo().run() ?? false,
				canRedo: ctx.editor.can().chain().redo().run() ?? false,
			}
		},
	})

	return (
		<div className="flex flex-wrap items-center gap-1.5 border-t border-b py-1">
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
				onClick={() => editor.chain().focus().toggleStrike().run()}
				disabled={!editorState.canStrike}
				className={editorState.isStrike ? 'menu is-active' : 'menu'}
			>
				<IconStrikethrough size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				className={editorState.isHeading1 ? 'menu is-active' : 'menu'}
			>
				<IconH1 size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				className={editorState.isHeading2 ? 'menu is-active' : 'menu'}
			>
				<IconH2 size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				className={editorState.isHeading3 ? 'menu is-active' : 'menu'}
			>
				<IconH3 size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				className={editorState.isHeading4 ? 'menu is-active' : 'menu'}
			>
				<IconH4 size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
				className={editorState.isHeading5 ? 'menu is-active' : 'menu'}
			>
				<IconH5 size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
				className={editorState.isHeading6 ? 'menu is-active' : 'menu'}
			>
				<IconH6 size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={editorState.isBulletList ? 'menu is-active' : 'menu'}
			>
				<IconList size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={editorState.isOrderedList ? 'menu is-active' : 'menu'}
			>
				<IconListNumbers size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				className={editorState.isCodeBlock ? 'menu is-active' : 'menu'}
			>
				<IconCode size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				className={editorState.isBlockquote ? 'menu is-active' : 'menu'}
			>
				<IconBlockquote />
			</Button>
			<Button
				onClick={() => editor.chain().focus().undo().run()}
				disabled={!editorState.canUndo}
				className={editorState.canUndo ? 'menu is-active' : 'menu'}
			>
				<IconArrowBackUp size={32} />
			</Button>
			<Button
				onClick={() => editor.chain().focus().redo().run()}
				disabled={!editorState.canRedo}
				className={editorState.canRedo ? 'menu is-active' : 'menu'}
			>
				<IconArrowForwardUp size={32} />
			</Button>
		</div>
	)
}

export default MenuBar
