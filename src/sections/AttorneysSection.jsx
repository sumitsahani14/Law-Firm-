import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import AttorneyCard from '../components/AttorneyCard'
import AttorneyModal from '../components/AttorneyModal'
import { attorneys } from '../data/attorneys'
import './AttorneysSection.css'

export default function AttorneysSection() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="attorneys section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Our People"
          title="Counsel who know your business."
          description="A fictional team profile created for this demonstration project."
        />
        <div className="attorneys__grid">
          {attorneys.map((attorney) => (
            <AttorneyCard key={attorney.id} attorney={attorney} onSelect={setSelected} />
          ))}
        </div>
        <p className="attorneys__disclosure">
          Attorney profiles are fictional and created for demonstration purposes only.
        </p>
      </div>

      <AttorneyModal
        attorney={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
