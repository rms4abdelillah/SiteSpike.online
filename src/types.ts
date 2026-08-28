export type ProjectCategory = 
  | 'All'
  | 'Website Design'
  | 'Website Development'
  | 'UX Design'
  | 'E-Commerce'
  | 'Web Applications'
  | 'Restaurant & Hospitality'
  | 'Healthcare & Professional'
  | 'Fitness & Lifestyle'
  | 'Home Services';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  servicesProvided?: string[];
  tagline: string;
  description: string;
  client: string;
  location: string;
  duration: string;
  platform: string;
  year: string;
  tech: string[];
  features: string[];
  image?: string;
  heroImage: string;
  gallery: string[];
  link?: string;
  metrics?: string;
  colorGradient?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  iconName: string;
  features: string[];
  popular?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  featured?: boolean;
  badge?: string;
  deliveryTime: string;
  revisions: string;
  supportDuration: string;
  features: {
    text: string;
    included: boolean;
  }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  business: string;
  location: string;
  rating: number;
  text: string;
  avatarText: string;
  avatarColor: string;
  projectCategory: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  business: string;
  industry: string;
  service: string;
  budget: string;
  references: string;
  message: string;
  preferredTimeline?: string;
}
