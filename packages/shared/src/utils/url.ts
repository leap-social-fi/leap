import type { DiceBearAvatar } from '../types/user'

export const diceBearUrl = (style: DiceBearAvatar, seed: string) => {
	return `https://api.dicebear.com/9.x/${style}/svg?seed=${seed}`
}
