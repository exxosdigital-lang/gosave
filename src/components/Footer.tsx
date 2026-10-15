import { Mail, MapPin, Phone } from 'lucide-react'
import companyLogo from '../assets/images/company-logo.jpg'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Products', href: '/#products' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-main">
          <div className="footer-company">
            <a className="footer-brand" href="/#home">
              <img
                className="brand-logo"
                src={companyLogo}
                alt="CV. Senia Mandiri Jaya"
              />
            </a>
            <p>
              Safety &amp; industrial products untuk mendukung lingkungan kerja
              yang lebih aman dan siap operasional.
            </p>
          </div>

          <div className="footer-links">
            <h2 className="footer-heading">Quick Links</h2>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h2 className="footer-heading">Contact</h2>
            <ul>
              <li>
                <Phone size={17} aria-hidden="true" />
                <a href="tel:+6281318920001">0813-1892-0001</a>
              </li>
              <li>
                <Mail size={17} aria-hidden="true" />
                <a href="mailto:seniamandirijaya@gmail.com">
                  seniamandirijaya@gmail.com
                </a>
              </li>
              <li>
                <MapPin size={17} aria-hidden="true" />
                <span>
                  Jl. Alam Asri V No. 19
                  <br />
                  Le Jardin Elysium Lippo Cikarang
                  <br />
                  17550 Bekasi
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CV. Senia Mandiri Jaya. All rights reserved.</p>
          <span>Safety &amp; Industrial Products</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
