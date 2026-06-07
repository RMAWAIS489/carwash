'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaCode, FaRobot, FaBell, FaEnvelopeOpenText,
  FaCreditCard, FaStar, FaDatabase, FaChartLine,
} from 'react-icons/fa';

const services = [
  {
    icon: FaCode,
    title: 'Website Design & Development',
    description: 'Custom, mobile-first websites built to represent your brand. Modern design, fast loading, and fully optimized for conversions.',
    tag: 'Most Popular',
    iconBg: 'bg-blue-50', iconColor: 'text-primary',
    tagBg: 'bg-blue-50 text-primary border-blue-100',
    accent: 'group-hover:border-blue-200',
  },
  {
    icon: FaRobot,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks across your entire business — from lead follow-ups to internal reporting. Save hours every week.',
    tag: 'High Demand',
    iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600',
    tagBg: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    accent: 'group-hover:border-cyan-200',
  },
  {
    icon: FaBell,
    title: 'Automated Notifications',
    description: 'SMS and email sequences triggered by customer actions. Keep your audience engaged and reduce drop-offs by up to 60%.',
    tag: 'Automation',
    iconBg: 'bg-violet-50', iconColor: 'text-violet-600',
    tagBg: 'bg-violet-50 text-violet-700 border-violet-100',
    accent: 'group-hover:border-violet-200',
  },
  {
    icon: FaEnvelopeOpenText,
    title: 'Email Marketing Funnels',
    description: 'Drip campaigns, newsletters, and lead nurture sequences crafted to convert prospects into loyal paying customers.',
    tag: 'Growth',
    iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600',
    tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    accent: 'group-hover:border-emerald-200',
  },
  {
    icon: FaCreditCard,
    title: 'Payment & Subscription Systems',
    description: 'Accept online payments, build subscription products, and manage billing — all seamlessly integrated into your platform.',
    tag: 'Revenue',
    iconBg: 'bg-amber-50', iconColor: 'text-amber-600',
    tagBg: 'bg-amber-50 text-amber-700 border-amber-100',
    accent: 'group-hover:border-amber-200',
  },
  {
    icon: FaStar,
    title: 'Reputation Management',
    description: 'Automatically request reviews after every interaction. Build your brand authority and dominate search results on autopilot.',
    tag: 'Branding',
    iconBg: 'bg-rose-50', iconColor: 'text-rose-500',
    tagBg: 'bg-rose-50 text-rose-600 border-rose-100',
    accent: 'group-hover:border-rose-200',
  },
  {
    icon: FaDatabase,
    title: 'CRM & Customer Management',
    description: 'Track leads, clients, and deals in one place. Use data-driven insights to send personalized offers that close faster.',
    tag: 'Data',
    iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600',
    tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    accent: 'group-hover:border-indigo-200',
  },
  {
    icon: FaChartLine,
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards that surface the metrics that matter. Know exactly what\'s working and where to double down.',
    tag: 'Insights',
    iconBg: 'bg-teal-50', iconColor: 'text-teal-600',
    tagBg: 'bg-teal-50 text-teal-700 border-teal-100',
    accent: 'group-hover:border-teal-200',
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`group relative rounded-2xl bg-white border border-slate-100 ${service.accent} overflow-hidden transition-colors duration-300 shadow-card hover:shadow-card-hover cursor-default`}
    >
      <div className="p-6">
        {/* Tag */}
        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-5 ${service.tagBg}`}>
          {service.tag}
        </span>

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
          className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-4`}
        >
          <Icon className={`text-xl ${service.iconColor}`} />
        </motion.div>

        <h3 className="font-display font-bold text-lg text-ink mb-2">
          {service.title}
        </h3>
        <p className="text-ink-muted text-sm leading-relaxed">
          {service.description}
        </p>

        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
          className={`mt-4 flex items-center gap-1 text-sm font-semibold ${service.iconColor}`}
        >
          Learn more →
        </motion.div>
      </div>

      {/* Shimmer line on hover */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${service.iconBg} to-transparent origin-left`}
      />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-28 bg-surface bg-grid-sm overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-10 lg:px-16">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3"
          >
            What We Offer
          </motion.span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-ink mb-5">
            Everything Your Business{' '}
            <span className="text-gradient">Needs to Scale</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            We don&apos;t just build websites — we build complete digital ecosystems
            that automate your operations and accelerate growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
