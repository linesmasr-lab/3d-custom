import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import { siteInfo } from '../../siteInfo.js'
import './Footer.css'

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/shop', label: 'Shop' },
]

const supportLinks = [
  { to: '/contact', label: 'Contact' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact-for-offer', label: 'Contact for Offer' },
]

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="3D-CUSTOM home">
            <Logo size={30} onDark />
          </Link>
          <p>
            Custom 3D Floorplans, Product Models, and Animated Components for
            Individuals and Companies.
          </p>
          <div>
            <Link to="/contact-for-offer" className="btn btn--primary btn--sm">
              Contact for Offer
            </Link>
          </div>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Pages</h2>
          <ul>
            {pageLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__col--contact">
          <h2 className="footer__heading">Contact</h2>
          <address>
            <span>{siteInfo.location}</span>
            <a href={siteInfo.phoneHref}>{siteInfo.phone}</a>
            <a href={siteInfo.emailHref}>{siteInfo.email}</a>
          </address>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <span>© {year} 3D-CUSTOM</span>
          <span className="footer__keywords">
            BAS graphics · 3D floorplans · Energy management · Product models
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
