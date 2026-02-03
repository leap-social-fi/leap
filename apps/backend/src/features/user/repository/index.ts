import type { UpdateUserRequest } from '@leap/shared/schema/user'

import { eq } from 'drizzle-orm'

import UserStore from '@/features/user/repository/user'
import { type DBClient, postgres } from '@/libs/postgresql'
import { users } from '@/schema'
import { takeUniqueOrThrow } from '@/utils/drizzle'

export class UserRepository {
	private db: DBClient
	private userStore: UserStore

	constructor() {
		this.db = postgres()
		this.userStore = new UserStore()
	}

	protected selectMe() {
		return {
			id: users.id,
			address: users.address,
			name: users.name,
			username: users.username,
			bio: users.bio,
			avatar: users.avatar,
			lastLoggedIn: users.lastLoggedIn,
			totalArticles: users.totalArticles,
			totalReactions: users.totalReactions,
			totalViewed: users.totalViewed,
			totalFollowers: users.totalFollowers,
			totalFollowing: users.totalFollowing,
		}
	}

	public async getMe(id: bigint) {
		return await this.db
			.select(this.selectMe())
			.from(users)
			.where(eq(users.id, id))
			.then(takeUniqueOrThrow)
	}

	public async updateMe(id: bigint, data: UpdateUserRequest) {
		const user = await this.db
			.update(users)
			.set(data)
			.where(eq(users.id, id))
			.returning(this.selectMe())
			.then(takeUniqueOrThrow)

		if (user) {
			await this.userStore.delete(id)
		}

		return user
	}
}
