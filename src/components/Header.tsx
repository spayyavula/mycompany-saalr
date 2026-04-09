import React, { useState } from 'react';
import { Download, Menu, MoonStar, SunMedium, WifiOff, X } from 'lucide-react';

type HeaderProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  canInstall: boolean;
  installState: 'idle' | 'ready' | 'installing' | 'installed';
  isOnline: boolean;
  onInstallApp: () => Promise<void>;
};

export function Header({ theme, onToggleTheme, canInstall, installState, isOnline, onInstallApp }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const themeLabel = theme === 'dark' ? 'Switch to day mode' : 'Switch to night mode';
  const ThemeIcon = theme === 'dark' ? SunMedium : MoonStar;

  return <header className="sticky top-0 z-50 w-full px-3 pt-3 md:px-5">
      <div className="container px-0 md:px-0">
        <div className="flex h-16 items-center justify-between rounded-full border border-white/55 bg-[hsl(var(--background)/0.72)] px-4 shadow-[0_14px_38px_rgba(15,23,42,0.10)] backdrop-blur-2xl md:px-6 dark:border-white/10 dark:bg-[hsl(var(--background)/0.72)]">
        <div className="flex items-center gap-3">
          <a href="#" className="text-xl font-bold tracking-tight text-primary md:text-2xl">
            saalr.io
          </a>
          <div className="hidden text-xs uppercase tracking-[0.28em] text-muted-foreground sm:block">
            Agentic Orchestration
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            Founder
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Capabilities
          </a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Fit
          </a>
          {!isOnline && <span className="inline-flex h-10 items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <WifiOff className="h-4 w-4 text-primary" />
              Offline
            </span>}
          {canInstall && <button type="button" className="inline-flex h-10 items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-4 text-sm font-medium text-foreground transition-colors hover:bg-primary/[0.12]" onClick={onInstallApp} disabled={installState === 'installing'}>
              <Download className="h-4 w-4 text-primary" />
              <span>{installState === 'installing' ? 'Installing...' : 'Install App'}</span>
            </button>}
          {installState === 'installed' && <span className="inline-flex h-10 items-center rounded-full border border-border/60 bg-background/70 px-4 text-sm font-medium text-muted-foreground">
              Installed
            </span>}
          <button type="button" className="inline-flex h-10 items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
            <ThemeIcon className="h-4 w-4 text-primary" />
            <span>{theme === 'dark' ? 'Day' : 'Night'}</span>
          </button>
          <a href="#contact" className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_12px_30px_rgba(37,99,235,0.22)] transition-colors hover:bg-primary/90">
            Book Strategy Call
          </a>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground transition-colors hover:bg-secondary" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
            <ThemeIcon size={18} className="text-primary" />
          </button>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground transition-colors hover:bg-secondary" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </div>
      {mobileMenuOpen && <div className="md:hidden fixed inset-x-3 top-[5.25rem] z-50 overflow-hidden rounded-[28px] border border-white/50 bg-[hsl(var(--background)/0.92)] shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-white/10">
          <nav className="flex flex-col p-6 space-y-5">
            {!isOnline && <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <WifiOff className="h-4 w-4 text-primary" />
                Offline ready
              </div>}
            {canInstall && <button type="button" className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/[0.12]" onClick={onInstallApp} disabled={installState === 'installing'}>
                <Download className="h-4 w-4 text-primary" />
                <span>{installState === 'installing' ? 'Installing...' : 'Install app'}</span>
              </button>}
            {installState === 'installed' && <div className="inline-flex w-fit items-center rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground">
                Installed
              </div>}
            <button type="button" className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary" onClick={onToggleTheme}>
              <ThemeIcon className="h-4 w-4 text-primary" />
              <span>{theme === 'dark' ? 'Day mode' : 'Night mode'}</span>
            </button>
            <a href="#about" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Founder
            </a>
            <a href="#services" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Capabilities
            </a>
            <a href="#portfolio" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Products
            </a>
            <a href="#testimonials" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Fit
            </a>
            <a href="#contact" className="text-lg font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors w-full text-center" onClick={() => setMobileMenuOpen(false)}>
              Book Strategy Call
            </a>
          </nav>
        </div>}
    </header>;
}