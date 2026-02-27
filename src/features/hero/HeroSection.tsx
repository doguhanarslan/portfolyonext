'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, MapPin, Briefcase } from 'lucide-react';
import { Container } from '@/shared/components/ui/Container';
import { Badge } from '@/shared/components/ui/Badge';
import { Button } from '@/shared/components/ui/Button';
import { HeroBackground } from './HeroBackground';
import { SITE } from '@/core/constants/site';
import type { Dictionary } from '@/shared/i18n/getDictionary';

interface HeroSectionProps {
  dict: Dictionary;
}

const techTags = ['.NET', 'C#', 'Flutter', 'Clean Architecture', 'React', 'AI Integration'];

const stats = [
  { value: '3+', labelTr: 'Yıl Deneyim', labelEn: 'Years Exp.' },
  { value: '5+', labelTr: 'Tamamlanan Proje', labelEn: 'Projects' },
  { value: '3', labelTr: 'Canlı Uygulama', labelEn: 'Live Apps' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function HeroSection({ dict }: HeroSectionProps) {
  const isEn = dict.hero.greeting === "Hi, I'm";

  return (
    <div className="relative flex-1 flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-medium"
          >
            {dict.hero.greeting}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-2 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]"
          >
            <span className="gradient-text">{dict.hero.name}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-700 dark:text-zinc-300"
          >
            {dict.hero.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-2 flex items-center justify-center gap-4 text-sm text-zinc-400 dark:text-zinc-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {SITE.location}
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} />
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 text-[13px] font-semibold rounded-lg border border-zinc-200/80 dark:border-zinc-700/30 text-zinc-600 dark:text-zinc-300 bg-white/50 dark:bg-surface/50"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {dict.hero.cta_work}
              <ArrowDown size={18} />
            </Button>
            <Button variant="secondary" size="lg">
              <Download size={18} />
              {dict.hero.cta_cv}
            </Button>
          </motion.div>

         
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium">
            {dict.hero.scroll}
          </span>
          <ArrowDown size={14} className="text-zinc-400 dark:text-zinc-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}
