import { motion } from 'framer-motion'
import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import FinalCTASection from '../sections/FinalCTASection'
import './About.css'

const timeline = [
  {
    year: '2016',
    title: 'Founding principle',
    description:
      'Veritas Legal (fictional) is founded on a simple premise: legal counsel should produce clarity, not just coverage.',
  },
  {
    year: '2018',
    title: 'Technology practice established',
    description:
      'A dedicated technology and data practice is formed to serve founders navigating early platform and data questions.',
  },
  {
    year: '2021',
    title: 'Disputes practice expands',
    description:
      'The dispute resolution practice grows to support clients through complex commercial disagreements without default litigation.',
  },
  {
    year: '2024',
    title: 'Advisory model matures',
    description:
      'The firm formalizes its embedded-advisory model, working alongside in-house teams as an extension of leadership.',
  },
]

const expectations = [
  {
    title: 'Direct communication',
    description: 'You\u2019ll hear plainly what we think, including when the answer is difficult.',
  },
  {
    title: 'Commercial framing',
    description: 'Every recommendation is framed around what it means for your business, not just the law.',
  },
  {
    title: 'Responsive counsel',
    description: 'We treat your timelines as our timelines, particularly under deal or dispute pressure.',
  },
]

export default function About() {
  usePageMeta({
    title: 'About',
    description:
      'Learn about the philosophy, approach, and fictional history behind the Veritas Legal concept — a portfolio demonstration by SS Web Studio.',
    path: '/about',
  })

  return (
    <>
      <PageHero
        eyebrow="About Veritas"
        title="Why Veritas exists."
        description="A fictional firm built around a simple idea: legal counsel should make decisions easier, not harder."
      />

      <section className="about-philosophy section-pad">
        <div className="container about-philosophy__grid">
          <SectionHeader eyebrow="Our Philosophy" title="Clarity is the product." />
          <div className="about-philosophy__body">
            <p>
              Most legal advice is technically correct and practically useless — long on caveats,
              short on direction. We built Veritas around the opposite instinct: give clients a
              clear, defensible answer to act on, with the reasoning available if they want it.
            </p>
            <p>
              That means understanding the commercial stakes of a decision before we draft a
              single clause, and being willing to say when a legally sound position is a
              commercially poor one.
            </p>
          </div>
        </div>
      </section>

      <section className="about-approach section-pad">
        <div className="container">
          <SectionHeader eyebrow="Our Approach" title="What clients can expect." />
          <div className="about-approach__grid">
            {expectations.map((item, i) => (
              <motion.div
                key={item.title}
                className="about-approach__item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-timeline section-pad">
        <div className="container">
          <SectionHeader
            eyebrow="Firm History"
            title="A brief, fictional timeline."
            description="Illustrative history created for this demonstration project."
          />
          <ol className="about-timeline__list">
            {timeline.map((item, i) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="about-timeline__year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-principles section-pad">
        <div className="container">
          <SectionHeader eyebrow="Firm Principles" title="What we hold ourselves to." />
          <div className="about-principles__grid">
            <div>
              <h3>Precision</h3>
              <p>We focus on the legal issues that actually affect your business.</p>
            </div>
            <div>
              <h3>Perspective</h3>
              <p>We understand legal decisions in the context of commercial reality.</p>
            </div>
            <div>
              <h3>Partnership</h3>
              <p>We work alongside leadership teams, not somewhere behind them.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
