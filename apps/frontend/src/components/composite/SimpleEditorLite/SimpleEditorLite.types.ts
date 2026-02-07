import type { JSONContent } from '@tiptap/react'

export interface SimpleEditorLiteProps {
	maxCharacter?: number
	label?: string
	value?: string | JSONContent | null
	output?: 'html' | 'json'
	onChange?: (value: string | JSONContent | null) => void
}
