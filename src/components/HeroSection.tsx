import React from 'react';
import { ArrowRight, Bot, Download, GitBranch, ShieldCheck, Sparkles } from 'lucide-react';
import { founder } from '../content/founder';

type HeroSectionProps = {
  canInstall: boolean;
  installState: 'idle' | 'ready' | 'installing' | 'installed';
  isOnline: boolean;
  onInstallApp: () => Promise<void>;
};

export function HeroSection({ canInstall, installState, isOnline, onInstallApp }: HeroSectionProps) {
  const orchestrationLayers = [{
    title: 'Agent Design',
    detail: 'Role-specific agents with bounded tools, prompts, and evaluation loops.',
    icon: Bot
  }, {
    title: 'Workflow Control',
    detail: 'Human approval steps, retries, and routing logic that keep execution reliable.',
    icon: GitBranch
  }, {
    title: 'Governance',
    detail: 'Observability, policy checks, and measurable handoff quality from pilot to production.',
    icon: ShieldCheck
  }];
  return <section className="section-shell w-full py-14 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
          <div className="space-y-7">
            <div className="eyebrow shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              Founder-led engineering and AI modernization
            </div>
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                {founder.name}
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                {founder.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-xl">
                {founder.headline}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/65 px-4 py-2 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-primary" />
                Apple-like interface polish
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/65 px-4 py-2 backdrop-blur-xl">
                <span className={`h-2.5 w-2.5 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                {isOnline ? 'Live and installable' : 'Offline ready after first load'}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="panel p-5">
                <div className="text-3xl font-semibold text-primary">{founder.stats[0].value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{founder.stats[0].label}</p>
              </div>
              <div className="panel p-5">
                <div className="text-3xl font-semibold text-primary">{founder.stats[1].value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{founder.stats[1].label}</p>
              </div>
              <div className="panel p-5">
                <div className="text-3xl font-semibold text-primary">{founder.stats[2].value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{founder.stats[2].label}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row min-[400px]:items-center">
              <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-[0_16px_38px_rgba(37,99,235,0.24)] transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Book Strategy Call
              </a>
              <a href="#portfolio" className="inline-flex h-12 items-center justify-center rounded-full border border-border/70 bg-background/68 px-8 text-sm font-medium shadow-[0_12px_26px_rgba(15,23,42,0.08)] transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring backdrop-blur-xl">
                View Founder Products <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              {canInstall && <button type="button" className="inline-flex h-12 items-center justify-center rounded-full border border-border/70 bg-white/60 px-6 text-sm font-medium text-foreground shadow-[0_12px_26px_rgba(15,23,42,0.08)] transition-colors hover:bg-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:bg-white/8 dark:hover:bg-white/12" onClick={onInstallApp} disabled={installState === 'installing'}>
                  <Download className="mr-2 h-4 w-4 text-primary" />
                  {installState === 'installing' ? 'Installing...' : 'Install App'}
                </button>}
            </div>
          </div>
          <div className="panel relative mx-auto w-full max-w-xl overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,148,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.28),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(90,148,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]"></div>
            <div className="relative space-y-6">
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Orchestration Stack</p>
                  <h2 className="mt-2 text-3xl font-semibold">Core modernization pillars</h2>
                </div>
                <div className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {isOnline ? 'Enterprise-ready' : 'Cached for offline review'}
                </div>
              </div>
              <div className="space-y-4">
                {orchestrationLayers.map(layer => {
                const Icon = layer.icon;
                return <div key={layer.title} className="rounded-[24px] border border-white/40 bg-[hsl(var(--background)/0.72)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] dark:border-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold">{layer.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">{layer.detail}</p>
                        </div>
                      </div>
                    </div>;
              })}
              </div>
              <div className="rounded-[24px] border border-primary/20 bg-primary/[0.08] p-5 text-foreground backdrop-blur-xl dark:bg-primary/10">
                <p className="text-xs uppercase tracking-[0.24em] text-primary">Engagement outcome</p>
                <p className="mt-3 text-lg leading-7">
                  Executive alignment, technical depth, and delivery systems that scale from pilot to enterprise execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}