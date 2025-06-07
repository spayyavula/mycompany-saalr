import React from 'react';
import { Code, LineChart, Briefcase, Lightbulb, Award } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Me
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              With 29 years of industry experience, I've built a diverse
              skillset spanning multiple domains.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="flex items-start gap-4">
                  <Code className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Web & Mobile Development</h3>
                    <p className="text-sm text-muted-foreground">
                      29 years of experience building scalable web applications
                      and mobile solutions across various platforms and
                      technologies.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <LineChart className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Wealth Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Expert in stocks, futures, and options trading with proven
                      strategies for wealth growth and portfolio management.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Enterprise Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                      Extensive experience with ERP systems, CRM implementation,
                      and enterprise-grade architecture design.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Education & Innovation</h3>
                    <p className="text-sm text-muted-foreground">
                      Pioneered learning through gaming approaches and career
                      counseling methodologies to enhance educational outcomes.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Product Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Strategic product design expertise with a focus on user
                      experience and market fit for maximum adoption.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <Code className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-medium">AI & Machine Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Implementing cutting-edge AI and ML solutions to solve
                      complex business problems and drive innovation.
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