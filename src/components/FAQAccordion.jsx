import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import './FAQAccordion.css'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <ul className="faq-accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const panelId = `faq-panel-${i}`
        const buttonId = `faq-button-${i}`

        return (
          <li key={item.question} className="faq-item">
            <h3 className="faq-item__heading">
              <button
                id={buttonId}
                className="faq-item__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
              >
                <span>{item.question}</span>
                <motion.span
                  className="faq-item__icon"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                >
                  <Plus size={20} />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="faq-item__panel-wrap"
                >
                  <p className="faq-item__panel">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
