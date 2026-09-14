import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './ArticleCard.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function ArticleCard({ article }) {
  return (
    <motion.article
      className="article-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/insights/${article.id}`} className="article-card__link">
        <div className="article-card__image-wrap">
          <img src={article.image} alt="" loading="lazy" />
        </div>
        <div className="article-card__meta">
          <span>{article.category}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{formatDate(article.date)}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__excerpt">{article.excerpt}</p>
        <span className="article-card__arrow">
          Read article <ArrowUpRight size={16} />
        </span>
      </Link>
    </motion.article>
  )
}
