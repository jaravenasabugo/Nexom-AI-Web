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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Nuestros Servicios
          </h2>
        </div>

        {/* Carrusel de Servicios */}
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
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div 
                    className="relative rounded-3xl overflow-hidden min-h-[600px] flex items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 24, 0.7), rgba(0, 0, 24, 0.4)), url(${service.backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {/* Contenido del servicio */}
                    <div className="relative z-10 p-12 text-center max-w-4xl mx-auto">
                      {/* Icono */}
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-2xl mb-8">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Título */}
                      <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        {service.title}
                      </h3>

                      {/* Frase de impacto (Subtítulo) */}
                      <p className="text-xl md:text-2xl text-[#04CFFB] font-rajdhani font-bold mb-8">
                        {service.impactPhrase}
                      </p>

                      {/* Descripción con fondo semitransparente */}
                      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-4xl mx-auto">
                        <p className="text-lg text-white font-rajdhani leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Botón de contacto */}
                      <button
                        onClick={scrollToContact}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-105 shadow-2xl"
                      >
                        {service.buttonText}
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
