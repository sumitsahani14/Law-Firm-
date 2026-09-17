import usePageMeta from '../hooks/usePageMeta'
import Hero from '../sections/Hero'
import TrustSection from '../sections/TrustSection'
import PracticeAreasSection from '../sections/PracticeAreasSection'
import FeaturedCaseStudySection from '../sections/FeaturedCaseStudySection'
import WhyVeritasSection from '../sections/WhyVeritasSection'
import AttorneysSection from '../sections/AttorneysSection'
import InsightsSection from '../sections/InsightsSection'
import TestimonialSection from '../sections/TestimonialSection'
import FAQSection from '../sections/FAQSection'
import FinalCTASection from '../sections/FinalCTASection'

export default function Home() {
  usePageMeta({
    title: 'Strategic Counsel. Clear Direction.',
    description:
      'Veritas Legal is a fictional strategic counsel firm concept for founders and technology companies navigating complex business, technology, and commercial matters.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <TrustSection />
      <PracticeAreasSection />
      <FeaturedCaseStudySection />
      <WhyVeritasSection />
      <AttorneysSection />
      <InsightsSection />
      <TestimonialSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
