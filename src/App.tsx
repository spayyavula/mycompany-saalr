import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

type Theme = 'light' | 'dark';
type InstallState = 'idle' | 'ready' | 'installing' | 'installed';

const THEME_STORAGE_KEY = 'saalr-theme';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
}

declare global {
  interface Navigator {
    standalone?: boolean;
  }

  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialInstallState(): InstallState {
  if (typeof window === 'undefined') {
    return 'idle';
  }

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  return isStandalone ? 'installed' : 'idle';
}

export function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [installState, setInstallState] = useState<InstallState>(getInitialInstallState);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isOnline, setIsOnline] = useState(() => typeof navigator === 'undefined' ? true : navigator.onLine);

  useEffect(() => {
    const root = document.documentElement;
    const themeColor = theme === 'dark' ? '#080b12' : '#f7f9fc';

    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', themeColor);
    }
  }, [theme]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setInstallState('ready');
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setInstallState('installed');
    };

    const handleConnectivityChange = () => {
      setIsOnline(window.navigator.onLine);
    };

    const displayModeQuery = window.matchMedia('(display-mode: standalone)');
    const handleDisplayModeChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setInstallState('installed');
        setDeferredPrompt(null);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('online', handleConnectivityChange);
    window.addEventListener('offline', handleConnectivityChange);
    displayModeQuery.addEventListener('change', handleDisplayModeChange);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleConnectivityChange);
      window.removeEventListener('offline', handleConnectivityChange);
      displayModeQuery.removeEventListener('change', handleDisplayModeChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
  };

  const installApp = async () => {
    if (!deferredPrompt || installState === 'installing') {
      return;
    }

    setInstallState('installing');
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === 'accepted') {
      setInstallState('installed');
      setDeferredPrompt(null);
      return;
    }

    setInstallState('ready');
  };

  const canInstall = installState === 'ready' || installState === 'installing';

  return <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header theme={theme} onToggleTheme={toggleTheme} canInstall={canInstall} installState={installState} isOnline={isOnline} onInstallApp={installApp} />
      {!isOnline && <div className="sticky top-[5.25rem] z-40 mx-auto w-full max-w-4xl px-4 md:px-6">
          <div className="glass-banner mt-3 flex items-center justify-between gap-4 rounded-[24px] px-5 py-3 text-sm text-foreground shadow-[0_18px_44px_rgba(15,23,42,0.12)]">
            <span>Offline mode is active. Previously visited pages, icons, and fonts remain available.</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Offline</span>
          </div>
        </div>}
      <main>
        <HeroSection canInstall={canInstall} installState={installState} isOnline={isOnline} onInstallApp={installApp} />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}