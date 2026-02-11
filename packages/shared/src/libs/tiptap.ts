import type { Schema } from '@tiptap/pm/model'
import type { IEditorType } from '../types/tiptap'

import { type Extensions, getSchema } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

import { EDITOR_TYPE } from '../constants/tiptap'

export const getEditorExtensions = (type: IEditorType = EDITOR_TYPE.LITE) => {
	const extensions: Extensions = [StarterKit]

	if (type === EDITOR_TYPE.EDITOR) return extensions

	// TODO: add more extensions
	return extensions
}

export const liteSchema = getSchema(getEditorExtensions(EDITOR_TYPE.LITE))
export const editorSchema = getSchema(getEditorExtensions(EDITOR_TYPE.EDITOR))

export const schema: Record<IEditorType, Schema> = {
	[EDITOR_TYPE.LITE]: liteSchema,
	[EDITOR_TYPE.EDITOR]: editorSchema,
}
