import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import './ContactForm.css'

const MATTER_TYPES = [
  'Corporate',
  'Technology',
  'Contracts',
  'Employment',
  'Dispute',
  'Intellectual Property',
  'Other',
]

const initialValues = {
  fullName: '',
  email: '',
  company: '',
  phone: '',
  matterType: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.company.trim()) errors.company = 'Please enter your company name.'
  if (!values.matterType) errors.matterType = 'Please select a matter type.'
  if (!values.message.trim()) {
    errors.message = 'Please tell us a bit about your matter.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please provide a little more detail (10+ characters).'
  }
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status === 'submitting' || status === 'success') return

    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')

    // Frontend-only demo submission — no real backend is called.
    setTimeout(() => {
      setStatus('success')
    }, 1200)
  }

  if (status === 'success') {
    return (
      <div className="contact-form__success" role="status">
        <CheckCircle2 size={40} strokeWidth={1.5} />
        <h3>Request received</h3>
        <p>
          Thank you, {values.fullName.split(' ')[0] || 'there'}. This is a portfolio demo, so no
          message was actually sent — but in a live version of this site, our team would be in
          touch within one business day.
        </p>
        <button
          type="button"
          className="contact-form__reset"
          onClick={() => {
            setValues(initialValues)
            setErrors({})
            setStatus('idle')
          }}
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <p className="contact-form__demo-notice">
        This is a demo form for a portfolio project. Submitting it will not send a real message.
      </p>

      <div className="contact-form__row">
        <Field
          label="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div className="contact-form__row">
        <Field
          label="Company"
          name="company"
          value={values.company}
          onChange={handleChange}
          error={errors.company}
          required
        />
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="matterType">
          Matter Type <span aria-hidden="true">*</span>
        </label>
        <select
          id="matterType"
          name="matterType"
          value={values.matterType}
          onChange={handleChange}
          aria-invalid={!!errors.matterType}
          aria-describedby={errors.matterType ? 'matterType-error' : undefined}
        >
          <option value="">Select a matter type</option>
          {MATTER_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.matterType && (
          <span className="contact-form__error" id="matterType-error">
            {errors.matterType}
          </span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <span className="contact-form__error" id="message-error">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="contact-form__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 size={17} className="contact-form__spinner" aria-hidden="true" />
            <span>Sending&hellip;</span>
          </>
        ) : (
          <span>Request a Consultation &rarr;</span>
        )}
      </button>
    </form>
  )
}

function Field({ label, name, value, onChange, error, type = 'text', required = false }) {
  return (
    <div className="contact-form__field">
      <label htmlFor={name}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <span className="contact-form__error" id={`${name}-error`}>
          {error}
        </span>
      )}
    </div>
  )
}
