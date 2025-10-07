import { useState, useRef } from 'react';
import { 
  Megaphone, 
  TrendingUp, 
  Settings, 
  Headphones, 
  BarChart3, 
  Users, 
  ChevronLeft,
  ChevronRight,
  Share2,
  Mail,
  Database,
  Package,
  Wrench,
  MessageCircle,
  Ticket,
  ThumbsUp,
  BarChart,
  FileText,
  UserPlus,
  Calendar,
  UserCheck,
  AlertTriangle,
  Target,
  RefreshCw,
  HardDrive
} from 'lucide-react';

const UseCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      id: 1,
      icon: Megaphone,
      title: "Marketing Digital",
      color: "from-[#4B32FF] to-[#2784FA]",
      borderColor: "border-[#4B32FF]/30",
      hoverBorderColor: "hover:border-[#4B32FF]/60",
      items: [
        {
          icon: Share2,
          title: "Automatiza tu presencia digital.",
          description: "Programa publicaciones, gestiona contenidos y mide interacciones en todas tus redes desde un solo lugar.",
          gradient: "from-[#4B32FF] to-[#2784FA]"
        },
        {
          icon: Mail,
          title: "Llega a quien necesitas",
          description: "Envía correos automatizados de bienvenida, recordatorios o promociones, segmentados según el interés de cada usuario.",
          gradient: "from-[#2784FA] to-[#04CFFB]"
        },
        {
          icon: Database,
          title: "Sincroniza tus contactos sin esfuerzo",
          description: "Integra formularios web y plataformas de CRM para crear, actualizar y nutrir clientes automáticamente en tiempo real.",
          gradient: "from-[#04CFFB] to-[#4B32FF]"
        }
      ]
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Ventas",
      color: "from-[#04CFFB] to-[#2784FA]",
      borderColor: "border-[#04CFFB]/30",
      hoverBorderColor: "hover:border-[#04CFFB]/60",
      items: [
        {
          icon: Target,
          title: "Calificación inteligente de cliente",
          description: "La IA identifica y prioriza automáticamente a los clientes con mayor potencial de compra.",
          gradient: "from-[#04CFFB] to-[#2784FA]"
        },
        {
          icon: BarChart,
          title: "Reportes de ventas automáticos",
          description: "Generación y envío periódico de informes de desempeño.",
          gradient: "from-[#2784FA] to-[#4B32FF]"
        },
        {
          icon: Package,
          title: "Integración con plataformas de venta",
          description: "Conexión con e-commerce y CRMs para actualizar inventarios y pedidos.",
          gradient: "from-[#4B32FF] to-[#04CFFB]"
        }
      ]
    },
    {
      id: 3,
      icon: Settings,
      title: "Operaciones",
      color: "from-[#2784FA] to-[#4B32FF]",
      borderColor: "border-[#2784FA]/30",
      hoverBorderColor: "hover:border-[#2784FA]/60",
      items: [
        {
          icon: RefreshCw,
          title: "Control de inventario automatizado",
          description: "Supervisa y genera alertas inmediatas cuando el stock es bajo.",
          gradient: "from-[#2784FA] to-[#4B32FF]"
        },
        {
          icon: Package,
          title: "Optimización de flujos internos",
          description: "Detecta cuellos de botella y automatiza tareas repetitivas para aumentar la eficiencia.",
          gradient: "from-[#4B32FF] to-[#04CFFB]"
        },
        {
          icon: Wrench,
          title: "Optimización predictiva con Inteligencia Artificial",
          description: "La IA anticipa necesidades de insumos, personal o mantenimiento para evitar interrupciones.",
          gradient: "from-[#04CFFB] to-[#2784FA]"
        }
      ]
    },
    {
      id: 4,
      icon: Headphones,
      title: "Atención al Cliente (Soporte)",
      color: "from-[#4B32FF] to-[#04CFFB]",
      borderColor: "border-[#4B32FF]/30",
      hoverBorderColor: "hover:border-[#4B32FF]/60",
      items: [
        {
          icon: MessageCircle,
          title: "Asistentes que conocen tu empresa",
          description: "Chatbots inteligentes que resuelven consultas en base a la información y datos reales de tu negocio.",
          gradient: "from-[#4B32FF] to-[#04CFFB]"
        },
        {
          icon: Ticket,
          title: "Escalamiento automático de casos críticos",
          description: "Los casos complejos o urgentes se derivan automáticamente al equipo humano.",
          gradient: "from-[#04CFFB] to-[#2784FA]"
        },
        {
          icon: ThumbsUp,
          title: "Atención 24/7 sin interrupciones",
          description: "Un asistente que nunca duerme: responde y aprende 24/7 para tu empresa.",
          gradient: "from-[#2784FA] to-[#4B32FF]"
        }
      ]
    },
    {
      id: 5,
      icon: BarChart3,
      title: "Business Intelligence (BI) y Analítica",
      color: "from-[#04CFFB] to-[#2784FA]",
      borderColor: "border-[#04CFFB]/30",
      hoverBorderColor: "hover:border-[#04CFFB]/60",
      items: [
        {
          icon: HardDrive,
          title: "Consolidación de información",
          description: "Centralizar datos de distintas áreas en un solo lugar.",
          gradient: "from-[#04CFFB] to-[#2784FA]"
        },
        {
          icon: FileText,
          title: "Informes automáticos",
          description: "Genera informes automáticos de ventas, finanzas o desempeño, listos para enviarse a tu equipo o clientes.",
          gradient: "from-[#2784FA] to-[#4B32FF]"
        },
        {
          icon: AlertTriangle,
          title: "Análisis predictivo con IA",
          description: "Anticipa tendencias, ventas o comportamientos clave a partir de tus propios datos.",
          gradient: "from-[#4B32FF] to-[#04CFFB]"
        }
      ]
    },
    {
      id: 6,
      icon: Users,
      title: "Recursos Humanos (RRHH)",
      color: "from-[#2784FA] to-[#4B32FF]",
      borderColor: "border-[#2784FA]/30",
      hoverBorderColor: "hover:border-[#2784FA]/60",
      items: [
        {
          icon: UserPlus,
          title: "Reclutamiento automatizado",
          description: "Filtrado de CVs y clasificación de candidatos según criterios definidos.",
          gradient: "from-[#2784FA] to-[#4B32FF]"
        },
        {
          icon: Calendar,
          title: "Programación de entrevistas",
          description: "Coordinación automática de agendas y reuniones.",
          gradient: "from-[#4B32FF] to-[#04CFFB]"
        },
        {
          icon: UserCheck,
          title: "Evaluación de talento con IA",
          description: "Analiza perfiles y desempeño para identificar a los candidatos con mayor potencial de éxito.",
          gradient: "from-[#04CFFB] to-[#2784FA]"
        }
        ]
      }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-[#000018] to-[#0a0a2e] px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 sm:mb-6">
            Casos de Uso por Área
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed">
            Descubre cómo la automatización puede transformar cada área de tu empresa. 
          </p>
        </div>

        {/* Carrusel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-50 w-6 h-6 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 min-h-[24px] min-w-[24px] sm:min-h-[48px] sm:min-w-[48px] opacity-60 sm:opacity-100 hover:opacity-100 p-0 sm:p-2"
          >
            <ChevronLeft className="w-3 h-3 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
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
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {categories.map((category) => (
                <div key={category.id} className="w-full flex-shrink-0 px-0 sm:px-4">
                  <div className="relative rounded-3xl border border-[#4B32FF]/30 overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:border-[#04CFFB]/50">
                    {/* Imagen de fondo */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('/assets/backgrounds/Casos-Fondo.png')"
                      }}
                    ></div>
                    {/* Overlay para legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E1CA1]/80 to-[#4B32FF]/60"></div>
                    {/* Contenido */}
                    <div className="relative z-10">
                    {/* Header de la categoría */}
                    <div className="p-2 sm:p-6 md:p-8 text-center border-b border-[#4B32FF]/20">
                      <h3 className="text-base sm:text-2xl md:text-3xl font-orbitron font-bold text-white mb-1 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4B32FF] group-hover:to-[#04CFFB] group-hover:bg-clip-text transition-all duration-300 leading-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Contenido de la categoría */}
                    <div className="p-2 sm:p-6 md:p-8">
                      <div className="grid grid-cols-1 gap-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="group text-center p-1 sm:p-4 md:p-6 bg-gradient-to-br from-[#1E1CA1]/60 to-[#4B32FF]/50 rounded-2xl border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                          >
                            <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${item.gradient} mb-1 sm:mb-3 md:mb-4 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                              <item.icon className="w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                            </div>
                            
                            <h4 className="text-xs sm:text-base md:text-lg font-rajdhani font-bold text-white mb-1 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4B32FF] group-hover:to-[#04CFFB] group-hover:bg-clip-text transition-all duration-300 leading-tight">
                              {item.title}
                            </h4>
                            
                            <p className="text-gray-300 font-rajdhani leading-relaxed text-xs sm:text-sm">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-base sm:text-lg text-gray-300 font-rajdhani mb-6">
            ¿Interesado en implementar alguna de estas soluciones?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-base sm:text-lg rounded-xl hover:from-[#5027FE] hover:to-[#1359FF] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_40px_rgba(75,50,255,0.3)] min-h-[48px]"
          >
            Solicitar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
