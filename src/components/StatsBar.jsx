'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { BsCalendar3, BsPeopleFill, BsPersonWorkspace, BsClipboardCheck } from 'react-icons/bs';

const stats = [
  { icon: BsCalendar3,      value: '3 Years',   suffix: '+', label: 'Industry Experience'  },
  { icon: BsPeopleFill,     value: '50',  suffix: '+', label: 'Happy Clients'     },
  { icon: BsPersonWorkspace,value: '10',  suffix: '+', label: 'Team Strength'     },
  { icon: BsClipboardCheck, value: '100', suffix: '+', label: 'Projects'          },
];

function StatItem({ icon: Icon, value, suffix, label, delay, isLast }) {
  const ref   = useRef(null);
  const inV   = useInView(ref, { once: true, margin: '-60px' });
  const count = useCountUp(value + suffix, 1800, inV);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`flex flex-col items-center gap-6 py-10 px-4`}
    >
      {/* Icon */}
      <Icon className="text-4xl md:text-6xl text-blue-600" />

      {/* Number */}
      <span className="font-display font-black text-lg sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 leading-none">
        {count}
      </span>

      {/* Label */}
      <span className="text-gray-800 text-base font-medium text-center">
        {label}
      </span>
    </motion.div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white overflow-hidden">
      <div className="w-full md:max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-gray-200">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} delay={i * 0.12} isLast={i === stats.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
