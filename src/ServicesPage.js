import { Link, Routes, Route } from 'react-router-dom';

function ServicesPage() {
  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        <li><Link to="web-development">Web Development</Link></li>
        <li><Link to="mobile-development">Mobile Development</Link></li>
        <li><Link to="consulting">Consulting</Link></li>
      </ul>
      <Routes>
        <Route path="web-development" element={<div>Web Development Service</div>} />
        <Route path="mobile-development" element={<div>Mobile Development Service</div>} />
        <Route path="consulting" element={<div>Consulting Service</div>} />
      </Routes>
    </div>
  );
}

export default ServicesPage;