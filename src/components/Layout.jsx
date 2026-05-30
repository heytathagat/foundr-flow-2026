import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function Layout() {
  const location = useLocation();
  const { pathname, hash } = location;

  // re-run reveal observers per route
  useScrollReveal(pathname);

  // scroll to top on navigation, or to the hash target if present
  useEffect(() => {
    if (hash) {
      // wait a frame for the new page to mount
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
