import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './CaseStudyCard.css'

export default function CaseStudyCard({ caseStudy }) {
  return (
    <motion.article
      className="cs-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/case-studies/${caseStudy.id}`} className="cs-card__link">
        <div className="cs-card__image-wrap">
          <img src={caseStudy.image} alt="" loading="lazy" />
        </div>
        <p className="cs-card__practice">{caseStudy.practiceArea}</p>
        <h3 className="cs-card__title">{caseStudy.title}</h3>
        <div className="cs-card__metrics">
          {caseStudy.metrics.slice(0, 2).map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
        <span className="cs-card__arrow">
          Read case study <ArrowUpRight size={16} />
        </span>
      </Link>
    </motion.article>
  )
}
