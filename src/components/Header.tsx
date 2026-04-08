import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <a href="#" className="text-xl font-bold tracking-tight text-primary md:text-2xl">
            saalr.io
          </a>
          <div className="hidden text-xs uppercase tracking-[0.28em] text-muted-foreground sm:block">
            Agentic Orchestration
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            Founder
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Capabilities
          </a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Fit
          </a>
          <a href="#contact" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Book Strategy Call
          </a>
        </nav>
        <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && <div className="md:hidden fixed inset-0 top-16 z-50 bg-background border-t border-border/60">
          <nav className="flex flex-col p-6 space-y-6">
            <a href="#about" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Founder
            </a>
            <a href="#services" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Capabilities
            </a>
            <a href="#portfolio" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Products
            </a>
            <a href="#testimonials" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Fit
            </a>
            <a href="#contact" className="text-lg font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors w-full text-center" onClick={() => setMobileMenuOpen(false)}>
              Book Strategy Call
            </a>
          </nav>
        </div>}
    </header>;
}