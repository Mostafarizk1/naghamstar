export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface NavLink {
  id: string;
  label: LocalizedString;
  href: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
  variant: 'navy' | 'gold' | 'ivory' | 'navy-light' | 'beige';
}

export interface ValueItem {
  id: string;
  icon: string;
  title: LocalizedString;
}

export interface Project {
  id: string;
  slug: string;
  title: LocalizedString;
  category: LocalizedString;
  location?: LocalizedString;
  image?: string;
  isPlaceholder: boolean;
}
