export function truncate({
	value,
	type = 'start',
	maxLength = 10,
	startLength = 4,
	endLength = 4,
}: {
	value: string
	type?: 'start' | 'middle' | 'end'
	maxLength?: number
	startLength?: number
	endLength?: number
}) {
	if (!value) return ''

	if (value.length <= maxLength) return value

	if (type === 'start') {
		return `${value.substring(0, startLength)}...`
	}

	if (type === 'middle') {
		return `${value.substring(0, startLength)}.....${value.substring(value.length - endLength)}`
	}

	if (type === 'end') {
		return `...${value.substring(value.length - endLength)}`
	}
}

/**
 *
 * @param text
 * @param callback
 */
export function copy(text: string, callback?: () => void) {
	navigator.clipboard.writeText(text).then(() => callback?.())
}

/**
 *
 * @param url
 * @returns
 */
export function normalizeUrl(url: string) {
	if (!url) return url

	const lower = url.toLowerCase().trim()

	if (
		lower.startsWith('http://') ||
		lower.startsWith('https://') ||
		lower.startsWith('mailto:') ||
		lower.startsWith('tel:')
	) {
		return url
	}

	return `https://${url}`
}
