import { milliseconds } from 'date-fns'
import { type Duration, parse } from 'tinyduration'

interface ParseDuration {
	duration: Duration
	seconds: number
}

export const parseDuration = (rawDuration?: string | null): ParseDuration => {
	if (!rawDuration) {
		return {
			duration: {
				years: 0,
				months: 0,
				weeks: 0,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			},
			seconds: 0,
		}
	}

	const duration = parse(rawDuration)
	return {
		duration,
		seconds: milliseconds(duration) / 1000,
	}
}
