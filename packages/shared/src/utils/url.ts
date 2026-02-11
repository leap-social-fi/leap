import type { IDiceBearAvatar } from '../types/user'

export const diceBearUrl = (style: IDiceBearAvatar, seed: string) => {
	return `https://api.dicebear.com/9.x/${style}/svg?seed=${seed}`
}
