import { motion } from 'motion/react';
import { Flame, Wrench, Settings, Hammer, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Welding Services',
    description: 'MIG, TIG, and Arc welding for all metals. Certified welders with expertise in structural and precision work.',
    image: 'https://images.unsplash.com/photo-1759847552281-60e45956124d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbCUyMG1ldGFsJTIwZmFicmljYXRpb258ZW58MXx8fHwxNzc2MTUzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Settings,
    title: 'Metal Fabrication',
    description: 'Custom metal fabrication including gates, railings, stairs, and structural steelwork. Built to your exact specifications.',
    image: 'https://images.unsplash.com/photo-1773966071353-0956f870e034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHdvcmslMjBzdGVlbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc2MTUzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Wrench,
    title: 'Repairs & Maintenance',
    description: 'On-site repairs for machinery, equipment, and structural damage. Fast turnaround for emergency breakdowns.',
    image: 'https://images.unsplash.com/photo-1771591201020-5cd2ba14e731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbCUyMG1ldGFsJTIwZmFicmljYXRpb258ZW58MXx8fHwxNzc2MTUzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Hammer,
    title: 'Structural Steel',
    description: 'Industrial steel erection, modifications, and installations. Experienced in commercial and residential projects.',
    image: 'https://images.unsplash.com/photo-1569950044193-3da491803b90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZXRhbCUyMHdvcmslMjBzdGVlbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc2MTUzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Shield,
    title: 'Safety Rails & Guards',
    description: 'Industrial safety barriers, machine guards, and fall protection systems. Compliant with all safety standards.',
    image: 'https://images.unsplash.com/photo-1763684041948-f254c06b1a05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbCUyMG1ldGFsJTIwZmFicmljYXRpb258ZW58MXx8fHwxNzc2MTUzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Zap,
    title: 'Emergency Callout',
    description: 'Emergency service for urgent repairs and breakdowns. Rapid response to minimize your downtime.',
    image: 'https://images.unsplash.com/photo-1762786478154-4678312f9ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbCUyMG1ldGFsJTIwZmFicmljYXRpb258ZW58MXx8fHwxNzc2MTUzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-secondary overflow-hidden">
      {/* Blueprint grid background */}
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

      {/* Technical corner marks */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-semibold">
              What We Do
            </span>
          </div>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
            }}
          >
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            From small repairs to large-scale fabrication projects, we provide comprehensive
            metalwork solutions across all industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-background border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden"
            >
              {/* Background image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative p-6">
                {/* Icon */}
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                  <service.icon className="w-12 h-12 text-primary relative" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="text-white mb-3 group-hover:text-primary transition-colors"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.75rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-b-primary/20 border-l-[40px] border-l-transparent group-hover:border-b-primary/40 transition-colors" />
              </div>

              {/* Technical marks */}
              <div className="absolute top-2 right-2 text-primary/20 font-mono text-xs group-hover:text-primary/40 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-background border-2 border-primary/30 p-8">
            <p className="text-white text-lg mb-4">
              Need a custom solution? We're here to help.
            </p>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-primary text-background hover:bg-primary/90 transition-all border-2 border-primary uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.15rem' }}
            >
              Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
