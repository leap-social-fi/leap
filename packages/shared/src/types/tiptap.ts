import type { EDITOR_TYPE } from '../constants/tiptap'

export type IEditorType = (typeof EDITOR_TYPE)[keyof typeof EDITOR_TYPE]

export interface IMarkTiptap {
	type: string
	attrs?: Record<string, unknown>
}

export interface ITiptapNode {
	type: string
	content?: ITiptapNode[]
	text?: string
	attrs?: Record<string, unknown>
	marks?: IMarkTiptap[]
}
