import React from 'react';
import { Target, Lightbulb, TrendingUp, Settings } from 'lucide-react';

const AnchorMessages = () => {
  const messages = [
    {
      icon: Target,
      text: "IA simple y útil: acercamos la innovación al corazón de tu empresa.",
      gradient: "from-[#4B32FF] to-[#2784FA]"
    },
    {
      icon: Lightbulb,
      text: "Soluciones que transforman procesos en oportunidades de crecimiento.",
      gradient: "from-[#2784FA] to-[#04CFFB]"
    },
    {
      icon: TrendingUp,
      text: "Automatización inteligente para impulsar tu productividad y tus resultados.",
      gradient: "from-[#5027FE] to-[#741FFF]"
    },
    {
      icon: Settings,
      text: "Tecnología que simplifica hoy y potencia el futuro de tu negocio.",
      gradient: "from-[#1359FF] to-[#4B32FF]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#000018] to-[#0a0a2e] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-2xl border border-[#4B32FF]/20 backdrop-blur-sm hover:border-[#04CFFB]/40 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${message.gradient} mb-6 group-hover:shadow-lg transition-all duration-300`}>
                <message.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg font-rajdhani font-medium text-white leading-relaxed">
                {message.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnchorMessages;
