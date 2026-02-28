export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Terminal blinking cursor — hidden on mobile */}
      <div className="hidden sm:flex absolute top-[18%] left-[12%] items-center gap-1.5 opacity-30">
        <span className="text-xs font-mono text-muted tracking-wider">$</span>
        <span className="terminal-cursor" />
      </div>

      {/* Decorative accent lines — hidden on mobile */}
      <div className="hidden sm:block absolute top-[25%] right-[15%] w-px h-24 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      <div className="hidden sm:block absolute bottom-[35%] left-[8%] w-20 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Corner bracket marks — hidden on mobile */}
      <div className="hidden sm:block absolute top-[15%] right-[10%]">
        <div className="w-8 h-px bg-accent/20" />
        <div className="w-px h-8 bg-accent/20" />
      </div>
      <div className="hidden sm:block absolute bottom-[15%] left-[10%]">
        <div className="w-px h-8 bg-accent/20" />
        <div className="w-8 h-px bg-accent/20" />
      </div>
    </div>
  );
}
