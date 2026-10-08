import { useState } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary">
      {/* Blueprint corner marks */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
              <Wrench className="w-8 h-8 text-primary relative" strokeWidth={2.5} />
            </div>
            <div>
              <div
                className="text-primary uppercase tracking-wider leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.75rem' }}
              >
                Affordable
              </div>
              <div
                className="text-white uppercase tracking-widest leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.75rem' }}
              >
                Fix & Fab
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Services', id: 'services' },
              { label: 'About', id: 'about' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-primary transition-colors uppercase tracking-wider relative group"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.15rem' }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-primary text-background hover:bg-primary/90 transition-all border-2 border-primary uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.15rem' }}
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 border-t border-primary/30 pt-6 space-y-4">
            {[
              { label: 'Services', id: 'services' },
              { label: 'About', id: 'about' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white hover:text-primary transition-colors uppercase tracking-wider text-xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 bg-primary text-background hover:bg-primary/90 transition-all border-2 border-primary uppercase tracking-wider text-xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Get Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
