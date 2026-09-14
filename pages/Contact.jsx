import { Mail, Phone, MapPin } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import './Contact.css'

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    description:
      'Get in touch with Veritas Legal (fictional demo firm) to discuss a corporate, technology, contracts, employment, dispute, or intellectual property matter.',
    path: '/contact',
  })

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss what you're building."
        description="Tell us about your matter and we'll follow up to schedule an introductory consultation."
      />

      <section className="contact-page section-pad">
        <div className="container contact-page__grid">
          <div className="contact-page__info">
            <h2>Get in touch</h2>
            <ul>
              <li>
                <Mail size={18} aria-hidden="true" />
                <a href="mailto:hello@veritaslegal.example">hello@veritaslegal.example</a>
              </li>
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href="tel:+15550142000">+1 (555) 014-2000</a>
              </li>
              <li>
                <MapPin size={18} aria-hidden="true" />
                <span>400 Meridian Avenue, Suite 2100</span>
              </li>
            </ul>
            <p className="contact-page__note">
              Veritas Legal is a fictional firm concept created for a design portfolio. This
              contact information is illustrative and does not reach a real office.
            </p>
          </div>

          <div className="contact-page__form">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
