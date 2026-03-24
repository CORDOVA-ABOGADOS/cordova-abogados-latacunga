import React from 'react';
import { STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Steps: React.FC = () => {
  return (
    <section className="py-16 bg-cinematic-900 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
             <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent z-0"></div>

                {STEPS.map((step, index) => (
                    <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-cinematic-900 border border-white/10 group-hover:border-gold-500 flex items-center justify-center mb-6 transition-all duration-300 shadow-xl">
                            <step.icon size={32} className="text-white/30 group-hover:text-gold-500 transition-colors duration-300" strokeWidth={1} />
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-trust-800 rounded-full flex items-center justify-center border border-cinematic-900">
                                <span className="text-gold-500 font-serif font-bold text-sm">{step.id}</span>
                            </div>
                        </div>
                        <h4 className="text-cream-100 font-serif text-xl mb-2">{step.title}</h4>
                        <p className="text-white/40 text-sm font-light max-w-xs">{step.description}</p>
                    </div>
                ))}
             </div>
        </div>
    </section>
  );
};

export default Steps;