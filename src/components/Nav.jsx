import { useEffect } from 'react'
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
  useEffect(() => {
    const handler = () => {
      document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 20)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const activePage = current === 'article' ? 'insights' : current

  return (
    <nav className="nav">
      <Logo height={36} onClick={() => onNav('home')} />
      <div className="nav-links">
        {pages.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`nav-btn${activePage === p.id ? ' active' : ''}`}
            onClick={() => onNav(p.id)}
          >
            {p.label}
          </button>
        ))}
        <button
          type="button"
          className={`nav-btn nav-cta${activePage === 'contact' ? ' active' : ''}`}
          onClick={() => onNav('contact')}
        >
          Contact Us
        </button>
      </div>
    </nav>
  )
}
