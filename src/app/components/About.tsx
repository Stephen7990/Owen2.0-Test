import { motion } from "motion/react";
import {
  CheckCircle2,
  Award,
  Clock,
  Users,
} from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-primary" />
              <span className="text-primary uppercase tracking-widest text-sm font-semibold">
                About Us
              </span>
            </div>

            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
              }}
            >
              Quality Workmanship,
              <br />
              <span className="text-primary">
                Affordable Rates
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                With over 12 years of hands-on experience in the
                industry, Affordable Fix & Fab has built a
                reputation for delivering top-quality
                boilermaking and fabrication services at
                competitive prices.
              </p>
              <p className="leading-relaxed">
                Whether it's a small repair job or a major
                fabrication project, we bring the same level of
                precision, professionalism, and dedication to
                every task. Our team is fully certified,
                insured, and equipped to handle projects of any
                scale.
              </p>
              <p className="leading-relaxed">
                We pride ourselves on honest communication,
                reliable service, and work that stands the test
                of time. When you choose us, you're choosing a
                partner who genuinely cares about getting the
                job done right.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  text: "Fully Licensed & Insured",
                },
                { icon: Clock, text: "24/7 Emergency Service" },
                { icon: Users, text: "Experienced Team" },
                {
                  icon: CheckCircle2,
                  text: "Quality Guaranteed",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary blur-lg opacity-30" />
                    <item.icon className="w-6 h-6 text-primary relative" />
                  </div>
                  <span className="text-white font-semibold">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Video with Blueprint overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main video */}
            <div className="relative border-4 border-primary/30">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover"
              >
                <source
                  src="/Welding.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Blueprint grid overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(91, 190, 214, 1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(91, 190, 214, 1) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Technical annotations */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-2 border border-primary/50">
                <div className="text-primary font-mono text-xs">
                  CERTIFIED WELDER
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 border border-primary/50">
                <div className="text-primary font-mono text-xs">
                  15+ YRS EXP
                </div>
              </div>
            </div>

            {/* Accent square */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 -z-10" />

            {/* Measurement lines */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-primary/50" />
                <div className="text-primary/50 font-mono text-xs rotate-90 origin-left">
                  QUALITY
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}