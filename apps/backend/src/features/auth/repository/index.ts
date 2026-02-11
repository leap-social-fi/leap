import type { CreateUserProps } from '@/features/auth/types'

import { eq, sql } from 'drizzle-orm'

import BlacklistStore from '@/features/auth/repository/blacklist'
import NonceStore from '@/features/auth/repository/nonce'
import UserStore from '@/features/user/repository/user'
import { type DBClient, postgres } from '@/libs/postgresql'
import { users } from '@/schema'
import { id } from '@/utils/app'
import { takeUniqueOrThrow } from '@/utils/drizzle'

export class AuthRepository {
	private db: DBClient

	public nonce: NonceStore
	public blacklist: BlacklistStore
	private user: UserStore

	readonly auth_user_key = 'auth:user'
	readonly auth_jwt_blacklist_key = 'auth:jwt:blacklist'

	constructor() {
		this.db = postgres()
		this.nonce = new NonceStore()
		this.blacklist = new BlacklistStore()
		this.user = new UserStore()
	}

	protected selectMe() {
		return {
			id: users.id,
			address: users.address,
			name: users.name,
			username: users.username,
			avatar: users.avatar,
		}
	}

	protected getUserMe() {
		return this.db.select(this.selectMe()).from(users)
	}

	public async getUserMeByAddress(address: string) {
		return this.getUserMe()
			.where(eq(users.address, address))
			.then(takeUniqueOrThrow)
	}

	public async getUserMeById(id: bigint) {
		const cache = await this.user.get(id)
		if (cache) return cache

		const user = await this.getUserMe()
			.where(eq(users.id, id))
			.then(takeUniqueOrThrow)

		if (!user) return null

		await this.user.set(user)
		return user
	}

	public async checkUsername(username: string) {
		const result = await this.db
			.select({
				count: sql<number>`cast(count(${users.id}) as int)`,
			})
			.from(users)
			.where(eq(users.username, username))
			.then(takeUniqueOrThrow)

		return result?.count === 0
	}

	public async updateLastLoggedIn(id: bigint) {
		return await this.db
			.update(users)
			.set({ lastLoggedIn: sql`CURRENT_TIMESTAMP` })
			.where(eq(users.id, id))
	}

	public async createUser({
		address,
		avatar,
		name,
		username,
	}: CreateUserProps) {
		return await this.db
			.insert(users)
			.values({
				id: id(),
				address,
				avatar,
				name,
				username,
			})
			.returning(this.selectMe())
			.then(takeUniqueOrThrow)
	}
}
