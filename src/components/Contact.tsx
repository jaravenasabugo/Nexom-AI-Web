import React, { useState } from 'react';
import { Send, User, Mail, MessageCircle, Target, Building, Globe, Phone } from 'lucide-react';

/* ===== Utilidades de validación/sanitización ===== */
const stripTags = (s: string) => s.replace(/<\/?[^>]+(>|$)/g, '');
const sanitize = (s: string) => stripTags(s).replace(/\s+/g, ' ').trim();

const isValidEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(email);
};

const isValidPhone = (phone: string) => {
  if (!phone) return true; // opcional
  const re = /^[0-9+\-\s]{6,20}$/;
  return re.test(phone);
};

const isValidURL = (url: string) => {
  if (!url) return true; // opcional
  // Permite URLs con o sin protocolo
  const re = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i;
  return re.test(url);
};

const isValidName = (name: string) => {
  const re = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ'’. -]{2,100}$/;
  return re.test(name);
};
/* ================================================ */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    interest: 'cotizacion',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "warning" | null,
    text: string
  }>({
    type: null,
    text: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Sanitizar y recortar longitudes
    const payload = {
      name: sanitize(formData.name).slice(0, 100),
      email: sanitize(formData.email).toLowerCase().slice(0, 150),
      phone: sanitize(formData.phone).slice(0, 20),
      company: sanitize(formData.company).slice(0, 120),
      website: sanitize(formData.website).slice(0, 200),
      interest: formData.interest,
      message: sanitize(formData.message).slice(0, 1000),
    };

    // Validaciones
    if (!isValidName(payload.name)) {
      setStatusMessage({ type: "error", text: "⚠️ Ingresa un nombre válido (2 a 100 caracteres, solo letras y espacios)." });
      return;
    }
    if (!isValidEmail(payload.email)) {
      setStatusMessage({ type: "error", text: "⚠️ El correo electrónico no es válido." });
      return;
    }
    if (payload.phone && !isValidPhone(payload.phone)) {
      setStatusMessage({ type: "error", text: "⚠️ El número de teléfono no es válido (usa solo dígitos, +, espacios o guiones)." });
      return;
    }
    if (payload.website && !isValidURL(payload.website)) {
      setStatusMessage({ type: "error", text: "⚠️ La página web no parece válida." });
      return;
    }
    if (!payload.message || payload.message.length < 5) {
      setStatusMessage({ type: "error", text: "⚠️ El mensaje es muy corto. Cuéntanos un poco más (mínimo 5 caracteres)." });
      return;
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_CONTACT_ENDPOINT,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setStatusMessage({ type: "success", text: "✅ ¡Gracias por tu mensaje! Te contactaremos pronto." });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          interest: 'cotizacion',
          message: ''
        });
      } else {
        setStatusMessage({ type: "error", text: "❌ Ocurrió un error en el servidor. Intenta nuevamente." });
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatusMessage({ type: "error", text: "❌ No se pudo conectar con el servidor." });
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Fondo espacial animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05051a] via-[#0a0a2e] to-[#000010] overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-[#4B32FF] rounded-full mix-blend-screen filter blur-[140px] opacity-60 animate-[float_14s_ease-in-out_infinite]" />
        <div className="absolute top-1/4 right-0 w-[34rem] h-[34rem] bg-[#04CFFB] rounded-full mix-blend-screen filter blur-[160px] opacity-45 animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem] bg-[#2784FA] rounded-full mix-blend-screen filter blur-[180px] opacity-40 animate-[float_22s_ease-in-out_infinite]" />
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-[twinkle_3s_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.9,
              animationDelay: `${Math.random() * 8}s`,
              transform: `scale(${Math.random() * 1.4 + 0.6})`,
            }}
          />
        ))}
      </div>

      {/* Contenido + Formulario */}
      <div className="relative max-w-4xl mx-auto z-10 px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
            Contáctanos
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 font-rajdhani max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            ¿Listo para automatizar tu negocio? Cuéntanos tu proyecto y te ayudaremos a hacerlo realidad.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl border border-[#4B32FF]/30 backdrop-blur-sm p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Nombre y Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2">
                <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                  <User className="w-5 h-5 mr-2 text-[#04CFFB]" /> Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  pattern="[A-Za-zÁÉÍÓÚÜÑáéíóúüñ''. \-]{2,100}"
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 min-h-[48px]"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                  <Mail className="w-5 h-5 mr-2 text-[#04CFFB]" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={150}
                  autoComplete="email"
                  inputMode="email"
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 min-h-[48px]"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            {/* Teléfono y Empresa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2">
                <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                  <Phone className="w-5 h-5 mr-2 text-[#04CFFB]" /> Teléfono <span className="text-gray-400 text-sm ml-2">(opcional)</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={20}
                  placeholder="+56 9 1234 5678"
                  autoComplete="tel"
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 min-h-[48px]"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                  <Building className="w-5 h-5 mr-2 text-[#04CFFB]" /> Empresa <span className="text-gray-400 text-sm ml-2">(opcional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  maxLength={120}
                  placeholder="Nombre de tu empresa"
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 min-h-[48px]"
                />
              </div>
            </div>

            {/* Website */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                <Globe className="w-5 h-5 mr-2 text-[#04CFFB]" /> Página web <span className="text-gray-400 text-sm ml-2">(opcional)</span>
              </label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                maxLength={200}
                placeholder="tusitio.com"
                autoComplete="url"
                className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 min-h-[48px]"
              />
            </div>

            {/* Interés */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                <Target className="w-5 h-5 mr-2 text-[#04CFFB]" /> Interés Principal
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 min-h-[48px]"
              >
                <option value="cotizacion">Cotización</option>
                <option value="demo">Demo</option>
                <option value="consulta">Consulta</option>
              </select>
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-rajdhani font-semibold text-lg mb-3">
                <MessageCircle className="w-5 h-5 mr-2 text-[#04CFFB]" /> Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                maxLength={1000}
                className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 resize-vertical min-h-[120px]"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
              <p className="text-sm text-gray-400 font-rajdhani">Máx. 1000 caracteres</p>
            </div>

            {/* Botón */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] text-white font-rajdhani font-bold text-base sm:text-lg rounded-xl hover:from-[#5027FE] hover:to-[#2784FA] transition-all duration-300 transform hover:scale-105 shadow-2xl min-h-[48px] min-w-[200px]"
              >
                Enviar Mensaje
                <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Mensaje de estado */}
            {statusMessage.type && (
              <div
                className={`mt-6 p-4 rounded-xl font-rajdhani text-lg text-center ${
                  statusMessage.type === "success"
                    ? "bg-green-600/20 border border-green-500 text-green-300"
                    : "bg-red-600/20 border border-red-500 text-red-300"
                }`}
              >
                {statusMessage.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
