import React from 'react';
export function PortfolioSection() {
  const portfolioItems = [{
    id: 1,
    title: 'Enterprise CRM Solution',
    category: 'Web Development',
    description: 'Custom CRM system built for a Fortune 500 company with advanced analytics and reporting.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: 2,
    title: 'Investment Portfolio Tracker',
    category: 'Wealth Management',
    description: 'Real-time investment tracking platform with predictive analytics for market trends.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: 3,
    title: 'Educational Gaming Platform',
    category: 'Education',
    description: 'Gamified learning platform that increased student engagement by 87% for K-12 subjects.',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80'
  }, {
    id: 4,
    title: 'AI-Powered Recommendation Engine',
    category: 'AI/ML',
    description: 'Machine learning algorithm that improved e-commerce conversion rates by 42%.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }];
  return <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my most impactful work across different industries
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
          {portfolioItems.map(item => <div key={item.id} className="group relative overflow-hidden rounded-lg border">
              <div className="aspect-video overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {item.category}
                  </div>
                </div>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}