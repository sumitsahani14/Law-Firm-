import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../components/Button'
import './Hero.css'

const headline = 'Law for the businesses\nshaping what comes next.'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    containerRef.current.style.setProperty('--mx', x.toFixed(3))
    containerRef.current.style.setProperty('--my', y.toFixed(3))
  }

  const lines = headline.split('\n')

  return (
    <section className="hero" ref={containerRef} onMouseMove={handleMouseMove}>
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <motion.p
            className="hero__label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            VERITAS LEGAL
            <span className="hero__label-dot" aria-hidden="true">
              &middot;
            </span>
            TECHNOLOGY &middot; BUSINESS &middot; DISPUTES
          </motion.p>

          <h1 className="hero__headline">
            {lines.map((line, i) => (
              <span className="hero__line-wrap" key={line}>
                <motion.span
                  className="hero__line"
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            Strategic legal counsel for founders, companies, and leaders navigating complex
            business, technology, and commercial challenges.
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Button to="/contact" variant="primary">
              Schedule a Consultation
            </Button>
            <a href="#practice-areas" className="hero__secondary">
              Explore Our Practice Areas <span aria-hidden="true">&darr;</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  transform:
                    'translate(calc(var(--mx, 0) * -10px), calc(var(--my, 0) * -10px))',
                }
          }
          initial={{ opacity: 0, scale: 1.04, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, scale: 1, clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            alt="Interior architectural view of a modern glass office building"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  )
}
