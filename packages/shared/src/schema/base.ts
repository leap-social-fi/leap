import type { DiceBearAvatar } from '../types/user'

import { z } from 'zod'

import { IMAGE_EXTENSIONS } from '../constants/base'
import { DICE_BEAR_AVATAR, DICE_BEAR_PREFIX } from '../constants/user'
import { TiptapNode } from './tiptap'

export const snowflakeId = z
	.union([z.string(), z.number()], {
		message: 'Invalid Snowflake ID',
	})
	.transform((val, ctx) => {
		const value = 0n
		const isInvalid = (() => {
			if (val === undefined || val === null) {
				return true
			}

			const strVal = typeof val === 'number' ? val.toString() : val
			return !/^\d+$/.test(strVal) || strVal.length < 18 || strVal.length > 20
		})()

		const strVal = typeof val === 'number' ? val.toString() : val
		if (isInvalid) {
			ctx.addIssue({
				code: 'custom',
				message: 'Invalid Snowflake ID',
			})
			return value
		}

		try {
			return BigInt(strVal)
		} catch {
			ctx.addIssue({
				code: 'custom',
				message: 'Invalid Snowflake ID',
			})
			return value
		}
	})
	.meta({
		example: '1430559779780038656',
	})

export const name = z
	.string()
	.min(3, {
		message: 'Name must be at least 3 characters long',
	})
	.max(64, {
		message: 'Name must be at most 64 characters long',
	})
	.meta({
		example: 'Muhamad Rizal Arfiyan',
	})

export const image = z.url().meta({
	example: 'https://leap.ominotes.com/image.jpg',
})

export const avatar = z
	.string()
	.superRefine((val, ctx) => {
		const isDiceBear = val.startsWith(DICE_BEAR_PREFIX)
		const isImage = IMAGE_EXTENSIONS.some((ext) => val.endsWith(ext))

		if (val.length > 32 || (!isDiceBear && !isImage)) {
			ctx.addIssue({
				code: 'custom',
				message: 'Invalid avatar type',
			})

			return
		}

		if (!isDiceBear) return

		const avatarType = val.substring(DICE_BEAR_PREFIX.length)
		const avatarMap = new Set(DICE_BEAR_AVATAR)

		if (!avatarMap.has(avatarType as DiceBearAvatar)) {
			ctx.addIssue({
				code: 'custom',
				message: 'Invalid dice-bear avatar type',
			})

			return
		}
	})
	.meta({
		example: 'https://leap.ominotes.com/avatar.jpg',
	})

export const address = z
	.string()
	.regex(/^[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/, {
		message: 'Invalid address format',
	})
	.meta({
		example: '0x5B8BdF5cF36De41289a8281cC48Da4A23eBf91FE',
	})

export const dateTime = z.string().meta({
	example: '2025-10-23T08:29:31.000Z',
})

export const username = z
	.string()
	.min(3, {
		message: 'Username must be at least 3 characters long',
	})
	.max(32, {
		message: 'Username must be at most 32 characters long',
	})
	.regex(/^[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/, {
		message: 'Invalid username format',
	})
	.meta({
		example: 'rizalarfiyan',
	})

export const slug = z
	.string()
	.min(3, {
		message: 'Slug must be at least 3 characters long',
	})
	.max(64, {
		message: 'Slug must be at most 64 characters long',
	})
	.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
		message: 'Slug can only contain lowercase letters, numbers, and hyphens',
	})
	.meta({
		example: 'slug-example',
	})

export const bio = z
	.looseObject({
		type: z.literal('doc'),
		content: z.array(TiptapNode),
	})
	.optional()
	.nullable()
	.meta({
		example: 'Hello, I am a rizal',
	})

export const content = z.string().nullable().meta({
	example: 'Hello, I am a rizal',
})
