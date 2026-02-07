import type { IMarkTiptap, ITiptapNode } from '../types/tiptap-node'

import z from 'zod'

export const MarkTiptapSchema: z.ZodType<IMarkTiptap> = z.object({
	type: z.string(),
	attrs: z.record(z.string(), z.unknown()).optional(),
})

export const TiptapNode: z.ZodType<ITiptapNode> = z.lazy(() =>
	z.looseObject({
		type: z.string(),
		text: z.string().optional(),
		content: z.array(TiptapNode).optional(),
		attrs: z.record(z.string(), z.unknown()).optional(),
		marks: z.array(MarkTiptapSchema).optional(),
	}),
)
