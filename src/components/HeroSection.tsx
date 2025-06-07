import React from 'react';
import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  return <section className="w-full bg-gradient-to-b from-background to-secondary/20 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              29 Years of Industry Experience
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Building Innovative Solutions for Forward-Thinking Entrepreneurs
            </h1>
            <p className="text-muted-foreground md:text-xl">
              SAALR LLC provides expert consulting in Web & Mobile Development,
              Wealth Management, AI/ML, and Enterprise Solutions. Let's
              collaborate to scale your vision.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="#services" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                My Services
              </a>
              <a href="#contact" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md aspect-square relative lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative h-full flex items-center justify-center rounded-full bg-secondary/50 p-4">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="text-2xl font-bold">SAALR LLC</div>
                <div className="text-muted-foreground">
                  Technology • Finance • Education
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}