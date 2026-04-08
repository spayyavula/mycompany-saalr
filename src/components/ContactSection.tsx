import React from 'react';
import { Globe, Mail } from 'lucide-react';
import { founder } from '../content/founder';
export function ContactSection() {
  return <section id="contact" className="section-shell w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="eyebrow">
              Contact
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl">
              Start with the transformation that matters most.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              If you are shaping a GenAI roadmap, modernizing ERP and cloud systems, or trying to improve engineering execution across a complex portfolio, this is the right conversation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 lg:grid-cols-2">
          <div className="panel space-y-6 p-8">
            <div className="space-y-2">
              <h3 className="text-4xl">Talk directly with {founder.name}</h3>
              <p className="text-muted-foreground leading-7">
                Share the business context, the delivery friction, and the target outcome. The goal is to identify where engineering leadership, AI, cloud, or ERP modernization can create measurable leverage.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>{founder.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary" />
                <span>{founder.location}</span>
              </div>
            </div>
            <div className="rounded-[22px] bg-primary p-5 text-primary-foreground">
              <p className="text-sm uppercase tracking-[0.22em] text-primary-foreground/70">Best first message</p>
              <p className="mt-3 text-base leading-7">Describe the transformation effort, the systems involved, the team structure, and where delivery or architecture is breaking down today.</p>
            </div>
          </div>
          <form className="panel space-y-4 p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name
                </label>
                <input id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your email" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Subject
              </label>
              <input id="subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="What orchestration problem are you solving?" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Message
              </label>
              <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tell me about the business goals, platforms, stakeholders, and where engineering execution is under strain."></textarea>
            </div>
            <button type="submit" className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>;
}