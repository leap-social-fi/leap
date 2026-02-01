import type { JWTPayload } from 'hono/utils/jwt/types'

export interface AuthJwtPayload extends JWTPayload {
	sub: string
	id?: bigint
	exp: number
	iat: number
	nbf: number
}

export interface AuthMe {
	id: bigint
	address: string
	name: string
	username: string
	avatar: string
}
