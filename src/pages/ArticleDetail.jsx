import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import ArticleCard from '../components/ArticleCard'
import { getArticle, articles } from '../data/articles'
import './ArticleDetail.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function ArticleDetail() {
  const { articleId } = useParams()
  const article = getArticle(articleId)

  usePageMeta({
    title: article ? article.title : 'Insight',
    description: article ? article.excerpt : undefined,
    path: `/insights/${articleId}`,
    image: article?.image,
  })

  if (!article) {
    return <Navigate to="/insights" replace />
  }

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3)

  return (
    <>
      <article className="article-detail">
        <header className="article-detail__header">
          <div className="container">
            <Link to="/insights" className="article-detail__back">
              <ArrowLeft size={16} /> All Insights
            </Link>
            <div className="article-detail__meta">
              <span>{article.category}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{formatDate(article.date)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{article.readTime}</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {article.title}
            </motion.h1>
          </div>
        </header>

        <div className="article-detail__image">
          <img src={article.image} alt="" loading="eager" />
        </div>

        <div className="container article-detail__body">
          {article.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="article-detail__related section-pad">
        <div className="container">
          <h2>More insights</h2>
          <div className="article-detail__related-grid">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
