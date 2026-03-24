import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../constants';
import { X, GraduationCap, Landmark, ArrowRight } from 'lucide-react';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const getImageStyle = (id: string) => {
    if (id === 'patricio') {
      return 'object-top'; 
    }
    if (id === 'carlos') {
      // Slightly less zoom and more centered framing for face-forward portraits
      return 'object-[center_20%] scale-[1.2]';
    }
    return 'object-[center_5%] scale-[1.35]'; 
  };

  return (
    <section id="team" className="py-24 relative bg-cinematic-900 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-cinematic-900/90 z-10"></div>
         <img 
            src="https://i.postimg.cc/7ZcqcVjD/equipo-abogados-negocios-trabajando-juntos-abogado-reunion-37714-531.avif" 
            alt="Office Background" 
            className="w-full h-full object-cover grayscale opacity-25"
         />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Unified Section Header - Centered */}
        <div className="mb-16 text-center">
             <div className="h-20 w-auto mx-auto mb-8 opacity-100">
                <img 
                    src="https://i.postimg.cc/pdHkCNkn/1-(3).png" 
                    alt="Logo Córdova" 
                    className="h-full w-auto object-contain mx-auto mix-blend-screen" 
                />
             </div>
             <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-4">
                Nuestro <span className="text-gold-500 italic">Equipo</span>
             </h2>
             <div className="h-[1.5px] w-20 bg-gold-500 mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member) => (
                <div key={member.id} className="group relative bg-cinematic-800/80 backdrop-blur-sm border border-white/5 p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col items-center text-center">
                    <div className="w-32 h-32 mb-8 rounded-full overflow-hidden border-2 border-trust-800 group-hover:border-gold-500/50 transition-colors relative z-10 shadow-xl cursor-pointer" onClick={() => setSelectedMember(member)}>
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${getImageStyle(member.id)}`}
                        />
                    </div>
                    
                    <h3 className="font-serif text-xl text-cream-100 mb-2">{member.name}</h3>
                    <p className="text-gold-500/90 text-xs uppercase tracking-widest font-bold mb-8">{member.title}</p>
                    
                    <button 
                        onClick={() => setSelectedMember(member)}
                        className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream-100/70 hover:text-gold-500 transition-colors group/btn"
                    >
                        Ver formación académica
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            ))}
        </div>

        {/* Credentials Modal */}
        {selectedMember && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <div 
                    className="absolute inset-0 bg-cinematic-900/95 backdrop-blur-md"
                    onClick={() => setSelectedMember(null)}
                ></div>

                <div className="relative bg-cinematic-800 border border-gold-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
                    <button 
                        type="button"
                        onClick={() => setSelectedMember(null)}
                        className="absolute top-4 right-4 text-cream-100/50 hover:text-gold-500 transition-colors z-10"
                        aria-label="Cerrar perfil"
                    >
                        <X size={24} />
                    </button>

                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-trust-900/50 p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white/5">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gold-500/30 mb-6 shadow-2xl">
                                <img 
                                    src={selectedMember.image} 
                                    alt={selectedMember.name} 
                                    className={`w-full h-full object-cover grayscale-[20%] ${getImageStyle(selectedMember.id)}`}
                                />
                            </div>
                            <h3 className="font-serif text-2xl text-cream-100 mb-2">{selectedMember.name}</h3>
                            <p className="text-gold-500 text-xs uppercase tracking-widest font-bold">{selectedMember.title}</p>
                            <div className="mt-8 w-12 h-[1px] bg-gold-500/50"></div>
                        </div>

                        <div className="md:w-2/3 p-8 md:p-12 bg-cinematic-900">
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <GraduationCap className="text-gold-500" size={24} />
                                    <h4 className="font-serif text-xl text-cream-100">Formación Académica</h4>
                                </div>
                                <ul className="space-y-4">
                                    {selectedMember.education.map((edu, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-cream-100/80 font-light border-l border-white/10 pl-4 py-1 hover:border-gold-500 transition-colors">
                                            <div className="flex-1">
                                                <strong className="block text-cream-100 font-medium mb-1">{edu.degree}</strong>
                                                {edu.institution && <span className="text-white/40 italic">{edu.institution}</span>}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {selectedMember.publicRoles && selectedMember.publicRoles.length > 0 && (
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <Landmark className="text-gold-500" size={24} />
                                        <h4 className="font-serif text-xl text-cream-100">Trayectoria Pública & Gremial</h4>
                                    </div>
                                    <ul className="space-y-4">
                                        {selectedMember.publicRoles.map((role, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-cream-100/80 font-light">
                                                <span className="text-gold-500 mt-1.5">•</span>
                                                <span>{role}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="border-t border-white/10 px-6 py-5 flex justify-center bg-cinematic-800 shrink-0">
                        <button
                            type="button"
                            onClick={() => setSelectedMember(null)}
                            className="w-full sm:w-auto px-10 py-3 text-xs uppercase tracking-[0.2em] font-bold text-cinematic-900 bg-gold-500 hover:bg-cream-100 transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default Team;