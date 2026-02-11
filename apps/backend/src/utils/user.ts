import type { IDiceBearAvatar } from '@leap/shared/types/user'

import { DICE_BEAR_PREFIX } from '@leap/shared/constants/user'
import { diceBearUrl } from '@leap/shared/utils/url'

export const getAvatar = (avatar: string, username = 'username'): string => {
	const isDiceBear = avatar.startsWith(DICE_BEAR_PREFIX)
	if (isDiceBear) {
		const style = avatar.substring(DICE_BEAR_PREFIX.length) as IDiceBearAvatar
		return diceBearUrl(style, username)
	}

	return avatar
}
