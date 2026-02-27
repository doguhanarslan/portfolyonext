import { notFound } from 'next/navigation';
import { locales } from '@/core/types';
import type { Locale } from '@/core/types';
import { projects } from '@/data/projects';
import { getDictionary } from '@/shared/i18n/getDictionary';
import { CaseStudyLayout } from '@/features/case-study/CaseStudyLayout';
import { Footer } from '@/shared/components/layout/Footer';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <main>
      <CaseStudyLayout project={project} locale={locale as Locale} dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}
