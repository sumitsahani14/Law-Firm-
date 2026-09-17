import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import { stats } from '../data/faqs'
import './TrustSection.css'

export default function TrustSection() {
  return (
    <section className="trust section-pad">
      <div className="container">
        <div className="trust__statement">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Complex problems deserve
            <br />
            clear legal thinking.
          </motion.h2>
          <p className="trust__paragraph">
            We believe legal counsel should reduce complexity, not add to it. Our approach
            combines rigorous legal judgment with genuine commercial fluency — so the advice we
            give is not just correct, but usable by the people who have to act on it.
          </p>
        </div>

        <div className="trust__stats">
          {stats.map((stat) => (
            <div className="trust__stat" key={stat.label}>
              <p className="trust__stat-value">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="trust__stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
