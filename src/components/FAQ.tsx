import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const faqItems = [
    {
      id: 1,
      question: "¿Cómo entregamos nuestro servicio?",
      answer: "Nuestro proceso de entrega está diseñado para ser transparente y eficiente, adaptándose a las necesidades específicas de cada cliente. Te guiamos paso a paso desde la consulta inicial hasta la implementación completa.",
      icon: "🚀"
    },
    {
      id: 2,
      question: "¿Cuáles son las etapas del proyecto de automatización?",
      answer: "Un proceso estructurado que garantiza el éxito de tu implementación, desde el entendimiento de requerimientos hasta la puesta en marcha.",
      icon: "📋"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < faqItems.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section id="faq" className="py-20 bg-[#000018] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#4B32FF] to-[#04CFFB]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
            Resolvemos las dudas más comunes sobre nuestros servicios de automatización
          </p>
        </div>

        {/* FAQ Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#4B32FF] to-[#2784FA] flex items-center justify-center text-white transition-all duration-300 ${
              currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:from-[#5027FE] hover:to-[#04CFFB] hover:scale-110'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === faqItems.length - 1}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#4B32FF] to-[#2784FA] flex items-center justify-center text-white transition-all duration-300 ${
              currentSlide === faqItems.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:from-[#5027FE] hover:to-[#04CFFB] hover:scale-110'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-hidden mx-16"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {faqItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4">
                  <div className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#4B32FF]/20 hover:border-[#04CFFB]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#04CFFB]/10 ${index === 1 ? 'scale-95' : ''}`}>
                    <div className="text-center">
                      <div className={`${index === 1 ? 'text-4xl' : 'text-6xl'} mb-6`}>{item.icon}</div>
                      <h3 className={`${index === 1 ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} font-orbitron font-bold text-white mb-6`}>
                        {item.question}
                      </h3>
                      <p className={`${index === 1 ? 'text-base' : 'text-lg'} text-gray-300 mb-8 font-rajdhani leading-relaxed max-w-2xl mx-auto`}>
                        {item.answer}
                      </p>
                      <Link 
                        to={`/preguntas-frecuentes?pregunta=${item.id}`}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold rounded-lg hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Ver respuesta completa
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {faqItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link 
            to="/preguntas-frecuentes"
            className="inline-flex items-center px-8 py-4 border-2 border-[#04CFFB] text-[#04CFFB] font-rajdhani font-bold rounded-lg hover:bg-[#04CFFB] hover:text-[#000018] transition-all duration-300 transform hover:scale-105"
          >
            Ver todas las preguntas frecuentes
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
