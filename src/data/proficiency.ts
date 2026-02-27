import type { ProficiencyCategory } from '@/core/types';

export const proficiencyCategories: ProficiencyCategory[] = [
  {
    id: 'languages',
    title: { tr: 'Programlama Dilleri', en: 'Languages' },
    items: [
      { name: 'C#', level: 9 },
      { name: 'Dart', level: 8 },
      { name: 'TypeScript', level: 7 },
      { name: 'JavaScript', level: 7 },
      { name: 'SQL', level: 7 },
      { name: 'Python', level: 5 },
    ],
  },
  {
    id: 'backend',
    title: { tr: 'Backend & Mimari', en: 'Backend & Architecture' },
    items: [
      { name: '.NET / ASP.NET', level: 9 },
      { name: 'Clean Architecture', level: 9 },
      { name: 'Entity Framework', level: 8 },
      { name: 'REST API Design', level: 8 },
      { name: 'CQRS / MediatR', level: 8 },
      { name: 'SQL Server', level: 7 },
    ],
  },
  {
    id: 'mobile',
    title: { tr: 'Mobil Geliştirme', en: 'Mobile Development' },
    items: [
      { name: 'Flutter', level: 8 },
      { name: 'BLoC Pattern', level: 8 },
      { name: 'Firebase', level: 7 },
      { name: 'App Store Deploy', level: 7 },
    ],
  },
  {
    id: 'frontend',
    title: { tr: 'Frontend & UI', en: 'Frontend & UI' },
    items: [
      { name: 'React / Next.js', level: 7 },
      { name: 'Tailwind CSS', level: 8 },
      { name: 'Framer Motion', level: 6 },
      { name: 'HTML / CSS', level: 8 },
    ],
  },
  {
    id: 'devops',
    title: { tr: 'DevOps & Araçlar', en: 'DevOps & Tools' },
    items: [
      { name: 'Git / GitHub', level: 8 },
      { name: 'Docker', level: 6 },
      { name: 'CI/CD', level: 6 },
      { name: 'Linux / Server', level: 6 },
      { name: 'Azure', level: 5 },
    ],
  },
];
