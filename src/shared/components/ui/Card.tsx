import { cn } from '@/shared/lib/utils';
import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'bordered';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  variant = 'default',
  hover = false,
  padding = 'md',
  className,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-white/70 dark:bg-surface/50 backdrop-blur-sm',
    glass: 'glass',
    bordered: 'bg-white/50 dark:bg-surface/30 border border-zinc-200/80 dark:border-zinc-700/30 backdrop-blur-sm',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-300',
        variants[variant],
        paddings[padding],
        hover && 'hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-black/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
