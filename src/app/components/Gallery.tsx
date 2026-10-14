import { motion } from 'motion/react';

const projects = [
  {
    number: '01',
    title: 'Custom Carport Feature Wall',
    description:
      'Replaced weathered sheeting with custom vertical timber slat screening for improved privacy and aesthetics.',
    beforeAfter: {
      before: '/Owen2.0-Test/images/1A.webp',
      after: '/Owen2.0-Test/images/1B.webp',
    },
  },
  {
    number: '02',
    title: 'Verandah Plantation Shutter Enclosure',
    description:
      'Custom framing and white plantation shutter installation for outdoor deck privacy and weather protection.',
    beforeAfter: {
      before: '/Owen2.0-Test/images/2A.webp',
      after: '/Owen2.0-Test/images/2B.webp',
    },
  },
  {
    number: '03',
    title: 'Custom Shipping Container Access Door',
    description:
      'Wall cutout, galvanized steel sub-frame fabrication, and secure roller door fitment.',
    stages: [
      '/Owen2.0-Test/images/3A.webp',
      '/Owen2.0-Test/images/3B.webp',
      '/Owen2.0-Test/images/3C.webp',
    ],
  },
  {
    number: '04',
    title: 'Structural Steel Mezzanine Build',
    description:
      'Custom steel column and floor framing installation to maximize second-story storage space, complete with safety handrails and access stairs.',
    stages: [
      '/Owen2.0-Test/images/4A.webp',
      '/Owen2.0-Test/images/4B.webp',
      '/Owen2.0-Test/images/4C.webp',
    ],
  },
];

export function Gallery() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary pb-24 pt-36">
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

      <div className="absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 h-16 w-16 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-primary/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Recent Projects
            </span>
          </div>
          <h1
            className="mb-6 text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
            }}
          >
            Before & After
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Take a look at some of our completed work and the fabrication process behind it.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden border-2 border-border bg-background transition-colors duration-300 hover:border-primary"
            >
              <div className="absolute right-3 top-3 z-10 font-mono text-xs text-primary/40">
                {project.number}
              </div>

              {'beforeAfter' in project ? (
                <div className="grid grid-cols-2 gap-px bg-border">
                  {[
                    { label: 'Before', src: project.beforeAfter.before },
                    { label: 'After', src: project.beforeAfter.after },
                  ].map((image) => (
                    <div key={image.label} className="relative aspect-[4/3] overflow-hidden bg-background">
                      <img
                        src={image.src}
                        alt={`${project.title} - ${image.label}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute bottom-3 left-3 border border-primary/60 bg-background/90 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
                        {image.label}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-px bg-border">
                  {project.stages.map((src, stageIndex) => (
                    <div key={src} className="relative aspect-[4/3] overflow-hidden bg-background">
                      <img
                        src={src}
                        alt={`${project.title} - build stage ${stageIndex + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-6">
                <p className="mb-2 text-xs uppercase tracking-widest text-primary">
                  {'beforeAfter' in project ? 'Before & After' : 'Build Process'}
                </p>
                <h2
                  className="mb-3 text-2xl text-white transition-colors group-hover:text-primary"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}
                >
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 h-0 w-0 border-b-[40px] border-b-primary/20 border-l-[40px] border-l-transparent transition-colors group-hover:border-b-primary/40" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
