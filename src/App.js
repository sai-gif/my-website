import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./HomePage'));
const DataViewerPage = lazy(() => import('./DataViewerPage'));
const AboutPage = lazy(() => import('./AboutPage'));
const FAQPage = lazy(() => import('./FAQPage'));
const ServicesPage = lazy(() => import('./ServicesPage'));
const ContactPage = lazy(() => import('./ContactPage'));

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/viewer">Data Viewer</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/viewer" element={<DataViewerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/services/*" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;