import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-2">
			<h1 className="font-bold text-3xl">Welcome to Leap</h1>
		</div>
	)
}
