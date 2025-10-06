import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Zap, 
  Target
} from 'lucide-react';

const KPIs = () => {
  const [animatedStats, setAnimatedStats] = useState({
    roi: 0,
    errors: 0,
    costs: 0,
    time: 0,
    pymes: 0
  });

  const [animatedMarketStats, setAnimatedMarketStats] = useState({
    pymesInvertiran: 0,
    ventajaCompetitiva: 0,
    pymesResultados: 0
  });


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
      costs: 30,
      time: 77,
      pymes: 98
    };

    // Valores fijos para la tendencia del mercado (sin animación)
    const finalMarketValues = {
      pymesInvertiran: 98,
      ventajaCompetitiva: 75,
      pymesResultados: 60
    };

    // Establecer valores fijos para el mercado inmediatamente
    setAnimatedMarketStats(finalMarketValues);

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats({
        roi: Math.floor(finalValues.roi * progress),
        errors: Math.floor(finalValues.errors * progress),
        costs: Math.floor(finalValues.costs * progress),
        time: Math.floor(finalValues.time * progress),
        pymes: Math.floor(finalValues.pymes * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalValues);
      }
    }, stepDuration);
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
      sourceUrl: "https://news.microsoft.com/es-xl/el-74-de-las-grandes-empresas-chilenas-incrementara-su-presupuesto-de-ia-en-los-proximos-dos-anos-segun-un-estudio-de-idc/"
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
      sourceUrl: "https://www.operativeintelligence.com/blog/rpa-robotic-process-automation"
    },
    {
      icon: DollarSign,
      title: "Reducción de Costos",
      value: `${animatedStats.costs}%`,
      description: "Recorte en costos operativos con RPA",
      color: "from-[#2784FA] to-[#4B32FF]",
      bgColor: "from-[#2784FA]/10 to-[#4B32FF]/10",
      borderColor: "border-[#2784FA]/30",
      source: "Gartner, 2021",
      sourceUrl: "https://www.gartner.com/en/newsroom/press-releases/2021-04-28-gartner-forecasts-worldwide-hyperautomation-enabling-software-market-to-reach-nearly-600-billion-by-2022"
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
      sourceUrl: "https://gitnux.org/workflow-automation-statistics/"
    }
  ];


  return (
    <section id="kpis" className="py-20 bg-gradient-to-b from-[#000018] to-[#0a0a2e] px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            El Impacto de la Automatización
          </h2>
        </div>

        {/* SECCIÓN 1: KPIs GENERALES */}
        <div className="mb-20">
                 {/* KPI Cards Generales */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

          {/* Enlaces de Acción */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 mb-16">
            {/* Enlace a KPIs por Área */}
            <div className="bg-gradient-to-br from-[#4B32FF]/20 to-[#04CFFB]/20 rounded-2xl border border-[#04CFFB]/30 backdrop-blur-sm p-8 flex flex-col h-full">
              <div className="text-center flex-grow">
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                  ¿Quieres saber cómo impactaría en tu área?
                </h3>
                <p className="text-lg text-gray-300 font-rajdhani mb-6">
                  Explora los resultados específicos de automatización para cada área de tu empresa
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/kpis-por-area"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Ver KPIs por Área
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Enlace a Contacto */}
            <div className="bg-gradient-to-br from-[#4B32FF]/20 to-[#04CFFB]/20 rounded-2xl border border-[#04CFFB]/30 backdrop-blur-sm p-8 flex flex-col h-full">
              <div className="text-center flex-grow">
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                  Veamos estos resultados en tu empresa
                </h3>
                <p className="text-lg text-gray-300 font-rajdhani mb-6">
                  Comienza tu transformación digital con una consulta personalizada
                </p>
              </div>
              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Comenzar mi Transformación
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPIs;
