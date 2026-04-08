import React from 'react';
import { founder } from '../content/founder';
export function Footer() {
  return <footer className="w-full border-t border-border/60 bg-background/70 py-8 md:py-10">
      <div className="container flex flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center md:px-6">
        <div>
          <p className="text-lg font-semibold text-primary">saalr.io</p>
          <p className="text-sm leading-loose text-muted-foreground">
            {founder.title} by {founder.name}.
          </p>
        </div>
        <p className="text-sm leading-loose text-muted-foreground">
          © 2026 SAALR.io. Founder-led advisory for AI, cloud, and ERP modernization.
        </p>
      </div>
    </footer>;
}