import React from 'react';
import { ArrowUpRight, Briefcase, GraduationCap, Network, TrendingUp } from 'lucide-react';
import { founder } from '../content/founder';
export function PortfolioSection() {
  const categoryMeta = {
    Trading: {
      icon: TrendingUp,
      description: 'Trading and market-learning products that combine analytics, simulation, and AI-assisted decision support.',
      accent: 'from-amber-500/25 via-orange-500/10 to-background'
    },
    Education: {
      icon: GraduationCap,
      description: 'Learning systems that blend tutoring, AI coaching, structured content, and progress visibility.',
      accent: 'from-sky-500/25 via-cyan-500/10 to-background'
    },
    Career: {
      icon: Briefcase,
      description: 'Career workflow tools that unify search, matching, coaching, and hiring signals into one experience.',
      accent: 'from-emerald-500/25 via-teal-500/10 to-background'
    },
    'Knowledge Graph': {
      icon: Network,
      description: 'Graph-driven products that turn dense subject matter into explorable, connected knowledge.',
      accent: 'from-violet-500/25 via-indigo-500/10 to-background'
    }
  } as const;
  const categories = Object.keys(categoryMeta) as Array<keyof typeof categoryMeta>;
  return <section id="portfolio" className="section-shell w-full py-12 md:py-24 lg:py-32 bg-background/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="eyebrow">
              Products
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl">
              Founder-built websites and platforms
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              These products show how the founder applies AI, workflow design, data systems, and user experience across real operating domains.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {categories.map(category => {
            const Icon = categoryMeta[category].icon;
            return <div key={category} className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{category}</span>
                </div>;
          })}
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-12 py-12">
          {categories.map(category => {
          const meta = categoryMeta[category];
          const Icon = meta.icon;
          const products = founder.products.filter(product => product.category === category);
          return <div key={category} className="space-y-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm text-muted-foreground">
                      <Icon className="h-4 w-4 text-primary" />
                      <span>{category}</span>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                      {meta.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  {products.map(item => {
                const builtId = `${item.domain.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-built`;
                return <div key={item.name} className="panel overflow-hidden p-0">
                        <div className={`relative bg-gradient-to-br ${meta.accent} px-6 py-6`}>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(13,27,30,0.18),transparent_32%)]"></div>
                          <div className="relative flex flex-col gap-5">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                              <div className="flex items-start gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-border/70 bg-background/85 shadow-sm">
                                  <img src={item.logoUrl} alt={`${item.name} logo`} className="h-8 w-8 rounded-md" loading="lazy" />
                                </div>
                                <div>
                                  <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{item.stage}</div>
                                  <h3 className="mt-2 text-3xl">{item.name}</h3>
                                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{item.tagline}</p>
                                </div>
                              </div>
                              <div className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-foreground">
                                {item.metric}
                              </div>
                            </div>
                            <div className="rounded-[24px] border border-border/70 bg-background/78 p-5 shadow-sm backdrop-blur-sm">
                              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Live product</p>
                                  <p className="mt-2 text-base">{item.domain}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {item.highlights.map(highlight => <span key={highlight} className="rounded-full border border-border/70 bg-secondary/45 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                      {highlight}
                                    </span>)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-5 p-6">
                          <div className="flex flex-col gap-3 sm:flex-row">
                            <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                              Visit site <ArrowUpRight className="ml-2 h-4 w-4" />
                            </a>
                            <a href={`#${builtId}`} className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                              What was built
                            </a>
                          </div>
                          <div>
                            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Problem</div>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.challenge}</p>
                          </div>
                          <div id={builtId}>
                            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">What was built</div>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.solution}</p>
                          </div>
                          <div>
                            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Signal</div>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.traction}</p>
                          </div>
                        </div>
                      </div>;
              })}
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}