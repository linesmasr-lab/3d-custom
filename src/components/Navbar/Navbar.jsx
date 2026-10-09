import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import { navLinks, siteInfo } from '../../siteInfo.js'
import './Navbar.css'

function Navbar() {
  const { pathname } = useLocation()
  // The menu remembers the page it was opened on, so it closes by itself
  // as soon as the visitor goes to another page
  const [menuPath, setMenuPath] = useState(null)
  const menuOpen = menuPath === pathname
  const setMenuOpen = (open) => setMenuPath(open ? pathname : null)

  // While the menu is open: lock page scroll and let Escape close it
  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuPath(null)
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="3D-CUSTOM home">
          <Logo size={32} onDark />
        </Link>

        <nav className="navbar__links" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <Link to="/contact-for-offer" className="btn btn--primary btn--sm navbar__cta">
            Contact for Offer
          </Link>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={menuOpen ? 'mobile-menu mobile-menu--open' : 'mobile-menu'}
        hidden={!menuOpen}
      >
        <nav className="mobile-menu__links" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
              <span className="mobile-menu__dot" aria-hidden="true" />
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <Link to="/contact-for-offer" className="btn btn--primary">
            Contact for Offer
          </Link>
          <p>
            {siteInfo.location}
            <br />
            <a href={siteInfo.emailHref}>{siteInfo.email}</a>
          </p>
        </div>
      </div>
    </header>
  )
}

export default Navbar
