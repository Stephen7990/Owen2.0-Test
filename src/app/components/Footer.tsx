import { Wrench, Phone, Mail, MapPin, Facebook, MessageCircle, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t-2 border-primary overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91, 190, 214, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 190, 214, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary blur-md opacity-40" />
                <Wrench className="w-10 h-10 text-primary relative" strokeWidth={2.5} />
              </div>
              <div>
                <div
                  className="text-primary uppercase tracking-wider leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem' }}
                >
                  Affordable
                </div>
                <div
                  className="text-white uppercase tracking-widest leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem' }}
                >
                  Fix & Fab
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Professional boilermaking and fabrication services you can trust. Quality work at
              affordable rates.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/AffordableEquipmentHire" },
                { icon: MessageCircle, href: "https://www.messenger.com/t/566534916" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 border-2 border-border hover:border-primary flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const id = link.toLowerCase();
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem' }}
            >
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Welding Services</li>
              <li>Metal Fabrication</li>
              <li>Repairs & Maintenance</li>
              <li>Structural Steel</li>
              <li>Safety Rails & Guards</li>
              <li>Emergency Callout</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem' }}
            >
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:0412345678"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    0412 677 236
                  </a>
                  <p className="text-xs text-muted-foreground/70">For All Enquiries</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@affordablefixfab.com.au"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                >
                  affordablefixandfab@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Adelaide & Surrounding Areas
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Affordable Fix & Fab. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">Privacy Policy</button>
              <button className="hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>

          {/* Technical mark */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-xs text-primary/40 font-mono">
              <div className="w-2 h-2 border border-primary/40" />
              <span>LICENSED & INSURED BOILERMAKER</span>
              <div className="w-2 h-2 border border-primary/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20" />
    </footer>
  );
}
