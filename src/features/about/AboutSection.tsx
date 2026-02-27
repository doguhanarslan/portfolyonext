'use client';

import { Container } from '@/shared/components/ui/Container';
import { SectionHeading } from '@/shared/components/ui/SectionHeading';
import { FadeIn } from '@/shared/components/animation/FadeIn';
import { SkillCard } from './SkillCard';
import { Timeline } from './Timeline';
import { skillCategories } from '@/data/skills';
import { experiences } from '@/data/experience';
import type { Locale } from '@/core/types';
import type { Dictionary } from '@/shared/i18n/getDictionary';

interface AboutSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function AboutSection({ locale, dict }: AboutSectionProps) {
  return (
    <div className="flex-1 flex items-center py-16 sm:py-20">
      <Container>
        <FadeIn>
          <SectionHeading title={dict.about.title} subtitle={dict.about.subtitle} className="mb-10" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <FadeIn>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 text-[15px]">
                {dict.about.summary}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillCategories.map((category, index) => (
                <SkillCard
                  key={category.id}
                  category={category}
                  locale={locale}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-5">
                {dict.about.experience_title}
              </h3>
              <Timeline experiences={experiences} locale={locale} />
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  );
}
