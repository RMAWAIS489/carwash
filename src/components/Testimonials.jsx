'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const testimonials = [
  {
    name: 'Marcus Johnson',
    role: 'CEO, NovaTech Solutions',
    rating: 5,
    text: "Automations Limited completely transformed how we operate. Before them, our follow-up process was entirely manual. Now we capture and nurture leads on autopilot — our conversion rate jumped 55% in under two months.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80',
    gradFrom: '#3b82f6',
    gradTo: '#06b6d4',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Operations, Meridian Finance',
    rating: 5,
    text: "The CRM and email funnel they built tripled our onboarding speed. Their team was communicative, fast, and genuinely cared about our outcomes. The ROI was evident within weeks of going live.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face&q=80',
    gradFrom: '#8b5cf6',
    gradTo: '#06b6d4',
  },
  {
    name: 'David Rivera',
    role: 'Director, Apex Retail Group',
    rating: 5,
    text: "We had three separate tools that never talked to each other. Automations Limited unified everything — one dashboard, all data synced, all reporting automated. My team saves hours every single day.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&q=80',
    gradFrom: '#f59e0b',
    gradTo: '#ef4444',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, BrightLeaf Studio',
    rating: 5,
    text: "From the first call to launch, the experience was seamless. They built our entire email funnel and automated our review requests. We went from 12 Google reviews to over 80 in just six weeks.",
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face&q=80',
    gradFrom: '#10b981',
    gradTo: '#3b82f6',
  },
  {
    name: 'James Whitfield',
    role: 'COO, Zenith Logistics',
    rating: 5,
    text: "The workflow automation they set up cut our admin time in half. Invoicing, follow-ups, and reporting all happen automatically now. It's like having an extra full-time employee.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&q=80',
    gradFrom: '#ec4899',
    gradTo: '#8b5cf6',
  },
  {
    name: 'Aisha Okonkwo',
    role: 'Marketing Director, PulseMedia',
    rating: 5,
    text: "Our lead nurture sequences are now fully automated and personalised. Open rates went up 40% and we're closing deals faster than ever. Genuinely one of the best investments we've made.",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&q=80',
    gradFrom: '#f97316',
    gradTo: '#eab308',
  },
];

export default function Testimonials({ hideHeader = false }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setActive((a) => (a + 1) % testimonials.length);
  };

  const t = testimonials[active];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section id="testimonials" className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
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
              className="text-gray-500 text-lg"
            >
              Don&apos;t take our word for it — here&apos;s what business owners say
              after working with Automations Limited.
            </motion.p>
          </div>
        )}

        {/* Card with side arrows */}
        <div className="relative flex items-center">
          {/* Prev Arrow */}
          <button
            onClick={prev}
            className="absolute -left-6 z-10 shrink-0 w-11 h-11 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-all shadow-md"
          >
            <HiChevronLeft className="text-xl" />
          </button>

          {/* Card */}
          <div className="flex-1 overflow-hidden mx-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35 }}
                className="bg-[#eff6ff] rounded-2xl border border-blue-100 p-10 py-16 flex flex-col items-center text-center min-h-[420px]"
              >
                {/* Avatar */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-6 shrink-0 border-2 border-white shadow-md"
                />

                {/* Quote */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <div className="text-gray-900 font-bold">{t.name}</div>
                  <div className="text-gray-500 text-sm mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Arrow */}
          <button
            onClick={next}
            className="absolute -right-6 z-10 shrink-0 w-11 h-11 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-all shadow-md"
          >
            <HiChevronRight className="text-xl" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? 'w-8 h-2 bg-blue-500'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
