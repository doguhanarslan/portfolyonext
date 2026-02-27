'use client';

import { motion } from 'framer-motion';
import type { Experience, Locale } from '@/core/types';

interface TimelineProps {
  experiences: Experience[];
  locale: Locale;
}

export function Timeline({ experiences, locale }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-700/40" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-12"
          >
            <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-white dark:ring-background" />

            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-sm font-bold text-accent">{exp.year}</span>
              {exp.institution && (
                <span className="text-xs text-zinc-400 dark:text-zinc-500">{exp.institution}</span>
              )}
            </div>

            <h4 className="text-base font-semibold text-zinc-900 dark:text-white">
              {exp.title[locale]}
            </h4>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {exp.description[locale]}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
