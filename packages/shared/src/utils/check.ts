export const isValidId = (id: string): boolean => {
	return /^\d{17,19}$/.test(id)
}
