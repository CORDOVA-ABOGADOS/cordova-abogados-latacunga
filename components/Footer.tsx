import React from 'react';
import { NAV_ITEMS, SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cinematic-900 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-1">
             <div className="flex flex-col gap-1 mb-6">
                <span className="font-serif font-bold text-xl text-cream-100">CÓRDOVA</span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-gold-500 font-medium">ABOGADOS</span>
             </div>
             <p className="text-cream-100/60 text-xs leading-relaxed font-light">
               Al servicio de los cotopaxenses desde 1967.
             </p>
          </div>

          <div className="md:col-span-1">
            <h5 className="text-cream-100 font-serif text-lg mb-6">Navegación</h5>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-cream-100/60 hover:text-gold-500 text-xs uppercase tracking-widest transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h5 className="text-cream-100 font-serif text-lg mb-6">Especialidades</h5>
            <ul className="space-y-3">
              {SERVICES.map(service => (
                 <li key={service.id} className="text-cream-100/60 text-xs uppercase tracking-widest hover:text-gold-500/80 transition-colors cursor-default">
                    {service.title}
                 </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
             <h5 className="text-cream-100 font-serif text-lg mb-6">Aviso Legal</h5>
             <p className="text-cream-100/40 text-[10px] leading-relaxed font-light text-justify">
               La información contenida en este sitio web tiene fines informativos únicamente. La relación abogado-cliente empieza desde el primer momento de su consulta. Absoluta confidencialidad.
             </p>
          </div>

        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cream-100/40 text-[10px] text-center md:text-left">
            &copy; {new Date().getFullYear()} Córdova Abogados. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-cream-100/40 hover:text-gold-500 text-[10px] uppercase tracking-widest transition-colors">Privacidad</a>
            <a href="#" className="text-cream-100/40 hover:text-gold-500 text-[10px] uppercase tracking-widest transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;