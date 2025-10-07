import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Settings, 
  Zap, 
  Shield, 
  Brain,
  Rocket,
  Lightbulb
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NosotrosPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Scroll al inicio de la página cuando se carga
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const diferenciales = [
    {
      icon: Settings,
      title: "Personalización Total",
      description: "Cada flujo se diseña a medida, adaptado a la realidad y objetivos de tu empresa.",
      color: "from-[#4B32FF] to-[#2784FA]"
    },
    {
      icon: Zap,
      title: "Implementación Ágil",
      description: "Pasamos de la idea al resultado en semanas, no en meses.",
      color: "from-[#04CFFB] to-[#2784FA]"
    },
    {
      icon: Shield,
      title: "Seguridad y Confianza",
      description: "Soluciones estables, trazables y seguras, listas para escalar.",
      color: "from-[#2784FA] to-[#4B32FF]"
    },
    {
      icon: Brain,
      title: "IA Simple y Útil",
      description: "Llevamos la inteligencia artificial al terreno práctico, sin tecnicismos ni fricciones.",
      color: "from-[#4B32FF] to-[#04CFFB]"
    }
  ];

  const valores = [
    {
      icon: Lightbulb,
      title: "Innovación constante",
      description: "Buscamos nuevas tecnologías para resolver desafíos reales.",
      color: "from-[#4B32FF] to-[#2784FA]"
    },
    {
      icon: Zap,
      title: "Eficiencia",
      description: "Hacemos más con menos, optimizando cada minuto de trabajo.",
      color: "from-[#04CFFB] to-[#2784FA]"
    },
    {
      icon: Shield,
      title: "Confiabilidad",
      description: "Soluciones estables, con soporte humano detrás.",
      color: "from-[#2784FA] to-[#4B32FF]"
    },
    {
      icon: Rocket,
      title: "Empoderamiento",
      description: "Liberamos a las personas de lo repetitivo para que se enfoquen en lo estratégico.",
      color: "from-[#4B32FF] to-[#04CFFB]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000018]">
      <Navbar />
      
      <div className="pt-20">
        {/* 1. Introducción breve y potente */}
        <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8">
              En Nexom AI transformamos la manera en que las empresas trabajan.
            </h1>
            <p className="text-xl md:text-2xl text-[#04CFFB] font-rajdhani font-bold mb-8 max-w-4xl mx-auto">
              Automatizamos procesos, integramos sistemas y aplicamos inteligencia artificial para liberar el potencial humano detrás de cada negocio.
            </p>
            
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

        {/* 2. Propósito y visión */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                Nuestro Propósito
              </h2>
              <p className="text-xl text-gray-300 font-rajdhani leading-relaxed mb-8">
                Empoderar a las empresas para que superen las limitaciones operativas, liberando el talento humano a través de la tecnología.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                Nuestra Visión
              </h2>
              <p className="text-xl text-gray-300 font-rajdhani leading-relaxed">
                Convertirnos en el socio estratégico líder en innovación tecnológica en Latinoamérica, creando un futuro donde la tecnología y las personas trabajen en perfecta armonía.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Qué nos diferencia */}
        <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                Qué nos diferencia
              </h2>
              <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
                Nuestros pilares diferenciales que nos hacen únicos en el mercado
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {diferenciales.map((diferencial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-2xl p-6 border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${diferencial.color} mb-4`}>
                    <diferencial.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-rajdhani font-bold text-white mb-3">
                    {diferencial.title}
                  </h3>
                  <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">
                    {diferencial.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Cómo trabajamos */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Cómo trabajamos
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 font-rajdhani leading-relaxed mb-8">
                Combinamos análisis de procesos, integración tecnológica y automatización inteligente para construir soluciones que realmente generan impacto.
              </p>
              <p className="text-xl text-gray-300 font-rajdhani leading-relaxed">
                Desde conectar tus herramientas hasta implementar chatbots expertos o reportes automáticos, Nexom AI se adapta a la forma en que tu negocio opera.
              </p>
            </div>
            
            {/* Proceso visual - Línea de tiempo */}
            <div className="bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-3xl p-8 border border-[#4B32FF]/30">
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-8 text-center">
                Nuestro Proceso
              </h3>
              
              {/* Línea de tiempo horizontal */}
              <div className="relative">
                {/* Línea conectora */}
                <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-[#4B32FF] via-[#04CFFB] via-[#2784FA] to-[#4B32FF]"></div>
                
                {/* Pasos del proceso */}
                <div className="grid grid-cols-4 gap-4 relative z-10">
                  {/* Paso 1 - Diagnóstico */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 shadow-lg border-2 border-white/20">
                      1
                    </div>
                    <h4 className="text-lg font-rajdhani font-bold text-white">Diagnóstico</h4>
                  </div>
                  
                  {/* Paso 2 - Diseño */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#04CFFB] to-[#2784FA] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 shadow-lg border-2 border-white/20">
                      2
                    </div>
                    <h4 className="text-lg font-rajdhani font-bold text-white">Diseño</h4>
                  </div>
                  
                  {/* Paso 3 - Implementación */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#2784FA] to-[#4B32FF] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 shadow-lg border-2 border-white/20">
                      3
                    </div>
                    <h4 className="text-lg font-rajdhani font-bold text-white">Implementación</h4>
                  </div>
                  
                  {/* Paso 4 - Soporte */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 shadow-lg border-2 border-white/20">
                      4
                    </div>
                    <h4 className="text-lg font-rajdhani font-bold text-white">Soporte</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Valores que nos guían */}
        <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                Valores que nos guían
              </h2>
              <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
                Los principios fundamentales que orientan cada decisión y cada proyecto
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-2xl p-6 border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${valor.color} mb-4`}>
                    <valor.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-rajdhani font-bold text-white mb-3">
                    {valor.title}
                  </h3>
                  <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Frase final */}
        <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-[#4B32FF]/20 to-[#04CFFB]/20 rounded-3xl p-12 border border-[#04CFFB]/30 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                No somos solo tecnología: somos el impulso que convierte tus procesos en resultados.
              </h2>
              <p className="text-2xl font-rajdhani font-bold text-[#04CFFB] mb-8">
                Nexom AI – Automatización inteligente. Crecimiento sin límites.
              </p>
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Comenzar mi Transformación
                <Rocket className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NosotrosPage;
