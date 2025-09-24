import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Servicios', id: 'services' },
    { name: 'Procedimiento', id: 'timeline' },
    { name: 'Casos de uso', id: 'use-cases' },
    { name: 'Por qué elegirnos', id: 'why-us' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#000018]/95 backdrop-blur-md shadow-lg' : 'bg-[#000018]/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 text-white hover:text-[#04CFFB] transition-colors duration-300"
            >
              <img 
                src="/assets/Logos/Simbolo.png" 
                alt="Nexom AI Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-orbitron font-bold text-xl">Nexom AI</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-[#04CFFB] font-rajdhani font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold rounded-lg hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Solicitar Cotización
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#04CFFB] transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#000018]/95 backdrop-blur-md border-t border-[#4B32FF]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-white hover:text-[#04CFFB] hover:bg-[#4B32FF]/20 font-rajdhani font-medium rounded-md transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-3 mt-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold rounded-lg hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;