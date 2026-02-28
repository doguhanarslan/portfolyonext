'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/shared/components/ui/Badge';
import type { SkillCategory, Locale } from '@/core/types';

interface SkillCardProps {
  category: SkillCategory;
  locale: Locale;
  index: number;
}

export function SkillCard({ category, locale, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group rounded-xl bg-white/90 dark:bg-surface/70 border border-zinc-200/80 dark:border-zinc-700/30 p-4 sm:hover:shadow-lg sm:dark:hover:shadow-black/30 transition-shadow duration-300 md:backdrop-blur-sm"
    >
      <div className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${category.gradient} mb-3`} />

      <h3 className="text-[15px] font-bold text-zinc-900 dark:text-white">
        {category.title[locale]}
      </h3>

      <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
        {category.description[locale]}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <Badge key={skill} variant="default" className="text-[11px] px-2.5 py-0.5">
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
