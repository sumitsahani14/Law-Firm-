import { motion } from 'framer-motion'
import './AttorneyCard.css'

export default function AttorneyCard({ attorney, onSelect }) {
  return (
    <motion.button
      className="attorney-card"
      onClick={() => onSelect(attorney)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      aria-haspopup="dialog"
    >
      <div className="attorney-card__image-wrap">
        <img src={attorney.image} alt="" loading="lazy" />
      </div>
      <div className="attorney-card__body">
        <h3>{attorney.name}</h3>
        <p className="attorney-card__role">{attorney.role}</p>
        <p className="attorney-card__view">View profile</p>
      </div>
    </motion.button>
  )
}
