'use client';

import { motion } from 'framer-motion';
import { Container } from '@/shared/components/ui/Container';
import { SectionHeading } from '@/shared/components/ui/SectionHeading';
import { FadeIn } from '@/shared/components/animation/FadeIn';
import { SkillBar } from './SkillBar';
import { proficiencyCategories } from '@/data/proficiency';
import type { Locale } from '@/core/types';
import type { Dictionary } from '@/shared/i18n/getDictionary';

interface SkillsSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function SkillsSection({ locale, dict }: SkillsSectionProps) {
  return (
    <div className="flex-1 flex items-center py-12 sm:py-16">
      <Container>
        <FadeIn>
          <SectionHeading
            title={dict.skills.title}
            subtitle={dict.skills.subtitle}
            className="mb-8"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 lg:gap-x-16">
          {proficiencyCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            >
              <h3 className="text-[13px] font-semibold uppercase tracking-wider text-accent mb-3">
                {category.title[locale]}
              </h3>

              <div className="space-y-2">
                {category.items.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={catIdx * 0.08 + skillIdx * 0.03}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
