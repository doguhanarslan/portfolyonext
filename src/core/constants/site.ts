import type { SocialLink } from '@/core/types';

export const SITE = {
  name: 'Doğuhan Arslan',
  title: 'Software Architect & Full-Stack Developer',
  url: 'https://doguhanarslan.com',
  email: 'arslandoguu@icloud.com',
  location: 'İstanbul, Turkey',
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/doguhanarslan',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arslan-doguhan/',
    icon: 'linkedin',
  },
];
