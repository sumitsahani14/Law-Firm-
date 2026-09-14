import SectionHeader from '../components/SectionHeader'
import ArticleCard from '../components/ArticleCard'
import Button from '../components/Button'
import { articles } from '../data/articles'
import './InsightsSection.css'

export default function InsightsSection() {
  const featured = articles.slice(0, 3)

  return (
    <section className="insights-section section-pad">
      <div className="container">
        <div className="insights-section__header">
          <SectionHeader eyebrow="Insights" title="Ideas for what comes next." />
          <Button to="/insights" variant="secondary">
            All Insights
          </Button>
        </div>
        <div className="insights-section__grid">
          {featured.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
