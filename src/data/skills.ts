import type { SkillCategory } from '@/core/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: { tr: 'Backend & Mimari', en: 'Backend & Architecture' },
    description: {
      tr: 'Ölçeklenebilir ve sürdürülebilir sunucu tarafı çözümler',
      en: 'Scalable and maintainable server-side solutions',
    },
    skills: ['.NET', 'C#', 'Clean Architecture', 'CQRS', 'Entity Framework', 'SQL Server', 'REST API'],
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    id: 'mobile',
    title: { tr: 'Mobil Geliştirme', en: 'Mobile Development' },
    description: {
      tr: 'Cross-platform mobil uygulama geliştirme',
      en: 'Cross-platform mobile app development',
    },
    skills: ['Flutter', 'Dart', 'BLoC Pattern', 'Firebase', 'REST Integration'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'frontend',
    title: { tr: 'Frontend', en: 'Frontend' },
    description: {
      tr: 'Modern ve performanslı kullanıcı arayüzleri',
      en: 'Modern and performant user interfaces',
    },
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    id: 'devops',
    title: { tr: 'DevOps & Araçlar', en: 'DevOps & Tools' },
    description: {
      tr: 'Geliştirme süreçleri ve altyapı yönetimi',
      en: 'Development processes and infrastructure management',
    },
    skills: ['Git', 'Docker', 'CI/CD', 'Azure', 'Linux', 'System Optimization'],
    gradient: 'from-orange-500 to-red-500',
  },
];
