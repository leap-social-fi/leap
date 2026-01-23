import { z } from 'zod'

interface ResponseOptions {
	message: string
}

export function baseResponse(
	schema: any = null,
	options: ResponseOptions = { message: 'This is a response message' },
) {
	return z.object({
		message: z.string().meta({
			example: options.message,
		}),
		data: schema ? z.union([schema, z.null()]) : z.null(),
	})
}
