import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { LightboxImage } from './LightboxImage';

const projects = [
  {
    number: '01',
    title: 'Custom Forklift Lifting Jib',
    images: ['Forklift Jib (1).jpg', 'Forklift Jib (2).jpg'],
  },
  {
    number: '02',
    title: 'Shipping Container Modifications',
    images: [
      'shipping container modifications (1).jpg',
      'shipping container modifications (2).jpg',
      'shipping container modifications (3).jpg',
      'shipping container modifications (4).jpg',
      'shipping container modifications (5).jpg',
      'shipping container modifications (6).jpg',
      'shipping container modifications (7).jpg',
      'shipping container modifications (8).jpg',
    ],
  },
  {
    number: '03',
    title: 'Steel Deck Structures',
    images: [
      'Deck structure (1).jpg',
      'Deck structure (2).jpg',
      'Deck structure (3).jpg',
      'Deck structure (4).jpg',
    ],
  },
  {
    number: '04',
    title: 'Custom Security Gates',
    images: [
      'Sercurity gate before and after (1).jpg',
      'Sercurity gate before and after (2).jpg',
    ],
  },
  {
    number: '05',
    title: 'Safety Rails & Barriers',
    images: [
      'Safety Rails (1).jpg',
      'Safety Rails (2).jpg',
      'Safety Rails (3).jpg',
      'Safety Rails (4).jpg',
    ],
  },
  {
    number: '06',
    title: 'Trailer Repairs & Modifications',
    images: [
      'Trailer Modifications (1).jpg',
      'Trailer Modifications (2).jpg',
      'Trailer Modifications (3).jpg',
    ],
  },
  {
    number: '07',
    title: 'Custom Steel Frames',
    images: ['Frame as per customer request (2).jpg'],
  },
  {
    number: '08',
    title: 'Bollards & Safety Barriers',
    images: ['Bollard.jpg', 'Bollard 2.jpg'],
  },
  {
    number: '09',
    title: 'Bus Door Repairs',
    images: ['Bus Door (2).jpg'],
  },
  {
    number: '10',
    title: 'Gate & Hinge Repairs',
    images: [
      'Gate Repairs (1).jpg',
      'Gate Repairs (2).jpg',
      'Gate Repairs (4).jpg',
      'Gate Repairs (5).jpg',
    ],
  },
  {
    number: '11',
    title: 'Custom Steel Letterboxes',
    images: [
      'Letterbox (1).jpg',
      'Letterbox (2).jpg',
      'Letterbox (3).jpg',
      'Letterbox (4).png',
      'Letterbox (5).jpg',
    ],
  },
  {
    number: '12',
    title: 'Before & After Repairs',
    images: ['Before.jpg', 'After.jpg'],
  },
  {
    number: '13',
    title: 'Small Fabrication Jobs',
    images: [
      'Small Jobs (0).jpg',
      'Small Jobs (1).jpg',
      'Small Jobs (2).jpg',
      'Small Jobs (3).jpg',
      'Small Jobs (4).jpg',
      'Small Jobs (5).jpg',
      'Small Jobs (6).jpg',
      'Small Jobs (7).jpg',
      'Small Jobs (8).jpg',
    ],
  },
  {
    number: '14',
    title: 'Welding & Fabrication',
    images: ['Weld (1).jpg', 'Weld (2).jpg'],
  },
];

const fillFrameGalleryImages = new Set([
  'Deck structure (3).jpg',
  'Forklift Jib (1).jpg',
  'Gate Repairs (2).jpg',
  'Gate Repairs (5).jpg',
  'Safety Rails (1).jpg',
  'Safety Rails (2).jpg',
  'Safety Rails (3).jpg',
  'Trailer Modifications (2).jpg',
  'Trailer Modifications (3).jpg',
  'Weld (1).jpg',
  'Weld (2).jpg',
  'shipping container modifications (1).jpg',
  'shipping container modifications (2).jpg',
  'shipping container modifications (3).jpg',
  'shipping container modifications (4).jpg',
  'shipping container modifications (5).jpg',
  'shipping container modifications (8).jpg',
]);

function getImageLabel(filename: string) {
  const filenameWithoutExtension = filename.replace(/\.[^.]+$/, '').toLowerCase();

  if (/^before(?:\s*\(\d+\))?$/.test(filenameWithoutExtension)) return 'Before';
  if (/^after(?:\s*\(\d+\))?$/.test(filenameWithoutExtension)) return 'After';

  return null;
}

export function Gallery() {
  const navigate = useNavigate();

  const renderProject = (project: (typeof projects)[number], index: number) => (
    <motion.article
      key={project.number}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative mb-6 w-full overflow-hidden border border-border bg-background transition-colors duration-300 hover:border-primary"
    >
      <div className="absolute right-3 top-3 z-10 font-mono text-xs text-primary/70">
        {project.number}
      </div>

      <div className="grid grid-cols-4 gap-px bg-border">
        {project.images.map((filename, imageIndex) => {
          const label = getImageLabel(filename);
          const isOnlyImage = project.images.length === 1;
          const isCenteredLastImage =
            project.images.length > 1 &&
            project.images.length % 2 !== 0 &&
            imageIndex === project.images.length - 1;

          return (
            <div
              key={filename}
              className={`relative aspect-[4/3] overflow-hidden bg-background ${
                isOnlyImage
                  ? 'col-span-4'
                  : isCenteredLastImage
                    ? 'col-span-2 col-start-2'
                    : 'col-span-2'
              }`}
            >
              <LightboxImage
                src={`${import.meta.env.BASE_URL}images/Gallery/${encodeURIComponent(filename)}`}
                alt={`${label ? `${label} photo` : project.title} - ${project.title}`}
                className={`h-full w-full ${
                  fillFrameGalleryImages.has(filename)
                    ? 'object-cover'
                    : 'object-contain'
                }`}
              />
              {label && (
                <span className="absolute bottom-3 left-3 border border-primary/60 bg-background/90 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
                  {label}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="border-t border-border px-5 py-4">
        <h2
          className="text-xl text-white transition-colors group-hover:text-primary"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}
        >
          {project.title}
        </h2>
      </div>

      <div className="absolute bottom-0 right-0 h-0 w-0 border-b-[40px] border-b-primary/20 border-l-[40px] border-l-transparent transition-colors group-hover:border-b-primary/40" />
    </motion.article>
  );

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
              Fabrication Projects, Welding & Repairs
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
            Our Work
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Take a look at some of our completed projects, 
            from custom steel fabrication and installations to repairs and modifications. 
            Every job is approached with care and attention to detail..
          </p>
        </motion.div>

        <div className="hidden gap-6 md:grid md:grid-cols-2">
          {[0, 1].map((column) => (
            <div key={column}>
              {projects.map((project, index) =>
                index % 2 === column ? renderProject(project, index) : null
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:hidden">
          {projects.map(renderProject)}
        </div>

        <div className="mt-16 border-2 border-primary/30 bg-background p-8 text-center">
          <h2
            className="mb-3 text-3xl text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Have a project in mind?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Tell us what you need made, repaired or installed and request a no-obligation quote.
          </p>
          <button
            onClick={() => navigate('/?section=contact')}
            className="border-2 border-primary bg-primary px-8 py-3 uppercase tracking-wider text-background transition-all hover:bg-primary/90"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.15rem' }}
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
