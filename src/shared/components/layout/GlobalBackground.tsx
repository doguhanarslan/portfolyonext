'use client';

import { useEffect, useRef } from 'react';

export function GlobalBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      el.style.setProperty('--glow-x', `${e.clientX}px`);
      el.style.setProperty('--glow-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-background pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Tech grid */}
      <div className="absolute inset-0 tech-grid" />

      {/* Ambient gradient mesh */}
      <div className="hero-mesh" />

      {/* Mouse-following accent glow */}
      <div className="cursor-glow" />

      {/* Horizontal scan line */}
      <div className="scan-line" />

      {/* Floating depth orbs */}
      <div className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-surface/30 blur-3xl animate-float-slow" />
      <div className="absolute bottom-[30%] right-[10%] w-80 h-80 rounded-full bg-accent/[0.03] blur-3xl animate-float-slower" />
      <div className="absolute top-[60%] left-[55%] w-48 h-48 rounded-full bg-surface/20 blur-3xl animate-float-slow" />
    </div>
  );
}
