import { FileText, Monitor, Clock, ListChecks, ArrowRight } from 'lucide-react';

const Checklist = () => {
  const checklistItems = [
    {
      icon: FileText,
      text: "El proceso sigue pasos repetitivos y bien definidos."
    },
    {
      icon: Monitor,
      text: "Involucra uso de aplicaciones digitales o archivos (ej. Gmail, Excel, CRM)."
    },

    {
      icon: Clock,
      text: "Consume tiempo y recursos que pueden ser ahorrados."
    },
    {
      icon: ListChecks,
      text: "El proceso puede expresarse mediante reglas claras y repetibles que indican qué acción seguir en cada caso."
    },
    
  ];

  return (
    <section id="checklist" className="relative py-20 overflow-hidden px-4">
      {/* Video de fondo - Solo visible en desktop */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ minHeight: '100%', minWidth: '100%' }}
        >
          <source src="/assets/videos/presentacion-marca.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e]/80 to-[#000018]/90"></div>
      </div>
      
      {/* Fondo alternativo para mobile */}
      <div className="absolute inset-0 z-0 sm:hidden bg-gradient-to-b from-[#0a0a2e] to-[#000018]"></div>
      
      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 sm:mb-6">
            ¿Cómo sé si mi proceso puede automatizarse?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed">
            Verifica si tu proceso cumple con estos criterios para determinar su potencial de automatización
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="group text-center p-4 sm:p-6 bg-gradient-to-br from-[#1E1CA1]/50 to-[#4B32FF]/40 rounded-xl border border-[#4B32FF]/20 hover:border-[#04CFFB]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-2xl mb-3 sm:mb-4 group-hover:from-[#5027FE] group-hover:to-[#04CFFB] transition-all duration-300 group-hover:scale-110">
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-sm sm:text-base font-rajdhani text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-6 sm:p-8 bg-gradient-to-br from-[#4B32FF]/30 to-[#2784FA]/20 rounded-2xl border border-[#04CFFB]/30 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-rajdhani font-bold text-[#04CFFB] mb-4">
              ¿Tu proceso cumple con estos puntos?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 font-rajdhani mb-6">
              Hablemos y lo automatizamos juntos
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] text-white font-rajdhani font-bold rounded-xl hover:from-[#5027FE] hover:to-[#2784FA] transition-all duration-300 transform hover:scale-105 min-h-[48px] min-w-[200px]"
            >
              Comenzar Evaluación
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;