import React from 'react';
import { PILLARS } from '../constants';

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-24 relative bg-cinematic-800 border-b border-white/5 overflow-hidden">
      {/* Background Image - Latacunga */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-cinematic-900/85 z-10"></div>
         <img 
            src="https://i.postimg.cc/rsSbZY8g/LATACUNGA.jpg" 
            alt="Latacunga - Nuestra Filosofía" 
            className="w-full h-full object-cover grayscale opacity-40"
         />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Unified Section Header */}
        <div className="max-w-3xl mb-16">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase block font-bold mb-3">Principios</span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-4">
                Nuestra <span className="text-gold-500 italic">Filosofía</span>
            </h2>
            <div className="h-[1.5px] w-20 bg-gradient-to-r from-gold-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => (
                <div 
                    key={pillar.id} 
                    className="group relative p-8 border border-white/5 hover:border-gold-500/30 transition-all duration-300 bg-cinematic-900/80 backdrop-blur-sm rounded-sm hover:-translate-y-1"
                >
                    <div className="w-12 h-12 rounded-full bg-trust-900 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                        <pillar.icon size={20} className="text-gold-500 group-hover:text-cinematic-900 transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-serif text-xl text-cream-100 mb-4 group-hover:text-gold-400 transition-colors">{pillar.title}</h3>
                    <p className="text-cream-100/70 text-sm leading-relaxed font-light">
                        {pillar.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;