import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { founder } from '../content/founder';
export function TestimonialsSection() {
  return <section id="testimonials" className="section-shell w-full py-12 md:py-24 lg:py-32 bg-secondary/25">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="eyebrow">
              Profile
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl">
              Why this background fits complex transformation work
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Instead of generic testimonials, this section highlights the operating profile behind the practice and where it is strongest.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {founder.operatingSignals.map(signal => <div key={signal.title} className="panel flex flex-col space-y-4 p-6">
              <CheckCircle2 className="h-8 w-8 text-accent" />
              <h3 className="text-3xl">{signal.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{signal.content}</p>
            </div>)}
        </div>
        <div className="panel mx-auto max-w-6xl p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <h3 className="text-4xl">The standard is not activity. The standard is reliable business outcomes across product, platform, and operations.</h3>
            <p className="text-base leading-8 text-muted-foreground">
              That means clear ownership, credible roadmaps, delivery metrics, resilient architecture, and systems that make sense for the business model, not just the demo environment.
            </p>
          </div>
        </div>
      </div>
    </section>;
}