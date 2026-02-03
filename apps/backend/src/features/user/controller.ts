import type {
	UpdateUserProps,
	UserMe,
	UserMeProps,
} from '@/features/user/types'

import { UserRepository } from '@/features/user/repository'
import { response } from '@/utils/response'
import { getAvatar } from '@/utils/user'

export class UserController {
	private repo: UserRepository

	constructor() {
		this.repo = new UserRepository()
	}

	public async me({ c, user }: UserMeProps) {
		const data = await this.repo.getMe(user.id)
		return response({
			c,
			data: this.getMe(data),
			message: 'User retrieved successfully',
		})
	}

	public async update({ c, user, ...data }: UpdateUserProps) {
		try {
			const updatedUser = await this.repo.updateMe(user.id, data)
			return response({
				c,
				data: this.getMe(updatedUser),
				message: 'User updated successfully',
			})
		} catch {
			return response({
				c,
				message: 'Failed to update user',
			})
		}
	}

	protected getMe(user?: UserMe) {
		if (!user) return null

		return {
			...user,
			avatar: getAvatar(user.avatar, user.username),
		}
	}
}
