import { Link } from 'react-router-dom';
import { Arrow } from '../components/icons.jsx';
import { Eyebrow } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function NotFound() {
  useDocumentMeta('Page not found — FoundrFlow', 'The page you were looking for could not be found.');
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div className="wrap">
        <Eyebrow className="eyebrow--center">Error 404</Eyebrow>
        <h1 className="display" style={{ margin: '20px 0 0' }}>This page took a<br />wrong <span className="mark">turn.</span></h1>
        <p className="lead" style={{ margin: '22px auto 30px' }}>The page you were after doesn't exist — but the studio is very much open.</p>
        <Link to="/" className="btn btn--primary">Back to home<Arrow /></Link>
      </div>
    </section>
  );
}
