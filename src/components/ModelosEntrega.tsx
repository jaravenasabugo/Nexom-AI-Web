import { 
  Cloud, 
  Server, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Shield, 
  Zap, 
  DollarSign,
  Settings,
  Database,
  Clock
} from 'lucide-react';

const ModelosEntrega = () => {
  const modelos = [
    {
      id: 1,
      icon: Cloud,
      title: "VPS gestionado por Nexom AI",
      subtitle: "Servicio 'Cloud' administrado",
      color: "from-[#4B32FF] to-[#2784FA]",
      borderColor: "border-[#4B32FF]/30",
      hoverBorderColor: "hover:border-[#4B32FF]/60",
      description: "NexomAI provee la infraestructura y gestiona la solución de automatización, ocupándose de la instalación, configuración, seguridad y monitoreo.",
      ventajas: [
        {
          icon: Settings,
          text: "Implementación y gestión integral de la solución, sin complejidad técnica para el cliente"
        },
        {
          icon: Shield,
          text: "Seguridad, monitoreo constante que garantizan tranquilidad"
        },
        {
          icon: Zap,
          text: "Alta disponibilidad y estabilidad del servicio, con tiempos de respuesta garantizados"
        },
        {
          icon: Users,
          text: "Permite al cliente enfocarse en su negocio mientras NexomAI administra la tecnología"
        }
      ],
      
      consideraciones: [
        {
          icon: DollarSign,
          text: "Costo de mantenimiento mensual"
        },
      ],
      recomendado: [
        { icon: CheckCircle, text: "Empresas sin equipo técnico propio" },
        { icon: CheckCircle, text: "Organizaciones que buscan comodidad y soporte garantizado" },
        { icon: CheckCircle, text: "Empresas que prefieren delegar la administración tecnológica" }
      ]
      
    },
    {
        id: 2,
        icon: Server,
        title: "VPS en infraestructura del cliente",
        subtitle: "Autogestionado con soporte inicial de NexomAI",
        color: "from-[#04CFFB] to-[#2784FA]",
        borderColor: "border-[#04CFFB]/30",
        hoverBorderColor: "hover:border-[#04CFFB]/60",
        description: "NexomAI realiza la configuración inicial de la solución en servidores del cliente y entrega soporte especializado al inicio, mientras que la administración técnica diaria queda a cargo del equipo interno.",
        ventajas: [
          {
            icon: Database,
            text: "Control total sobre la infraestructura y los datos"
          },
          {
            icon: Settings,
            text: "Flexibilidad para personalizar el servidor según las necesidades del negocio"
          },
          {
            icon: Shield,
            text: "Independencia tecnológica"
          }
        ],
        consideraciones: [
          {
            icon: Users,
            text: "Requiere conocimientos técnicos y disponibilidad del equipo de TI del cliente"
          },
          {
            icon: Clock,
            text: "El mantenimiento (actualizaciones, seguridad y escalabilidad) queda bajo responsabilidad del cliente"
          },
          {
            icon: AlertTriangle,
            text: "NexomAI se encarga de la configuración inicial y asegura que la automatización quede operativa, pero la administración y el mantenimiento continuo del servidor quedan bajo responsabilidad del cliente"
        }
        ],
        recomendado: [
          { icon: CheckCircle, text: "Empresas con equipo de TI propio" },
          { icon: CheckCircle, text: "Organizaciones que buscan mayor control sobre su infraestructura" },
          { icon: CheckCircle, text: "Compañías que priorizan la autogestión y flexibilidad técnica" }
        ]
      }
      
  ];

  return (
    <section id="modelos-entrega" className="py-20 bg-gradient-to-b from-[#0a0a2e] to-[#000018] px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Modelos de Entrega del Servicio
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-4xl mx-auto leading-relaxed mb-6">
            NexomAI ofrece dos modalidades de implementación de la plataforma n8n para sus clientes, 
            adaptándose a las preferencias y capacidades de cada empresa
          </p>
          <div className="bg-gradient-to-r from-[#4B32FF]/10 to-[#04CFFB]/10 rounded-xl p-6 border border-[#4B32FF]/20 max-w-3xl mx-auto">
            <h3 className="text-lg font-rajdhani font-bold text-white mb-3 flex items-center justify-center">
              <Database className="w-5 h-5 text-[#04CFFB] mr-2" />
              ¿Qué es un VPS?
            </h3>
            <p className="text-gray-300 font-rajdhani text-center leading-relaxed">
            Un VPS (Servidor Privado Virtual) es como arrendar tu propio computador en la nube: tiene recursos dedicados, es seguro y siempre accesible, pero sin la necesidad de comprar y mantener un servidor físico.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {modelos.map((modelo) => (
            <div
              key={modelo.id}
              className="group bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-3xl border border-[#4B32FF]/30 overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:border-[#04CFFB]/50 flex flex-col"
            >
              {/* Header de la tarjeta */}
              <div className="p-8 text-center border-b border-[#4B32FF]/20">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${modelo.color} mb-4 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                  <modelo.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4B32FF] group-hover:to-[#04CFFB] group-hover:bg-clip-text transition-all duration-300">
                  {modelo.title}
                </h3>
                <p className="text-lg text-[#04CFFB] font-rajdhani font-medium">
                  {modelo.subtitle}
                </p>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-8 space-y-6 flex-1 flex flex-col">
                {/* Descripción */}
                <div>
                  <p className="text-gray-300 font-rajdhani leading-relaxed">
                    {modelo.description}
                  </p>
                </div>

                {/* Ventajas */}
                <div>
                  <h4 className="text-lg font-rajdhani font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Ventajas
                  </h4>
                  <ul className="space-y-4">
                    {modelo.ventajas.map((ventaja, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mt-0.5 shadow-sm">
                          <ventaja.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300 font-rajdhani text-sm leading-relaxed flex-1">
                          {ventaja.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consideraciones */}
                <div>
                  <h4 className="text-lg font-rajdhani font-bold text-white mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-amber-400 mr-2" />
                    Consideraciones
                  </h4>
                  <ul className="space-y-4">
                    {modelo.consideraciones.map((consideracion, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mt-0.5 shadow-sm">
                          <consideracion.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300 font-rajdhani text-sm leading-relaxed flex-1">
                          {consideracion.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recomendado para */}
                <div className="bg-gradient-to-r from-[#4B32FF]/10 to-[#04CFFB]/10 rounded-xl p-6 border border-[#4B32FF]/20 mt-auto">
                  <h4 className="text-lg font-rajdhani font-bold text-white mb-4 flex items-center">
                    <Users className="w-5 h-5 text-[#04CFFB] mr-2" />
                    Recomendado para
                  </h4>
                  <ul className="space-y-4">
                    {modelo.recomendado.map((item, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] flex items-center justify-center mt-0.5 shadow-sm">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300 font-rajdhani text-sm leading-relaxed flex-1">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-[#4B32FF]/40 to-[#2784FA]/30 rounded-2xl border border-[#04CFFB]/40 backdrop-blur-sm">
            <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
              ¿No estás seguro cuál elegir?
            </h3>
            <p className="text-lg text-gray-300 font-rajdhani mb-6">
              Nuestro equipo te ayudará a identificar la mejor opción según las necesidades de tu empresa
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#04CFFB] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#2784FA] hover:to-[#4B32FF] transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelosEntrega;
