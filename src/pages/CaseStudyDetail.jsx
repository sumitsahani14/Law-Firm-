import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import FinalCTASection from '../sections/FinalCTASection'
import { getCaseStudy } from '../data/caseStudies'
import './CaseStudyDetail.css'

export default function CaseStudyDetail() {
  const { caseStudyId } = useParams()
  const caseStudy = getCaseStudy(caseStudyId)

  usePageMeta({
    title: caseStudy ? caseStudy.title : 'Case Study',
    description: caseStudy ? caseStudy.summary : undefined,
    path: `/case-studies/${caseStudyId}`,
    image: caseStudy?.image,
  })

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />
  }

  return (
    <>
      <section className="cs-detail-hero">
        <div className="container">
          <Link to="/case-studies" className="cs-detail-hero__back">
            <ArrowLeft size={16} /> All Case Studies
          </Link>
          <p className="eyebrow">{caseStudy.label}</p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {caseStudy.title}
          </motion.h1>
          <p className="cs-detail-hero__practice">{caseStudy.practiceArea}</p>
        </div>
      </section>

      <motion.div
        className="cs-detail-image"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={caseStudy.image} alt="" loading="eager" />
      </motion.div>

      <section className="cs-detail-body section-pad">
        <div className="container cs-detail-body__grid">
          <div className="cs-detail-body__stage">
            <h2>Challenge</h2>
            <p>{caseStudy.challenge}</p>
          </div>
          <div className="cs-detail-body__stage">
            <h2>Legal Strategy</h2>
            <p>{caseStudy.approach}</p>
          </div>
          <div className="cs-detail-body__stage">
            <h2>Outcome</h2>
            <p>{caseStudy.outcome}</p>
          </div>
        </div>

        <div className="container cs-detail-metrics">
          {caseStudy.metrics.map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        <div className="container">
          <p className="cs-detail-disclosure">
            This case study is fictional and created for demonstration purposes. Figures shown
            are illustrative and do not represent real-world results.
          </p>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
