import type { UpdateUserRequest } from '@leap/shared/schema/user'
import type { AuthProps } from '@/middlewares/auth'
import type { users } from '@/schema'
import type { IController } from '@/types/controller'

export type UserMeProps = IController & Pick<AuthProps, 'user'>

export type UserMe = Pick<
	typeof users.$inferSelect,
	| 'id'
	| 'address'
	| 'name'
	| 'username'
	| 'bio'
	| 'avatar'
	| 'lastLoggedIn'
	| 'totalArticles'
	| 'totalReactions'
	| 'totalViewed'
	| 'totalFollowers'
	| 'totalFollowing'
>

export type UpdateUserProps = IController &
	Pick<AuthProps, 'user'> &
	UpdateUserRequest
