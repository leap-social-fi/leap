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
