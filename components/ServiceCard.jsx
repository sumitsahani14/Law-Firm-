import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import './ServiceCard.css'

/**
 * Practice-area row used on the homepage.
 * Expands inline to show a short detail, with a link through to the full page.
 */
export default function ServiceCard({ area }) {
  const [expanded, setExpanded] = useState(false)
  const panelId = `service-panel-${area.id}`

  return (
    <li className="service-card">
      <button
        className="service-card__header"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((v) => !v)}
      >
        <span className="service-card__number">{area.number}</span>
        <span className="service-card__title">{area.title}</span>
        <span className="service-card__desc">{area.short}</span>
        <motion.span
          className="service-card__arrow"
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight size={22} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="service-card__panel-wrap"
          >
            <div className="service-card__panel">
              <p>{area.description}</p>
              <Link to={`/services/${area.id}`} className="service-card__link">
                <span>View full practice area</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}
