import { motion } from 'motion/react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-start sm:items-center justify-center overflow-hidden pt-24 sm:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1745448797905-36e057c09088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbCUyMG1ldGFsJTIwZmFicmljYXRpb258ZW58MXx8fHwxNzc2MTUzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Welder joining metal with bright welding sparks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91, 190, 214, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 190, 214, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl-mx-auto px-6 py-8 sm:py-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main Heading */}
          <h1
            className="mb-6 text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 12vw, 8rem)',
              lineHeight: 0.9,
              letterSpacing: '0.02em',
            }}
          >
            <span className="block">Precision</span>
            <span className="block text-primary">Metal Work</span>
            <span className="block">You Can Trust</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg md:text-xl"
          >
            Custom steel fabrication, welding and repair services for residential, commercial and industrial customers.
            From one-off custom steelwork and modifications to repairs and on-site welding, we provide practical solutions built to your specifications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => {
                document.querySelector('#contact h2')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-primary text-background hover:bg-primary/90 transition-all border-2 border-primary uppercase tracking-wider group relative overflow-hidden"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem' }}
            >
              <span className="relative z-10">Request a Quote</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent text-white border-2 border-white hover:bg-white hover:text-background transition-all uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem' }}
            >
              View Services
            </button>

            <Link
              to="/gallery"
              className="px-8 py-4 bg-primary text-background hover:bg-primary/90 transition-all border-2 border-primary uppercase tracking-wider group relative overflow-hidden"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem', fontWeight: 600 }}
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 md:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto"
          >
            {[
              '13+ Years Experience',
              'Locally Owned & Operated',
              'Fully Insured',
            ].map((stat, i) => (
              <div key={i} className="relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary" />
                <div
                  className="text-primary px-1 leading-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1rem, 3vw, 2.5rem)' }}
                >
                  {stat}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  );
}
