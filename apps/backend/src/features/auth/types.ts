import type { NewUserRequest, VerifyRequest } from '@leap/shared/schema/auth'
import type { AuthProps } from '@/middlewares/auth'
import type { users } from '@/schema'
import type { IController } from '@/types/controller'

export type NonceProps = IController

export type MeProps = IController & Pick<AuthProps, 'user'>

export type VerifyProps = IController & VerifyRequest

export type NewUserProps = IController &
	NewUserRequest &
	Pick<AuthProps, 'user' | 'jwt'>

export type LogoutProps = IController &
	Partial<Pick<AuthProps, 'jwt' | 'token'>>

export type AuthCache = Pick<
	typeof users.$inferSelect,
	'id' | 'address' | 'name' | 'username' | 'avatar'
>

export type CreateUserProps = NewUserRequest & {
	address: string
}
