import { IconSearch } from '@tabler/icons-react'

import Input from '@/components/base/Input'

const SearchBar = () => {
	return (
		<div className="flex flex-1 items-center gap-3 rounded-full bg-slate-200/50 px-3.5 py-2 dark:bg-surface">
			<IconSearch className="text-typography-secondary" size={20} />
			<Input
				className="w-full border-none p-0 text-sm outline-none placeholder:text-typography-secondary"
				placeholder="Articles, authors, tokens..."
				type="text"
			/>
		</div>
	)
}

export default SearchBar
