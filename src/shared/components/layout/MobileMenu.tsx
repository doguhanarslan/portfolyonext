'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { ThemeToggle } from './ThemeToggle';
import { LocaleSwitcher } from './LocaleSwitcher';
import { cn } from '@/shared/lib/utils';
import type { Locale } from '@/core/types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
  activeSection: string;
  onNavClick: (e: React.MouseEvent, href: string) => void;
}

export function MobileMenu({ isOpen, onClose, locale, activeSection, onNavClick }: MobileMenuProps) {
  const handleClick = (e: React.MouseEvent, href: string) => {
    onNavClick(e, href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-white dark:bg-background z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700/30">
                <span className="text-xl font-bold gradient-text">DA</span>
                <button
                  onClick={onClose}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-surface transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-zinc-600 dark:text-zinc-400" />
                </button>
              </div>

              <nav className="flex-1 p-6">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          onClick={(e) => handleClick(e, item.href)}
                          className={cn(
                            'relative block px-4 py-3.5 rounded-xl text-lg font-medium transition-all duration-200',
                            isActive
                              ? 'text-accent dark:text-accent-light bg-accent/[0.08] dark:bg-accent/[0.12]'
                              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-surface/50'
                          )}
                        >
                          <span className="flex items-center gap-2.5">
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            )}
                            {item.label[locale]}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="p-6 border-t border-zinc-200 dark:border-zinc-700/30 flex items-center gap-3">
                <ThemeToggle />
                <LocaleSwitcher locale={locale} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
