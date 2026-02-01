import { DiscordSnowflake } from '@sapphire/snowflake'

export function id(): bigint {
	return DiscordSnowflake.generate()
}

export function idStr(): string {
	return id().toString()
}
