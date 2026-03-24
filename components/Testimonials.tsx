import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-3">Testimonios</h2>
          <h3 className="font-display text-3xl md:text-4xl text-white">Confianza Construida con Resultados</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-slate-950 p-8 border border-slate-800 relative group hover:border-gold-500/30 transition-all duration-500">
              <Quote className="text-gold-500/20 absolute top-6 right-6" size={48} />
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed font-light font-serif">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gold-500 font-bold font-serif">
                   {item.name.charAt(0)}
                 </div>
                 <div>
                    <h5 className="text-white font-bold text-sm">{item.name}</h5>
                    <span className="text-slate-500 text-xs uppercase tracking-wider">{item.role}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
