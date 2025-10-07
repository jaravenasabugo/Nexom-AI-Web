import React from 'react';
import { ChevronUp, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-20"
    >
      {/* Fondo espacial animado mejorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05051a] via-[#0a0a2e] to-[#000010] overflow-hidden">
        {/* Nebulosas animadas */}
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-[#4B32FF] rounded-full mix-blend-screen filter blur-[140px] opacity-60 animate-[float_14s_ease-in-out_infinite]" />
        <div className="absolute top-1/4 right-0 w-[34rem] h-[34rem] bg-[#04CFFB] rounded-full mix-blend-screen filter blur-[160px] opacity-45 animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem] bg-[#2784FA] rounded-full mix-blend-screen filter blur-[180px] opacity-40 animate-[float_22s_ease-in-out_infinite]" />

        {/* Estrellas parpadeantes */}
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-[twinkle_3s_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.9,
              animationDelay: `${Math.random() * 8}s`,
              transform: `scale(${Math.random() * 1.4 + 0.6})`,
            }}
          />
        ))}

        {/* Meteoritos diagonales */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-0 animate-[shooting_6s_linear_infinite]"
            style={{
              top: `${10 + i * 20}%`,
              left: `${70 + i * 5}%`,
              width: "180px",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #04CFFB, white)",
              borderRadius: "50%",
              transform: "rotate(135deg)",
              animationDelay: `${i * 2.5}s`,
            }}
          />
        ))}

        {/* Efecto aurora boreal */}
        <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-[#04CFFB]/10 via-[#4B32FF]/20 to-transparent blur-[120px] animate-[aurora_12s_ease-in-out_infinite]" />
      </div>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto z-20 relative flex flex-col items-center px-4">
        <img
          src="/assets/Logos/Simbolo.png"
          alt="Nexom Symbol"
          className="mx-auto mb-8 sm:mb-10 w-32 sm:w-40 md:w-52 lg:w-60 animate-zoom-in drop-shadow-[0_0_25px_rgba(75,50,255,0.7)]"
        />

        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8 leading-tight drop-shadow-lg animate-fade-in-up">
          <span className="block sm:hidden text-3xl leading-tight">
            Automatizamos tus{' '}
            <span className="bg-gradient-to-r from-[#04CFFB] to-[#4B32FF] bg-clip-text text-transparent">
              procesos
            </span>
            <br />
            para que llegues al{' '}
            <span className="bg-gradient-to-r from-[#04CFFB] to-[#4B32FF] bg-clip-text text-transparent">
              siguiente nivel
            </span>
          </span>
          <span className="hidden sm:block">
            Automatizamos tus{' '}
            <span className="bg-gradient-to-r from-[#04CFFB] to-[#4B32FF] bg-clip-text text-transparent">
              procesos
            </span>{' '}
            <br />
            para que llegues al{' '}
            <span className="bg-gradient-to-r from-[#04CFFB] to-[#4B32FF] bg-clip-text text-transparent">
              siguiente nivel
            </span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-rajdhani mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
          Transformamos procesos complejos y repetitivos en soluciones automatizadas que impulsan el crecimiento de tu negocio.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-lg sm:text-xl rounded-2xl hover:from-[#5027FE] hover:to-[#1359FF] transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[0_25px_50px_rgba(75,50,255,0.35)] min-h-[56px] min-w-[200px]"
        >
          Solicitar Cotización
          <Zap className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>

      {/* Indicador scroll invertido (flecha hacia arriba) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronUp className="w-8 h-8 text-[#04CFFB]" />
      </div>

      {/* Animaciones personalizadas */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50px) translateX(30px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes shooting {
          0% { transform: translate(0, 0) rotate(135deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(-600px, 600px) rotate(135deg); opacity: 0; }
        }
        @keyframes aurora {
          0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scaleY(1.2); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
