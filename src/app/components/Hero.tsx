import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1745448797905-36e057c09088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbCUyMG1ldGFsJTIwZmFicmljYXRpb258ZW58MXx8fHwxNzc2MTUzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Welding sparks"
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

      {/* Corner measurements - Blueprint style */}
      <div className="absolute top-24 left-6 text-primary/40 font-mono text-xs tracking-wider">
        <div>X: 0.00</div>
        <div>Y: 0.00</div>
      </div>
      <div className="absolute top-24 right-6 text-primary/40 font-mono text-xs tracking-wider text-right">
        <div>SCALE: 1:1</div>
        <div>REV: 01</div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-2 border-primary/50">
            <span className="text-primary uppercase tracking-widest text-sm font-semibold">
              Professional Boilermaking Services
            </span>
          </div>

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
            Expert welding, fabrication, and repair services. From structural steel to
            custom metalwork, we deliver quality craftsmanship at affordable rates.
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
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-primary text-background hover:bg-primary/90 transition-all border-2 border-primary uppercase tracking-wider group relative overflow-hidden"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem' }}
            >
              <span className="relative z-10">Request Free Quote</span>
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
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: '12+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Completed' },
              { value: 'Available', label: 'Emergency Service' },
            ].map((stat, i) => (
              <div key={i} className="relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary" />
                <div
                  className="text-primary mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)' }}
                >
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  );
}
