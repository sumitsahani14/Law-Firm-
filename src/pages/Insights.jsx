import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/articles'
import './Insights.css'

const PAGE_SIZE = 6

export default function Insights() {
  usePageMeta({
    title: 'Insights',
    description:
      'Editorial insights from Veritas Legal on corporate, technology, contracts, employment, disputes, and intellectual property topics.',
    path: '/insights',
  })

  const categories = useMemo(
    () => ['All', ...new Set(articles.map((a) => a.category))],
    []
  )
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory
      const matchesQuery =
        query.trim() === '' ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  const visible = filtered.slice(0, visibleCount)

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas for what comes next."
        description="Editorial perspective on the legal questions shaping growing businesses."
      />

      <section className="insights-page section-pad">
        <div className="container">
          <div className="insights-page__controls">
            <div className="insights-page__search">
              <Search size={18} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search insights"
                aria-label="Search insights"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setVisibleCount(PAGE_SIZE)
                }}
              />
            </div>

            <div className="insights-page__filters" role="group" aria-label="Filter by category">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`insights-page__filter ${
                    activeCategory === category ? 'insights-page__filter--active' : ''
                  }`}
                  aria-pressed={activeCategory === category}
                  onClick={() => {
                    setActiveCategory(category)
                    setVisibleCount(PAGE_SIZE)
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="insights-page__empty">No articles match your search.</p>
          ) : (
            <div className="insights-page__grid">
              {visible.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {visibleCount < filtered.length && (
            <div className="insights-page__load-more">
              <button onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                Load more articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
