import React from 'react';
import { Code, LineChart, BookOpen, Layers, Cpu, BarChart3 } from 'lucide-react';
export function ServicesSection() {
  return <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How I Can Help You
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Leverage my extensive expertise to help your business grow and
              innovate
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full border bg-background p-3">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Web & Mobile Development</h3>
            <p className="text-center text-sm text-muted-foreground">
              Custom web applications and mobile solutions built with the latest
              technologies for optimal performance and user experience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full border bg-background p-3">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Wealth Management</h3>
            <p className="text-center text-sm text-muted-foreground">
              Strategic investment advice and portfolio management for stocks,
              futures, and options trading to maximize returns.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full border bg-background p-3">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Education & Training</h3>
            <p className="text-center text-sm text-muted-foreground">
              Innovative learning solutions including gamified education
              platforms and comprehensive career counseling services.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full border bg-background p-3">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Product Design</h3>
            <p className="text-center text-sm text-muted-foreground">
              End-to-end product design services from concept to launch,
              focusing on user-centered design principles and market fit.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full border bg-background p-3">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">AI & ML Solutions</h3>
            <p className="text-center text-sm text-muted-foreground">
              Cutting-edge artificial intelligence and machine learning
              implementations to solve complex business challenges.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full border bg-background p-3">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Scalable Engineering</h3>
            <p className="text-center text-sm text-muted-foreground">
              Architecture design and implementation for applications that can
              scale efficiently with your business growth.
            </p>
          </div>
        </div>
      </div>
    </section>;
}