import React from 'react';
import { Bot, Cog, BarChart3, MessageSquare, Workflow, Share2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Automatización de Procesos",
      description: "Convierte tareas repetitivas en flujos inteligentes que ahorran tiempo, reducen costos y eliminan errores."
    },
    {
      icon: Workflow,
      title: "Integración de Sistemas",
      description: "Unimos tus aplicaciones y plataformas para que trabajen juntas, sin fricciones ni duplicidad de esfuerzos."
    },
    {
      icon: MessageSquare,
      title: "Chatbots Empresariales",
      description: "Asistentes virtuales que atienden a tus clientes 24/7, resolviendo consultas y mejorando la experiencia."
    },
    {
      icon: Cog,
      title: "Soluciones a Medida",
      description: "Diseñamos desarrollos personalizados que responden a tus desafíos específicos y potencian tu negocio."
    },
    {
      icon: Share2,
      title: "Automatización en Redes Sociales",
      description: "Publicaciones programadas, generación de contenido y reportes automáticos para mantener tu marca siempre activa."
    },
    {
      icon: BarChart3,
      title: "Automatización de Reportes",
      description: "Genera y envía informes automáticos de manera eficiente, ahorrando tiempo y recursos."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#0a0a2e] to-[#000018] px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Nuestros Servicios
          </h2>
      
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl border border-[#4B32FF]/30 backdrop-blur-sm hover:border-[#04CFFB]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-xl mb-6 group-hover:from-[#5027FE] group-hover:to-[#04CFFB] transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-rajdhani font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 font-rajdhani leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
