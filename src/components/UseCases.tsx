import React from 'react';
import { DollarSign, Mail, BarChart3, Share2, Bot, Bell } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      icon: DollarSign,
      title: "Registro Automático de Pagos",
      description: "Detecta transferencias y actualiza automáticamente tu sistema contable o Google Sheets, sin trabajo manual."
    },
    {
      icon: Mail,
      title: "Gestión Inteligente de Correos",
      description: "Clasifica emails entrantes, genera tickets en tu CRM y envía notificaciones inmediatas al equipo correspondiente."
    },
    {
      icon: BarChart3,
      title: "Reportes Ejecutivos Automatizados",
      description: "Reúne datos de distintas plataformas (ventas, marketing, soporte) y entrega reportes claros."
    },
    {
      icon: Share2,
      title: "Automatización de Redes Sociales",
      description: "Programa publicaciones, responde mensajes frecuentes y genera reportes de interacción."
    },
    {
      icon: Bot,
      title: "Chatbots Empresariales",
      description: "Atiende clientes 24/7 con respuestas personalizadas, conectando el bot a tu base de datos, agenda o sistema de ventas."
    },
    {
      icon: Bell,
      title: "Monitoreo y Alertas Automáticas",
      description: "Detecta eventos clave en tus sistemas (errores, caídas o KPIs críticos) y envía alertas inmediatas."
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
            Ejemplos claros de cómo la automatización puede ahorrar tiempo, reducir errores y hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden p-8 bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl border border-[#4B32FF]/30 hover:border-[#04CFFB]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Fondo uniforme para todos */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-[#4B32FF] to-[#2784FA] mb-6 group-hover:shadow-lg transition-all duration-300">
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-rajdhani font-bold text-white mb-4">
                {useCase.title}
              </h3>
              
              <p className="text-gray-300 font-rajdhani leading-relaxed">
                {useCase.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
