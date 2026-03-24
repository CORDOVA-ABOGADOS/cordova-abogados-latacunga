import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Utility component for counting up numbers
const Counter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const update = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const ease = (x: number) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      
      setCount(Math.floor(ease(percentage) * end));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-cinematic-900 pt-32 pb-12 md:pt-40 md:pb-20">
      {/* Background Image with Cinematic Pan */}
      <div className="absolute inset-0 z-0">
        {/* Enriched Gradient Overlay - Mixing Cinematic Black with Trust Navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-cinematic-900 via-trust-900/95 to-trust-900/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-trust-900 via-cinematic-900/50 to-transparent z-10"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2428&auto=format&fit=crop"
          alt="Library Knowledge Background" 
          className="w-full h-full object-cover opacity-40 animate-slow-pan"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 w-full">
          
          {/* Text Side */}
          <div className="md:w-1/2 lg:w-3/5 pt-4 md:pt-0">
            <div className="flex items-center gap-4 mb-6 animate-fade-in">
               <div className="h-[1px] w-12 bg-gold-500 box-shadow-glow"></div>
               <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold text-glow">Legado de 4 Generaciones</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-cream-100 mb-8 animate-fade-in-up drop-shadow-2xl">
              Patricio Hernán <br />
              <span className="text-gold-500 relative inline-block">
                {/* Moving Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/20 blur-[60px] rounded-full animate-blob -z-10 mix-blend-screen"></div>
                
                Córdova Cepeda
                {/* Subtle underline glow */}
                <span className="absolute bottom-0 left-0 w-full h-[20%] bg-gold-500/20 blur-xl -z-10"></span>
              </span>
            </h1>

            {/* Updated Text Description */}
            <p className="font-sans text-cream-100/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl animate-fade-in-up [animation-delay:200ms] border-l-2 border-gold-500/50 pl-6 bg-gradient-to-r from-trust-800/30 to-transparent py-2">
              Abogado con más de 38 años de experiencia, nuestro trabajo se mide en confianza y soluciones bien hechas.
            </p>

            {/* CTA: llamada directa */}
            <div className="mb-12 animate-fade-in-up [animation-delay:300ms]">
                <a
                  href="tel:+593984253809"
                  className="group inline-flex items-center gap-3 px-10 py-5 font-bold uppercase tracking-[0.2em] text-xs bg-gold-500 text-cinematic-900 hover:bg-cream-100 shadow-[0_0_20px_rgba(230,181,70,0.3)] transition-all duration-500"
                >
                  Consulta Inmediata
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            {/* Stats Section */}
            <div className="mt-10 pt-10 border-t border-white/10 animate-fade-in-up [animation-delay:400ms]">
                <h4 className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-8 text-center md:text-left opacity-90">
                    Por Qué Escogernos
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4">
                    {/* Stat Item 1 */}
                    <div className="flex flex-col items-center md:items-start">
                        <span className="font-serif text-4xl md:text-5xl text-cream-100 font-medium mb-2">
                           +<Counter end={1200} duration={4500} />
                        </span>
                        <span className="text-gold-500/80 text-[10px] uppercase tracking-[0.15em] font-medium">Casos Resueltos</span>
                    </div>

                    {/* Stat Item 2 */}
                    <div className="flex flex-col items-center md:items-start border-t border-white/5 pt-4 sm:pt-0 sm:border-t-0 sm:border-l sm:pl-8 border-white/10">
                        <span className="font-serif text-4xl md:text-5xl text-cream-100 font-medium mb-2">
                           +<Counter end={38} duration={5000} />
                        </span>
                        <span className="text-gold-500/80 text-[10px] uppercase tracking-[0.15em] font-medium">Años Experiencia</span>
                    </div>

                    {/* Stat Item 3 */}
                    <div className="flex flex-col items-center md:items-start border-t border-white/5 pt-4 sm:pt-0 sm:border-t-0 sm:border-l sm:pl-8 border-white/10">
                        <span className="font-serif text-4xl md:text-5xl text-cream-100 font-medium mb-2">
                           <Counter end={3} duration={2000} />
                        </span>
                        <span className="text-gold-500/80 text-[10px] uppercase tracking-[0.15em] font-medium">Abogados a su servicio</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Image Side - Dr. Patricio Cordova */}
          <div className="md:w-1/2 lg:w-2/5 relative animate-fade-in [animation-delay:600ms] hidden md:block group perspective-1000">
             <div className="relative h-[550px] w-full max-w-md mx-auto mt-8 md:mt-0 transform transition-transform duration-700 group-hover:rotate-y-2">
                 {/* Decorative Frame Elements - Glowing */}
                 <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gold-500/50 shadow-[0_0_15px_rgba(230,181,70,0.2)] transition-all duration-500 group-hover:-top-8 group-hover:-right-8"></div>
                 <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-gold-500/50 shadow-[0_0_15px_rgba(230,181,70,0.2)] transition-all duration-500 group-hover:-bottom-8 group-hover:-left-8"></div>
                 
                 {/* Main Image */}
                 <div className="h-full w-full relative overflow-hidden bg-trust-900 shadow-2xl shadow-black/60 rounded-sm">
                    <div className="absolute inset-0 bg-gradient-to-t from-trust-900 via-transparent to-transparent z-10 opacity-20"></div>
                     <img 
                        src="https://i.postimg.cc/mrjqF2Rk/IMG_9529.jpg" 
                        alt="Dr. Patricio Córdova Cepeda" 
                        className="w-full h-full object-cover object-top filter grayscale-[10%] hover:grayscale-0 contrast-110 transition-all duration-1000 ease-out scale-100 group-hover:scale-105"
                     />
                 </div>
             </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-12 z-20 hidden md:flex items-center gap-4 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream-100/50 rotate-90 origin-right translate-x-full font-medium">Desliza</span>
        <div className="h-20 w-[1px] bg-gradient-to-b from-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;