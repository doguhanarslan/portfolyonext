'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { navItems } from '@/data/navigation';
import { ThemeToggle } from './ThemeToggle';
import { LocaleSwitcher } from './LocaleSwitcher';
import { MobileMenu } from './MobileMenu';
import type { Locale } from '@/core/types';

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hasSections, setHasSections] = useState(false);

  const isScrolled = activeSection !== 'home';

  useEffect(() => {
    let observers: IntersectionObserver[] = [];

    const setup = () => {
      observers.forEach((obs) => obs.disconnect());
      observers = [];

      const container = document.getElementById('snap-container');
      const sectionIds = navItems.map((item) => item.id);
      const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

      if (elements.length === 0) {
        setHasSections(false);
        return;
      }

      setHasSections(true);

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(id);
          },
          { threshold: 0.35, root: container || null }
        );

        observer.observe(el);
        observers.push(observer);
      });
    };

    const timer = setTimeout(setup, 150);

    return () => {
      clearTimeout(timer);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [pathname]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `/${locale}/${href}`;
      }
    },
    [locale]
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex justify-center pt-4 sm:pt-5 px-4">
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            className={cn(
              'pointer-events-auto flex items-center rounded-2xl transition-all duration-500',
              isScrolled
                ? 'glass-strong shadow-lg shadow-black/5 dark:shadow-black/30'
                : 'glass'
            )}
          >
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="px-4 py-2.5 text-xl font-extrabold shrink-0"
            >
              <span className="gradient-text">DA</span>
            </a>

            <div className="hidden md:block w-px h-5 bg-zinc-300/40 dark:bg-zinc-600/40" />

            <nav className="hidden md:flex items-center px-1.5">
              {navItems.map((item) => {
                const isActive = hasSections && activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'relative px-4 py-2 text-[15px] font-medium rounded-xl transition-colors duration-200 whitespace-nowrap',
                      isActive
                        ? 'text-accent dark:text-accent-light'
                        : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                    )}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-xl bg-accent/[0.08] dark:bg-accent/[0.15]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    <span className="relative z-10 flex items-center gap-1.5">
                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          className="w-1.5 h-1.5 rounded-full bg-accent"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      {item.label[locale]}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="hidden md:block w-px h-5 bg-zinc-300/40 dark:bg-zinc-600/40" />

            <div className="hidden md:flex items-center px-1">
              <LocaleSwitcher locale={locale} />
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden px-3 py-2.5 rounded-xl hover:bg-zinc-100/50 dark:hover:bg-surface/50 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={20} className="text-zinc-600 dark:text-zinc-300" />
            </button>
          </motion.div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        locale={locale}
        activeSection={hasSections ? activeSection : ''}
        onNavClick={handleNavClick}
      />
    </>
  );
}
