import React from 'react';
import { ArrowRight, Bot, GitBranch, ShieldCheck } from 'lucide-react';
import { founder } from '../content/founder';
export function HeroSection() {
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
  return <section className="section-shell w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="eyebrow">
              Founder-led engineering and AI modernization
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-muted-foreground">
                {founder.name}
              </p>
              <h1 className="max-w-3xl text-5xl leading-none sm:text-6xl md:text-7xl">
                {founder.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-xl">
                {founder.headline}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="panel p-4">
                <div className="text-3xl font-bold text-primary">{founder.stats[0].value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{founder.stats[0].label}</p>
              </div>
              <div className="panel p-4">
                <div className="text-3xl font-bold text-primary">{founder.stats[1].value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{founder.stats[1].label}</p>
              </div>
              <div className="panel p-4">
                <div className="text-3xl font-bold text-primary">{founder.stats[2].value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{founder.stats[2].label}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Book Strategy Call
              </a>
              <a href="#portfolio" className="inline-flex h-11 items-center justify-center rounded-full border border-primary/20 bg-background/60 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                View Founder Products <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="panel relative mx-auto w-full max-w-xl overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,126,73,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(26,96,103,0.18),transparent_28%)]"></div>
            <div className="relative space-y-6">
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Orchestration Stack</p>
                  <h2 className="mt-2 text-3xl">Core modernization pillars</h2>
                </div>
                <div className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                  Enterprise-ready
                </div>
              </div>
              <div className="space-y-4">
                {orchestrationLayers.map(layer => {
                const Icon = layer.icon;
                return <div key={layer.title} className="rounded-[24px] border border-border/80 bg-background/70 p-5">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-secondary p-3 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-2xl">{layer.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">{layer.detail}</p>
                        </div>
                      </div>
                    </div>;
              })}
              </div>
              <div className="rounded-[24px] bg-primary p-5 text-primary-foreground">
                <p className="text-xs uppercase tracking-[0.24em] text-primary-foreground/70">Engagement outcome</p>
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