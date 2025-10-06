import { useState, useRef } from 'react';
import { 
  Megaphone, 
  TrendingUp, 
  Settings, 
  Headphones, 
  BarChart3, 
  Users, 
  Brain,
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
  Bell,
  UserPlus,
  Calendar,
  UserCheck,
  Bot,
  FileSearch,
  Star,
  AlertTriangle,
  Zap,
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
          title: "Publicación en redes sociales",
          description: "Programación automática de contenido y seguimiento de interacciones.",
          gradient: "from-[#4B32FF] to-[#2784FA]"
        },
        {
          icon: Mail,
          title: "Email marketing y leads",
          description: "Campañas segmentadas y correos automáticos de bienvenida, recordatorios o promociones.",
          gradient: "from-[#2784FA] to-[#04CFFB]"
        },
        {
          icon: Database,
          title: "Gestión de CRM y formularios",
          description: "Integración de formularios web con CRM para crear o actualizar clientes en tiempo real.",
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
          title: "Seguimiento de prospectos",
          description: "Recordatorios automáticos de correos y llamadas según interacciones previas.",
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
          title: "Sincronización de datos entre sistemas",
          description: "Mantener alineadas bases de datos y aplicaciones internas.",
          gradient: "from-[#2784FA] to-[#4B32FF]"
        },
        {
          icon: Package,
          title: "Gestión de inventario automatizada",
          description: "Actualización en tiempo real y alertas de stock bajo.",
          gradient: "from-[#4B32FF] to-[#04CFFB]"
        },
        {
          icon: Wrench,
          title: "Tareas operativas y TI",
          description: "Backups programados, creación de usuarios, órdenes de trabajo y calendarios.",
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
          title: "Respuestas automáticas a consultas frecuentes",
          description: "Contestar preguntas comunes y escalar casos complejos.",
          gradient: "from-[#4B32FF] to-[#04CFFB]"
        },
        {
          icon: Ticket,
          title: "Gestión de tickets",
          description: "Creación y asignación automática en Zendesk, Freshdesk, etc.",
          gradient: "from-[#04CFFB] to-[#2784FA]"
        },
        {
          icon: ThumbsUp,
          title: "Feedback y encuestas",
          description: "Envío automático de encuestas de satisfacción tras cada atención.",
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
          description: "Centralizar datos de distintas áreas en un solo repositorio.",
          gradient: "from-[#04CFFB] to-[#2784FA]"
        },
        {
          icon: FileText,
          title: "Informes automáticos",
          description: "Reportes periódicos de ventas, finanzas o métricas clave.",
          gradient: "from-[#2784FA] to-[#4B32FF]"
        },
        {
          icon: AlertTriangle,
          title: "Alertas inteligentes",
          description: "Notificaciones ante anomalías o cambios críticos en datos.",
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
          title: "Onboarding e incorporación",
          description: "Generación de accesos, contratos y reuniones de inducción.",
          gradient: "from-[#04CFFB] to-[#2784FA]"
        }
      ]
    },
    {
      id: 7,
      icon: Brain,
      title: "Integraciones con Inteligencia Artificial (IA)",
      color: "from-[#4B32FF] to-[#04CFFB]",
      borderColor: "border-[#4B32FF]/30",
      hoverBorderColor: "hover:border-[#4B32FF]/60",
      items: [
        {
          icon: Bot,
          title: "Soporte al cliente con IA",
          description: "Chatbots inteligentes que responden en tiempo real.",
          gradient: "from-[#4B32FF] to-[#04CFFB]"
        },
        {
          icon: FileSearch,
          title: "Procesamiento inteligente de información",
          description: "Resúmenes automáticos de correos, actas y reportes.",
          gradient: "from-[#04CFFB] to-[#2784FA]"
        },
        {
          icon: Star,
          title: "Calificación de leads con IA",
          description: "Scoring de prospectos para priorizar clientes con mayor potencial.",
          gradient: "from-[#2784FA] to-[#4B32FF]"
        },
        {
          icon: Bell,
          title: "Notificaciones inteligentes",
          description: "Alertas con análisis contextual de datos y redes sociales.",
          gradient: "from-[#4B32FF] to-[#04CFFB]"
        },
        {
          icon: Zap,
          title: "Acciones autónomas en flujos",
          description: "Agentes de IA que ejecutan tareas directamente en los sistemas.",
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Casos de Uso por Área
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Descubre cómo la automatización puede transformar cada área de tu empresa. Deslízate horizontalmente para explorar todas las categorías.
          </p>
        </div>

        {/* Carrusel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#4B32FF] to-[#2784FA] flex items-center justify-center text-white transition-all duration-300 hover:from-[#5027FE] hover:to-[#04CFFB] hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
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
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {categories.map((category, index) => (
                <div key={category.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-3xl border border-[#4B32FF]/30 overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:border-[#04CFFB]/50">
                    {/* Header de la categoría */}
                    <div className="p-8 text-center border-b border-[#4B32FF]/20">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} mb-4 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                        <category.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-orbitron font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4B32FF] group-hover:to-[#04CFFB] group-hover:bg-clip-text transition-all duration-300">
                        {category.title}
                      </h3>
                    </div>

                    {/* Contenido de la categoría */}
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="group text-center p-6 bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                          >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} mb-4 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                              <item.icon className="w-8 h-8 text-white" />
                            </div>
                            
                            <h4 className="text-lg font-rajdhani font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4B32FF] group-hover:to-[#04CFFB] group-hover:bg-clip-text transition-all duration-300">
                              {item.title}
                            </h4>
                            
                            <p className="text-gray-300 font-rajdhani leading-relaxed text-sm">
                              {item.description}
                            </p>
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
          <p className="text-lg text-gray-300 font-rajdhani mb-6">
            ¿Interesado en implementar alguna de estas soluciones?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#5027FE] hover:to-[#1359FF] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_40px_rgba(75,50,255,0.3)]"
          >
            Solicitar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
