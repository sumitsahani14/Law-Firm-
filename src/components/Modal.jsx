import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import './Modal.css'

export default function Modal({ isOpen, onClose, title, children }) {
  const closeButtonRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()

      const onKey = (e) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', onKey)
      return () => {
        window.removeEventListener('keydown', onKey)
        document.body.style.overflow = ''
        previouslyFocused.current?.focus?.()
      }
    }
  }, [isOpen, onClose])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="modal__close"
              aria-label="Close dialog"
              onClick={onClose}
            >
              <X size={22} />
            </button>
            <h2 id="modal-title" className="visually-hidden">
              {title}
            </h2>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
