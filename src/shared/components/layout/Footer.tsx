import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { Container } from '@/shared/components/ui/Container';
import { SITE, SOCIAL_LINKS } from '@/core/constants/site';
import type { Dictionary } from '@/shared/i18n/getDictionary';

interface FooterProps {
  dict: Dictionary;
}

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
};

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/50 bg-zinc-50/80 dark:bg-transparent">
      <Container>
        <div className="py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {dict.footer.copyright}
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              {dict.footer.built_with}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-surface transition-colors"
                  aria-label={link.name}
                >
                  {Icon && <Icon size={20} />}
                </a>
              );
            })}
            <a
              href="#home"
              className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-surface transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
