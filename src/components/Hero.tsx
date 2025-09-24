import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown, Zap } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Acelerar el video 1.5x
      video.playbackRate = 1.5;
      
      // Cambiar a gradiente cuando el video termine
      const handleVideoEnd = () => {
        video.pause();
        setShowVideo(false);
      };

      video.addEventListener('ended', handleVideoEnd);
      
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  // Reiniciar video cuando el usuario regrese a la parte superior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShowVideo(true);
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out">
        {showVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          >
            <source src="/assets/Video final.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#000018] via-[#1E1CA1] to-[#000018] transition-opacity duration-1000 ease-in-out"></div>
        )}
        {/* Overlay con transparencia para el video */}
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-1000 ease-in-out"></div>
      </div>

      {/* Background particles effect */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#4B32FF] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#2784FA] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-[#04CFFB] rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Large logo - only show after video ends */}
      {!showVideo && (
        <div className="z-30 relative mb-10 flex items-center justify-center transition-opacity duration-1000">
          <img 
            src="/assets/Logos/15.png" 
            alt="Nexom AI Logo"
            className="h-[40rem] md:h-[50rem] lg:h-[60rem] xl:h-[70rem] object-contain"
          />
        </div>
      )}

      <div className="max-w-5xl mx-auto z-20 relative">
        
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-8 leading-tight">
          IA que lleva tu empresa
          <br />
          <span className="bg-gradient-to-r from-[#4B32FF] to-[#04CFFB] bg-clip-text text-transparent">
            al siguiente nivel
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-rajdhani mb-12 max-w-3xl mx-auto leading-relaxed">
          Transformamos procesos complejos en soluciones automatizadas que impulsan el crecimiento de tu negocio.
        </p>

        <a 
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] text-white font-rajdhani font-bold text-lg rounded-xl hover:from-[#5027FE] hover:to-[#1359FF] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_40px_rgba(75,50,255,0.3)]"
        >
          Solicitar Cotización
          <Zap className="ml-2 w-5 h-5" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-[#04CFFB]" />
      </div>
    </section>
  );
};

export default Hero;