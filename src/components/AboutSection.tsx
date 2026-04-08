import React from 'react';
import { Briefcase, Cpu, Layers, Lightbulb, ShieldCheck, Workflow } from 'lucide-react';
import { founder } from '../content/founder';
export function AboutSection() {
  return <section id="about" className="section-shell w-full py-12 md:py-24 lg:py-32 bg-background/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="eyebrow">Founder</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl">
              {founder.name} brings engineering leadership, ERP modernization, and GenAI execution into one delivery model.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              {founder.summary}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="panel p-8">
            <div className="space-y-5">
              <h3 className="text-3xl">What defines the practice</h3>
              <p className="text-base leading-7 text-muted-foreground">
                SAALR.io is founder-led and shaped by enterprise transformation work across Walmart Marketplace, Verizon, Infosys, NurturEnergy, and AT&T, plus product-building experience across Options Academy, CampusPandit, JobsSearch, and GraphWiki. The emphasis is practical modernization: align cloud, ERP, AI, and delivery governance so teams can move faster without losing control.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-border/70 bg-background/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Career scope</p>
                  <p className="mt-3 text-base leading-7">Engineering leadership, cloud architecture, ERP modernization, AI platforms, delivery governance, and enterprise program execution.</p>
                </div>
                <div className="rounded-[22px] border border-border/70 bg-background/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Representative impact</p>
                  <p className="mt-3 text-base leading-7">Teams up to 145 people, $50M+ budgets, and $700M+ business value delivered across global transformation programs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="flex items-start gap-4 rounded-[22px] border border-border/70 bg-card/70 p-5">
                  <Workflow className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="text-2xl">Multi-agent workflow design</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Build GenAI and workflow systems with explicit roles, context flow, approval logic, and measurable delivery outcomes.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4 rounded-[22px] border border-border/70 bg-card/70 p-5">
                  <Layers className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="text-2xl">Operational architecture</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Align cloud platforms, integration layers, data contracts, and escalation paths so modernization efforts hold up in production.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4 rounded-[22px] border border-border/70 bg-card/70 p-5">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="text-2xl">Executive translation</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Convert technical complexity into decision-ready plans for executives, business stakeholders, and engineering teams.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4 rounded-[22px] border border-border/70 bg-card/70 p-5">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="text-2xl">Use-case framing</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Prioritize the right modernization sequence across AI use cases, ERP change, cloud migration, and platform capabilities.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4 rounded-[22px] border border-border/70 bg-card/70 p-5">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="text-2xl">Reliability and guardrails</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Build governance, observability, auditability, and quality gates into the delivery model instead of bolting them on later.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4 rounded-[22px] border border-border/70 bg-card/70 p-5">
                  <Cpu className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="text-2xl">Implementation depth</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Stay grounded in systems design, Jira-based delivery, cloud tooling, ERP integration, data engineering, and measurable rollout plans.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
}