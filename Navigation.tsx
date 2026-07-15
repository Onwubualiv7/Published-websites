export interface Project {
  id: string;
  title: string;
  category: 'Luxury Homes' | 'Hotels' | 'Corporate' | 'Apartments';
  image: string;
  location: string;
  year: string;
  area: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
  rating: number;
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  duration: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  specialty: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
