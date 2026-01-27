import { createFileRoute } from '@tanstack/react-router'

import ArticleDetailPageContainer from '@/containers/article-detail'

export const Route = createFileRoute('/articles/$articleId')({
	component: ArticleDetailPageContainer,
})
