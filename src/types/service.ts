
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
