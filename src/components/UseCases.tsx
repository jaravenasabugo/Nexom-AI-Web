import React from 'react';
import { DollarSign, Mail, BarChart3, Share2, Bot } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      icon: DollarSign,
      title: "Registro automático de pagos",
      description: "Procesa correos del banco y carga datos en Excel/Google Sheets.",
      gradient: "from-[#4B32FF] to-[#2784FA]"
    },
    {
      icon: Mail,
      title: "Gestión de correos y notificaciones",
      description: "Clasifica emails y envía alertas a tu CRM o chat interno.",
      gradient: "from-[#2784FA] to-[#04CFFB]"
    },
    {
      icon: BarChart3,
      title: "Reportes automáticos",
      description: "Reúne información de distintas fuentes y genera reportes sin trabajo manual.",
      gradient: "from-[#5027FE] to-[#741FFF]"
    },
    {
      icon: Share2,
      title: "Automatización para redes sociales",
      description: "Programa y publica contenido automáticamente en múltiples plataformas sociales.",
      gradient: "from-[#1359FF] to-[#4B32FF]"
    },
    {
      icon: Bot,
      title: "Chatbots personalizados",
      description: "Asistentes virtuales que atienden clientes 24/7 con respuestas inteligentes.",
      gradient: "from-[#741FFF] to-[#2784FA]"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-[#000018] to-[#0a0a2e] px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Casos de Uso Concretos
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Ejemplos reales de cómo la automatización puede transformar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden p-8 bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${useCase.gradient} mb-6 group-hover:shadow-lg transition-all duration-300`}>
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-rajdhani font-bold text-white mb-4">
                {useCase.title}
              </h3>
              
              <p className="text-gray-300 font-rajdhani leading-relaxed">
                {useCase.description}
              </p>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;