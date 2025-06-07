import React from 'react';
import { Quote } from 'lucide-react';
export function TestimonialsSection() {
  const testimonials = [{
    id: 1,
    content: 'Working with SAALR LLC transformed our business. Their expertise in web development and AI integration gave us a competitive edge in the market.',
    author: 'Sarah Johnson',
    role: 'CEO, TechVision Inc.'
  }, {
    id: 2,
    content: 'The wealth management advice I received was invaluable. My investment portfolio has seen consistent growth thanks to the strategic guidance provided.',
    author: 'Michael Chen',
    role: 'Entrepreneur'
  }, {
    id: 3,
    content: 'Our educational platform needed a complete overhaul, and SAALR LLC delivered beyond our expectations with an engaging, gamified learning experience.',
    author: 'Emily Rodriguez',
    role: 'Director of Education, LearnSmart'
  }];
  return <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from entrepreneurs and businesses I've helped succeed
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {testimonials.map(testimonial => <div key={testimonial.id} className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <Quote className="h-8 w-8 text-primary opacity-50" />
              <p className="text-muted-foreground">{testimonial.content}</p>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}