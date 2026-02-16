// Originally copied from: https://github.com/honojs/middleware/blob/main/packages/zod-validator/src/index.ts
// Modified to move error handling to ApiError and using zod validator v4 only

import type {
	Context,
	Env,
	Input,
	MiddlewareHandler,
	TypedResponse,
	ValidationTargets,
} from 'hono'
import type { ResolverReturnType } from 'hono-openapi'
import type { ZodError, ZodType, input, output } from 'zod'

import { validator as baseValidator } from 'hono/validator'
import { resolver, uniqueSymbol } from 'hono-openapi'
import httpStatus from 'http-status'

import { ERROR_MESSAGES } from '@/constants/error'
import { ApiError } from '@/libs/error'
import { formatZodError, getErrorPhrase } from '@/utils/zod'

export type Hook<
	T,
	E extends Env,
	P extends string,
	Target extends keyof ValidationTargets = keyof ValidationTargets,
	O = object,
> = (
	result: (
		| { success: true; data: T }
		| { success: false; error: ZodError; data: T }
	) & {
		target: Target
	},
	c: Context<E, P>,
) =>
	| Response
	| undefined
	| TypedResponse<O>
	| Promise<Response | undefined | TypedResponse<O>>

type HasUndefined<T> = undefined extends T ? true : false

function validator<
	T extends ZodType,
	Target extends keyof ValidationTargets,
	E extends Env,
	P extends string,
	In = input<T>,
	Out = output<T>,
	I extends Input = {
		in: HasUndefined<In> extends true
			? {
					[K in Target]?: In extends ValidationTargets[K]
						? In
						: {
								[K2 in keyof In]?: In[K2] extends ValidationTargets[K][K2]
									? In[K2]
									: ValidationTargets[K][K2]
							}
				}
			: {
					[K in Target]: In extends ValidationTargets[K]
						? In
						: {
								[K2 in keyof In]: In[K2] extends ValidationTargets[K][K2]
									? In[K2]
									: ValidationTargets[K][K2]
							}
				}
		out: { [K in Target]: Out }
	},
	V extends I = I,
>(
	target: Target,
	schema: T,
	options?: ResolverReturnType['options'],
	bypassSchema: boolean = false,
): MiddlewareHandler<E, P, V> {
	const middleware = baseValidator(target, async (value) => {
		let validatorValue = value

		if (
			target === 'header' &&
			'shape' in schema &&
			typeof schema.shape === 'object' &&
			schema.shape !== null
		) {
			const schemaKeys = Object.keys(schema.shape)
			const caseInsensitiveKeyMap = Object.fromEntries(
				schemaKeys.map((key) => [key.toLowerCase(), key]),
			)

			validatorValue = Object.fromEntries(
				Object.entries(value).map(([key, val]) => [
					caseInsensitiveKeyMap[key] || key,
					val,
				]),
			)
		}

		const result = await schema.safeParseAsync(validatorValue)
		if (result.success) {
			return result.data
		}

		const data = ['form', 'json'].includes(target)
			? formatZodError(result.error)
			: null
		const message = data
			? ERROR_MESSAGES.VALIDATION
			: getErrorPhrase(result.error)
		throw new ApiError(httpStatus.BAD_REQUEST, message, data)
	})

	// @ts-expect-error disable linter for this line
	return Object.assign(
		middleware,
		bypassSchema
			? {}
			: {
					[uniqueSymbol]: {
						target,
						...resolver(schema, options),
						options,
					},
				},
	)
}

export default validator
