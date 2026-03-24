import React from 'react';
import { Quote } from 'lucide-react';

const Legacy: React.FC = () => {
  return (
    <section id="legacy" className="py-24 relative bg-cinematic-900 border-t border-white/5">
       {/* Background */}
       <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cinematic-900/90 z-10"></div>
        <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2612&auto=format&fit=crop" 
            alt="Old Law Books History" 
            className="w-full h-full object-cover grayscale opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Visual Side */}
            <div className="lg:w-1/2 relative">
                <div className="border border-white/10 p-2 bg-white/5 backdrop-blur-sm">
                     <img 
                        src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2670&auto=format&fit=crop" 
                        alt="Historia Jurídica" 
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold-500/50 hidden md:block"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gold-500/30 hidden md:block"></div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2">
                {/* Unified Section Header */}
                <div className="mb-8">
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-3 block font-bold">Historia</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-4">
                        Quiénes <span className="text-gold-500 italic">Somos</span>
                    </h2>
                    <div className="h-[1.5px] w-20 bg-gradient-to-r from-gold-500 to-transparent"></div>
                </div>
                
                <div className="space-y-6 text-cream-100/80 font-light text-lg leading-relaxed text-justify mb-10">
                    <p>
                        Córdova Abogados fue fundado en el año de 1967 por el <strong className="text-cream-100">Dr. José Córdova Robert</strong>, quien bajo un ejemplo de profesionalismo y servicio empezó a brindar patrocinio y asesoría legal en diferentes áreas del derecho; posteriormente, sería el <strong className="text-cream-100">Dr. Patricio Córdova Cepeda</strong>, quien continuaría con el ejercicio profesional jurídico.
                    </p>
                    <p>
                        Córdova Abogados es un estudio jurídico comprometido en brindar un servicio profesional permanente con calidad y honestidad, entendiendo al derecho y al sistema judicial como el medio e instrumento para la búsqueda de la paz social.
                    </p>
                </div>

                <div className="mt-8 p-8 bg-trust-900/40 border-l-2 border-gold-500 relative">
                    <Quote className="absolute top-4 right-4 text-gold-500/20" size={40} />
                    <p className="font-serif text-xl italic text-cream-100 mb-4 relative z-10">
                        "Nada se parece tanto a la injusticia como la justicia tardía"
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-gold-500 font-bold opacity-80">— SÉNECA</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Legacy;