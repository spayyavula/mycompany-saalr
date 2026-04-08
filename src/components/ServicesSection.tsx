import React from 'react';
import { BarChart3, Bot, Cable, Radar, ShieldCheck, Waypoints, Workflow } from 'lucide-react';
import { founder } from '../content/founder';
export function ServicesSection() {
  const services = [{
    title: 'Engineering Leadership',
    description: 'Lead cross-functional engineering programs with roadmap clarity, execution discipline, and measurable delivery accountability.',
    icon: Radar
  }, {
    title: 'GenAI and Workflow Systems',
    description: 'Design AI-enabled workflows, retrieval layers, agent logic, and delivery controls that can survive enterprise operating constraints.',
    icon: Workflow
  }, {
    title: 'ERP and Systems Integration',
    description: 'Connect SAP, Salesforce, APIs, analytics, and operational platforms into a cleaner modernization path.',
    icon: Cable
  }, {
    title: 'Governance and Delivery Controls',
    description: 'Establish quality gates, delivery governance, resource allocation, and stakeholder visibility across major programs.',
    icon: ShieldCheck
  }, {
    title: 'Cloud, DevOps, and Metrics',
    description: 'Improve modernization throughput with CI/CD, observability, release metrics, and resilient cloud operating practices.',
    icon: BarChart3
  }, {
    title: 'Founder and Executive Advisory',
    description: 'Work directly with Sreekanth to sequence AI, ERP, and cloud priorities against business outcomes, budget, and organizational readiness.',
    icon: Bot
  }];
  return <section id="services" className="section-shell w-full py-12 md:py-24 lg:py-32 bg-secondary/35">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="eyebrow">
              Capabilities
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl">
              Where SAALR.io creates leverage
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              The capabilities map directly to the founder background: enterprise engineering leadership, AI product building, ERP modernization, and delivery transformation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => {
          const Icon = service.icon;
          return <div key={service.title} className="panel flex flex-col p-6 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-3xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
              </div>;
        })}
        </div>
        <div className="panel mx-auto mt-2 max-w-6xl p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="eyebrow">Operating principle</div>
              <h3 className="mt-4 text-4xl">Modernization has to improve delivery speed, control, and business clarity at the same time.</h3>
            </div>
            <p className="text-base leading-8 text-muted-foreground">
              Sreekanth's approach combines architectural depth with operational discipline: align teams, systems, metrics, and governance so transformation programs hold up under scale, regulatory pressure, and real business deadlines.
            </p>
          </div>
        </div>
      </div>
    </section>;
}