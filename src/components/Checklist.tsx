import React from 'react';
import { FileText, Monitor, RotateCcw, Clock, ListChecks, Link, ArrowRight } from 'lucide-react';

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
      text: "Un proceso es automatizable cuando sigue pasos definidos, por ejemplo: si ocurre X, entonces hacer Y."
    },
    
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a2e] to-[#000018] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            ¿Cómo sé si mi proceso puede automatizarse?
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Verifica si tu proceso cumple con estos criterios para determinar su potencial de automatización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-gradient-to-br from-[#1E1CA1]/20 to-[#4B32FF]/10 rounded-xl border border-[#4B32FF]/20 hover:border-[#04CFFB]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-2xl mb-4 group-hover:from-[#5027FE] group-hover:to-[#04CFFB] transition-all duration-300 group-hover:scale-110">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-base font-rajdhani text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-[#4B32FF]/30 to-[#2784FA]/20 rounded-2xl border border-[#04CFFB]/30 backdrop-blur-sm">
            <h3 className="text-2xl font-rajdhani font-bold text-[#04CFFB] mb-4">
              ¿Tu proceso cumple con estos puntos?
            </h3>
            <p className="text-lg text-gray-300 font-rajdhani mb-6">
              Hablemos y lo automatizamos juntos
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] text-white font-rajdhani font-bold rounded-xl hover:from-[#5027FE] hover:to-[#2784FA] transition-all duration-300 transform hover:scale-105"
            >
              Comenzar Evaluación
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;