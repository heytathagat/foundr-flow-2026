import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV } from '../data/content.js';
import { Arrow } from './icons.jsx';

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // lock scroll while menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`site-head${stuck ? ' is-stuck' : ''}`}>
      <div className="wrap head-inner">
        <Link className="brand" to="/" aria-label="FoundrFlow home">
          <img src="/logo.png" alt="FoundrFlow" />
        </Link>

        <nav className={`nav${open ? ' open' : ''}`} aria-label="Primary">
          <div className="nav-links">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
            ))}
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <span className="dropdown-trigger">Programs</span>
              <div className={`dropdown-menu${programsOpen ? ' open' : ''}`}>
                <Link to="/programs/founders-forge">Founders Forge 2.0</Link>
                <Link to="/programs/africa-founder">Africa Global Founder Program 2026</Link>
                <Link to="/programs/raisex-bootcamp">RaiseX Bootcamp</Link>
              </div>
            </div>
          </div>
          <Link to="/contact" className="btn btn--cyan">Contact<Arrow /></Link>
        </nav>

        <button
          className={`burger${open ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
