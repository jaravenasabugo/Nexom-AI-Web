import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#000018] text-white">
      {/* Header con navegación */}
      <div className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] border-b border-[#4B32FF]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={handleBackClick}
            className="flex items-center text-[#04CFFB] hover:text-white transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-rajdhani">Volver</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-2">
            Política de Privacidad
          </h1>
          <p className="text-[#04CFFB] font-rajdhani text-lg">
            Nexom AI
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none">
          {/* Fecha de entrada en vigor */}
          <div className="bg-[#0a0a2e]/50 border border-[#4B32FF]/20 rounded-lg p-6 mb-8">
            <p className="text-[#04CFFB] font-rajdhani text-lg font-semibold">
              Fecha de entrada en vigor: 3/10/2025
            </p>
          </div>

          {/* Introducción */}
          <div className="mb-8">
            <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
              En Nexom AI, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. 
              Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información 
              que nos proporcionas a través de nuestros servicios digitales, que incluyen (pero no se 
              limitan a) nuestra página web, chatbots, integraciones de mensajería y soluciones de automatización.
            </p>
          </div>

          {/* Sección 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Datos que Recopilamos
            </h2>
            <p className="text-gray-300 font-rajdhani mb-4">
              Dependiendo de cómo interactúes con nosotros, podemos recopilar la siguiente información:
            </p>
            <ul className="space-y-3 text-gray-300 font-rajdhani">
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span><strong className="text-white">Información de contacto:</strong> Nombre, correo electrónico, número de teléfono u otros datos similares que nos proporciones.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span><strong className="text-white">Contenido de las interacciones:</strong> Mensajes, documentos, imágenes u otros contenidos compartidos en nuestros canales (WhatsApp, formularios web, correo u otras integraciones).</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span><strong className="text-white">Datos técnicos:</strong> Dirección IP, navegador, sistema operativo, fecha y hora de acceso, métricas de uso y trazabilidad de servicios.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span><strong className="text-white">Información de clientes y empresas:</strong> Datos relacionados con los procesos que se automatizan, siempre con fines estrictamente operativos.</span>
              </li>
            </ul>
          </div>

          {/* Sección 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Uso de la Información
            </h2>
            <p className="text-gray-300 font-rajdhani mb-4">
              La información recopilada se utiliza con los siguientes fines:
            </p>
            <ul className="space-y-3 text-gray-300 font-rajdhani">
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span><strong className="text-white">Proveer y operar los servicios:</strong> Responder consultas, procesar solicitudes y ejecutar los flujos de automatización contratados.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span><strong className="text-white">Mejorar nuestros servicios:</strong> Analizar interacciones para optimizar la calidad, seguridad y eficiencia de nuestras soluciones.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span><strong className="text-white">Comunicación:</strong> Enviar notificaciones relevantes, actualizaciones o información sobre nuestros servicios, únicamente cuando exista consentimiento previo.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span><strong className="text-white">Cumplimiento legal:</strong> Atender las obligaciones establecidas por la legislación vigente.</span>
              </li>
            </ul>
          </div>

          {/* Sección 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              Almacenamiento y Protección de Datos
            </h2>
            <p className="text-gray-300 font-rajdhani mb-4">
              Tu información se almacena de forma segura en servidores utilizados por Nexom AI (infraestructura propia o VPS gestionados a través de proveedores certificados).
            </p>
            <p className="text-gray-300 font-rajdhani mb-4">
              Implementamos medidas de seguridad que incluyen:
            </p>
            <ul className="space-y-2 text-gray-300 font-rajdhani">
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span>Cifrado de datos en tránsito y en reposo.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span>Controles de acceso y autenticación.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span>Monitoreo y respaldos periódicos.</span>
              </li>
            </ul>
          </div>

          {/* Sección 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              Compartir Información con Terceros
            </h2>
            <p className="text-gray-300 font-rajdhani mb-4">
              En Nexom AI no vendemos ni alquilamos tus datos personales. Solo compartiremos información en los siguientes casos:
            </p>
            <ul className="space-y-3 text-gray-300 font-rajdhani">
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span>Con proveedores tecnológicos de confianza (ej. hosting, infraestructura cloud, API de mensajería) estrictamente necesarios para la operación del servicio.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span>Con socios o integradores autorizados que colaboren en la implementación de soluciones de automatización.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span>Cuando lo requiera una obligación legal o regulatoria.</span>
              </li>
            </ul>
          </div>

          {/* Sección 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              Tus Derechos
            </h2>
            <p className="text-gray-300 font-rajdhani mb-4">
              De acuerdo con la normativa vigente en materia de protección de datos, tienes derecho a:
            </p>
            <ul className="space-y-2 text-gray-300 font-rajdhani mb-4">
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span>Solicitar acceso a tus datos personales.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span>Rectificar información incorrecta o incompleta.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span>Solicitar la eliminación de tus datos cuando sea procedente.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04CFFB] mr-2">•</span>
                <span>Revocar el consentimiento previamente otorgado.</span>
              </li>
            </ul>
            <p className="text-gray-300 font-rajdhani">
            Para ejercer estos derechos, contáctanos a través de:{" "}
            <a href="mailto: nexom2025ai@gmail.com" className="text-[#04CFFB] hover:text-white transition-colors">
                nexom2025ai@gmail.com
              </a>
            </p>
          </div>

          {/* Sección 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              Consentimiento
            </h2>
            <p className="text-gray-300 font-rajdhani">
              Al interactuar con los servicios digitales de Nexom AI, aceptas los términos de esta Política de Privacidad.
              Si no estás de acuerdo, por favor abstente de usar nuestros servicios.
            </p>
          </div>

          {/* Sección 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Cambios en la Política de Privacidad
            </h2>
            <p className="text-gray-300 font-rajdhani mb-4">
              Nexom AI se reserva el derecho de actualizar esta política en cualquier momento.
              Cualquier cambio será notificado mediante la publicación de la versión más reciente en esta misma página.
            </p>
            <p className="text-gray-300 font-rajdhani">
              Te recomendamos revisar esta política periódicamente.
            </p>
          </div>
        </div>

        {/* Botón de volver en la parte inferior */}
        <div className="mt-12 pt-8 border-t border-[#4B32FF]/20">
          <div className="flex justify-center">
            <button
              onClick={handleBackClick}
              className="flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] hover:from-[#5027FE] hover:to-[#04CFFB] text-white font-rajdhani font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
