'use client';

import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import type { ProficiencyItem } from '@/core/types';

interface SkillBarProps {
  skill: ProficiencyItem;
  delay: number;
}

const TOTAL_SEGMENTS = 10;

export function SkillBar({ skill, delay }: SkillBarProps) {
  return (
    <div className="flex items-center gap-3 group">
      <span className="w-[120px] sm:w-[140px] shrink-0 text-[13px] font-medium text-zinc-700 dark:text-zinc-300 truncate">
        {skill.name}
      </span>

      <div className="flex-1 flex gap-[3px]">
        {Array.from({ length: TOTAL_SEGMENTS }, (_, i) => {
          const isFilled = i < skill.level;
          return (
            <motion.div
              key={i}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.3,
                delay: delay + i * 0.04,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={cn(
                'h-[10px] flex-1 rounded-[2px] origin-left transition-shadow duration-300',
                isFilled
                  ? 'bg-accent group-hover:shadow-[0_0_8px_rgba(230,46,92,0.4)]'
                  : 'bg-zinc-200 dark:bg-surface/60'
              )}
            />
          );
        })}
      </div>

      <span className="w-8 text-right text-[11px] font-mono tabular-nums text-muted">
        {skill.level}
      </span>
    </div>
  );
}
