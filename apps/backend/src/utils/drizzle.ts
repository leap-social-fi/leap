export const takeUniqueOrThrow = <T extends any[]>(
	values: T,
): T[number] | undefined => {
	if (values.length !== 1) return undefined
	return values?.[0]
}
