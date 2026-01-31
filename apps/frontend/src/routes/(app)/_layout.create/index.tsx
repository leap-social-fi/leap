import { createFileRoute } from '@tanstack/react-router'

import ArticleCreatePageContainer from '@/containers/article-create'

export const Route = createFileRoute('/(app)/_layout/create/')({
	component: ArticleCreatePageContainer,
})
