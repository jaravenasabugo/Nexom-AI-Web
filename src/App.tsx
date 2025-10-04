import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnchorMessages from './components/AnchorMessages';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Checklist from './components/Checklist';
import UseCases from './components/UseCases';
import ModelosEntrega from './components/ModelosEntrega';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Verificar la ruta actual para determinar qué página mostrar
    const path = window.location.pathname;
    
    if (path === '/politica-privacidad') {
      setCurrentPage('privacy-policy');
    } else {
      setCurrentPage('home');
    }
  }, []);

  // Función para manejar la navegación
  const navigateToPage = (page: string) => {
    console.log('Navegando a:', page);
    // Mapear las rutas a los estados internos
    const pageState = page === 'politica-privacidad' ? 'privacy-policy' : page;
    console.log('Estado de página:', pageState);
    setCurrentPage(pageState);
    // Actualizar la URL sin recargar la página
    const newUrl = page === 'home' ? '/' : `/${page}`;
    console.log('Nueva URL:', newUrl);
    window.history.pushState({ page }, '', newUrl);
  };

  // Escuchar cambios en el historial del navegador
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const path = window.location.pathname;
      setCurrentPage(path === '/politica-privacidad' ? 'privacy-policy' : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Renderizar la página de política de privacidad
  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy onNavigateToHome={() => navigateToPage('home')} />;
  }

  // Renderizar la página principal
  return (
    <div className="min-h-screen bg-[#000018]">
      <Navbar />
      <Hero />
      <AnchorMessages />
      <Services />
      <Timeline />
      <Checklist />
      <UseCases />
      <ModelosEntrega />
      <WhyUs />
      <Contact />
      <Footer onPrivacyPolicyClick={() => navigateToPage('politica-privacidad')} />
    </div>
  );
}

export default App;