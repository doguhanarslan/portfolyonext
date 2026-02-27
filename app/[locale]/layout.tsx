import { notFound } from 'next/navigation';
import { locales } from '@/core/types';
import type { Locale } from '@/core/types';
import { Header } from '@/shared/components/layout/Header';
import { GlobalBackground } from '@/shared/components/layout/GlobalBackground';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <>
      <GlobalBackground />
      <Header locale={locale as Locale} />
      {children}
    </>
  );
}
