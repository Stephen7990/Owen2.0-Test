import { motion } from 'motion/react';

type PhotoStripProps = {
  images: [string, string];
  label: string;
};

export function PhotoStrip({ images, label }: PhotoStripProps) {
  return (
    <div
      role="region"
      aria-label={label}
      className="relative bg-background py-8 md:py-12"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-primary/20" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-primary/20" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:gap-6">
        {images.map((image, index) => (
          <motion.figure
            key={image}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="group relative aspect-[4/3] overflow-hidden border-2 border-primary/30 bg-secondary transition-colors duration-300 hover:border-primary"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${encodeURIComponent(image)}`}
              alt="Affordable Fix & Fab project photo"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
