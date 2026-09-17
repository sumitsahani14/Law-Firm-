import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import CaseStudyCard from '../components/CaseStudyCard'
import FinalCTASection from '../sections/FinalCTASection'
import { caseStudies } from '../data/caseStudies'
import './CaseStudies.css'

export default function CaseStudies() {
  usePageMeta({
    title: 'Case Studies',
    description:
      'Fictional case studies illustrating how Veritas Legal approaches complex technology, commercial, and dispute matters.',
    path: '/case-studies',
  })

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="How we approach complex matters."
      />

      <section className="case-studies-list section-pad">
        <div className="container">
          <div className="case-studies-list__grid">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
          <p className="case-studies-list__disclosure">
          </p>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
