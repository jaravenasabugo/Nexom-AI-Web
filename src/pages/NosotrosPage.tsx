import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Users, 
  Target, 
  Lightbulb, 
  Shield, 
  Zap,
  Award,
  Heart,
  Globe,
  Rocket
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NosotrosPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Scroll al inicio de la página cuando se carga
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const valores = [
    {
      icon: Target,
      title: "Innovación Constante",
      description: "Nos mantenemos a la vanguardia de la tecnología para ofrecer las mejores soluciones de automatización.",
      color: "from-[#4B32FF] to-[#2784FA]"
    },
    {
      icon: Users,
      title: "Enfoque en el Cliente",
      description: "Cada proyecto se adapta específicamente a las necesidades y objetivos únicos de nuestros clientes.",
      color: "from-[#04CFFB] to-[#2784FA]"
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "Implementamos los más altos estándares de calidad y seguridad en cada solución que desarrollamos.",
      color: "from-[#2784FA] to-[#4B32FF]"
    },
    {
      icon: Zap,
      title: "Eficiencia Máxima",
      description: "Nuestro objetivo es optimizar cada proceso para maximizar la productividad y reducir costos.",
      color: "from-[#4B32FF] to-[#04CFFB]"
    }
  ];

  const equipo = [
    {
      icon: Rocket,
      title: "Especialistas en Automatización",
      description: "Expertos certificados en las mejores herramientas de automatización del mercado."
    },
    {
      icon: Lightbulb,
      title: "Consultores Estratégicos",
      description: "Profesionales que entienden los procesos de negocio y diseñan soluciones a medida."
    },
    {
      icon: Globe,
      title: "Desarrolladores de IA",
      description: "Especialistas en inteligencia artificial que integran soluciones inteligentes en cada proyecto."
    },
    {
      icon: Award,
      title: "Soporte Técnico",
      description: "Equipo dedicado a garantizar el funcionamiento óptimo de todas las implementaciones."
    }
  ];

  return (
    <div className="min-h-screen bg-[#000018]">
      <Navbar />
      
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                Nosotros
              </h1>
              <p className="text-xl text-gray-300 font-rajdhani max-w-4xl mx-auto leading-relaxed mb-6">
                Somos un equipo apasionado por la automatización y la innovación tecnológica, 
                dedicados a transformar la forma en que las empresas operan.
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

        {/* Nuestra Historia */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-300 font-rajdhani leading-relaxed mb-6">
                Nexom AI nació de la visión de revolucionar la automatización empresarial. 
                Fundada por un equipo de expertos en tecnología y procesos de negocio, 
                nuestra misión es democratizar el acceso a soluciones de automatización 
                inteligente para empresas de todos los tamaños.
              </p>
              <p className="text-lg text-gray-300 font-rajdhani leading-relaxed">
                Desde nuestros inicios, hemos ayudado a más de 100 empresas a optimizar 
                sus procesos, reducir costos operativos y aumentar significativamente 
                su productividad mediante la implementación de soluciones de automatización 
                personalizadas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-3xl p-8 border border-[#4B32FF]/30">
              <div className="text-center">
                <Heart className="w-16 h-16 text-[#04CFFB] mx-auto mb-4" />
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-4">
                  Nuestra Pasión
                </h3>
                <p className="text-gray-300 font-rajdhani">
                  Creemos que la tecnología debe servir para liberar el potencial humano, 
                  permitiendo que las personas se enfoquen en lo que realmente importa: 
                  la innovación, la creatividad y el crecimiento de sus negocios.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestros Valores */}
        <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                Nuestros Valores
              </h2>
              <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
                Los principios que guían cada decisión y cada proyecto que emprendemos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-2xl p-6 border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
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

        {/* Nuestro Equipo */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
              Profesionales altamente capacitados y apasionados por la tecnología
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipo.map((miembro, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-2xl p-6 border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-[#04CFFB] to-[#2784FA] mb-4">
                  <miembro.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-rajdhani font-bold text-white mb-3">
                  {miembro.title}
                </h3>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">
                  {miembro.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl text-gray-300 font-rajdhani mb-8">
              Descubre cómo podemos transformar tu empresa con nuestras soluciones de automatización
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
              Comenzar Ahora
              <Rocket className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NosotrosPage;
