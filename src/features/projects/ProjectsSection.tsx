'use client';

import { Container } from '@/shared/components/ui/Container';
import { SectionHeading } from '@/shared/components/ui/SectionHeading';
import { FadeIn } from '@/shared/components/animation/FadeIn';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';
import type { Locale } from '@/core/types';
import type { Dictionary } from '@/shared/i18n/getDictionary';

interface ProjectsSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function ProjectsSection({ locale, dict }: ProjectsSectionProps) {
  return (
    <div className="flex-1 flex items-center py-16 sm:py-20">
      <Container>
        <FadeIn>
          <SectionHeading title={dict.projects.title} subtitle={dict.projects.subtitle} className="mb-10" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              index={index}
              viewLabel={dict.projects.view_case_study}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
