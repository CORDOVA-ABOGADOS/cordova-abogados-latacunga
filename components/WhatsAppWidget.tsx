import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=593995742685&text&type=phone_number&app_absent=0";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Label on Hover */}
      <div className="group relative">
        <div className="absolute right-16 bottom-2 bg-cinematic-800 border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gold-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-md">
          Consultar por WhatsApp
        </div>
        
        {/* Main Button */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gold-500 flex items-center justify-center text-cinematic-900 hover:bg-cream-100 transition-all duration-300 shadow-[0_0_20px_rgba(230,181,70,0.4)] relative"
          aria-label="Contactar por WhatsApp"
        >
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 bg-gold-500/40 rounded-none animate-ping -z-10"></span>
          
          <MessageCircle size={28} className="transition-transform group-hover:scale-110" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppWidget;