import { useEffect, useState } from 'react'

export const useToggleDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(
		() => localStorage.getItem('theme') === 'dark',
	)

	const handleToggleDarkMode = () => {
		const next = isDarkMode ? 'light' : 'dark'
		setIsDarkMode(next === 'dark')
		localStorage.setItem('theme', next)
	}

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDarkMode])

	return { isDarkMode, handleToggleDarkMode }
}
