import { cn } from '@/shared/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-zinc-100 text-zinc-700 dark:bg-surface dark:text-zinc-300',
    accent: 'bg-accent/10 text-accent dark:bg-accent/20',
    outline: 'border border-zinc-200 text-zinc-600 dark:border-zinc-700/50 dark:text-zinc-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3.5 py-1.5 rounded-full text-[13px] font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
