import { motion } from 'framer-motion'
import './PageHero.css'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className="page-hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
