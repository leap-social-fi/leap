import type { UPLOAD_TYPE } from '../constants/storage'

export type IUploadType = (typeof UPLOAD_TYPE)[keyof typeof UPLOAD_TYPE]

export interface IStorageOptions {
	maxSize: number
	minSize: number
	mimeTypes: string[]
	extensions: string[]
	duration: string
	minWidth?: number
	minHeight?: number
	maxWidth?: number
	maxHeight?: number
	aspectRatio?: `${number}:${number}`
}
