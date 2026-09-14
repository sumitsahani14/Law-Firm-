import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">VERITAS LEGAL</span>
          <p className="footer__tagline">Strategic Counsel. Clear Direction.</p>
        </div>

        <nav className="footer__col" aria-label="Practice areas">
          <h2 className="footer__heading">Practice Areas</h2>
          <ul>
            <li><Link to="/services/corporate">Corporate &amp; M&amp;A</Link></li>
            <li><Link to="/services/technology">Technology &amp; Data</Link></li>
            <li><Link to="/services/contracts">Commercial Contracts</Link></li>
            <li><Link to="/services/disputes">Dispute Resolution</Link></li>
            <li><Link to="/services/employment">Employment &amp; Advisory</Link></li>
            <li><Link to="/services/ip">Intellectual Property</Link></li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Firm">
          <h2 className="footer__heading">Firm</h2>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Contact</h2>
          <ul>
            <li><a href="mailto:hello@veritaslegal.example">hello@veritaslegal.example</a></li>
            <li><a href="tel:+15550142000">+1 (555) 014-2000</a></li>
            <li>400 Meridian Avenue, Suite 2100</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} Veritas Legal. All rights reserved.</p>
        <p className="footer__demo-tag">A portfolio concept by SS Web Studio</p>
      </div>

      <p className="demo-disclosure">
        Veritas Legal is a fictional concept created by SS Web Studio for demonstration
        purposes. Attorney profiles, testimonials, statistics, case studies, and results shown
        are illustrative.
      </p>
    </footer>
  )
}
