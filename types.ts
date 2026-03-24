
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
}

export interface Education {
    degree: string;
    institution: string;
}

export interface TeamMember {
    id: string;
    name: string;
    title: string;
    role: string;
    bio: string[];
    education: Education[];
    publicRoles?: string[];
    image: string;
}

export interface Pillar {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  content: string;
  name: string;
  role: string;
}

// Added ChatMessage interface used by ChatWidget component
export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
