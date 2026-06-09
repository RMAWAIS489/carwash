'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';

const services = [
  'Website Design & Development',
  'Workflow Automation',
  'Automated Notifications',
  'Email Marketing Funnels',
  'Payment & Subscription Systems',
  'Reputation Management',
  'CRM & Customer Management',
  'Analytics & Reporting',
];

const perks = [
  'Custom business audit',
  'Competitor analysis',
  'Growth & automation roadmap',
  'Tech stack recommendations',
];

const contactItems = [
  {
    icon: FaEnvelope,
    label: 'Email us',
    value: 'zeeshanzafar@automationslimited.com',
    href: 'mailto:zeeshanzafar@automationslimited.com',
    color: 'text-blue-600',
    glow: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.25)',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'Chat with us directly',
    href: 'https://wa.me/923067240504',
    color: 'text-emerald-600',
    glow: 'rgba(16,185,129,0.1)',
    border: 'rgba(16,185,129,0.25)',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Serving',
    value: 'Clients Worldwide',
    href: null,
    color: 'text-cyan-600',
    glow: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.25)',
  },
];

const inputClass = `w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900
  placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2
  focus:ring-blue-100 transition text-sm`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business: '', service: '', message: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-white">
      {/* subtle bg */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4"
          >
            <span className="w-6 h-px bg-blue-400" />
            Let&apos;s Talk
            <span className="w-6 h-px bg-blue-400" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-gray-900 mb-5 leading-tight"
          >
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Grow Your Business?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Fill out the form and we&apos;ll get back to you within 24 hours with a
            custom plan tailored to your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Free consultation card */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/5" />

              <h3 className="relative z-10 font-display font-bold text-2xl text-white mb-3">
                Free Consultation
              </h3>
              <p className="relative z-10 text-blue-100 text-sm leading-relaxed mb-6">
                No pressure, no commitment. We&apos;ll analyse your current setup and
                show you exactly what we&apos;d build — before you spend a dime.
              </p>
              <ul className="relative z-10 flex flex-col gap-3">
                {perks.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white">
                    <div className="w-4 h-4 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0">
                      <HiCheckCircle className="text-white text-xs" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact links */}
            <div className="rounded-2xl p-6 flex flex-col gap-4 bg-gray-50 border border-gray-100">
              {contactItems.map((item, idx) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-4 group/item">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                      style={{ background: item.glow, border: `1px solid ${item.border}` }}
                    >
                      <Icon className={item.color} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-gray-400 text-xs font-medium">{item.label}</div>
                      <div className="text-gray-700 text-sm font-medium truncate">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
                return (
                  <div key={item.label}>
                    {item.href ? <a href={item.href}>{inner}</a> : inner}
                    {idx < contactItems.length - 1 && (
                      <div className="h-px mt-4 bg-gray-100" />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl p-8 bg-gray-50 border border-gray-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-4"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-50 border border-blue-100">
                    <HiCheckCircle className="text-blue-500 text-4xl" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Thanks for reaching out. We&apos;ll review your request and get
                    back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 text-sm bg-red-50 border border-red-100"
                    >
                      <HiXCircle className="text-red-500 text-lg shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Your Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="John Smith" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="john@example.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Business Name</label>
                      <input type="text" name="business" value={form.business} onChange={handleChange}
                        placeholder="Your Company" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Service Interested In</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className={inputClass + ' cursor-pointer bg-white'}>
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                      <option value="Multiple Services">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Tell Us About Your Business</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Tell us about your business, current challenges, and what you're looking to achieve..."
                      className={inputClass + ' resize-none'} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl
                      bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base
                      hover:opacity-90 transition-all disabled:opacity-50 shadow-lg shadow-blue-200"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
