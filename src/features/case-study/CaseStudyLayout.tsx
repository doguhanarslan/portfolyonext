'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Globe, Smartphone, Monitor, ExternalLink } from 'lucide-react';
import { Container } from '@/shared/components/ui/Container';
import { Badge } from '@/shared/components/ui/Badge';
import { Card } from '@/shared/components/ui/Card';
import { Button } from '@/shared/components/ui/Button';
import type { Project, Locale } from '@/core/types';
import type { Dictionary } from '@/shared/i18n/getDictionary';

interface CaseStudyLayoutProps {
  project: Project;
  locale: Locale;
  dict: Dictionary;
}

const platformIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function CaseStudyLayout({ project, locale, dict }: CaseStudyLayoutProps) {
  const router = useRouter();
  const PlatformIcon = platformIcons[project.platform];
  const statusLabel = dict.common[project.status as keyof typeof dict.common] || project.status;

  const handleBack = () => {
    router.push(`/${locale}/#work`);
  };

  return (
    <div className="min-h-screen bg-white/80 dark:bg-transparent pt-24 pb-16">
      <Container size="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8 cursor-pointer"
            >
              <ArrowLeft size={16} />
              {dict.case_study.back}
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="accent">
                <PlatformIcon size={12} className="mr-1" />
                {dict.common[project.platform as keyof typeof dict.common]}
              </Badge>
              <Badge variant="default">{statusLabel}</Badge>
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
              {project.title}
            </h1>

            <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
              {project.subtitle[locale]}
            </p>
          </motion.div>

          {project.metrics && project.metrics.length > 0 && (
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {project.metrics.map((metric) => (
                <Card key={metric.value} variant="bordered" padding="md" className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{metric.value}</div>
                  <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {metric.label[locale]}
                  </div>
                </Card>
              ))}
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <motion.div variants={itemVariants}>
              <Card variant="bordered" padding="lg">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                  {dict.case_study.challenge}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.challenge[locale]}
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card variant="bordered" padding="lg">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                  {dict.case_study.solution}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.solution[locale]}
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <Card variant="bordered" padding="lg">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                {dict.case_study.tech_stack}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="default" className="text-sm px-4 py-1.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          {(project.liveUrl || project.sourceUrl) && (
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button variant="primary" href={project.liveUrl}>
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              )}
              {project.sourceUrl && (
                <Button variant="secondary" href={project.sourceUrl}>
                  Source Code
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </div>
  );
}
