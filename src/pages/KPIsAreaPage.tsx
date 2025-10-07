import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  Target,
  Settings,
  Headphones,
  BarChart,
  Brain,
  UserCheck
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const KPIsAreaPage: React.FC = () => {
  const [currentAreaSlide, setCurrentAreaSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Scroll al inicio de la página cuando se carga
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // KPIs por área para el carrusel
  const areaKPIs = [
    {
      area: "Marketing Digital",
      icon: Megaphone,
      color: "from-[#4B32FF] to-[#2784FA]",
      kpis: [
        { metric: "Aumento en leads", value: "250%", description: "Generación de prospectos" },
        { metric: "Tiempo de campaña", value: "80% menos", description: "Reducción en tiempo de creación" },
        { metric: "ROI de marketing", value: "340%", description: "Retorno de inversión" }
      ]
    },
    {
      area: "Ventas",
      icon: Target,
      color: "from-[#04CFFB] to-[#2784FA]",
      kpis: [
        { metric: "Tasa de conversión", value: "180%", description: "Mejora en conversión" },
        { metric: "Tiempo de seguimiento", value: "70% menos", description: "Automatización de follow-up" },
        { metric: "Ingresos por vendedor", value: "220%", description: "Aumento en productividad" }
      ]
    },
    {
      area: "Operaciones",
      icon: Settings,
      color: "from-[#2784FA] to-[#4B32FF]",
      kpis: [
        { metric: "Eficiencia operativa", value: "300%", description: "Optimización de procesos" },
        { metric: "Tiempo de procesamiento", value: "85% menos", description: "Reducción en tiempos" },
        { metric: "Errores operativos", value: "95% menos", description: "Precisión mejorada" }
      ]
    },
    {
      area: "Atención al Cliente",
      icon: Headphones,
      color: "from-[#4B32FF] to-[#04CFFB]",
      kpis: [
        { metric: "Tiempo de respuesta", value: "90% menos", description: "Respuestas instantáneas" },
        { metric: "Satisfacción del cliente", value: "85%", description: "Nivel de satisfacción" },
        { metric: "Tickets resueltos", value: "200% más", description: "Capacidad de resolución" }
      ]
    },
    {
      area: "Business Intelligence",
      icon: BarChart,
      color: "from-[#04CFFB] to-[#2784FA]",
      kpis: [
        { metric: "Tiempo de reportes", value: "95% menos", description: "Generación automática" },
        { metric: "Precisión de datos", value: "99.5%", description: "Exactitud en análisis" },
        { metric: "Insights generados", value: "400% más", description: "Inteligencia de negocio" }
      ]
    },
    {
      area: "Recursos Humanos",
      icon: UserCheck,
      color: "from-[#2784FA] to-[#4B32FF]",
      kpis: [
        { metric: "Tiempo de reclutamiento", value: "60% menos", description: "Proceso optimizado" },
        { metric: "Candidatos evaluados", value: "300% más", description: "Capacidad de screening" },
        { metric: "Onboarding", value: "80% más rápido", description: "Incorporación eficiente" }
      ]
    },
    {
      area: "Inteligencia Artificial",
      icon: Brain,
      color: "from-[#4B32FF] to-[#04CFFB]",
      kpis: [
        { metric: "Procesamiento de datos", value: "500% más", description: "Velocidad de análisis" },
        { metric: "Precisión de predicciones", value: "92%", description: "Exactitud en IA" },
        { metric: "Tareas automatizadas", value: "95%", description: "Automatización completa" }
      ]
    }
  ];

  const nextAreaSlide = () => {
    setCurrentAreaSlide((prev) => (prev + 1) % areaKPIs.length);
  };

  const prevAreaSlide = () => {
    setCurrentAreaSlide((prev) => (prev - 1 + areaKPIs.length) % areaKPIs.length);
  };

  const goToAreaSlide = (index: number) => {
    setCurrentAreaSlide(index);
  };

  const handleBackToKPIs = () => {
    navigate('/');
    // Esperar un poco y luego hacer scroll a la sección de KPIs
    setTimeout(() => {
      const element = document.getElementById('kpis');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleGoToContact = () => {
    navigate('/');
    // Esperar un poco y luego hacer scroll a la sección de contacto
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#000018]">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                KPIs por Área de Negocio
              </h1>
              <p className="text-xl text-gray-300 font-rajdhani max-w-4xl mx-auto leading-relaxed mb-6">
                Descubre cómo la automatización puede transformar específicamente tu área de trabajo con resultados medibles y concretos
              </p>
            </div>

            {/* Navegación de retorno */}
            <div className="flex justify-center">
              <button 
                onClick={handleBackToKPIs}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4B32FF]/20 to-[#04CFFB]/20 text-[#04CFFB] font-rajdhani font-bold rounded-lg hover:from-[#4B32FF]/40 hover:to-[#04CFFB]/40 transition-all duration-300 border border-[#04CFFB]/30"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver 
              </button>
            </div>
          </div>
        </div>

        {/* Carrusel de KPIs por Área */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
                Resultados Específicos por Área
              </h2>
              <p className="text-lg text-gray-300 font-rajdhani">
                Deslízate para explorar los impactos de la automatización en cada área de tu empresa
              </p>
            </div>

            {/* Carrusel */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevAreaSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-50 w-6 h-6 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 min-h-[24px] min-w-[24px] sm:min-h-[48px] sm:min-w-[48px] opacity-60 sm:opacity-100 hover:opacity-100 p-0 sm:p-2"
              >
                <ChevronLeft className="w-3 h-3 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextAreaSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-50 w-6 h-6 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 min-h-[24px] min-w-[24px] sm:min-h-[48px] sm:min-w-[48px] opacity-60 sm:opacity-100 hover:opacity-100 p-0 sm:p-2"
              >
                <ChevronRight className="w-3 h-3 sm:w-6 sm:h-6" />
              </button>

              {/* Carousel Content */}
              <div 
                ref={scrollContainerRef}
                className="overflow-hidden mx-0 sm:mx-16 md:mx-20"
              >
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentAreaSlide * 100}%)` }}
                >
                  {areaKPIs.map((area) => (
                    <div key={area.area} className="w-full flex-shrink-0 px-0 sm:px-4">
                      <div className="bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-3xl p-2 sm:p-6 md:p-8 border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
                        {/* Header del área */}
                        <div className="text-center mb-2 sm:mb-6 md:mb-8">
                          <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${area.color} mb-1 sm:mb-3 md:mb-4`}>
                            <area.icon className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                          </div>
                          <h3 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-orbitron font-bold text-white mb-1 sm:mb-3 md:mb-4 leading-tight">
                            {area.area}
                          </h3>
                        </div>

                        {/* KPIs del área */}
                        <div className="grid grid-cols-1 gap-1 sm:gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {area.kpis.map((kpi, kpiIndex) => (
                            <div
                              key={kpiIndex}
                              className="bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl p-1 sm:p-4 md:p-6 border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
                            >
                              <h4 className="text-sm sm:text-xl md:text-2xl font-orbitron font-bold text-white mb-1 sm:mb-2">
                                {kpi.value}
                              </h4>
                              <h5 className="text-xs sm:text-base md:text-lg font-rajdhani font-bold text-[#04CFFB] mb-1 sm:mb-2 leading-tight">
                                {kpi.metric}
                              </h5>
                              <p className="text-gray-300 font-rajdhani text-xs sm:text-sm leading-relaxed">
                                {kpi.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {areaKPIs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToAreaSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentAreaSlide 
                        ? 'bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] scale-125' 
                        : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center mt-16">
              <p className="text-base sm:text-lg text-gray-300 font-rajdhani mb-6">
                ¿Quieres implementar estas mejoras en tu área?
              </p>
              <button
                onClick={handleGoToContact}
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-base sm:text-lg rounded-xl hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-2xl min-h-[48px] min-w-[200px]"
              >
                Comenzar mi Transformación
                <ArrowLeft className="ml-2 w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KPIsAreaPage;
