'use client';

import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { Container } from '@/shared/components/ui/Container';
import { FadeIn } from '@/shared/components/animation/FadeIn';
import { Button } from '@/shared/components/ui/Button';
import { SITE, SOCIAL_LINKS } from '@/core/constants/site';
import type { Dictionary } from '@/shared/i18n/getDictionary';

interface ContactSectionProps {
  dict: Dictionary;
}

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
};

export function ContactSection({ dict }: ContactSectionProps) {
  return (
    <div className="flex-1 flex items-center py-16 sm:py-20">
      <Container size="sm">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white">
              {dict.contact.title}
            </h2>
            <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
              {dict.contact.subtitle}
            </p>

            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                href={`mailto:${SITE.email}`}
              >
                <Mail size={18} />
                {dict.contact.email_cta}
              </Button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
              <span>{dict.contact.or}</span>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700/30 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-600/50 bg-white/90 dark:bg-surface/50 transition-colors"
                  >
                    {Icon && <Icon size={18} />}
                    <span className="text-sm font-medium">{link.name}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-zinc-400 group-hover:text-accent transition-colors"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
