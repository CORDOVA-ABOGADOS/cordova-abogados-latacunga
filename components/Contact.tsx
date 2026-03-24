import React from 'react';
import { MapPin, Phone, Calendar, ArrowUpRight, Radio, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cinematic-900 border-t border-white/5">
      {/* Background Image - Cotopaxi */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://i.postimg.cc/sXRYy5bn/cotopaxi.jpg" 
            alt="Cotopaxi Background" 
            className="w-full h-full object-cover opacity-30"
          />
          {/* Gradient Overlays for Harmonization */}
          <div className="absolute inset-0 bg-gradient-to-t from-cinematic-900 via-cinematic-900/90 to-cinematic-900/60"></div>
          <div className="absolute inset-0 bg-trust-900/20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                 <span className="text-gold-500 text-xs tracking-[0.3em] uppercase block font-bold mb-4">Agenda Digital</span>
                 <p className="text-cream-100/90 text-xl font-serif italic max-w-2xl mx-auto leading-relaxed">
                    "Presencia en todo Cotopaxi, su caso será tratado directamente por uno de nuestros socios con absoluta confidencialidad."
                </p>
            </div>

            {/* Form & Calendar Panel */}
            <div className="glass-panel p-8 md:p-12 relative shadow-2xl mb-16">
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/20"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/20"></div>

                <p className="text-cream-100/70 text-sm font-light mb-8 text-center max-w-2xl mx-auto">
                    Puede <strong>agendar una cita presencial o telemática</strong> directamente o escribirnos para una respuesta en menos de 24 horas.
                </p>

                {/* Calendar Button */}
                <a 
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3UHdlsV1bwKywW-BDTnpsGTwRk-yl4BFVLOiqOPfmhvmY3FfhYIukxLJrF0OB97AEQviJmEYQ9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full md:w-2/3 mx-auto flex items-center justify-center gap-3 bg-trust-800 border border-gold-500/50 text-gold-500 hover:bg-gold-500 hover:text-cinematic-900 transition-all duration-300 py-4 font-bold uppercase tracking-[0.15em] text-xs mb-10 group"
                >
                    <Calendar size={16} />
                    Agendar Cita Ahora
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="relative flex py-2 items-center mb-10">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="flex-shrink mx-4 text-white/30 text-[10px] uppercase tracking-widest">O consulta por escrito</span>
                    <div className="flex-grow border-t border-white/10"></div>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-6">
                    <p className="text-cream-100/80 text-center text-sm font-light max-w-lg leading-relaxed">
                        Realice su consulta por escrito bajo estricto secreto profesional. Si lo prefiere, <span className="text-cream-100 font-medium">este proceso puede ser completamente anónimo</span>. Un especialista analizará su situación y <strong className="text-gold-500 font-medium">le brindará una respuesta en un máximo de 24 horas.</strong>
                    </p>
                    <a 
                        href="https://forms.gle/YjkVaSsaSmir87ww8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-2/3 mx-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-cream-100 hover:text-cinematic-900 text-cream-100 font-bold uppercase tracking-[0.2em] py-4 transition-all duration-300 text-xs border border-white/10 hover:border-transparent group"
                    >
                        <FileText size={16} />
                        Ir al Formulario de Consulta
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Bottom Info Section Header */}
            <div className="text-center mb-12 mt-20 pt-16 border-t border-white/5">
                 <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-4">
                    Contác<span className="text-gold-500 italic">tanos</span>
                 </h2>
                 <div className="h-[1.5px] w-20 bg-gold-500 mx-auto opacity-50"></div>
            </div>

            {/* Bottom Info Section Columns */}
            <div className="text-center space-y-8 animate-fade-in-up">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                     
                     {/* Ubicación */}
                     <div className="flex flex-col items-center gap-4 group flex-1 max-w-[300px] mx-auto">
                        <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mb-2 group-hover:bg-gold-500 group-hover:text-cinematic-900 transition-colors">
                            <MapPin size={20} />
                        </div>
                        <span className="text-white/60 text-xs uppercase tracking-wider">Ubicación</span>
                        <p className="text-cream-100 text-sm leading-relaxed min-h-[40px] flex items-center justify-center font-light">{CONTACT_INFO.address}</p>
                        
                        <a 
                           href={CONTACT_INFO.mapsLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 px-6 py-2 border border-gold-500/30 text-gold-500 text-[10px] uppercase tracking-widest hover:bg-gold-500 hover:text-cinematic-900 transition-all duration-300 mt-2"
                        >
                            Ir Ahora
                            <ArrowUpRight size={14} />
                        </a>
                     </div>

                     {/* Celulares */}
                     <div className="flex flex-col items-center gap-4 group flex-1 max-w-[300px] mx-auto">
                        <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mb-2 group-hover:bg-gold-500 group-hover:text-cinematic-900 transition-colors">
                            <Phone size={20} />
                        </div>
                        <span className="text-white/60 text-xs uppercase tracking-wider">Celulares</span>
                        <p className="text-cream-100 text-sm leading-relaxed min-h-[40px] flex items-center justify-center font-light">{CONTACT_INFO.phone}</p>
                        
                        <a 
                           href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 px-6 py-2 border border-gold-500/30 text-gold-500 text-[10px] uppercase tracking-widest hover:bg-gold-500 hover:text-cinematic-900 transition-all duration-300 mt-2"
                        >
                            WhatsApp
                            <ArrowUpRight size={14} />
                        </a>
                     </div>

                     {/* Sintoniza (Radio/TV) */}
                     <div className="flex flex-col items-center gap-4 group flex-1 max-w-[300px] mx-auto">
                        <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mb-2 group-hover:bg-gold-500 group-hover:text-cinematic-900 transition-colors">
                            <Radio size={20} />
                        </div>
                        <span className="text-white/60 text-xs uppercase tracking-wider">Sintoniza</span>
                        
                        <div className="flex flex-col gap-6 w-full text-left px-4">
                            {/* Radio */}
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-white rounded-sm overflow-hidden flex-shrink-0">
                                   <img src="https://i.postimg.cc/phbdWc7g/logo_radio_novedades.jpg" alt="logo_radio_novedades" className="w-full h-full object-contain p-0.5" />
                                </div>
                                <div>
                                    <p className="text-gold-500 text-[10px] font-bold uppercase tracking-wider">Radio Novedades</p>
                                    <p className="text-cream-100 text-xs italic">"Hablando Claro"</p>
                                    <p className="text-white/50 text-[10px] mt-0.5">Sábado 08:30 - 10:00</p>
                                </div>
                            </div>

                             {/* TV */}
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-white rounded-sm overflow-hidden flex-shrink-0">
                                   <img src="https://i.postimg.cc/w7fbs1z6/tc_color_logo.png" alt="tc_color_logo" className="w-full h-full object-contain p-0.5" />
                                </div>
                                <div>
                                    <p className="text-gold-500 text-[10px] font-bold uppercase tracking-wider">TV Color 36</p>
                                    <p className="text-cream-100 text-xs italic">"Desde lo positivo"</p>
                                    <p className="text-white/50 text-[10px] mt-0.5">Domingo 08:00 - 09:00 am</p>
                                </div>
                            </div>
                        </div>
                         <p className="text-white/30 text-[9px] uppercase tracking-widest mt-2">Conducción: Dr. Patricio Córdova</p>
                     </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;