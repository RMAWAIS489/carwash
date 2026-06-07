'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaComments, FaTools, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: FaComments,
    step: '01',
    title: 'Discovery Call',
    description: 'We start with a free consultation to understand your business, goals, and where automation or a new digital presence can make the biggest impact.',
    iconBg: 'bg-blue-100', iconColor: 'text-primary',
    numberColor: 'text-primary border-blue-200 bg-blue-50',
  },
  {
    icon: FaTools,
    step: '02',
    title: 'We Build It',
    description: 'Our team designs and develops your website, automation workflows, or full digital platform — custom to your brand, with revisions until you love it.',
    iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600',
    numberColor: 'text-cyan-600 border-cyan-200 bg-cyan-50',
  },
  {
    icon: FaRocket,
    step: '03',
    title: 'You Scale',
    description: 'Launch, go live, and watch the results compound. We provide ongoing support, analytics, and optimization so your business keeps growing.',
    iconBg: 'bg-violet-100', iconColor: 'text-violet-600',
    numberColor: 'text-violet-600 border-violet-200 bg-violet-50',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.3 });

  return (
    <section id="how-it-works" className="relative py-28 bg-slate-50 bg-grid overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

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
            Simple Process
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-ink mb-5">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            Getting your business automated and online is simpler than you think.
            Three steps and you&apos;re live.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={stepsRef} className="relative grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Connector lines */}
          <div className="hidden lg:flex absolute top-10 left-[calc(16.66%+44px)] right-[calc(16.66%+44px)] items-center justify-between pointer-events-none">
            {[0, 1].map((i) => (
              <div key={i} className="flex-1 mx-3">
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={stepsInView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.9, delay: i * 0.4, ease: 'easeOut' }}
                  style={{ originX: 0 }}
                />
              </div>
            ))}
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className={`w-20 h-20 rounded-full ${step.iconBg} flex items-center justify-center mx-auto shadow-card`}>
                    <Icon className={`text-2xl ${step.iconColor}`} />
                  </div>
                  <div className={`absolute -top-1 -right-1 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold ${step.numberColor}`}>
                    {step.step}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-ink-muted leading-relaxed max-w-xs mx-auto text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-lg shadow-primary"
          >
            Start Your Free Consultation →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
