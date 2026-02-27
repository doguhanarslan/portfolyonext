import type { NavItem } from '@/core/types';

export const navItems: NavItem[] = [
  {
    id: 'home',
    label: { tr: 'Ana Sayfa', en: 'Home' },
    href: '#home',
  },
  {
    id: 'about',
    label: { tr: 'Hakkımda', en: 'About' },
    href: '#about',
  },
  {
    id: 'skills',
    label: { tr: 'Yetkinlikler', en: 'Proficiency' },
    href: '#skills',
  },
  {
    id: 'work',
    label: { tr: 'Projeler', en: 'Work' },
    href: '#work',
  },
  {
    id: 'contact',
    label: { tr: 'İletişim', en: 'Contact' },
    href: '#contact',
  },
];
