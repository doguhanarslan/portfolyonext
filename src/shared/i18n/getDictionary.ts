import type { Locale } from '@/core/types';
import tr from './messages/tr.json';
import en from './messages/en.json';

const dictionaries = { tr, en } as const;

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
