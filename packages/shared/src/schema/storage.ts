import { Buffer } from 'node:buffer'
import sizeOf from 'image-size'
import { z } from 'zod'

import { UPLOAD_OPTIONS, UPLOAD_TYPE } from '../constants/storage'
import { formatBytes } from '../utils/format'
import { snowflakeId } from './base'

export const uploadRequestSchema = z
	.object({
		type: z.enum(UPLOAD_TYPE),
		file: z.instanceof(File),
	})
	.superRefine(async ({ type, file }, ctx) => {
		const options = UPLOAD_OPTIONS[type]

		if (file.size > options.maxSize) {
			ctx.addIssue({
				code: 'custom',
				message: `File size exceeds maximum limit of ${formatBytes(options.maxSize)}`,
				path: ['file'],
			})
		}

		if (file.size < options.minSize) {
			ctx.addIssue({
				code: 'custom',
				message: `File size is below minimum limit of ${formatBytes(options.minSize)}`,
				path: ['file'],
			})
		}

		if (!options.mimeTypes.includes(file.type)) {
			ctx.addIssue({
				code: 'custom',
				message: `Invalid mime type. Allowed: ${options.mimeTypes.join(', ')}`,
				path: ['file'],
			})
		}

		const ext = file.name.split('.').pop()?.toLowerCase()
		if (!ext || !options.extensions.includes(ext)) {
			ctx.addIssue({
				code: 'custom',
				message: `Invalid extension. Allowed: ${options.extensions.join(', ')}`,
				path: ['file'],
			})
		}

		try {
			const buffer = Buffer.from(await file.arrayBuffer())
			const dimensions = sizeOf(buffer)
			const { width, height } = dimensions

			if (!width || !height) {
				ctx.addIssue({
					code: 'custom',
					message: 'Unable to determine image dimensions',
					path: ['file'],
				})
				return
			}

			if (options.minWidth && width < options.minWidth) {
				ctx.addIssue({
					code: 'custom',
					message: `Image width must be at least ${options.minWidth}px`,
					path: ['file'],
				})
			}

			if (options.minHeight && height < options.minHeight) {
				ctx.addIssue({
					code: 'custom',
					message: `Image height must be at least ${options.minHeight}px`,
					path: ['file'],
				})
			}

			if (options.maxWidth && width > options.maxWidth) {
				ctx.addIssue({
					code: 'custom',
					message: `Image width must not exceed ${options.maxWidth}px`,
					path: ['file'],
				})
			}

			if (options.maxHeight && height > options.maxHeight) {
				ctx.addIssue({
					code: 'custom',
					message: `Image height must not exceed ${options.maxHeight}px`,
					path: ['file'],
				})
			}

			if (options.aspectRatio) {
				const ratio = width / height
				const epsilon = 0.01
				const [wRatio, hRatio] = options.aspectRatio.split(':').map(Number)
				if (Math.abs(ratio - wRatio / hRatio) > epsilon) {
					ctx.addIssue({
						code: 'custom',
						message: `Image must have an aspect ratio of ${options.aspectRatio}`,
						path: ['file'],
					})
				}
			}
		} catch {
			ctx.addIssue({
				code: 'custom',
				message: 'Invalid image file content',
				path: ['file'],
			})
		}
	})

export type UploadRequest = z.infer<typeof uploadRequestSchema>

export const uploadResponseSchema = z.object({
	id: snowflakeId,
	path: z.string().meta({
		example: 'http://localhost:9000/leap/temp/image/1471799829100236800.jpg',
	}),
	type: z.enum(UPLOAD_TYPE),
})

export type UploadResponse = z.infer<typeof uploadResponseSchema>
