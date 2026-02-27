'use client';

import { useEffect, useRef, useCallback } from 'react';
import { HeroSection } from '@/features/hero/HeroSection';
import { AboutSection } from '@/features/about/AboutSection';
import { SkillsSection } from '@/features/skills/SkillsSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { ContactSection } from '@/features/contact/ContactSection';
import { Footer } from '@/shared/components/layout/Footer';
import type { Locale } from '@/core/types';
import type { Dictionary } from '@/shared/i18n/getDictionary';

interface HomeContentProps {
  locale: Locale;
  dict: Dictionary;
}

const SCROLL_COOLDOWN = 900;
const DELTA_THRESHOLD = 30;

export function HomeContent({ locale, dict }: HomeContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const currentIndex = useRef(0);
  const accumulatedDelta = useRef(0);
  const deltaTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const sectionCount = 5;

  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const clamped = Math.max(0, Math.min(index, sectionCount - 1));
    if (clamped === currentIndex.current && isScrolling.current) return;

    currentIndex.current = clamped;
    isScrolling.current = true;

    const targetY = clamped * container.clientHeight;
    container.scrollTo({ top: targetY, behavior: 'smooth' });

    setTimeout(() => {
      isScrolling.current = false;
    }, SCROLL_COOLDOWN);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      accumulatedDelta.current += e.deltaY;

      if (deltaTimer.current) clearTimeout(deltaTimer.current);
      deltaTimer.current = setTimeout(() => {
        accumulatedDelta.current = 0;
      }, 150);

      if (Math.abs(accumulatedDelta.current) < DELTA_THRESHOLD) return;

      const direction = accumulatedDelta.current > 0 ? 1 : -1;
      accumulatedDelta.current = 0;
      scrollToIndex(currentIndex.current + direction);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [scrollToIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 50) return;

      const direction = deltaY > 0 ? 1 : -1;
      scrollToIndex(currentIndex.current + direction);
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollToIndex]);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');
    const sections = ['home', 'about', 'skills', 'work', 'contact'];
    const idx = sections.indexOf(id);
    if (idx === -1) return;

    const timer = setTimeout(() => scrollToIndex(idx), 250);
    return () => clearTimeout(timer);
  }, [scrollToIndex]);

  return (
    <div className="snap-container" id="snap-container" ref={containerRef}>
      <section id="home" className="snap-section">
        <HeroSection dict={dict} />
      </section>

      <section id="about" className="snap-section bg-white/80 dark:bg-transparent">
        <AboutSection locale={locale} dict={dict} />
      </section>

      <section id="skills" className="snap-section bg-white/60 dark:bg-surface/40">
        <SkillsSection locale={locale} dict={dict} />
      </section>

      <section id="work" className="snap-section bg-white/80 dark:bg-transparent">
        <ProjectsSection locale={locale} dict={dict} />
      </section>

      <section id="contact" className="snap-section bg-white/60 dark:bg-surface/40">
        <ContactSection dict={dict} />
        <Footer dict={dict} />
      </section>
    </div>
  );
}
