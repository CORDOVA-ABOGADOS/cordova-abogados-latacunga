import { Scale, Shield, Users, FileText, Gavel, Car, ScrollText, Eye, HeartHandshake, Landmark, Award, Handshake, Phone, FileSearch, CheckCircle2 } from 'lucide-react';
import { NavItem, Service, TeamMember, Pillar, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Filosofía', href: '#insights' },
  { label: 'Servicios', href: '#services' },
  { label: 'Equipo', href: '#team' },
  { label: 'Quiénes Somos', href: '#legacy' },
];

export const SERVICES: Service[] = [
  {
    id: 'penal',
    title: 'Derecho Penal',
    description: 'Nuestra área de práctica más sólida ante situaciones sensibles. Estrategias de litigio de alta precisión para proteger sus derechos.',
    icon: Shield,
  },
  {
    id: 'transito',
    title: 'Tránsito y Movilidad',
    description: 'Asesoría en infracciones, siniestros, impugnaciones y responsabilidad civil derivada de accidentes de tránsito.',
    icon: Car,
  },
  {
    id: 'civil',
    title: 'Derecho Civil',
    description: 'Cobro de obligaciones, contratos e incumplimientos, reivindicación de bienes, prescripción adquisitiva de dominio, daños y perjuicios, particiones y asuntos patrimoniales.',
    icon: Scale,
  },
  {
    id: 'resolucion',
    title: 'Resolución de Conflictos',
    description: 'Mediación y negociación estratégica para resolver disputas de forma ágil y confidencial, evitando el desgaste emocional y económico de los tribunales.',
    icon: Handshake,
  },
  {
    id: 'familia',
    title: 'Derecho de Familia',
    description: 'Manejo discreto y humano de divorcios, tenencias y sucesiones, salvaguardando el interés familiar.',
    icon: Users,
  },
  {
    id: 'notarial',
    title: 'Derecho Notarial',
    description: 'Gestión eficiente de escrituras públicas, testamentos y legalización de documentos.',
    icon: ScrollText,
  },
];

export const PILLARS: Pillar[] = [
    {
        id: 'claridad',
        title: 'Claridad',
        description: 'Convertimos la complejidad legal en un plan entendible. Sin tecnicismos, con pasos concretos y prioridades definidas.',
        icon: Eye
    },
    {
        id: 'honestidad',
        title: 'Honestidad',
        description: 'Hablamos con la verdad sobre sus posibilidades reales. No creamos falsas expectativas ni alargamos procesos innecesarios.',
        icon: HeartHandshake
    },
    {
        id: 'equidad',
        title: 'Equidad',
        description: 'Nuestra intención es servirle en las mejores condiciones económicas y profesionales priorizando su estabilidad.',
        icon: Scale
    },
    {
        id: 'profesionalismo',
        title: 'Profesionalismo',
        description: 'Cuatro generaciones de tradición jurídica respaldan su caso. No improvisamos; actuamos con el criterio que solo da la experiencia.',
        icon: Landmark
    }
];

export const STEPS = [
    {
        id: 1,
        title: 'Contacto Inicial',
        description: 'Agende su cita o escríbanos. Respuesta en < 24h.',
        icon: Phone
    },
    {
        id: 2,
        title: 'Análisis Estratégico',
        description: 'Evaluamos su caso y diseñamos la ruta legal más efectiva.',
        icon: FileSearch
    },
    {
        id: 3,
        title: 'Defensa y Solución',
        description: 'Ejecutamos la defensa con rigor técnico hasta resolver el conflicto.',
        icon: CheckCircle2
    }
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 'patricio',
        name: 'Dr. Patricio Córdova Cepeda',
        title: 'Socio Director',
        role: 'Penalista & Estratega Legal',
        bio: [
            'Con más de 38 años de trayectoria, el Dr. Patricio Córdova combina una profunda formación académica con una experiencia notable en la vida pública y el litigio estratégico.'
        ],
        education: [
            { degree: 'Doctor en Jurisprudencia', institution: '' },
            { degree: 'Magíster en Derecho Civil y Procesal Civil', institution: '' },
            { degree: 'Especialista en Derecho Civil Comparado', institution: '' },
            { degree: 'Especialista en Derecho Penal y Justicia Indígena', institution: '' },
            { degree: 'Diplomado Superior en Investigación del Derecho Civil', institution: '' },
            { degree: 'Abogado', institution: '' },
            { degree: 'Licenciado en Ciencias Jurídicas', institution: '' },
            { degree: 'Licenciado en Comunicación Social', institution: '' }
        ],
        publicRoles: [
            'Representante por Cotopaxi en la Asamblea Nacional Constituyente (1997-1998)',
            'Concejal del cantón Latacunga (2000-2004)',
            'Miembro del Frente Ecuatoriano de Derechos Humanos y delegado del Ecuador al Taller Internacional en Lima, Perú (1992)'
        ],
        image: 'https://i.postimg.cc/q74SRCfy/IMG_9528.jpg'
    },
    {
        id: 'carlos',
        name: 'Abg. Carlos Andrés Córdova',
        title: 'Socio',
        role: 'Litigio Constitucional & Civil',
        bio: [
            'Líder gremial y abogado litigante con formación internacional, enfocado en la defensa técnica y el desarrollo del derecho en la provincia.'
        ],
        education: [
            { degree: 'Maestrante en Derecho Procesal Penal y Litigación Oral', institution: 'Universidad Internacional del Ecuador, EIG España y PROVOST WESTFIELD BUSINESS SCHOOL EEUU' },
            { degree: 'Abogado de los Tribunales y Juzgados', institution: 'Universidad Central del Ecuador' }
        ],
        publicRoles: [
            'Presidente del Colegio de Abogados de Cotopaxi (2023-2026)',
            'Miembro del Directorio Principal del Colegio de Abogados de Cotopaxi (2023)'
        ],
        image: 'https://i.postimg.cc/jjRMRQzm/IMG-0744.jpg'
    },
    {
        id: 'jose',
        name: 'Abg. José Daniel Córdova',
        title: 'Socio',
        role: 'Derecho Penal & Corporativo',
        bio: [
            'Especializado en derecho penal moderno y criminología, aportando una visión técnica y actualizada a la defensa corporativa e individual.'
        ],
        education: [
            { degree: 'Maestrante en Derecho Penal y Criminología', institution: 'Universidad de Sevilla' },
            { degree: 'Abogado', institution: 'Pontificia Universidad Católica del Ecuador' }
        ],
        publicRoles: [],
        image: 'https://i.postimg.cc/3RspxYPs/IMG_9527.jpg'
    }
];

export const CONTACT_INFO = {
  address: 'Belisario Quevedo 5-80 y Padre Salcedo, Edificio Córdova Cepeda. Latacunga',
  phone: '0984253809 / 032801192 / 0995742685',
  email: '',
  schedule: 'Lunes a Viernes: 08:30 - 18:00',
  mapsLink: 'https://www.google.com/maps/dir/-0.9336954,-78.6163534/C%C3%B3rdova+Abogados,+C.+Belisario+Quevedo+5-74,+Latacunga+050102/@-0.9336344,-78.6188767,17z/data=!3m1!4b1!4m18!1m7!3m6!1s0x91d461e458f471e3:0xe6e3a042c55e523d!2sC%C3%B3rdova+Abogados!8m2!3d-0.9335734!4d-78.6162502!16s%2Fg%2F11vpzds9nk!4m9!1m1!4e1!1m5!1m1!1s0x91d461e458f471e3:0xe6e3a042c55e523d!2m2!1d-78.6162502!2d-0.9335734!3e0?entry=ttu&g_ep=EgoyMDI2MDIwMy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D',
  whatsapp: '593995742685'
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    content: 'La capacidad estratégica del Dr. Patricio es impresionante. Logró desestimar cargos que parecían imposibles de revertir.',
    name: 'Roberto M.',
    role: 'Gerente General'
  },
  {
    id: '2',
    content: 'En momentos de incertidumbre familiar, el trato humano y profesional del estudio fue nuestro mayor soporte.',
    name: 'Familia Torres',
    role: 'Cliente Civil'
  },
  {
    id: '3',
    content: 'Su asesoría preventiva ha salvado a nuestra empresa de litigios costosos. Son verdaderos aliados de negocios.',
    name: 'Ing. Davalos',
    role: 'Sector Construcción'
  }
];