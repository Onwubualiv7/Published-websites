import { Project, Service, Testimonial, ProcessStep, TeamMember, FaqItem } from './types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'The Monolith Residence',
    category: 'Luxury Homes',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    location: 'Lake Como, Italy',
    year: '2025',
    area: '540 m²',
    description: 'A harmonious blend of raw off-site concrete, bronze frames, and rich Italian travertine overlooking the serene waters of Como.'
  },
  {
    id: 'proj-2',
    title: 'Amangiri Stone Villa',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    location: 'Canyon Point, Utah',
    year: '2024',
    area: '720 m²',
    description: 'An architectural continuation of desert canyons, utilizing micro-cement, floor-to-ceiling windows, and customized timber joinery.'
  },
  {
    id: 'proj-3',
    title: 'La Parisienne Penthouse',
    category: 'Apartments',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    location: 'Avenue Montaigne, Paris',
    year: '2025',
    area: '290 m²',
    description: 'Restoration of an 18th-century Haussmannian masterpiece, integrated with minimalist Danish furniture and modern lighting sculptures.'
  },
  {
    id: 'proj-4',
    title: 'Summit Executive Lounge',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    location: 'Financial District, London',
    year: '2024',
    area: '1,100 m²',
    description: 'A modern, acoustic-engineered high-end corporate space featuring walnut claddings, leather panels, and panoramic views of the city.'
  },
  {
    id: 'proj-5',
    title: 'Ritz Lounge & Orangerie',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    location: 'Geneva, Switzerland',
    year: '2025',
    area: '450 m²',
    description: 'A glass-roofed conservatory combining plush silk velvets, brass accents, and custom floral botanical integrations.'
  },
  {
    id: 'proj-6',
    title: 'The Tribeca Brutalist Loft',
    category: 'Apartments',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    location: 'NYC, United States',
    year: '2024',
    area: '380 m²',
    description: 'Industrial columns preserved and softened with cashmere drapery, oak floor planks, and curated fine art sculptures.'
  }
];

export const services: Service[] = [
  {
    id: 'serv-1',
    title: 'Residential Design',
    description: 'High-end bespoke interiors for private estates, penthouses, and luxury villas designed for exquisite daily living.',
    iconName: 'Home',
    features: ['Custom Millwork Design', 'Art & Decor Curation', 'Layout Optimization', 'Lighting Masterplans']
  },
  {
    id: 'serv-2',
    title: 'Commercial Design',
    description: 'Brand-focused interior solutions for boutique hotels, fine dining restaurants, luxury showrooms, and high-end offices.',
    iconName: 'Building',
    features: ['Bespoke Hospitality Lounges', 'Spatial Brand Identity', 'Ergonomic Workspaces', 'Acoustics Integration']
  },
  {
    id: 'serv-3',
    title: 'Luxury Renovation',
    description: 'Heritage restorations and complete structural transformation of legacy buildings with modern luxury elements.',
    iconName: 'Compass',
    features: ['Heritage Conservation', 'Material Sourcing', 'Structural Engineering Link', 'Premium Quality Assured']
  },
  {
    id: 'serv-4',
    title: 'Furniture Styling',
    description: 'Curation, customized fabrication, and procurement of premium international furniture, textiles, and art objects.',
    iconName: 'Palette',
    features: ['Bespoke Sofa Design', 'Italian Fabric Selection', 'Fine Art Sourcing', 'Sculpture & Accents']
  },
  {
    id: 'serv-5',
    title: 'Space Planning',
    description: 'In-depth programmatic analysis to maximize comfort, circulation, scale, and function across complex architectural footprints.',
    iconName: 'Layers',
    features: ['Circulation Analysis', 'Scale Modeling', 'Multi-functional Layouts', 'Ergonomic Zoning']
  },
  {
    id: 'serv-6',
    title: '3D Visualization',
    description: 'Ultra-realistic cinematic-grade renders and immersive virtual reality tours of your projects prior to physical construction.',
    iconName: 'Monitor',
    features: ['Cinematic Renders', 'VR Virtual Tours', 'Lighting Physics Simulation', 'Material Mockups']
  }
];

export const processSteps: ProcessStep[] = [
  {
    phase: '01',
    title: 'Discovery & Consultation',
    description: 'We host deep conversations to understand your lifestyle, emotional drivers, aesthetic wishes, and functional prerequisites.',
    duration: 'Week 1-2',
    details: ['Site Inspection & Analysis', 'Style & Brand Mapping', 'Budget & Scope Alignment', 'Initial Site Measurements']
  },
  {
    phase: '02',
    title: 'Concept & Mood Direction',
    description: 'We curate spatial narratives, mood boards, material swatches, and structural layout layouts that define the aesthetic soul of the project.',
    duration: 'Week 3-5',
    details: ['Inspirational Material Trays', 'Spatial Circulation Layouts', 'Rendered Mood Moods', 'Architectural Styling Philosophy']
  },
  {
    phase: '03',
    title: 'Detailed Spatial Design',
    description: 'Translating concepts into precise 3D walkthroughs, custom joinery sketches, electrical maps, and comprehensive spec documents.',
    duration: 'Week 6-10',
    details: ['Photo-realistic Renderings', 'Custom Millwork Schematics', 'Lighting & Power Layouts', 'Material Specification Catalogs']
  },
  {
    phase: '04',
    title: 'Execution & Management',
    description: 'Our project managers supervise every artisan, contractor, and supplier, ensuring materials are crafted and installed to global museum standards.',
    duration: 'Ongoing',
    details: ['Artisan Supervision', 'Procurement & Logistics', 'Quality Control Inspections', 'On-site Project Coordination']
  },
  {
    phase: '05',
    title: 'Bespoke Turnkey Delivery',
    description: 'The signature Lumière moment. We dress every room with custom furniture, fine linens, styled flora, and curated art, ready for immediate luxury living.',
    duration: 'Final Phase',
    details: ['Art & Object Placement', 'Deep Premium Cleaning', 'The Studio Walkthrough', 'Asset Care Manual Handover']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alessandra de Rossi',
    role: 'Art Collector & Developer',
    company: 'De Rossi Estates',
    text: 'Lumière Studio did not just design our Como villa; they composed an emotional sanctuary. Every stone, every light beam, every fabric texture is an intentional masterpiece of craftsmanship.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Horizon Venture Capital',
    text: 'The boardroom and executive lounges Lumière delivered have become our strongest branding assets. Clients are visibly moved by the dignity and restraint of the materials and spatial proportions.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Sovereign Homeowner',
    company: 'Tribeca Penthouse',
    text: 'Living in a space designed by Lumière is a daily privilege. Their dedication to absolute material perfection and their quiet, luxurious aesthetic completely elevated our quality of life.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
];

export const team: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Vincent Dubois',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80',
    specialty: 'Bespoke Material Curation'
  },
  {
    id: 'team-2',
    name: 'Aurelia Sterling',
    role: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=500&q=80',
    specialty: 'Minimalist Spatial Volumes'
  },
  {
    id: 'team-3',
    name: 'Kaito Takahashi',
    role: 'Principal Interior Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80',
    specialty: 'Zen Proportions & Bespoke Furniture'
  },
  {
    id: 'team-4',
    name: 'Christian Montgomery',
    role: 'Director of Project Management',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=500&q=80',
    specialty: 'Museum-Grade Execution'
  }
];

export const faqs: FaqItem[] = [
  {
    question: 'How does the process with Lumière Studio begin?',
    answer: 'Every project begins with a dedicated Discovery Consultation. We meet at your site or in our atelier to discuss your vision, programmatic needs, budget boundary, and aesthetic values. If there is mutual alignment, we compose a detailed creative proposal outlining phases, deliverables, and estimated timelines.'
  },
  {
    question: 'Do you manage international architectural projects?',
    answer: 'Absolutely. While our physical atelier is based in Zurich, London, and New York, our network of master craftsmen and architects allows us to execute and supervise luxury developments globally—from private islands in Greece to penthouses in Tokyo.'
  },
  {
    question: 'How are furniture procurement and custom manufacturing handled?',
    answer: 'We have exclusive relationships with heritage Italian, French, and Japanese furniture houses, and operate our own bespoke cabinetry and upholstery workshops. This allows us to procure collectors pieces at privileged pricing, and construct fully customized joinery that exists nowhere else on Earth.'
  },
  {
    question: 'What is your architectural philosophy and style?',
    answer: 'We believe in Warm Minimalism. Our designs prioritize the dignity of natural, raw materials (unrefined travertine, authentic stone, hand-rubbed metals, custom oak) paired with clean geometric volumes. We focus on natural light, pure silence, and timeless scale over transient decorative trends.'
  },
  {
    question: 'Can you work alongside our existing general contractor?',
    answer: 'Yes. We frequently integrate with leading luxury general contractors, landscape designers, and structural engineering firms. We act as the ultimate guardians of design intent, supplying exhaustive 2D drafts, 3D visual specifications, and hosting continuous on-site aesthetic audits.'
  }
];

export const clientLogos = [
  { name: 'Vogue Living', id: 'logo-vogue' },
  { name: 'Architectural Digest', id: 'logo-ad' },
  { name: 'Elle Decor', id: 'logo-elle' },
  { name: 'Wall Street Journal', id: 'logo-wsj' },
  { name: 'Frame Magazine', id: 'logo-frame' }
];
