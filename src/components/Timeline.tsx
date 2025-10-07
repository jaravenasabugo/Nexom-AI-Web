import React from 'react';
import { Search, BarChart3, Settings, CheckCircle } from 'lucide-react';

const Timeline = () => {
  const phases = [
    {
      icon: Search,
      title: "Entendimiento de requerimientos",
      description: "Levantamiento de información y definición de objetivos.",
      active: true
    },
    {
      icon: BarChart3,
      title: "Evaluación de alternativas y presupuesto",
      description: "Análisis de opciones (desde soluciones simples hasta escalables con IA) y entrega de propuesta con presupuesto y plazos.",
      active: true
    },
    {
      icon: Settings,
      title: "Implementación de la solución",
      description: "Configuración del flujo, integración con las aplicaciones y pruebas iniciales.",
      active: true
    },
    {
      icon: CheckCircle,
      title: "Puesta en marcha y validación",
      description: "Ejecución en entorno real, validación de resultados con el cliente y ajustes finales.",
      active: true
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-[#000018] to-[#0a0a2e] px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Etapas del Proyecto de Automatización
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Un proceso estructurado que garantiza el éxito de tu implementación
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#4B32FF] to-[#04CFFB] hidden md:block"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 md:text-left ${
                  index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'
                }`}>
                  <div className={`p-8 rounded-2xl border transition-all duration-500 ${
                    phase.active 
                      ? 'bg-gradient-to-br from-[#4B32FF]/30 to-[#2784FA]/20 border-[#04CFFB]/50 shadow-2xl' 
                      : 'bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 border-[#4B32FF]/20 hover:border-[#4B32FF]/40'
                  }`}>
                    <h3 className={`text-2xl font-rajdhani font-bold mb-2 ${
                      phase.active ? 'text-[#04CFFB]' : 'text-white'
                    }`}>
                      {phase.title}
                      {phase.subtitle && (
                        <span className="block text-lg text-[#04CFFB] font-medium">
                          {phase.subtitle}
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-300 font-rajdhani leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className={`flex items-center justify-center w-16 h-16 rounded-full border-4 z-10 my-4 md:my-0 transition-all duration-500 ${
                  phase.active 
                    ? 'bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] border-[#04CFFB] shadow-lg' 
                    : 'bg-[#1E1CA1] border-[#4B32FF] hover:border-[#04CFFB]'
                }`}>
                  <phase.icon className={`w-8 h-8 ${phase.active ? 'text-white' : 'text-[#4B32FF]'}`} />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;