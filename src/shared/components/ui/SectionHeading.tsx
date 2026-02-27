import { cn } from '@/shared/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'center', className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <h2
        className={cn(
          'text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50',
          align === 'center' && 'mx-auto'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-secondary',
          align === 'center' && 'mx-auto'
        )}
      />
    </div>
  );
}
