export type Locale = 'tr' | 'en';

export const locales: Locale[] = ['tr', 'en'];
export const defaultLocale: Locale = 'tr';

export interface Project {
  slug: string;
  title: string;
  subtitle: Record<Locale, string>;
  description: Record<Locale, string>;
  challenge: Record<Locale, string>;
  solution: Record<Locale, string>;
  image: string;
  tags: string[];
  tech: string[];
  metrics?: ProjectMetric[];
  liveUrl?: string;
  sourceUrl?: string;
  platform: 'web' | 'mobile' | 'desktop';
  status: 'live' | 'development' | 'completed';
}

export interface ProjectMetric {
  label: Record<Locale, string>;
  value: string;
}

export interface SkillCategory {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  skills: string[];
  gradient: string;
}

export interface Experience {
  year: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  institution?: string;
}

export interface NavItem {
  id: string;
  label: Record<Locale, string>;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProficiencyItem {
  name: string;
  level: number;
}

export interface ProficiencyCategory {
  id: string;
  title: Record<Locale, string>;
  items: ProficiencyItem[];
}
