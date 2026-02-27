'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import type { Locale } from '@/core/types';

interface LocaleSwitcherProps {
  locale: Locale;
}

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const targetLocale = locale === 'tr' ? 'en' : 'tr';
  const targetPath = pathname.replace(`/${locale}`, `/${targetLocale}`);

  return (
    <Link
      href={targetPath}
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[15px] font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-surface transition-colors"
      aria-label={`Switch to ${targetLocale === 'tr' ? 'Türkçe' : 'English'}`}
    >
      <Globe size={18} />
      <span className="uppercase">{targetLocale}</span>
    </Link>
  );
}
