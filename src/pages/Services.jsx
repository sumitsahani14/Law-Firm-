import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import FinalCTASection from '../sections/FinalCTASection'
import { practiceAreas } from '../data/practiceAreas'
import './Services.css'

export default function Services() {
  usePageMeta({
    title: 'Practice Areas',
    description:
      'Explore Veritas Legal\u2019s six areas of practice: Corporate & M&A, Technology & Data, Commercial Contracts, Dispute Resolution, Employment & Advisory, and Intellectual Property.',
    path: '/services',
  })

  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Focused practice, built around your business."
        description="Six areas of practice, each built around the specific problems growing companies actually face."
      />

      <section className="services-list section-pad">
        <div className="container">
          <ul className="services-list__grid">
            {practiceAreas.map((area, i) => (
              <motion.li
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/services/${area.id}`} className="services-list__card">
                  <span className="services-list__number">{area.number}</span>
                  <h2>{area.title}</h2>
                  <p>{area.short}</p>
                  <span className="services-list__arrow">
                    Learn more <ArrowUpRight size={16} />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
