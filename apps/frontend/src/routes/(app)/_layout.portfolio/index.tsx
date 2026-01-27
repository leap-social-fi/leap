import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_layout/portfolio/')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/(app)/_layout/portfolio/"!</div>
}
