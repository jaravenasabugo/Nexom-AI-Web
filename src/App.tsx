import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KPIs from './components/KPIs';
import Services from './components/Services';
import Checklist from './components/Checklist';
import UseCases from './components/UseCases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import FAQPage from './pages/FAQPage';
import NosotrosPage from './pages/NosotrosPage';
import KPIsAreaPage from './pages/KPIsAreaPage';

// Componente para la página principal
const HomePage = () => (
  <div className="min-h-screen bg-[#000018]">
    <Navbar />
    <Hero />
    <KPIs />
    <Services />
    <Checklist />
    <UseCases />
    <Contact />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/kpis-por-area" element={<KPIsAreaPage />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="/preguntas-frecuentes" element={<FAQPage />} />
        </Routes>
    </Router>
  );
}

export default App;