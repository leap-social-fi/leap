import { type DependencyList, type EffectCallback, useEffect } from 'react'

export const useDebounce = (
	effect: EffectCallback,
	deps: DependencyList,
	delay: number,
): void => {
	useEffect(() => {
		const handler = setTimeout(() => effect(), delay)
		return () => clearTimeout(handler)
	}, [...(deps || []), delay])
}
