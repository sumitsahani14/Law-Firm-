import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { practiceAreas } from '../data/practiceAreas'
import './PracticeAreasSection.css'

export default function PracticeAreasSection() {
  return (
    <section className="practice-areas section-pad" id="practice-areas">
      <div className="container">
        <SectionHeader
          eyebrow="Practice Areas"
          title="What we do."
          description="Six areas of focused practice, built around the problems growing businesses actually face."
        />
        <ul className="practice-areas__list">
          {practiceAreas.map((area) => (
            <ServiceCard key={area.id} area={area} />
          ))}
        </ul>
      </div>
    </section>
  )
}
