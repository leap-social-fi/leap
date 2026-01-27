import { IconSearch } from '@tabler/icons-react'

import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Card } from './components/Card'

const HomePageContainer = () => {
	return (
		<div className="min-h-screen bg-slate-800/50 text-slate-900 backdrop-blur-xl dark:bg-background dark:text-slate-100">
			<div className="sticky top-0 z-30 flex items-center justify-between bg-white px-5 py-4 dark:bg-background">
				<div className="mr-4 flex flex-1 items-center gap-3 rounded-full bg-slate-200/50 px-4 py-2.5 dark:bg-slate-800/50">
					<IconSearch />
					<Input
						className="w-full border-none p-0 text-sm outline-none placeholder:text-slate-500 focus:ring-0 dark:placeholder:text-slate-400"
						placeholder="Articles, authors, tokens..."
						type="text"
					/>
				</div>
				<div className="relative">
					<div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-primary/20 bg-slate-200 dark:bg-slate-700">
						<img
							alt="User Profile"
							className="h-full w-full object-cover"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrEoYXSCwJ0vXdVAUQROvZkkQ5KNKoUM12X9pSZHm4nJ1qgUdd3egCiZmIogwE_Ctq0gPM8hvqVidbhW5X5Ro5RMxHM8s7KE7BRRL0ebo1x3nxZ6cGXAVxn3InU4GqGGeN6VO7eP_duIn-p6DkIKK-nB740-f_E2jPFGlw1eZOWOLUWVxcv-oh3LmCtEJJJI88PjCZyA95F90hObBQ7tHb_n1AOlzMi_XHHqvSJw1-1JxZ-zBacmlD3xuw0eqy1lIvinhwJNrbLB92"
						/>
					</div>
					<div className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500 dark:border-background-dark"></div>
				</div>
			</div>

			<div className="sticky top-19 z-10 flex gap-8 border-slate-200 border-b bg-white px-5 dark:border-slate-800 dark:bg-background">
				<Tabs defaultValue="overview">
					<TabsList variant="line">
						<TabsTrigger value="overview">Latest</TabsTrigger>
						<TabsTrigger value="analytics">Trending</TabsTrigger>
						<TabsTrigger value="reports">Library</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			<main className="space-y-6 p-4 pb-24">
				<Card />
				<Card />
				<Card />
			</main>
		</div>
	)
}

export default HomePageContainer
