import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import Button from '../components/Button'
import FinalCTASection from '../sections/FinalCTASection'
import { getPracticeArea, practiceAreas } from '../data/practiceAreas'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const area = getPracticeArea(serviceId)

  usePageMeta({
    title: area ? area.title : 'Practice Area',
    description: area ? area.description : undefined,
    path: `/services/${serviceId}`,
  })

  if (!area) {
    return <Navigate to="/services" replace />
  }

  const currentIndex = practiceAreas.findIndex((p) => p.id === area.id)
  const next = practiceAreas[(currentIndex + 1) % practiceAreas.length]

  return (
    <>
      <section className="service-detail-hero">
        <div className="container">
          <Link to="/services" className="service-detail-hero__back">
            <ArrowLeft size={16} /> All Practice Areas
          </Link>
          <span className="service-detail-hero__number">{area.number}</span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {area.title}
          </motion.h1>
          <p className="service-detail-hero__desc">{area.description}</p>
        </div>
      </section>

      <section className="service-detail-body section-pad">
        <div className="container service-detail-body__grid">
          <div>
            <h2>Services included</h2>
            <ul className="service-detail-body__list">
              {area.services.map((service) => (
                <li key={service}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Typical client problems</h2>
            <ul className="service-detail-body__problems">
              {area.problems.map((problem) => (
                <li key={problem}>&ldquo;{problem}&rdquo;</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container service-detail-body__cta">
          <Button to="/contact">Discuss This Practice Area</Button>
        </div>
      </section>

      <section className="service-detail-next section-pad">
        <div className="container">
          <p className="eyebrow">Next Practice Area</p>
          <Link to={`/services/${next.id}`} className="service-detail-next__link">
            <h2>{next.title}</h2>
          </Link>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
