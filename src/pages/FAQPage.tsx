import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Rocket, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import ModelosEntrega from '../components/ModelosEntrega';

const FAQPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'faq' | 'timeline' | 'modelos'>('faq');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const pregunta = searchParams.get('pregunta');
    if (pregunta === '1') {
      setActiveSection('modelos');
    } else if (pregunta === '2') {
      setActiveSection('timeline');
    }
    
    // Scroll al inicio de la página cuando se carga
    window.scrollTo(0, 0);
  }, [searchParams]);

  // Scroll al inicio cuando cambia la sección activa
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const faqItems = [
    {
      id: 1,
      icon: Rocket,
      title: "¿Cómo entregamos nuestro servicio?",
      description: "Nuestro proceso de entrega está diseñado para ser transparente y eficiente, adaptándose a las necesidades específicas de cada cliente. Te guiamos paso a paso desde la consulta inicial hasta la implementación completa.",
      action: () => setActiveSection('modelos')
    },
    {
      id: 2,
      icon: Clock,
      title: "¿Cuáles son las etapas del proyecto de automatización?",
      description: "Un proceso estructurado que garantiza el éxito de tu implementación, desde el entendimiento de requerimientos hasta la puesta en marcha.",
      action: () => setActiveSection('timeline')
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'timeline':
        return (
          <div>
            {/* Botón de retorno */}
            <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-8 px-4">
              <div className="max-w-7xl mx-auto">
                <button
                  onClick={() => setActiveSection('faq')}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4B32FF]/20 to-[#04CFFB]/20 text-[#04CFFB] font-rajdhani font-bold rounded-lg hover:from-[#4B32FF]/40 hover:to-[#04CFFB]/40 transition-all duration-300 border border-[#04CFFB]/30"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a preguntas frecuentes
                </button>
              </div>
            </div>
            <Timeline />
          </div>
        );
      case 'modelos':
        return (
          <div>
            {/* Botón de retorno */}
            <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-8 px-4">
              <div className="max-w-7xl mx-auto">
                <button
                  onClick={() => setActiveSection('faq')}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4B32FF]/20 to-[#04CFFB]/20 text-[#04CFFB] font-rajdhani font-bold rounded-lg hover:from-[#4B32FF]/40 hover:to-[#04CFFB]/40 transition-all duration-300 border border-[#04CFFB]/30"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a preguntas frecuentes
                </button>
              </div>
            </div>
            <ModelosEntrega />
          </div>
        );
      default:
        return (
          <>
            {/* Header */}
            <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                    Preguntas Frecuentes
                  </h1>
                  <p className="text-xl text-gray-300 font-rajdhani max-w-4xl mx-auto leading-relaxed mb-6">
                    Encuentra respuestas detalladas sobre nuestros servicios de automatización
                  </p>
                </div>

                {/* Navegación de retorno */}
                <div className="flex justify-center">
                  <Link 
                    to="/" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4B32FF]/20 to-[#04CFFB]/20 text-[#04CFFB] font-rajdhani font-bold rounded-lg hover:from-[#4B32FF]/40 hover:to-[#04CFFB]/40 transition-all duration-300 border border-[#04CFFB]/30"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Volver a inicio
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="space-y-16">
                {faqItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="group bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-3xl border border-[#4B32FF]/30 overflow-hidden transition-all duration-500 transform hover:scale-[1.01] hover:shadow-2xl hover:border-[#04CFFB]/50"
                  >
                    {/* Header de la tarjeta */}
                    <div className="p-8 text-center border-b border-[#4B32FF]/20">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${index === 0 ? 'from-[#4B32FF] to-[#2784FA]' : 'from-[#04CFFB] to-[#2784FA]'} mb-4 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4B32FF] group-hover:to-[#04CFFB] group-hover:bg-clip-text transition-all duration-300">
                        {item.title}
                      </h2>
                      <p className="text-lg text-gray-300 font-rajdhani leading-relaxed max-w-4xl mx-auto">
                        {item.description}
                      </p>
                    </div>

                    {/* Botón de acción */}
                    <div className="p-8 text-center">
                      <button 
                        onClick={item.action}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold rounded-lg hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Ver respuesta completa
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Final */}
              <div className="text-center mt-16">
                <div className="inline-block p-8 bg-gradient-to-br from-[#4B32FF]/40 to-[#2784FA]/30 rounded-2xl border border-[#04CFFB]/40 backdrop-blur-sm">
                  <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
                    ¿Tienes más preguntas?
                  </h3>
                  <p className="text-lg text-gray-300 font-rajdhani mb-6">
                    Nuestro equipo está listo para resolver cualquier duda específica sobre tu proyecto
                  </p>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#04CFFB] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#2784FA] hover:to-[#4B32FF] transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    Contactar con nosotros
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#000018]">
      <Navbar />
      
      <div className="pt-20">
        {renderContent()}
      </div>

      <Footer />
    </div>
  );
};

export default FAQPage;