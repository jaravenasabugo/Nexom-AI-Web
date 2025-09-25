import React, { useState } from 'react';
import { Send, User, Mail, MessageCircle, Target, Building, Globe } from 'lucide-react';

/* ===== Utilidades de validación/sanitización ===== */
const stripTags = (s: string) => s.replace(/<\/?[^>]+(>|$)/g, '');
const sanitize = (s: string) => stripTags(s).replace(/\s+/g, ' ').trim();

const isValidEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(email);
};

const isValidURL = (url: string) => {
  if (!url) return true; // opcional
  try {
    const u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
};

const isValidName = (name: string) => {
  // Letras, espacios y algunos signos comunes. Largo 2-100.
  const re = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ'’. -]{2,100}$/;
  return re.test(name);
};
/* ================================================ */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    interest: 'cotizacion',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // No recortamos mientras escribe para no incomodar; sanitizamos al enviar.
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Sanitizar y recortar longitudes
    const payload = {
      name: sanitize(formData.name).slice(0, 100),
      email: sanitize(formData.email).toLowerCase().slice(0, 150),
      company: sanitize(formData.company).slice(0, 120),
      website: sanitize(formData.website).slice(0, 200),
      interest: formData.interest, // select controlado
      message: sanitize(formData.message).slice(0, 1000),
    };

    // Validaciones
    if (!isValidName(payload.name)) {
      alert('Por favor ingresa un nombre válido (solo letras y espacios, entre 2 y 100 caracteres).');
      return;
    }
    if (!isValidEmail(payload.email)) {
      alert('Por favor ingresa un email válido.');
      return;
    }
    if (payload.website && !isValidURL(payload.website)) {
      alert('La URL de tu sitio web no parece válida (usa http(s)://).');
      return;
    }
    if (!payload.message || payload.message.length < 5) {
      alert('El mensaje es muy corto. Cuéntanos un poco más (mínimo 5 caracteres).');
      return;
    }

    try {
      const response = await fetch(
        // Paso 2 (proteger endpoint) lo haremos luego; por ahora dejamos la misma URL:
        import.meta.env.VITE_CONTACT_ENDPOINT,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
        setFormData({
          name: '',
          email: '',
          company: '',
          website: '',
          interest: 'cotizacion',
          message: ''
        });
      } else {
        alert("Ocurrió un error, intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Fondo espacial animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05051a] via-[#0a0a2e] to-[#000010] overflow-hidden">
        {/* Nebulosas animadas */}
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-[#4B32FF] rounded-full mix-blend-screen filter blur-[140px] opacity-60 animate-[float_14s_ease-in-out_infinite]" />
        <div className="absolute top-1/4 right-0 w-[34rem] h-[34rem] bg-[#04CFFB] rounded-full mix-blend-screen filter blur-[160px] opacity-45 animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem] bg-[#2784FA] rounded-full mix-blend-screen filter blur-[180px] opacity-40 animate-[float_22s_ease-in-out_infinite]" />

        {/* Estrellas parpadeantes */}
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

        {/* Meteoritos diagonales */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-0 animate-[shooting_6s_linear_infinite]"
            style={{
              top: `${10 + i * 20}%`,
              left: `${70 + i * 5}%`,
              width: "180px",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #04CFFB, white)",
              borderRadius: "50%",
              transform: "rotate(135deg)",
              animationDelay: `${i * 2.5}s`,
            }}
          />
        ))}

        {/* Efecto aurora boreal */}
        <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-[#04CFFB]/10 via-[#4B32FF]/20 to-transparent blur-[120px] animate-[aurora_12s_ease-in-out_infinite]" />
      </div>

      {/* Contenido + Formulario */}
      <div className="relative max-w-4xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6 drop-shadow-lg">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-200 font-rajdhani max-w-3xl mx-auto drop-shadow-md">
            ¿Listo para automatizar tu negocio? Cuéntanos tu proyecto y te ayudaremos a hacerlo realidad.
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-gradient-to-br from-[#1E1CA1]/30 to-[#4B32FF]/20 rounded-2xl border border-[#4B32FF]/30 backdrop-blur-sm p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
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
                  maxLength={100}
                  pattern="[A-Za-zÁÉÍÓÚÜÑáéíóúüñ'’. \-]{2,100}"
                  title="Solo letras y espacios (2 a 100 caracteres)"
                  autoComplete="name"
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
                  maxLength={150}
                  autoComplete="email"
                  inputMode="email"
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Empresa */}
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
                  maxLength={120}
                  autoComplete="organization"
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 transition-all duration-300"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              {/* Website */}
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
                  maxLength={200}
                  placeholder="https://tuempresa.com"
                  autoComplete="url"
                  className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Interés */}
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
                maxLength={1000}
                className="w-full px-4 py-3 bg-[#000018]/50 border border-[#4B32FF]/50 rounded-xl text-white font-rajdhani placeholder-gray-400 focus:border-[#04CFFB] focus:outline-none focus:ring-2 focus:ring-[#04CFFB]/20 transition-all duration-300 resize-vertical"
                placeholder="Cuéntanos sobre tu proyecto, qué procesos quieres automatizar y qué resultados esperas obtener..."
              />
              <p className="text-sm text-gray-400 font-rajdhani">
                Máx. 1000 caracteres
              </p>
            </div>

            {/* Botón */}
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

      {/* Animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50px) translateX(30px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes shooting {
          0% { transform: translate(0, 0) rotate(135deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(-600px, 600px) rotate(135deg); opacity: 0; }
        }
        @keyframes aurora {
          0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scaleY(1.2); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
