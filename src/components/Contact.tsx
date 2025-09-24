import React, { useState } from 'react';
import { Send, User, Mail, MessageCircle, Target, Building, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    interest: 'cotizacion',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí iría la lógica de envío del formulario
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#000018] to-[#0a0a2e] px-4 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            ¿Listo para automatizar tu negocio? Cuéntanos tu proyecto y te ayudaremos a hacerlo realidad.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl border border-[#4B32FF]/30 backdrop-blur-sm p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nombre */}
              <div className="space-y-2">
                <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                  <User className="w-5 h-5 mr-2 text-[#04CFFB]" />
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                  <Mail className="w-5 h-5 mr-2 text-[#04CFFB]" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nombre de la empresa */}
              <div className="space-y-2">
                <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                  <Building className="w-5 h-5 mr-2 text-[#04CFFB]" />
                  Nombre de la empresa
                  <span className="text-gray-400 text-sm ml-2">(opcional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 transition-all duration-300"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              {/* Página web de la empresa */}
              <div className="space-y-2">
                <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                  <Globe className="w-5 h-5 mr-2 text-[#04CFFB]" />
                  Página web
                  <span className="text-gray-400 text-sm ml-2">(opcional)</span>
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 transition-all duration-300"
                  placeholder="https://tuempresa.com"
                />
              </div>
            </div>

            {/* Interés Principal */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                <Target className="w-5 h-5 mr-2 text-[#04CFFB]" />
                Interés Principal
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 transition-all duration-300"
              >
                <option value="cotizacion">Cotización</option>
                <option value="demo">Demo</option>
                <option value="consulta">Consulta</option>
              </select>
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                <MessageCircle className="w-5 h-5 mr-2 text-[#04CFFB]" />
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 transition-all duration-300 resize-vertical"
                placeholder="Cuéntanos sobre tu proyecto, qué procesos quieres automatizar y qué resultados esperas obtener..."
              />
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#5027FE] hover:to-[#2784FA] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_40px_rgba(75,50,255,0.3)]"
              >
                Enviar Mensaje
                <Send className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;