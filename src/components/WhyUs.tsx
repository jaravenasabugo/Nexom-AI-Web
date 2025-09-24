import React from 'react';
import { Target, Zap, Shield } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: Target,
      title: "Personalización total",
      description: "Cada solución se diseña a la medida de tu negocio, con foco en tus procesos y objetivos.",
      gradient: "from-[#4B32FF] to-[#2784FA]"
    },
    {
      icon: Zap,
      title: "Implementación ágil",
      description: "De la idea a la ejecución en semanas, no meses. Generamos valor desde el primer día.",
      gradient: "from-[#2784FA] to-[#04CFFB]"
    },
    {
      icon: Shield,
      title: "Confianza y seguridad",
      description: "Protegemos tus datos y procesos con flujos estables, trazables y seguros, para que automatices con tranquilidad.",
      gradient: "from-[#5027FE] to-[#741FFF]"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-[#0a0a2e] to-[#000018] px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Por Qué Elegirnos
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Somos más que proveedores de tecnología, somos tus socios en la transformación digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-500 transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:shadow-2xl transition-all duration-300`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 font-rajdhani leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-[#4B32FF]/40 to-[#2784FA]/30 rounded-2xl border border-[#04CFFB]/40 backdrop-blur-sm">
            <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-lg text-gray-300 font-rajdhani mb-6">
              Únete a las empresas que ya están aprovechando el poder de la automatización inteligente
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#04CFFB] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#2784FA] hover:to-[#4B32FF] transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Comenzar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
