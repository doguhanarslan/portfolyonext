'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Globe, Smartphone, Monitor } from 'lucide-react';
import { Badge } from '@/shared/components/ui/Badge';
import type { Project, Locale } from '@/core/types';

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  index: number;
  viewLabel: string;
}

const platformIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
};

export function ProjectCard({ project, locale, index, viewLabel }: ProjectCardProps) {
  const PlatformIcon = platformIcons[project.platform];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
    >
      <Link href={`/${locale}/projects/${project.slug}/`}>
        <div className="group relative h-full rounded-2xl bg-white/70 dark:bg-surface/50 border border-zinc-200/80 dark:border-zinc-700/30 overflow-hidden hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300 hover:border-accent/30 dark:hover:border-accent/30 backdrop-blur-sm">
          <div className="relative w-full h-36 sm:h-40 bg-zinc-100 dark:bg-surface overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center">
              <PlatformIcon size={32} className="text-zinc-300 dark:text-zinc-600" />
            </div>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
            <div className="absolute top-2.5 right-2.5">
              <Badge variant="accent" className="text-[10px] px-2.5 py-0.5">
                {project.status === 'live' ? '● Live' : project.status}
              </Badge>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-[15px] font-bold text-zinc-900 dark:text-white leading-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {project.subtitle[locale]}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-zinc-400 group-hover:text-accent transition-colors shrink-0 mt-0.5"
              />
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-zinc-100 text-zinc-500 dark:bg-surface dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-3 text-xs font-medium text-accent group-hover:underline">
              {viewLabel} →
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
