import type { UploadRequest } from '@leap/shared/schema/storage'
import type { AuthProps } from '@/middlewares/auth'
import type { temporaryStorage } from '@/schema'
import type { IController } from '@/types/controller'

export type UploadProps = IController & Pick<AuthProps, 'user'> & UploadRequest

export type CreateTemporaryStorage = Pick<
	typeof temporaryStorage.$inferSelect,
	'id' | 'ext' | 'type'
> & {
	duration: number
}
