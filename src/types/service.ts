
export type ServiceCategory = 'farmers' | 'agrodealers' | 'investors' | 'partners';

export interface ServiceCardType {
  id: string;
  slug: string;
  icon: string; 
  emoji?: string;
  title: string;
  shortDescription: string;
  description: string;
  href: string;
  features?: string[];
  bgColor: string;  // Color gradient class for the service card
  category: ServiceCategory;
}export interface ServiceSectionType {
  sectionId: string;
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  cards: ServiceCardType[];
}
export interface CTA {
  label: string;
  href?: string;          // for links
  type?: "button" | "link"; // new property
}

export interface CategoryHero {
  headline: string;
  image: string;
  cta: CTA[]; // use new CTA type
}

export interface CategorySection {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  content?: string;
  stats?: Array<{ value: string; label: string }>;
  reasons?: Array<{ title: string; description: string }>;
  benefits?: string[];
  testimonial?: {
    quote: string;
    author: string;
    location: string;
  };
  cta?: CTA;
}