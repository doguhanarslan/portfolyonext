import type { Experience } from '@/core/types';

export const experiences: Experience[] = [
  {
    year: '2024',
    title: {
      tr: 'Yazılım Mimarı & Full-Stack Geliştirici',
      en: 'Software Architect & Full-Stack Developer',
    },
    description: {
      tr: 'Multi-tenant SaaS platformları, AI entegreli mobil uygulamalar ve Clean Architecture tabanlı kurumsal çözümler geliştirme.',
      en: 'Building multi-tenant SaaS platforms, AI-integrated mobile apps, and enterprise solutions based on Clean Architecture.',
    },
    institution: 'Freelance / Şirket Adı',
  },
  {
    year: '2023',
    title: {
      tr: 'Full-Stack Geliştirici',
      en: 'Full-Stack Developer',
    },
    description: {
      tr: '.NET ve Flutter ile kurumsal uygulamalar geliştirme. CQRS ve DDD pattern\'larının uygulanması.',
      en: 'Developing enterprise applications with .NET and Flutter. Implementing CQRS and DDD patterns.',
    },
    institution: 'Şirket Adı',
  },
  {
    year: '2022',
    title: {
      tr: 'Yazılım Mühendisliği Eğitimi',
      en: 'Software Engineering Education',
    },
    description: {
      tr: 'Yazılım mühendisliği alanında akademik eğitim ve profesyonel gelişim.',
      en: 'Academic education and professional development in software engineering.',
    },
    institution: 'Üniversite Adı',
  },
];
