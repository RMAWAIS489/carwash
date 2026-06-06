import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaCode, FaCalendarAlt, FaBell, FaGift,
  FaCreditCard, FaStar, FaDatabase, FaCashRegister,
} from 'react-icons/fa';

const services = [
  {
    icon: FaCode,
    title: 'Website Design & Development',
    description: 'Custom, mobile-first websites built specifically for car wash businesses. Modern design, fast loading, and optimized for conversions.',
    tag: 'Most Popular',
    iconBg: 'bg-blue-50', iconColor: 'text-primary',
    tagBg: 'bg-blue-50 text-primary border-blue-100',
    accent: 'group-hover:border-blue-200',
  },
  {
    icon: FaCalendarAlt,
    title: 'Online Booking System',
    description: 'Let customers schedule appointments 24/7 from your website. Reduce phone calls and keep your calendar full automatically.',
    tag: 'High Demand',
    iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600',
    tagBg: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    accent: 'group-hover:border-cyan-200',
  },
  {
    icon: FaBell,
    title: 'Automated Reminders',
    description: 'SMS and email reminders sent automatically before appointments. Reduce no-shows by up to 60% without lifting a finger.',
    tag: 'Automation',
    iconBg: 'bg-violet-50', iconColor: 'text-violet-600',
    tagBg: 'bg-violet-50 text-violet-700 border-violet-100',
    accent: 'group-hover:border-violet-200',
  },
  {
    icon: FaGift,
    title: 'Loyalty Program Integration',
    description: 'Digital punch cards, rewards points, and VIP tiers. Keep customers coming back with gamified loyalty experiences.',
    tag: 'Retention',
    iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600',
    tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    accent: 'group-hover:border-emerald-200',
  },
  {
    icon: FaCreditCard,
    title: 'Payment Integration',
    description: 'Accept online payments, sell monthly wash memberships, and handle subscriptions — all through your website.',
    tag: 'Revenue',
    iconBg: 'bg-amber-50', iconColor: 'text-amber-600',
    tagBg: 'bg-amber-50 text-amber-700 border-amber-100',
    accent: 'group-hover:border-amber-200',
  },
  {
    icon: FaStar,
    title: 'Review Management',
    description: 'Automatically request Google and Yelp reviews after each wash. Build your reputation on autopilot and dominate local search.',
    tag: 'Growth',
    iconBg: 'bg-rose-50', iconColor: 'text-rose-500',
    tagBg: 'bg-rose-50 text-rose-600 border-rose-100',
    accent: 'group-hover:border-rose-200',
  },
  {
    icon: FaDatabase,
    title: 'CRM / Customer Database',
    description: 'Track every customer — their visit history, preferences, and spending. Use data to send personalized offers that convert.',
    tag: 'Data',
    iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600',
    tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    accent: 'group-hover:border-indigo-200',
  },
  {
    icon: FaCashRegister,
    title: 'POS Integration',
    description: 'Connect your point-of-sale system to your website and CRM. Sync transactions, inventory, and customer data in real time.',
    tag: 'Advanced',
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

        {/* Icon with bounce */}
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

      <div className="max-w-7xl mx-auto px-6">
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
            Everything Your Car Wash{' '}
            <span className="text-gradient">Business Needs</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            We don't just build websites — we build complete digital ecosystems
            that run your car wash business more efficiently.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
