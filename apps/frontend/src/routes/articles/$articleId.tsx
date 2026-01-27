import ArticleDetailPageContainer from '@/containers/article-detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/$articleId')({
	component: ArticleDetailPageContainer,
})
