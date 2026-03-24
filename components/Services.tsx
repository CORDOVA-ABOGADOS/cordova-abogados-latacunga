import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative bg-cinematic-900 overflow-hidden py-16 border-b border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cinematic-900/95 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2428&auto=format&fit=crop" 
            alt="Legal Library" 
            className="w-full h-full object-cover opacity-10"
          />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        {/* Unified Section Header - Compact version */}
        <div className="max-w-3xl mb-12">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase block font-bold mb-3">Especialidades</span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-4">
                Áreas de <span className="text-gold-500 italic">Práctica</span>
            </h2>
            <div className="h-[1.5px] w-20 bg-gradient-to-r from-gold-500 to-transparent"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-6 border transition-all duration-500 relative overflow-hidden bg-cinematic-800/20 backdrop-blur-sm border-white/5 hover:border-gold-500/30 hover:bg-cinematic-800/40 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/5 group-hover:border-gold-500/40 transition-all duration-500"></div>
              
              <div className="mb-6 relative z-10 flex justify-start">
                 <div className="relative">
                    <div className="absolute inset-0 bg-gold-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-trust-900 to-cinematic-900 border border-gold-500/20 group-hover:border-gold-500/50 group-hover:shadow-[0_0_20px_rgba(230,181,70,0.2)] transition-all duration-500 relative z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <service.icon 
                            size={24} 
                            strokeWidth={1.5}
                            className="text-gold-500 group-hover:scale-110 group-hover:text-cream-100 transition-all duration-500"
                        />
                    </div>
                 </div>
              </div>
              
              <h4 className="font-serif text-xl text-cream-100 mb-2 group-hover:text-gold-400 transition-colors tracking-tight">
                {service.title}
              </h4>
              <p className="text-cream-100/60 text-sm leading-relaxed font-light group-hover:text-cream-100/90 transition-colors">
                {service.description}
              </p>

              <div className="mt-4 h-[1px] w-0 bg-gold-500/20 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;