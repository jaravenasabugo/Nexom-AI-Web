import React from 'react';
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

function App() {
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
      <Footer />
    </div>
  );
}

export default App;