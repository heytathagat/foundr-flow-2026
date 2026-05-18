import { useEffect } from 'react'

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

  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => onNav('home')}>
        Foundr<span>Flow</span>
      </div>
      <div className="nav-links">
        {pages.map(p => (
          <button
            key={p.id}
            className={`nav-btn${current === p.id ? ' active' : ''}`}
            onClick={() => onNav(p.id)}
          >
            {p.label}
          </button>
        ))}
        <button className="nav-btn nav-cta" onClick={() => onNav('contact')}>
          Apply Now
        </button>
      </div>
    </nav>
  )
}
