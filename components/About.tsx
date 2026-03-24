import React from 'react';
import { Award, BookOpen, Scale } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
             <h2 className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-3">Sobre la Firma</h2>
             <h3 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
               "La justicia no es solo un resultado, es un <span className="italic text-gold-500">camino</span>."
             </h3>
             <div className="space-y-6 text-slate-300 leading-relaxed font-light text-lg">
               <p>
                 El Dr. Patricio Cordova fundó este estudio con una premisa clara: ofrecer un servicio legal que combine la rigurosidad académica con una estrategia de litigio agresiva y efectiva.
               </p>
               <p>
                 Egresado con honores de la Universidad Nacional y con una Maestría en Derecho Corporativo Internacional, el Dr. Cordova ha liderado casos de alto perfil que han sentado precedentes en la jurisprudencia nacional.
               </p>
               <p>
                 Su enfoque se centra en la personalización. Entendemos que detrás de cada expediente hay una vida, una empresa o una familia esperando una solución.
               </p>
             </div>

             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-4 border border-slate-800 bg-slate-850 hover:border-gold-500/50 transition-colors">
                  <Scale className="text-gold-500 mb-4" size={32} />
                  <span className="text-3xl font-display font-bold text-white mb-2">20+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-400">Años de Exp.</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 border border-slate-800 bg-slate-850 hover:border-gold-500/50 transition-colors">
                  <Award className="text-gold-500 mb-4" size={32} />
                  <span className="text-3xl font-display font-bold text-white mb-2">500+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-400">Casos Exitosos</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 border border-slate-800 bg-slate-850 hover:border-gold-500/50 transition-colors">
                  <BookOpen className="text-gold-500 mb-4" size={32} />
                  <span className="text-3xl font-display font-bold text-white mb-2">15</span>
                  <span className="text-xs uppercase tracking-widest text-slate-400">Publicaciones</span>
                </div>
             </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gold-500/5 rounded-full blur-3xl -z-10"></div>
            <img 
               src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop" 
               alt="Law Books and Gavel" 
               className="w-full h-auto shadow-2xl border border-slate-800 filter grayscale-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
