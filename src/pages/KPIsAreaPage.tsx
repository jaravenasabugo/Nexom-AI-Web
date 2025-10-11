import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Megaphone,
  Target,
  Settings,
  Headphones,
  BarChart,
  Brain,
  UserCheck,
  ShoppingCart,
  Calculator,
  Truck,
  Building,
  Pickaxe
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const KPIsAreaPage: React.FC = () => {
  const [currentAreaSlide, setCurrentAreaSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Scroll al inicio de la página cuando se carga
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Cerrar menú desplegable al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // KPIs por área para el carrusel
  const areaKPIs = [
    {
      area: "Marketing Digital",
      icon: Megaphone,
      color: "from-[#4B32FF] to-[#2784FA]",
      kpis: [
        { 
          metric: "Impacto directo en ingresos", 
          value: "29%", 
          description: "Los líderes de marketing que adoptan automatización de procesos de contenido logran un 29% mayor impacto en ingresos que sus pares, gracias a la optimización integral del ciclo de vida del contenido.",
          source: "Deloitte (2025)"
        },
        { 
          metric: "Personalización que impulsa conversiones", 
          value: "80%", 
          description: "El 80% de los consumidores son más propensos a realizar una compra cuando reciben experiencias personalizadas, habilitadas por flujos automatizados y segmentación avanzada.",
          source: "McKinsey & Company (2020)"
        },
        { 
          metric: "Reducción de costos operativos", 
          value: "25%", 
          description: "La automatización del marketing mejora la asignación de recursos y la precisión del targeting, reduciendo los costos operativos hasta en 25%.",
          source: "Estudio de Impacto de la Automatización Digital (2025)"
        },
        { 
          metric: "Incremento en tasas de conversión", 
          value: "77%", 
          description: "Las campañas automatizadas con lead scoring y envíos personalizados logran un 77% más de conversiones respecto a procesos manuales.",
          source: "Estudio de Impacto de la Automatización Digital (2025)"
        },
        { 
          metric: "Aumento promedio en ingresos", 
          value: "34%", 
          description: "Las empresas que aplican marketing automation reportan un 34% de incremento promedio en ingresos, reflejando un ROI positivo y sostenido.",
          source: "Salesforce (2023)"
        },
        { 
          metric: "Creciente inversión en automatización", 
          value: "70%", 
          description: "El 70% de los líderes de marketing globales planea incrementar su presupuesto en automatización en 2025, impulsados por los resultados en eficiencia y crecimiento.",
          source: "Estudio de Impacto de la Automatización Digital (2025)"
        }
      ]
    },
    {
      area: "E-commerce / Retail",
      icon: ShoppingCart,
      color: "from-[#04CFFB] to-[#2784FA]",
      kpis: [
        { 
          metric: "Interacciones automatizadas con clientes", 
          value: "95%", 
          description: "Para 2025, el 95% de las interacciones entre clientes y comercios se realizará mediante chatbots y flujos automatizados, reduciendo tiempos de respuesta y mejorando la experiencia de compra.",
          source: "Predicción de la industria (2023)"
        },
        { 
          metric: "Aumento de ingresos por automatización inteligente", 
          value: "69%", 
          description: "El 69% de los retailers que integran IA y automatización reportaron incrementos en sus ingresos anuales, confirmando el valor estratégico de estas tecnologías.",
          source: "NVIDIA (2024)"
        },
        { 
          metric: "Entregas más rápidas gracias a almacenes automatizados", 
          value: "40%", 
          description: "Los minoristas con almacenes automatizados son 40% más propensos a despachar pedidos en un día o menos, reduciendo tiempos logísticos y mejorando la satisfacción del cliente.",
          source: "Robotics Business Review (2023)"
        },
        { 
          metric: "Eficiencia operativa en distribución minorista", 
          value: "80%", 
          description: "Centros logísticos automatizados, como el de Primark, aumentaron su eficiencia en 80%, reemplazando tareas manuales por sistemas automatizados.",
          source: "Reuters (2023)"
        },
        { 
          metric: "Menos quiebres de stock con IA predictiva", 
          value: "35%", 
          description: "El uso de inteligencia artificial para la gestión de inventarios permitió reducir los quiebres de stock en 35%, garantizando disponibilidad continua.",
          source: "The Future of Commerce (2024)"
        },
        { 
          metric: "Ahorro en costos de producción con procesos digitalizados", 
          value: "20%", 
          description: "Las marcas que digitalizan y automatizan sus procesos de venta logran hasta 20% de ahorro en costos de fabricación al reducir el tiempo de lanzamiento de nuevos productos.",
          source: "McKinsey & Company (2023)"
        }
      ]
    },
    {
      area: "Finanzas y Contabilidad",
      icon: Calculator,
      color: "from-[#2784FA] to-[#4B32FF]",
      kpis: [
        { 
          metric: "Reducción drástica de errores contables", 
          value: "90%", 
          description: "La automatización integral de operaciones financieras permite reducir hasta 90% los errores de reporte, mejorando la precisión de la información y reduciendo riesgos de auditoría.",
          source: "DocuClipper (2025)"
        },
        { 
          metric: "Procesos financieros más rápidos y eficientes", 
          value: "93%", 
          description: "El 93% de los CFOs reporta ciclos más cortos en el procesamiento de facturas gracias a la automatización, lo que acelera cuentas por pagar y el cierre financiero.",
          source: "PYMNTS (2023)"
        },
        { 
          metric: "Flujo financiero automatizable", 
          value: "80%", 
          description: "Hasta 80% del flujo de trabajo financiero es potencialmente automatizable, liberando al personal contable para actividades estratégicas de mayor valor.",
          source: "Accenture (2024)"
        },
        { 
          metric: "Reasignación del talento humano", 
          value: "60%", 
          description: "La automatización permite redirigir hasta 60% del tiempo del equipo financiero desde tareas de procesamiento hacia análisis y toma de decisiones estratégicas.",
          source: "PwC (2025)"
        },
        { 
          metric: "Reducción en tiempos de ciclo de facturación", 
          value: "80%", 
          description: "Procesos como la extracción y conciliación de facturas pueden reducir sus tiempos de ciclo hasta en 80%, agilizando la gestión de pagos y reportes.",
          source: "PwC (2025)"
        },
        { 
          metric: "Retorno rápido de inversión (ROI)", 
          value: "6–12 meses", 
          description: "Los proyectos de automatización financiera recuperan su inversión en un promedio de 6 a 12 meses, con un retorno estimado de $5.44 por cada dólar invertido.",
          source: "Nucleus Research (2021)"
        }
      ]
    },
    {
      area: "Logística y Transporte",
      icon: Truck,
      color: "from-[#4B32FF] to-[#04CFFB]",
      kpis: [
        { 
          metric: "Optimización del rendimiento logístico", 
          value: "45%", 
          description: "Las empresas que implementan automatización en sus operaciones logísticas logran hasta un 45% más de eficiencia en la gestión de pedidos y rutas.",
          source: "McKinsey & Company (2024)"
        },
        { 
          metric: "Reducción de costos de transporte", 
          value: "60%", 
          description: "Los sistemas automatizados de planificación y seguimiento permiten reducir en promedio un 60% los costos de transporte, especialmente mediante la optimización de rutas.",
          source: "Accenture (2024)"
        },
        { 
          metric: "Precisión en la trazabilidad de envíos", 
          value: "90%", 
          description: "La integración de sensores y flujos automáticos eleva la precisión de seguimiento al 90%, reduciendo pérdidas y errores en la cadena logística.",
          source: "Deloitte (2025)"
        },
        { 
          metric: "Disminución en tiempos de entrega", 
          value: "35%", 
          description: "La automatización de centros de distribución y la gestión predictiva reducen los tiempos de entrega en 35%, acelerando la respuesta al cliente.",
          source: "PwC (2025)"
        },
        { 
          metric: "Eficiencia en procesos de última milla", 
          value: "80%", 
          description: "La digitalización y el uso de algoritmos automatizados mejoran en 80% la eficiencia de las entregas de última milla, reduciendo kilómetros recorridos y emisiones.",
          source: "Estudio de Impacto de la Automatización Digital (2025)"
        },
        { 
          metric: "Menor uso de papel y tareas manuales", 
          value: "50%", 
          description: "La automatización documental en transporte elimina hasta 50% de los procesos en papel, reduciendo errores humanos y acelerando la generación de guías y comprobantes.",
          source: "EY (2024)"
        }
      ]
    },
    {
      area: "Atención al Cliente / Soporte",
      icon: Headphones,
      color: "from-[#04CFFB] to-[#2784FA]",
      kpis: [
        { 
          metric: "Consultas resueltas sin intervención humana", 
          value: "70%", 
          description: "Los chatbots y asistentes automatizados resuelven de forma autónoma hasta 70% de las consultas de primer nivel, liberando tiempo de los agentes humanos.",
          source: "IBM (2024)"
        },
        { 
          metric: "Aumento en la satisfacción del cliente (CSAT)", 
          value: "33%", 
          description: "Las empresas que integran automatización en soporte reportan un 33% de mejora en satisfacción del cliente, debido a tiempos de respuesta más rápidos y atención 24/7.",
          source: "Deloitte (2025)"
        },
        { 
          metric: "Reducción de costos operativos en soporte", 
          value: "50%", 
          description: "La automatización de interacciones y generación automática de tickets reduce los costos de atención hasta en 50%, manteniendo o mejorando los niveles de servicio.",
          source: "Gartner (2024)"
        },
        { 
          metric: "Incremento en la velocidad de respuesta", 
          value: "400%", 
          description: "Los equipos que adoptan bots y flujos automatizados en atención aumentan la velocidad promedio de respuesta en 400%, especialmente en canales digitales.",
          source: "Zendesk (2023)"
        },
        { 
          metric: "Clientes más propensos a recomprar", 
          value: "80%", 
          description: "El 80% de los consumidores indica que volvería a comprar en empresas que ofrecen soporte automatizado rápido y eficiente.",
          source: "Salesforce (2023)"
        },
        { 
          metric: "Menos errores en gestión de casos", 
          value: "25%", 
          description: "La integración entre CRM, chatbots y bases de conocimiento reduce en 25% los errores en la gestión de solicitudes y derivaciones internas.",
          source: "PwC (2025)"
        }
      ]
    },
    {
      area: "Recursos Humanos",
      icon: UserCheck,
      color: "from-[#2784FA] to-[#4B32FF]",
      kpis: [
        { 
          metric: "Crecimiento de la automatización en RR.HH.", 
          value: "599%", 
          description: "El uso de bots y flujos automáticos en procesos de RR.HH. aumentó en un 599% en los últimos años, reflejando una transformación profunda hacia la digitalización del talento.",
          source: "SHRM (2023)"
        },
        { 
          metric: "Satisfacción del personal con la automatización", 
          value: "95%", 
          description: "El 95% de los equipos de RR.HH. se declara satisfecho tras implementar herramientas de automatización, frente al 72% previo a su adopción.",
          source: "Salesforce (2023)"
        },
        { 
          metric: "Reducción de tareas administrativas", 
          value: "53%", 
          description: "Más de la mitad de los empleados de RR.HH. reporta una disminución del 53% en tareas operativas rutinarias (nómina, vacaciones, registro de datos) gracias a la automatización.",
          source: "Salesforce (2023)"
        },
        { 
          metric: "Automatización como prioridad estratégica", 
          value: "78%", 
          description: "El 78% de los líderes de RR.HH. considera que la adopción de herramientas de automatización e IA es esencial para el éxito organizacional a mediano plazo.",
          source: "Gartner (2024)"
        },
        { 
          metric: "Expansión futura planificada", 
          value: "40%", 
          description: "Más del 40% de los profesionales de RR.HH. planea ampliar el uso de automatización antes de 2026, incluyendo evaluación de desempeño y gestión documental.",
          source: "SHRM (2023)"
        },
        { 
          metric: "Aceleración en procesos de contratación", 
          value: "30%", 
          description: "Las empresas que automatizaron su reclutamiento redujeron en promedio 30% el tiempo de contratación, acelerando la selección y onboarding de talento.",
          source: "Deloitte (2024)"
        }
      ]
    },
    {
      area: "Business Intelligence y Reporting",
      icon: BarChart,
      color: "from-[#4B32FF] to-[#04CFFB]",
      kpis: [
        { 
          metric: "Mejora en la velocidad de toma de decisiones", 
          value: "42%", 
          description: "Las empresas que automatizan sus reportes e integran dashboards inteligentes logran tomar decisiones 42% más rápido, reduciendo los cuellos de botella en análisis de datos.",
          source: "Deloitte (2025)"
        },
        { 
          metric: "Más confianza en los datos", 
          value: "67%", 
          description: "El 67% de los líderes empresariales confía más en sus decisiones gracias a la automatización de la recopilación y validación de información.",
          source: "PwC (2024)"
        },
        { 
          metric: "Reducción del tiempo de generación de informes", 
          value: "50%", 
          description: "Automatizar reportes financieros y operativos reduce los tiempos de preparación hasta en 50%, liberando horas analíticas para el equipo de BI.",
          source: "Accenture (2024)"
        },
        { 
          metric: "Aumento en eficiencia analítica", 
          value: "80%", 
          description: "La integración de automatización en BI incrementa la eficiencia en el procesamiento y visualización de datos en 80%, mejorando la productividad global.",
          source: "McKinsey & Company (2024)"
        },
        { 
          metric: "Disminución de errores en reporting", 
          value: "30%", 
          description: "Los reportes automatizados presentan 30% menos errores que los generados manualmente, fortaleciendo la consistencia y trazabilidad de la información.",
          source: "Gartner (2024)"
        },
        { 
          metric: "Mayor retorno sobre la inversión en analítica", 
          value: "5x", 
          description: "Las organizaciones que combinan BI y automatización obtienen un ROI hasta 5 veces mayor, gracias a la toma de decisiones basada en datos en tiempo real.",
          source: "Forrester (2023)"
        }
      ]
    },
    {
      area: "Construcción e Inmobiliario",
      icon: Building,
      color: "from-[#04CFFB] to-[#4B32FF]",
      kpis: [
        { 
          metric: "Aumento de productividad en gestión de proyectos", 
          value: "61%", 
          description: "Las empresas constructoras que adoptaron automatización en la planificación y seguimiento de obras reportan un 61% de mejora en productividad, reduciendo retrasos y sobrecostos.",
          source: "McKinsey & Company (2024)"
        },
        { 
          metric: "Disminución de errores en presupuestación", 
          value: "45%", 
          description: "La automatización en la creación y control de presupuestos reduce los errores humanos en un 45%, mejorando la exactitud financiera de los proyectos.",
          source: "Deloitte (2025)"
        },
        { 
          metric: "Ahorro promedio en costos de ejecución", 
          value: "25%", 
          description: "El uso de flujos automatizados en control de materiales y subcontrataciones permite un 25% de reducción promedio en costos de ejecución y supervisión.",
          source: "PwC (2025)"
        },
        { 
          metric: "Procesos administrativos más ágiles", 
          value: "50%", 
          description: "La digitalización y automatización de trámites internos y licitaciones agiliza los procesos administrativos en 50%, mejorando la comunicación entre departamentos.",
          source: "EY (2024)"
        },
        { 
          metric: "Menor impacto ambiental en obras", 
          value: "35%", 
          description: "La gestión automatizada de recursos y residuos en obra disminuye en 35% el impacto ambiental, optimizando el uso de materiales y transporte.",
          source: "Accenture (2024)"
        },
        { 
          metric: "Reducción de tiempo en la entrega de proyectos", 
          value: "20%", 
          description: "Las empresas que implementan software automatizado de coordinación reducen los tiempos de entrega de proyectos en 20% sin comprometer la calidad constructiva.",
          source: "Autodesk (2023)"
        }
      ]
    },
    {
      area: "Minería",
      icon: Pickaxe,
      color: "from-[#2784FA] to-[#04CFFB]",
      kpis: [
        { 
          metric: "Aumento en la eficiencia operativa", 
          value: "45%", 
          description: "Las compañías mineras que implementan automatización en monitoreo y control de operaciones logran un 45% de incremento en eficiencia, especialmente en extracción y transporte.",
          source: "Deloitte (2025)"
        },
        { 
          metric: "Reducción en costos de operación minera", 
          value: "30%", 
          description: "La automatización de maquinaria y análisis predictivo disminuye los costos operacionales hasta en 30%, optimizando mantenimiento y consumo energético.",
          source: "PwC (2024)"
        },
        { 
          metric: "Mayor seguridad en faenas", 
          value: "85%", 
          description: "Los sistemas automatizados de supervisión y control remoto reducen en 85% los incidentes de seguridad asociados a tareas críticas.",
          source: "McKinsey & Company (2023)"
        },
        { 
          metric: "Monitoreo predictivo del equipamiento", 
          value: "60%", 
          description: "El uso de sensores y flujos automatizados permite una reducción del 60% en fallas de maquinaria, mejorando la continuidad operacional.",
          source: "Accenture (2024)"
        },
        { 
          metric: "Menor impacto ambiental por automatización", 
          value: "35%", 
          description: "El uso de análisis automatizados para gestión de residuos y energía reduce el impacto ambiental en 35%, mejorando la sostenibilidad del proceso extractivo.",
          source: "EY (2024)"
        },
        { 
          metric: "Agilidad en la gestión de datos mineros", 
          value: "50%", 
          description: "La integración automatizada de datos geológicos y de producción aumenta en 50% la velocidad de procesamiento y reporte, mejorando la toma de decisiones.",
          source: "Estudio de Impacto de la Automatización Digital (2025)"
        }
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

  const handleAreaSelect = (index: number) => {
    setCurrentAreaSlide(index);
    setIsDropdownOpen(false);
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
              <p className="text-lg text-gray-300 font-rajdhani mb-8">
                Deslízate para explorar los impactos de la automatización en cada área de tu empresa
              </p>
              
              {/* Menú desplegable para selección rápida */}
              <div className="relative inline-block dropdown-container">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4B32FF]/20 to-[#04CFFB]/20 text-white font-rajdhani font-bold rounded-xl border border-[#04CFFB]/30 hover:border-[#04CFFB]/50 transition-all duration-300 min-w-[300px] justify-between"
                >
                  <span className="flex items-center">
                    {React.createElement(areaKPIs[currentAreaSlide].icon, { className: "w-5 h-5 mr-3" })}
                    {areaKPIs[currentAreaSlide].area}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-br from-[#1E1CA1]/95 to-[#4B32FF]/95 backdrop-blur-sm rounded-xl border border-[#04CFFB]/30 shadow-2xl z-50 max-h-80 overflow-y-auto">
                    {areaKPIs.map((area, index) => (
                      <button
                        key={index}
                        onClick={() => handleAreaSelect(index)}
                        className={`w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-[#4B32FF]/30 hover:to-[#04CFFB]/30 transition-all duration-300 flex items-center ${
                          index === currentAreaSlide ? 'bg-gradient-to-r from-[#4B32FF]/30 to-[#04CFFB]/30' : ''
                        } ${index === 0 ? 'rounded-t-xl' : ''} ${index === areaKPIs.length - 1 ? 'rounded-b-xl' : ''}`}
                      >
                        {React.createElement(area.icon, { className: "w-5 h-5 mr-3 text-[#04CFFB]" })}
                        <span className="text-white font-rajdhani font-medium">{area.area}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
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

                        {/* KPIs del área - 3 arriba y 3 abajo */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                          {/* Primera fila - 3 KPIs */}
                          <div className="grid grid-cols-1 sm:col-span-2 lg:col-span-3 grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                            {area.kpis.slice(0, 3).map((kpi, kpiIndex) => (
                            <div
                              key={kpiIndex}
                                className="bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl p-3 sm:p-4 md:p-6 border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
                              >
                                <h4 className="text-lg sm:text-xl md:text-2xl font-orbitron font-bold text-white mb-2 sm:mb-3">
                                  {kpi.value}
                                </h4>
                                <h5 className="text-sm sm:text-base md:text-lg font-rajdhani font-bold text-[#04CFFB] mb-2 sm:mb-3 leading-tight">
                                  {kpi.metric}
                                </h5>
                                <p className="text-gray-300 font-rajdhani text-xs sm:text-sm leading-relaxed mb-2">
                                  {kpi.description}
                                </p>
                                <div className="text-xs text-gray-400 font-rajdhani border-t border-gray-600/30 pt-2">
                                  Fuente: {kpi.source}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Segunda fila - 3 KPIs */}
                          <div className="grid grid-cols-1 sm:col-span-2 lg:col-span-3 grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                            {area.kpis.slice(3, 6).map((kpi, kpiIndex) => (
                              <div
                                key={kpiIndex + 3}
                                className="bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl p-3 sm:p-4 md:p-6 border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
                              >
                                <h4 className="text-lg sm:text-xl md:text-2xl font-orbitron font-bold text-white mb-2 sm:mb-3">
                                {kpi.value}
                              </h4>
                                <h5 className="text-sm sm:text-base md:text-lg font-rajdhani font-bold text-[#04CFFB] mb-2 sm:mb-3 leading-tight">
                                {kpi.metric}
                              </h5>
                                <p className="text-gray-300 font-rajdhani text-xs sm:text-sm leading-relaxed mb-2">
                                {kpi.description}
                              </p>
                                <div className="text-xs text-gray-400 font-rajdhani border-t border-gray-600/30 pt-2">
                                  Fuente: {kpi.source}
                                </div>
                            </div>
                          ))}
                          </div>
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
