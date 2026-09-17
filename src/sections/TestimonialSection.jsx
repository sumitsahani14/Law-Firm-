import { motion } from 'framer-motion'
import { testimonial } from '../data/faqs'
import './TestimonialSection.css'

export default function TestimonialSection() {
  return (
    <section className="testimonial section-pad">
      <div className="container">
        <motion.blockquote
          className="testimonial__quote"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
          <footer>
            <cite>{testimonial.name}</cite>
            <span>{testimonial.role}</span>
          </footer>
        </motion.blockquote>
        <p className="testimonial__disclosure">
        </p>
      </div>
    </section>
  )
}
