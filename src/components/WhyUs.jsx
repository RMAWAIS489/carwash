'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaBolt, FaShieldAlt, FaHeadset,
  FaPaintBrush, FaChartLine, FaMobile,
} from 'react-icons/fa';

const reasons = [
  {
    icon: FaBolt,
    title: 'Built for Speed',
    description: 'All our sites score 95+ on Google PageSpeed. Faster sites rank higher, retain more visitors, and convert better.',
    iconBg: 'bg-amber-50', iconColor: 'text-amber-500',
  },
  {
    icon: FaPaintBrush,
    title: 'Unique Designs',
    description: 'No templates. Every website is custom-designed to reflect your brand identity and stand out from the competition.',
    iconBg: 'bg-pink-50', iconColor: 'text-pink-500',
  },
  {
    icon: FaMobile,
    title: 'Mobile First',
    description: 'Over 70% of web traffic comes from mobile. Every solution we build looks and performs flawlessly on all screen sizes.',
    iconBg: 'bg-blue-50', iconColor: 'text-primary',
  },
  {
    icon: FaChartLine,
    title: 'Results-Driven',
    description: 'We track leads, conversions, and ROI. We optimize continuously until the numbers move in the right direction.',
    iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600',
  },
  {
    icon: FaShieldAlt,
    title: 'Secure & Reliable',
    description: 'SSL, encrypted data handling, daily backups and 99.9% uptime. Your business and client data are always protected.',
    iconBg: 'bg-violet-50', iconColor: 'text-violet-600',
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: "Something breaks at 2am? We're here. Ongoing maintenance and dedicated support are included in every plan.",
    iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="relative py-28 bg-white bg-grid-sm overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-40 right-0 w-[480px] h-[480px] rounded-full bg-blue-50/60 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Our Edge
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-ink mb-5">
            Why Businesses{' '}
            <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            We combine strategic thinking with deep technical execution. You get
            a full-stack agency that delivers fast, builds right, and sticks around.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex gap-5 p-6 rounded-2xl bg-surface border border-slate-100 hover:border-slate-200 hover:shadow-card-hover transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, 0], transition: { duration: 0.4 } }}
                  className={`w-12 h-12 shrink-0 rounded-xl ${reason.iconBg} flex items-center justify-center`}
                >
                  <Icon className={`text-xl ${reason.iconColor}`} />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-ink text-lg mb-1.5">{reason.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
