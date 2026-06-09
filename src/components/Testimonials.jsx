'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const testimonials = [
  {
    name: 'Marcus Johnson',
    role: 'CEO, NovaTech Solutions',
    location: 'New York, NY',
    rating: 5,
    text: "Automations Limited completely transformed how we operate. Before them, our follow-up process was entirely manual. Now we capture and nurture leads on autopilot — our conversion rate jumped 55% in under two months.",
    avatar: 'MJ',
    gradFrom: '#3b82f6',
    gradTo: '#06b6d4',
    metric: '+55%',
    metricLabel: 'Lead Conversion',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Operations, Meridian Finance',
    location: 'Chicago, IL',
    rating: 5,
    text: "The CRM and email funnel they built tripled our onboarding speed. Their team was communicative, fast, and genuinely cared about our outcomes. The ROI was evident within weeks of going live.",
    avatar: 'SC',
    gradFrom: '#8b5cf6',
    gradTo: '#06b6d4',
    metric: '3×',
    metricLabel: 'Faster Onboarding',
  },
  {
    name: 'David Rivera',
    role: 'Director, Apex Retail Group',
    location: 'Austin, TX',
    rating: 5,
    text: "We had three separate tools that never talked to each other. Automations Limited unified everything — one dashboard, all data synced, all reporting automated. My team saves hours every single day.",
    avatar: 'DR',
    gradFrom: '#f59e0b',
    gradTo: '#ef4444',
    metric: '10hrs',
    metricLabel: 'Saved Per Week',
  },
];

const trustBadges = [
  { value: '4.9/5', label: 'Average Rating',      icon: '⭐' },
  { value: '50+',   label: 'Happy Clients',        icon: '🤝' },
  { value: '100%',  label: 'Success Rate',         icon: '🚀' },
  { value: '0',     label: 'Long-term Lock-ins',   icon: '🔓' },
];

export default function Testimonials({ hideHeader = false }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="relative py-28 bg-[#f0f4ff] overflow-hidden">

      <div className="max-w-5xl mx-auto px-6">
        {!hideHeader && (
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4"
            >
              <span className="w-6 h-px bg-blue-500/60" />
              Real Results
              <span className="w-6 h-px bg-blue-500/60" />
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-5xl text-gray-900 mb-5 leading-tight"
            >
              What Our Clients{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Say
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Don&apos;t take our word for it — here&apos;s what business owners say
              after working with Automations Limited.
            </motion.p>
          </div>
        )}

        {/* Main testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-px mb-8 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(255,255,255,0.5) 50%, rgba(6,182,212,0.15) 100%)' }}
        >
          {/* card inner */}
          <div
            className="relative rounded-3xl p-10 md:p-14 overflow-hidden bg-white"
          >
            {/* bg metric — large faded number */}
            <div
              className="absolute -right-4 -top-6 font-display font-black text-[120px] md:text-[160px] leading-none select-none pointer-events-none"
              style={{ color: `${t.gradFrom}10` }}
            >
              {t.metric}
            </div>

            {/* quote icon */}
            <div
              className="absolute top-8 right-10 w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}
            >
              <FaQuoteLeft className="text-blue-400/40 text-xl" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                {/* Stars + metric */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400 text-sm" />
                    ))}
                  </div>
                  <div className="text-right">
                    <div
                      className="font-display font-black text-3xl"
                      style={{ background: `linear-gradient(90deg, ${t.gradFrom}, ${t.gradTo})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                      {t.metric}
                    </div>
                    <div className="text-gray-500 text-xs font-medium tracking-wider uppercase">{t.metricLabel}</div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.gradFrom}, ${t.gradTo})` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">{t.name}</div>
                    <div className="text-gray-500 text-sm">{t.role}</div>
                    <div className="text-blue-600 text-xs font-medium mt-0.5">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-16">
          {/* Dots */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? 'w-8 h-2 bg-gradient-to-r from-blue-500 to-cyan-400'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-all"
            >
              <HiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-all"
            >
              <HiChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustBadges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl p-px overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(255,255,255,0.8) 100%)' }}
            >
              <div
                className="rounded-2xl text-center py-6 px-4 bg-white"
              >
                <div className="text-2xl mb-1">{b.icon}</div>
                <div className="font-display font-black text-2xl text-blue-600 mb-1">{b.value}</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider font-medium">{b.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
