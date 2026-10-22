import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import companyLogo from '../assets/images/company-logo.jpg'

const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'Products', href: '/#products' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="page-container navbar" aria-label="Main navigation">
        <a className="brand-wordmark" href="/#home" onClick={closeMenu}>
          <img
            className="brand-logo"
            src={companyLogo}
            alt="CV. Senia Mandiri Jaya"
          />
          <span className="navbar-brand-copy">
            <span className="brand-name">CV. SENIA MANDIRI JAYA</span>
            <span className="brand-caption">· GOSAVE</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div
          className={`navbar-panel${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          <ul className="navbar-links">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <a
                  className={index === 0 ? 'is-active' : undefined}
                  href={item.href}
                  aria-current={index === 0 ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="button-primary navbar-cta"
            href="/#contact"
            onClick={closeMenu}
          >
            Request Quotation
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
