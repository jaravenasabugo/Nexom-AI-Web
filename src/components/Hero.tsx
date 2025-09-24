import React from 'react';
import { ChevronDown, Zap } from 'lucide-react';

const Hero = () => {
  // Fondo fijo estilo espacial (gradiente + partículas)

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-16">
      {/* Background fijo: gradiente espacial */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#000018] via-[#1E1CA1] to-[#000018] transition-all duration-1000 ease-in-out"></div>

      {/* Background particles effect */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#4B32FF] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#2784FA] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-[#04CFFB] rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Logo eliminado */}

      <div className="max-w-5xl mx-auto z-20 relative">
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-extrabold bg-gradient-to-r from-white via-white to-[#4B32FF] bg-clip-text text-transparent mb-6">
          Nexom AI
        </h1>

        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-8 leading-tight">
          IA que lleva tu empresa
          <br />
          <span className="bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] bg-clip-text text-transparent">
            al siguiente nivel
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-rajdhani mb-12 max-w-3xl mx-auto leading-relaxed">
          Transformamos procesos complejos en soluciones automatizadas que impulsan el crecimiento de tu negocio.
        </p>

        <a 
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#5027FE] hover:to-[#1359FF] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_40px_rgba(75,50,255,0.3)]"
        >
          Solicitar Cotización
          <Zap className="ml-2 w-5 h-5" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-[#04CFFB]" />
      </div>
    </section>
  );
};

export default Hero;