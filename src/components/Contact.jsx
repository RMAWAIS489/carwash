import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';

const services = [
  'Website Design & Development',
  'Online Booking System',
  'Automated Reminders',
  'Loyalty Program',
  'Payment Integration',
  'Review Management',
  'CRM / Customer Database',
  'POS Integration',
];

const perks = [
  'Custom website audit',
  'Competitor analysis',
  'Revenue growth roadmap',
  'Tech recommendations',
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business: '', service: '', message: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 bg-white bg-grid-sm overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-blue-50/70 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-50/60 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Let's Talk
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-ink mb-5">
            Ready to{' '}
            <span className="text-gradient">Grow Your Business?</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            Fill out the form and we'll get back to you within 24 hours with a
            custom plan tailored to your car wash business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Free consultation card */}
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-primary">
              <h3 className="font-display font-bold text-2xl mb-3">Free Consultation</h3>
              <p className="text-white/85 text-sm leading-relaxed mb-6">
                No pressure, no commitment. We'll analyze your current setup and
                show you exactly what we'd build — before you spend a dime.
              </p>
              <ul className="flex flex-col gap-3">
                {perks.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <HiCheckCircle className="text-white text-base shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact links */}
            <div className="rounded-2xl bg-surface border border-slate-100 p-6 flex flex-col gap-4 shadow-card">
              <a href="mailto:hello@washhub.io" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <div className="text-ink-faint text-xs">Email us</div>
                  <div className="text-ink-soft text-sm group-hover:text-primary transition-colors font-medium">hello@washhub.io</div>
                </div>
              </a>
              <div className="h-px bg-slate-100" />
              <a href="https://wa.me/1234567890" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <FaWhatsapp className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-ink-faint text-xs">WhatsApp</div>
                  <div className="text-ink-soft text-sm group-hover:text-emerald-600 transition-colors font-medium">Chat with us</div>
                </div>
              </a>
              <div className="h-px bg-slate-100" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-cyan-600" />
                </div>
                <div>
                  <div className="text-ink-faint text-xs">Serving</div>
                  <div className="text-ink-soft text-sm font-medium">Clients Nationwide (US)</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl bg-surface border border-slate-100 p-8 shadow-card">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-4"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <HiCheckCircle className="text-primary text-4xl" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink">Message Sent!</h3>
                  <p className="text-ink-muted max-w-sm">
                    Thanks for reaching out. We'll review your request and get
                    back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-ink-muted text-xs font-semibold mb-2 uppercase tracking-wide">Your Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-ink placeholder-ink-faint focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-ink-muted text-xs font-semibold mb-2 uppercase tracking-wide">Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-ink placeholder-ink-faint focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-ink-muted text-xs font-semibold mb-2 uppercase tracking-wide">Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-ink placeholder-ink-faint focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-ink-muted text-xs font-semibold mb-2 uppercase tracking-wide">Business Name</label>
                      <input type="text" name="business" value={form.business} onChange={handleChange}
                        placeholder="Your Car Wash Co."
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-ink placeholder-ink-faint focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-ink-muted text-xs font-semibold mb-2 uppercase tracking-wide">Service Interested In</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition text-sm"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      <option value="Multiple Services">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-ink-muted text-xs font-semibold mb-2 uppercase tracking-wide">Tell Us About Your Business</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Tell us about your car wash, current challenges, and what you're looking to achieve..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-ink placeholder-ink-faint focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition text-sm resize-none"
                    />
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-base hover:opacity-90 transition-all disabled:opacity-60 shadow-primary"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <><FaPaperPlane /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
