import { useState, useRef } from 'react';
import { Bot, Cog, BarChart3, Workflow, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Cog, 
      title: "Desarrollo de Soluciones a Medida",
      impactPhrase: "Si puedes imaginarlo, podemos construirlo.",
      description: "Diseñamos automatizaciones que se adaptan perfectamente a los procesos y objetivos de tu negocio. Cada proyecto se construye para maximizar la eficiencia y darte una ventaja competitiva real.",
      backgroundImage: "/assets/services/Soluciones-Medida.png",
      buttonText: "Contarme tu idea"
    },
    {
      icon: Workflow,
      title: "Integración de Sistemas",
      impactPhrase: "Conecta tus herramientas, unifica tu negocio.",
      description: "Integramos tus herramientas clave —Gmail, WhatsApp, Google Sheets, Slack y más— para que la información fluya automáticamente entre ellas, eliminando pasos manuales y errores humanos.",
      backgroundImage: "/assets/services/Integracion-Sistemas.png",
      buttonText: "Quiero conectar mis herramientas"
    },
    
    {
      icon: Cog, 
      title: "Optimización Operativa y Control Interno",
      impactPhrase: "Menos tareas repetitivas, más tiempo para lo estratégico.",
      description: "Digitalizamos y automatizamos tus operaciones internas: gestión de inventarios, pedidos, tareas de RRHH o mantenimiento. Tu equipo deja atrás el trabajo manual para enfocarse en actividades que realmente generan valor.",
      backgroundImage: "/assets/services/Optimizacion-Operativa.png",
      buttonText: "Optimizar mis operaciones"
    },
    {
      icon: Bot,
      title: "Asistentes Virtuales",
      impactPhrase: "Tu propio experto disponible 24/7, para tus clientes y tu equipo.",
      description: "Creamos asistentes con IA que aprenden de tus documentos y bases de datos. Responden consultas complejas, ejecutan tareas y entregan soporte instantáneo.",
      backgroundImage: "/assets/services/Asistentes-Virtuales.png",
      buttonText: "Descubrir los Chatbots"
    },
    {
      icon: Share2, 
      title: "Automatización de Marketing y Redes Sociales",
      impactPhrase: "Pon tu marketing en piloto automático y multiplica tus resultados.",
      description: "Automatizamos todo tu marketing digital: publicaciones, generación de contactos interesados y seguimiento automático mediante correos personalizados que impulsan tus ventas.",
      backgroundImage: "/assets/services/Marketing-Redes-Sociales.png",
      buttonText: "Automatizar mi marketing"
    },
    {
      icon: BarChart3,
      title: "Automatización de Reportes y Analítica (BI)",
      impactPhrase: "Decisiones basadas en datos, no en suposiciones.",
      description: "Transformamos tus datos en tu mayor activo. Creamos flujos que consolidan información de distintas fuentes, generan reportes automáticos y envían alertas inteligentes para que siempre tengas el control y la información que necesitas.",
      backgroundImage: "/assets/services/Reportes-Analitica.png",
      buttonText: "Ver mis datos en acción"
    },
    {
      icon: Bot, 
      title: "Integraciones con Inteligencia Artificial",
      impactPhrase: "Anticípate al futuro con IA predictiva.",
      description: "Llevamos tus flujos de trabajo al siguiente nivel. Implementamos IA para realizar análisis predictivos, permitiendo decisiones más rápidas y rentables.",
      backgroundImage: "/assets/services/Ia-Avanzada.png",
      buttonText: "Explorar IA Avanzada"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-[#0a0a2e] to-[#000018] px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 sm:mb-6">
            Nuestros Servicios
          </h2>
        </div>

        {/* Carrusel de Servicios */}
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
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-0 sm:px-4">
                  <div 
                    className="relative rounded-3xl overflow-hidden min-h-[500px] sm:min-h-[600px] flex items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 24, 0.7), rgba(0, 0, 24, 0.4)), url(${service.backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {/* Contenido del servicio */}
                    <div className="relative z-10 p-2 sm:p-6 md:p-8 lg:p-12 text-center max-w-4xl mx-auto">
                      {/* Icono */}
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-2xl mb-2 sm:mb-6 md:mb-8">
                        <service.icon className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                      </div>

                      {/* Título */}
                      <h3 className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-orbitron font-bold text-white mb-1 sm:mb-4 md:mb-6 px-1 leading-tight">
                        {service.title}
                      </h3>

                      {/* Frase de impacto (Subtítulo) */}
                      <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-[#04CFFB] font-rajdhani font-bold mb-2 sm:mb-6 md:mb-8 px-1 leading-tight">
                        {service.impactPhrase}
                      </p>

                      {/* Descripción con fondo semitransparente */}
                      <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-1 sm:p-4 md:p-6 mb-3 sm:mb-8 md:mb-10 max-w-4xl mx-auto">
                        <p className="text-xs sm:text-base md:text-lg text-white font-rajdhani leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Botón de contacto */}
                      <button
                        onClick={scrollToContact}
                        className="inline-flex items-center px-2 py-1 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-xs sm:text-base md:text-lg rounded-xl hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-2xl min-h-[32px] min-w-[120px] sm:min-w-[200px]"
                      >
                        {service.buttonText}
                        <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
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
      </div>
    </section>
  );
};

export default Services;
