import SectionHeader from '../components/SectionHeader'
import FAQAccordion from '../components/FAQAccordion'
import { faqs } from '../data/faqs'
import './FAQSection.css'

export default function FAQSection() {
  return (
    <section className="faq-section section-pad">
      <div className="container faq-section__inner">
        <SectionHeader eyebrow="FAQ" title="Common questions." />
        <FAQAccordion items={faqs} />
      </div>
    </section>
  )
}
