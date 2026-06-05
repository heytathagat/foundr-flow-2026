import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Studio from './pages/Studio.jsx';
import Process from './pages/Process.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import FoundersForge from './pages/FoundersForge.jsx';
import AfricaFounder from './pages/AfricaFounder.jsx';
import Partners from './pages/Partners.jsx';
import TeamTathagatKumar from './pages/TeamTathagatKumar.jsx';
import TeamNihitMehrotra from './pages/TeamNihitMehrotra.jsx';
import TeamNikhilGupta from './pages/TeamNikhilGupta.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/programs/founders-forge" element={<FoundersForge />} />
          <Route path="/programs/africa-founder" element={<AfricaFounder />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/team/tathagat-kumar" element={<TeamTathagatKumar />} />
          <Route path="/team/nihit-mehrotra" element={<TeamNihitMehrotra />} />
          <Route path="/team/nikhil-gupta" element={<TeamNikhilGupta />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
