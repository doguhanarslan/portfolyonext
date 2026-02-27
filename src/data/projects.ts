import type { Project } from '@/core/types';

export const projects: Project[] = [
  {
    slug: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS Platform',
    subtitle: {
      tr: 'Çok kiracılı kurumsal web uygulaması',
      en: 'Enterprise multi-tenant web application',
    },
    description: {
      tr: 'Clean Architecture ve CQRS pattern kullanılarak geliştirilen, çok kiracılı (multi-tenant) SaaS platformu. Her kiracı için izole veri yönetimi, rol tabanlı yetkilendirme ve ölçeklenebilir altyapı.',
      en: 'Multi-tenant SaaS platform built with Clean Architecture and CQRS pattern. Isolated data management per tenant, role-based authorization, and scalable infrastructure.',
    },
    challenge: {
      tr: 'Farklı müşterilerin aynı uygulama üzerinde izole bir şekilde çalışmasını sağlarken, sistem performansını ve güvenliğini maksimum seviyede tutmak.',
      en: 'Ensuring different customers operate in isolation on the same application while maintaining maximum system performance and security.',
    },
    solution: {
      tr: 'Clean Architecture katmanlı yapısı ile domain logic\'i altyapıdan izole ettim. CQRS ile okuma/yazma operasyonlarını ayırarak performansı optimize ettim. Tenant bazlı veri filtreleme middleware\'i geliştirdim.',
      en: 'Isolated domain logic from infrastructure using Clean Architecture layered structure. Optimized performance by separating read/write operations with CQRS. Developed tenant-based data filtering middleware.',
    },
    image: '/images/projects/saas-platform.webp',
    tags: ['SaaS', 'Multi-Tenant', 'Enterprise'],
    tech: ['.NET', 'C#', 'Clean Architecture', 'CQRS', 'SQL Server', 'React', 'Docker'],
    metrics: [
      { label: { tr: 'Kiracı Sayısı', en: 'Tenants' }, value: '10+' },
      { label: { tr: 'API Yanıt Süresi', en: 'API Response' }, value: '<200ms' },
      { label: { tr: 'Uptime', en: 'Uptime' }, value: '99.9%' },
    ],
    platform: 'web',
    status: 'live',
  },
  {
    slug: 'ai-mobile-app',
    title: 'AI-Powered Mobile App',
    subtitle: {
      tr: 'Yapay zeka entegreli mobil uygulama',
      en: 'AI-integrated mobile application',
    },
    description: {
      tr: 'Flutter ile geliştirilen, yapay zeka özellikli cross-platform mobil uygulama. BLoC pattern ile state yönetimi ve .NET backend entegrasyonu.',
      en: 'Cross-platform mobile application with AI features built with Flutter. State management with BLoC pattern and .NET backend integration.',
    },
    challenge: {
      tr: 'Yapay zeka modellerini mobil uygulama ile entegre ederken, kullanıcı deneyimini bozmadan gerçek zamanlı sonuçlar sunmak.',
      en: 'Integrating AI models with the mobile app while delivering real-time results without compromising user experience.',
    },
    solution: {
      tr: 'Backend tarafında .NET API ile AI model servisleri oluşturdum. Flutter BLoC pattern ile asenkron veri akışlarını yönettim. Offline-first yaklaşımı ile bağlantı kesilmelerinde bile temel fonksiyonları kullanılabilir tuttum.',
      en: 'Created AI model services with .NET API on the backend. Managed asynchronous data flows with Flutter BLoC pattern. Kept core functions usable even during disconnections with an offline-first approach.',
    },
    image: '/images/projects/ai-mobile.webp',
    tags: ['AI', 'Mobile', 'Cross-Platform'],
    tech: ['Flutter', 'Dart', 'BLoC', '.NET', 'Firebase', 'REST API'],
    platform: 'mobile',
    status: 'live',
  },
  {
    slug: 'production-mobile-app',
    title: 'Production Mobile App',
    subtitle: {
      tr: 'Canlıdaki mobil uygulama',
      en: 'Live production mobile application',
    },
    description: {
      tr: 'Flutter ile geliştirilen ve mağazalarda yayınlanan production mobil uygulama. Clean Architecture prensiplerine uygun kod yapısı ve kapsamlı test coverage.',
      en: 'Production mobile app built with Flutter and published on app stores. Code structure following Clean Architecture principles with comprehensive test coverage.',
    },
    challenge: {
      tr: 'Karmaşık iş mantığını sürdürülebilir ve test edilebilir bir yapıda organize etmek. Farklı cihaz ve ekran boyutlarında tutarlı deneyim sağlamak.',
      en: 'Organizing complex business logic in a maintainable and testable structure. Ensuring consistent experience across different devices and screen sizes.',
    },
    solution: {
      tr: 'Clean Architecture katmanları ile separation of concerns\'ü uyguladım. Responsive tasarım ile tüm cihazlarda tutarlı deneyim sağladım. CI/CD pipeline ile otomatik build ve dağıtım süreçleri kurdum.',
      en: 'Applied separation of concerns with Clean Architecture layers. Ensured consistent experience across all devices with responsive design. Set up automated build and deployment processes with CI/CD pipeline.',
    },
    image: '/images/projects/mobile-app.webp',
    tags: ['Mobile', 'Production', 'App Store'],
    tech: ['Flutter', 'Dart', 'Clean Architecture', 'Firebase', 'CI/CD'],
    metrics: [
      { label: { tr: 'Mağaza Puanı', en: 'Store Rating' }, value: '4.8★' },
      { label: { tr: 'İndirme', en: 'Downloads' }, value: '1K+' },
    ],
    platform: 'mobile',
    status: 'live',
  },
];
