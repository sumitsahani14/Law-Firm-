import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import './WhyVeritasSection.css'

const principles = [
  {
    number: '01',
    title: 'Precision',
    description: 'We focus on the legal issues that actually affect your business.',
  },
  {
    number: '02',
    title: 'Perspective',
    description: 'We understand legal decisions in the context of commercial reality.',
  },
  {
    number: '03',
    title: 'Partnership',
    description: 'We work alongside leadership teams, not somewhere behind them.',
  },
]

export default function WhyVeritasSection() {
  return (
    <section className="why-veritas section-pad">
      <div className="container">
        <SectionHeader eyebrow="Why Veritas" title="Principles that shape every matter." />
        <div className="why-veritas__grid">
          {principles.map((p, i) => (
            <motion.div
              className="why-veritas__item"
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="why-veritas__number">{p.number}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
