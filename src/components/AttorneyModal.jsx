import Modal from './Modal'
import './AttorneyModal.css'

export default function AttorneyModal({ attorney, isOpen, onClose }) {
  if (!attorney) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={attorney.name}>
      <div className="attorney-modal">
        <img src={attorney.image} alt={`Portrait of ${attorney.name}`} />
        <div className="attorney-modal__body">
          <h3>{attorney.name}</h3>
          <p className="attorney-modal__role">{attorney.role}</p>
          <p className="attorney-modal__bio">{attorney.bio}</p>
          <h4>Focus areas</h4>
          <ul>
            {attorney.focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="attorney-modal__disclosure">
          </p>
        </div>
      </div>
    </Modal>
  )
}
