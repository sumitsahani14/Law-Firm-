import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'
import './FeaturedCaseStudySection.css'

export default function FeaturedCaseStudySection() {
  const featured = caseStudies[0]

  return (
    <section className="featured-cs section-pad">
      <div className="container">
        <div className="featured-cs__grid">
          <motion.div
            className="featured-cs__visual"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={featured.image}
              alt="Editorial photograph representing the featured technology client matter"
              loading="lazy"
            />
          </motion.div>

          <div className="featured-cs__copy">
            <p className="eyebrow">{featured.label}</p>
            <h2>{featured.title}</h2>

            <div className="featured-cs__stages">
              <div>
                <h3>Challenge</h3>
                <p>{featured.challenge}</p>
              </div>
              <div>
                <h3>Approach</h3>
                <p>{featured.approach}</p>
              </div>
              <div>
                <h3>Outcome</h3>
                <p>{featured.outcome}</p>
              </div>
            </div>

            <div className="featured-cs__metrics">
              {featured.metrics.map((m) => (
                <div key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
            <p className="featured-cs__disclosure">
            </p>

            <Link to={`/case-studies/${featured.id}`} className="featured-cs__link">
              Read the full case study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
