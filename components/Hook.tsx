import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hook: React.FC = () => {
  return (
    <section className="py-24 relative bg-trust-900 border-t border-white/5 overflow-hidden">
      {/* Background Image - Updated */}
      <div className="absolute inset-0 z-0">
          {/* Reduced overlay opacity */}
          <div className="absolute inset-0 bg-trust-900/80 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cinematic-900 to-transparent z-10 opacity-70"></div>
          <img 
            src="https://i.postimg.cc/Z5qqX0RF/derecho-dbji.avif" 
            alt="Legal Context Background" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream-100 mb-8 leading-tight drop-shadow-lg">
              "Que un problema legal no defina su <span className="text-gold-500 italic">futuro</span>."
            </h2>
            
            <p className="text-cream-100/70 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
              Sabemos que detrás de cada caso hay una vida, una familia y una tranquilidad que recuperar. No deje espacio a la incertidumbre.
            </p>

            <div className="flex flex-col items-center gap-4">
                <a 
                    href="https://api.whatsapp.com/send/?phone=593984253809&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-gold-500 text-cinematic-900 font-bold text-xs uppercase tracking-[0.2em] hover:bg-cream-100 transition-all duration-300 shadow-[0_0_20px_rgba(230,181,70,0.3)] hover:scale-105"
                >
                    Hablar con un Abogado
                    <ArrowRight size={16} />
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hook;