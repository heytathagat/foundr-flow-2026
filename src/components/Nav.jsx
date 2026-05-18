import { useEffect, useState } from 'react'
import Logo from './Logo'

const pages = [
  { id: 'home', label: 'Home' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'foundrx', label: 'Foundr X' },
  { id: 'team', label: 'Team' },
  { id: 'partners', label: 'Partners' },
  { id: 'insights', label: 'Insights' },
]

export default function Nav({ current, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 20)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [current])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const activePage = current === 'article' ? 'insights' : current

  const go = (id) => {
    onNav(id)
    setMenuOpen(false)
  }

  return (
    <nav className="nav">
      <Logo height={32} className="nav-logo-mobile" onClick={() => go('home')} />

      <button
        type="button"
        className={`nav-toggle${menuOpen ? ' open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        {pages.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`nav-btn${activePage === p.id ? ' active' : ''}`}
            onClick={() => go(p.id)}
          >
            {p.label}
          </button>
        ))}
        <button
          type="button"
          className={`nav-btn nav-cta${activePage === 'contact' ? ' active' : ''}`}
          onClick={() => go('contact')}
        >
          Contact Us
        </button>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  )
}
