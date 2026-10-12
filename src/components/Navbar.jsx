import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ scrollY }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrolled = scrollY > 50

  const navLinks = [
    { href: '#about', label: '关于' },
    { href: '#works', label: '作品' },
    { href: '#strengths', label: '能力' },
    { href: '#contact', label: '联系' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-mark">HYM</span>
          <span className="navbar__logo-text">何一梦</span>
        </a>

        <nav className="navbar__nav">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="navbar__cta">
          <span>联系我</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>

        <button
          className="navbar__menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="菜单"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="navbar__mobile-menu">
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="navbar__mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >{link.label}</a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="navbar__mobile-cta"
                  onClick={() => setMobileMenuOpen(false)}
                >联系我</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
