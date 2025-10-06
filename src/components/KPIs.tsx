import { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Zap, 
  Target,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  Settings,
  Headphones,
  BarChart,
  Brain,
  UserCheck
} from 'lucide-react';

const KPIs = () => {
  const [animatedStats, setAnimatedStats] = useState({
    roi: 0,
    errors: 0,
    costs: 0,
    decisions: 0,
    time: 0,
    pymes: 0
  });

  const [animatedMarketStats, setAnimatedMarketStats] = useState({
    pymesInvertiran: 0,
    ventajaCompetitiva: 0,
    pymesResultados: 0
  });

  const [currentAreaSlide, setCurrentAreaSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animar los números
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('kpis');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const animateNumbers = () => {
    const duration = 2000; // 2 segundos
    const steps = 60;
    const stepDuration = duration / steps;

    const finalValues = {
      roi: 3,
      errors: 90,
      costs: 40,
      decisions: 5,
      time: 77,
      pymes: 98
    };

    const finalMarketValues = {
      pymesInvertiran: 98,
      ventajaCompetitiva: 75,
      pymesResultados: 60
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats({
        roi: Math.floor(finalValues.roi * progress),
        errors: Math.floor(finalValues.errors * progress),
        costs: Math.floor(finalValues.costs * progress),
        decisions: Math.floor(finalValues.decisions * progress),
        time: Math.floor(finalValues.time * progress),
        pymes: Math.floor(finalValues.pymes * progress)
      });

      setAnimatedMarketStats({
        pymesInvertiran: Math.floor(finalMarketValues.pymesInvertiran * progress),
        ventajaCompetitiva: Math.floor(finalMarketValues.ventajaCompetitiva * progress),
        pymesResultados: Math.floor(finalMarketValues.pymesResultados * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalValues);
        setAnimatedMarketStats(finalMarketValues);
      }
    }, stepDuration);
  };

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

  const kpiData = [
    {
      icon: TrendingUp,
      title: "Retorno de Inversión",
      value: `${animatedStats.roi}X`,
      description: "Las iniciativas de IA en Chile generan el ROI más alto de la región",
      color: "from-[#4B32FF] to-[#2784FA]",
      bgColor: "from-[#4B32FF]/10 to-[#2784FA]/10",
      borderColor: "border-[#4B32FF]/30",
      source: "IDC, 2024",
      sourceUrl: "#" // Se agregará la URL real después
    },
    {
      icon: Target,
      title: "Reducción de Errores",
      value: `${animatedStats.errors}%`,
      description: "Eliminación de costos asociados a fallas humanas",
      color: "from-[#04CFFB] to-[#2784FA]",
      bgColor: "from-[#04CFFB]/10 to-[#2784FA]/10",
      borderColor: "border-[#04CFFB]/30",
      source: "Deloitte, 2020",
      sourceUrl: "#" // Se agregará la URL real después
    },
    {
      icon: DollarSign,
      title: "Reducción de Costos",
      value: `${animatedStats.costs}%`,
      description: "Recorte en costos operativos con RPA",
      color: "from-[#2784FA] to-[#4B32FF]",
      bgColor: "from-[#2784FA]/10 to-[#4B32FF]/10",
      borderColor: "border-[#2784FA]/30",
      source: "Roland Berger, 2018",
      sourceUrl: "#" // Se agregará la URL real después
    },
    {
      icon: Clock,
      title: "Decisiones más Rápidas",
      value: `${animatedStats.decisions}X`,
      description: "Análisis automatizado para decisiones estratégicas",
      color: "from-[#4B32FF] to-[#04CFFB]",
      bgColor: "from-[#4B32FF]/10 to-[#04CFFB]/10",
      borderColor: "border-[#4B32FF]/30",
      source: "McKinsey, 2022",
      sourceUrl: "#" // Se agregará la URL real después
    },
    {
      icon: Zap,
      title: "Ahorro de Tiempo",
      value: `${animatedStats.time}%`,
      description: "Potencial de ahorro mediante automatización de flujos",
      color: "from-[#04CFFB] to-[#2784FA]",
      bgColor: "from-[#04CFFB]/10 to-[#2784FA]/10",
      borderColor: "border-[#04CFFB]/30",
      source: "Gitnux, 2024",
      sourceUrl: "#" // Se agregará la URL real después
    }
  ];


  return (
    <section id="kpis" className="py-20 bg-gradient-to-b from-[#000018] to-[#0a0a2e] px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            El Impacto de la Automatización en Chile
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Datos respaldados por estudios internacionales que demuestran por qué Chile lidera la transformación digital en la región
          </p>
        </div>

        {/* SECCIÓN 1: KPIs GENERALES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
              Resultados Comprobados en Chile
            </h3>
            <p className="text-lg text-gray-300 font-rajdhani">
              Datos respaldados por estudios de IDC, Deloitte, McKinsey y otras consultoras internacionales
            </p>
          </div>

          {/* KPI Cards Generales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {kpiData.map((kpi, index) => (
              <a
                key={index}
                href={kpi.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${kpi.bgColor} rounded-2xl p-6 border ${kpi.borderColor} hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer group`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${kpi.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <kpi.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold text-white mb-2 group-hover:text-[#04CFFB] transition-colors duration-300">
                    {kpi.value}
                  </h3>
                  <h4 className="text-lg font-rajdhani font-bold text-white mb-3">
                    {kpi.title}
                  </h4>
                  <div className="text-xs text-gray-400 font-rajdhani border-t border-gray-600/30 pt-2">
                    Fuente: {kpi.source}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Estadísticas Adicionales */}
          <div className="bg-gradient-to-r from-[#4B32FF]/20 to-[#04CFFB]/20 rounded-3xl p-8 border border-[#04CFFB]/30">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
                La Tendencia del Mercado en Chile
              </h3>
              <p className="text-xl text-gray-300 font-rajdhani">
                No te quedes atrás: La adopción de automatización es una necesidad competitiva
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-[#04CFFB] mb-2">
                  {animatedMarketStats.pymesInvertiran}%
                </div>
                <div className="text-gray-300 font-rajdhani">
                  De las PYMES invertirán en digitalización
                </div>
                <div className="text-sm text-gray-400 font-rajdhani mt-2">
                  Fuente: Movistar Empresas, 2024
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-[#04CFFB] mb-2">
                  {animatedMarketStats.ventajaCompetitiva}%
                </div>
                <div className="text-gray-300 font-rajdhani">
                  Reportan ventaja competitiva significativa
                </div>
                <div className="text-sm text-gray-400 font-rajdhani mt-2">
                  Fuente: Gitnux, 2024
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-orbitron font-bold text-[#04CFFB] mb-2">
                  {animatedMarketStats.pymesResultados}%
                </div>
                <div className="text-gray-300 font-rajdhani">
                  De las PYMES ya ven resultados positivos
                </div>
                <div className="text-sm text-gray-400 font-rajdhani mt-2">
                  Fuente: Movistar, 2024
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN 2: KPIs POR ÁREA - CARRUSEL */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
              KPIs Específicos por Área
            </h3>
            <p className="text-lg text-gray-300 font-rajdhani">
              Resultados detallados según el área de implementación
            </p>
          </div>

          {/* Carrusel de KPIs por Área */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevAreaSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#4B32FF] to-[#2784FA] flex items-center justify-center text-white transition-all duration-300 hover:from-[#5027FE] hover:to-[#04CFFB] hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextAreaSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#4B32FF] to-[#2784FA] flex items-center justify-center text-white transition-all duration-300 hover:from-[#5027FE] hover:to-[#04CFFB] hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Content */}
            <div 
              ref={scrollContainerRef}
              className="overflow-hidden mx-16"
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentAreaSlide * 100}%)` }}
              >
                {areaKPIs.map((area) => (
                  <div key={area.area} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-3xl p-8 border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
                      {/* Header del área */}
                      <div className="text-center mb-8">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${area.color} mb-4`}>
                          <area.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
                          {area.area}
                        </h3>
                      </div>

                      {/* KPIs del área */}
                      <div className="grid md:grid-cols-3 gap-6">
                        {area.kpis.map((kpi, kpiIndex) => (
                          <div
                            key={kpiIndex}
                            className="bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl p-6 border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
                          >
                            <h4 className="text-2xl font-orbitron font-bold text-white mb-2">
                              {kpi.value}
                            </h4>
                            <h5 className="text-lg font-rajdhani font-bold text-[#04CFFB] mb-2">
                              {kpi.metric}
                            </h5>
                            <p className="text-gray-300 font-rajdhani text-sm">
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
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <p className="text-lg text-gray-300 font-rajdhani mb-6">
            ¿Quieres ver estos resultados en tu empresa?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Comenzar mi Transformación
            <TrendingUp className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default KPIs;
