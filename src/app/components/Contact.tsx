import { motion } from 'motion/react';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-secondary overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91, 190, 214, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 190, 214, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-semibold">
              Get In Touch
            </span>
            <div className="w-12 h-0.5 bg-primary" />
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
            Request A Quote
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your project? Fill out the form below and we'll get back to you
            within 24 hours with a competitive quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="bg-background border-2 border-border hover:border-primary transition-colors p-6 group">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                  <Phone className="w-8 h-8 text-primary relative" />
                </div>
                <div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem' }}
                  >
                    Call Us
                  </h3>
                  <a
                    href="tel:0412 677 236"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    0412 345 678
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Here When You Need Us</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-background border-2 border-border hover:border-primary transition-colors p-6 group">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                  <Mail className="w-8 h-8 text-primary relative" />
                </div>
                <div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem' }}
                  >
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@affordablefixfab.com.au"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    affordablefixandfab@outlook.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Response within 24hrs</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-background border-2 border-border hover:border-primary transition-colors p-6 group">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                  <MapPin className="w-8 h-8 text-primary relative" />
                </div>
                <div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem' }}
                  >
                    Service Area
                  </h3>
                  <p className="text-muted-foreground">
                    Adelaide & Surrounding Areas
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Mobile service available</p>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="bg-primary/10 border-2 border-primary/30 p-6">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                Why Choose Us?
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Free, no-obligation quotes</li>
                <li>✓ Fully insured & certified</li>
                <li>✓ Competitive pricing</li>
                <li>✓ Quality workmanship guaranteed</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-background border-2 border-primary/30 p-8">
              {!isSubmitted ? (
                <form
                  action="https://formspree.io/f/xojzvnbw"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-primary uppercase tracking-wider text-sm font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary border-2 border-border focus:border-primary focus:outline-none transition-colors text-white"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-primary uppercase tracking-wider text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary border-2 border-border focus:border-primary focus:outline-none transition-colors text-white"
                      placeholder="04 126 772 36"
                    />
                  </div>

                  <div>
                    <label className="block text-primary uppercase tracking-wider text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary border-2 border-border focus:border-primary focus:outline-none transition-colors text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-primary uppercase tracking-wider text-sm font-semibold mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary border-2 border-border focus:border-primary focus:outline-none transition-colors text-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="welding">Welding Services</option>
                      <option value="fabrication">Metal Fabrication</option>
                      <option value="repairs">Repairs & Maintenance</option>
                      <option value="structural">Structural Steel</option>
                      <option value="safety">Safety Rails & Guards</option>
                      <option value="emergency">Emergency Callout</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-primary uppercase tracking-wider text-sm font-semibold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-secondary border-2 border-border focus:border-primary focus:outline-none transition-colors text-white resize-none"
                      placeholder="Please describe your project requirements, timeline, and any specific details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-background hover:bg-primary/90 transition-all border-2 border-primary uppercase tracking-wider group relative overflow-hidden flex items-center justify-center gap-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem' }}
                  >
                    <span className="relative z-10">Send Quote Request</span>
                    <Send className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </button>

                  <p className="text-center text-muted-foreground text-sm">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-primary/20 border-4 border-primary rounded-full mx-auto mb-6 flex items-center justify-center"
                  >
                    <Send className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3
                    className="text-white mb-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem' }}
                  >
                    Quote Request Sent!
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
