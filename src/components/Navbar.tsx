import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown-container')) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavClick = (item: any) => {
    if (item.isLink) {
      // Es un enlace
      if (item.href.startsWith('/#')) {
        // Es un enlace a la página principal con hash
        if (location.pathname === '/') {
          // Si estamos en la página principal, hacer scroll
          scrollToSection(item.id);
        } else {
          // Si estamos en otra página, navegar a la página principal
          navigate('/');
          // Esperar a que se cargue la página y luego hacer scroll
          setTimeout(() => {
            scrollToSection(item.id);
          }, 500);
        }
      } else {
        // Es un enlace a otra página
        navigate(item.href);
      }
      setIsOpen(false);
    } else {
      // Es una sección de la página
      if (location.pathname === '/preguntas-frecuentes' || location.pathname === '/nosotros' || location.pathname === '/kpis-por-area') {
        // Si estamos en una página secundaria, navegar a la página principal con scroll
        navigate('/');
        setTimeout(() => {
          scrollToSection(item.id);
        }, 500);
      } else {
        // Si estamos en la página principal, hacer scroll
        scrollToSection(item.id);
      }
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Inicio', id: 'hero', isLink: true, href: '/' },
    { name: 'Nosotros', id: 'nosotros', isLink: true, href: '/nosotros' },
    { name: 'Servicios', id: 'services' },
    { name: 'Casos de Uso', id: 'use-cases' },
    { name: '¿Puedo automatizar mi proceso?', id: 'checklist' },
    { name: 'Contacto', id: 'contact' }
  ];

  const dropdownItems = [
    { name: 'KPIs Generales', id: 'kpis' },
    { name: 'KPIs por Industria', id: 'kpis-por-area', isLink: true, href: '/kpis-por-area' },
    { name: 'Preguntas Frecuentes', id: 'faq', isLink: true, href: '/preguntas-frecuentes' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#000018]/95 backdrop-blur-md shadow-lg' : 'bg-[#000018]/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-3 text-white hover:text-[#04CFFB] transition-colors duration-300"
            >
              <img 
                src="/assets/Logos/Simbolo.png" 
                alt="Nexom AI Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-orbitron font-bold text-xl">Nexom AI</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="text-white hover:text-[#04CFFB] font-rajdhani font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="text-white hover:text-[#04CFFB] font-rajdhani font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] group-hover:w-full transition-all duration-300"></span>
                  </button>
                )
              ))}
              
              {/* Dropdown Otros */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-white hover:text-[#04CFFB] font-rajdhani font-medium transition-colors duration-300 relative group flex items-center"
                >
                  Otros
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#000018]/95 backdrop-blur-md rounded-lg shadow-xl border border-[#4B32FF]/20 py-2 z-50">
                    {dropdownItems.map((item) => (
                      item.isLink ? (
                        <Link
                          key={item.id}
                          to={item.href}
                          className="block px-4 py-2 text-white hover:text-[#04CFFB] hover:bg-[#4B32FF]/20 font-rajdhani font-medium transition-all duration-300"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          key={item.id}
                          onClick={() => {
                            handleNavClick(item);
                            setIsDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-white hover:text-[#04CFFB] hover:bg-[#4B32FF]/20 font-rajdhani font-medium transition-all duration-300"
                        >
                          {item.name}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tablet Menu */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-white hover:text-[#04CFFB] font-rajdhani font-medium transition-colors duration-300 text-sm"
              >
                Inicio
              </Link>
              <Link
                to="/nosotros"
                className="text-white hover:text-[#04CFFB] font-rajdhani font-medium transition-colors duration-300 text-sm"
              >
                Nosotros
              </Link>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#04CFFB] font-rajdhani font-medium transition-colors duration-300 text-sm"
              >
                Servicios
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            {location.pathname === '/preguntas-frecuentes' || location.pathname === '/nosotros' || location.pathname === '/kpis-por-area' ? (
              <button
                onClick={() => {
                  navigate('/#contact');
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="inline-flex items-center px-2 py-1 md:px-2 lg:px-3 xl:px-6 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold rounded-lg hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-lg text-xs md:text-xs lg:text-xs xl:text-sm"
              >
                Solicitar Cotización
              </button>
            ) : (
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-2 py-1 md:px-2 lg:px-3 xl:px-6 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold rounded-lg hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-lg text-xs md:text-xs lg:text-xs xl:text-sm"
              >
                Solicitar Cotización
              </button>
            )}
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
              item.isLink ? (
                <Link
                  key={item.id}
                  to={item.href}
                  className="block w-full text-left px-3 py-2 text-white hover:text-[#04CFFB] hover:bg-[#4B32FF]/20 font-rajdhani font-medium rounded-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-[#04CFFB] hover:bg-[#4B32FF]/20 font-rajdhani font-medium rounded-md transition-all duration-300"
                >
                  {item.name}
                </button>
              )
            ))}
            
            {/* Dropdown Otros en Mobile */}
            <div className="border-t border-[#4B32FF]/20 pt-2 mt-2">
              <div className="px-3 py-2 text-white font-rajdhani font-medium text-sm text-gray-400">
                Otros
              </div>
              {dropdownItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="block w-full text-left px-6 py-2 text-white hover:text-[#04CFFB] hover:bg-[#4B32FF]/20 font-rajdhani font-medium rounded-md transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleNavClick(item);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-6 py-2 text-white hover:text-[#04CFFB] hover:bg-[#4B32FF]/20 font-rajdhani font-medium rounded-md transition-all duration-300"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
            {location.pathname === '/preguntas-frecuentes' || location.pathname === '/nosotros' || location.pathname === '/kpis-por-area' ? (
              <button
                onClick={() => {
                  navigate('/#contact');
                  setIsOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="block w-full text-center px-4 py-3 mt-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold rounded-lg hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 text-sm shadow-lg"
              >
                Solicitar Cotización
              </button>
            ) : (
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-center px-4 py-3 mt-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold rounded-lg hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 text-sm shadow-lg"
              >
                Solicitar Cotización
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;