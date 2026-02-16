import type { IStorageOptions, IUploadType } from '../types/storage'

export const UPLOAD_TYPE = {
	IMAGE: 'image',
	AVATAR: 'avatar',
} as const

export const UPLOAD_TYPES = Object.values(UPLOAD_TYPE)

export const UPLOAD_OPTIONS: Record<IUploadType, IStorageOptions> = {
	[UPLOAD_TYPE.IMAGE]: {
		maxSize: 3 * 1024 * 1024, // 3MB
		minSize: 15 * 1024, // 15KB
		mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
		extensions: ['jpg', 'jpeg', 'png', 'webp'],
		duration: 'P3D',
		minWidth: 128,
		minHeight: 128,
		maxWidth: 4096,
		maxHeight: 4096,
	},
	[UPLOAD_TYPE.AVATAR]: {
		maxSize: 1.5 * 1024 * 1024, // 1.5MB
		minSize: 15 * 1024, // 15KB
		mimeTypes: ['image/jpeg', 'image/png'],
		extensions: ['jpg', 'jpeg', 'png'],
		duration: 'P3D',
		minWidth: 128,
		minHeight: 128,
		maxWidth: 1024,
		maxHeight: 1024,
		aspectRatio: '1:1',
	},
}
