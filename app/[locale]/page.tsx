import type { Locale } from '@/core/types';
import { getDictionary } from '@/shared/i18n/getDictionary';
import { HomeContent } from '@/features/home/HomeContent';

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return <HomeContent locale={locale as Locale} dict={dict} />;
}
