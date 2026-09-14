import { motion } from 'framer-motion'
import Button from '../components/Button'
import './FinalCTASection.css'

export default function FinalCTASection() {
  return (
    <section className="final-cta section-pad">
      <div className="container final-cta__inner">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Good decisions start
          <br />
          with good counsel.
        </motion.h2>
        <p>
          Tell us what you&rsquo;re navigating. We&rsquo;ll help you understand the legal path
          forward.
        </p>
        <div className="final-cta__actions">
          <Button to="/contact" variant="primary">
            Schedule a Consultation
          </Button>
          <Button to="/contact" variant="ghost" icon={false}>
            Contact the Firm
          </Button>
        </div>
      </div>
    </section>
  )
}
