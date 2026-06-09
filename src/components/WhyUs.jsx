'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBolt, FaShieldAlt, FaHeadset,
  FaPaintBrush, FaChartLine, FaMobile, FaArrowLeft, FaArrowRight,
} from 'react-icons/fa';

const reasons = [
  {
    icon: FaBolt,
    title: 'Built for Speed',
    description: 'All our sites score 95+ on Google PageSpeed. Faster sites rank higher, retain more visitors, and convert better.',
    color: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    icon: FaPaintBrush,
    title: 'Unique Designs',
    description: 'No templates. Every website is custom-designed to reflect your brand identity and stand out from the competition.',
    color: '#EC4899',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    icon: FaMobile,
    title: 'Mobile First',
    description: 'Over 70% of web traffic comes from mobile. Every solution we build looks and performs flawlessly on all screen sizes.',
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  },
  {
    icon: FaChartLine,
    title: 'Results-Driven',
    description: 'We track leads, conversions, and ROI. We optimise continuously until the numbers move in the right direction.',
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    icon: FaShieldAlt,
    title: 'Secure & Reliable',
    description: 'SSL, encrypted data handling, daily backups, and 99.9% uptime. Your business and client data are always protected.',
    color: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: "Something breaks at 2am? We're here. Ongoing maintenance and dedicated support are included in every plan.",
    color: '#06B6D4',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80',
  },
];

const cardConfig = [
  { offset: -2, scale: 0.7,  opacity: 0.3, zIndex: 1, translateX: '-185%' },
  { offset: -1, scale: 0.85, opacity: 0.6, zIndex: 2, translateX: '-95%'  },
  { offset:  0, scale: 1,    opacity: 1,   zIndex: 5, translateX: '0%'    },
  { offset:  1, scale: 0.85, opacity: 0.6, zIndex: 2, translateX: '95%'   },
  { offset:  2, scale: 0.7,  opacity: 0.3, zIndex: 1, translateX: '185%'  },
];

export default function WhyUs({ hideHeader = false }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + reasons.length) % reasons.length);
  const next = () => setActive((p) => (p + 1) % reasons.length);

  return (
    <section id="why-us" className="relative py-28 overflow-hidden" style={{ background: '#070f20' }}>

      {/* light effects */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '250px', background: 'linear-gradient(to bottom, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 50%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '250px', background: 'linear-gradient(to top, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }} />
      <div className="absolute top-0 bottom-0 left-0 pointer-events-none" style={{ width: '250px', background: 'linear-gradient(to right, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }} />
      <div className="absolute top-0 bottom-0 right-0 pointer-events-none" style={{ width: '250px', background: 'linear-gradient(to left, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.13) 0%, rgba(59,130,246,0.05) 45%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">

        {!hideHeader && (
          <div className="flex flex-col items-center text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-4"
            >
              <span className="w-6 h-px bg-blue-500/60" />
              Our Edge
              <span className="w-6 h-px bg-blue-500/60" />
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-5xl text-white leading-tight"
            >
              What We{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Do
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-base mt-4 max-w-2xl"
            >
              Partner with us to take your digital presence to the next level. Whether you're looking to build a new website, develop a mobile app, or automate your entire workflow — we have the expertise to help you succeed and scale.
            </motion.p>
          </div>
        )}

        {/* carousel */}
        <div className="relative flex items-center justify-center" style={{ height: '480px' }}>

          {/* left button */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 z-20 w-11 h-11 rounded-full border border-white/15 bg-[#070f20] flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/20 transition-all duration-200 shadow-lg"
          >
            <FaArrowLeft className="text-sm" />
          </motion.button>

          {/* cards */}
          <div className="relative w-full flex items-center justify-center" style={{ height: '480px' }}>
            {cardConfig.map(({ offset, scale, opacity, zIndex, translateX }) => {
              const idx = (active + offset + reasons.length) % reasons.length;
              const r = reasons[idx];
              const Icon = r.icon;
              const isActive = offset === 0;

              return (
                <motion.div
                  key={idx}
                  animate={{
                    scale,
                    opacity,
                    x: translateX,
                    zIndex,
                    height: isActive ? 460 : 360,
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  onClick={() => !isActive && setActive(idx)}
                  className="absolute rounded-3xl overflow-hidden cursor-pointer"
                  style={{ width: '320px', left: '50%', marginLeft: '-160px' }}
                >
                  {/* background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${r.image})` }}
                  />
                  {/* color tint overlay */}
                  <div className="absolute inset-0" style={{ background: `${r.color}30` }} />
                  {/* dark overlay for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                  {/* active glow border */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ boxShadow: `0 0 50px ${r.color}50, inset 0 0 0 1px ${r.color}50` }} />
                  )}

                  {/* icon */}
                  {false && (
                  <div className="absolute top-7 left-7">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${r.color}25`,
                        border: `1px solid ${r.color}50`,
                        boxShadow: `0 0 20px ${r.color}30`,
                      }}
                    >
                      <Icon className="text-2xl" style={{ color: r.color }} />
                    </div>
                  </div>
                  )}

                  {/* text */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="font-display font-bold text-white text-xl mb-2 leading-tight">
                      {r.title}
                    </h3>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-slate-300 text-sm leading-relaxed"
                      >
                        {r.description}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* right button */}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 z-20 w-11 h-11 rounded-full border border-white/15 bg-[#070f20] flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/20 transition-all duration-200 shadow-lg"
          >
            <FaArrowRight className="text-sm" />
          </motion.button>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reasons.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? '24px' : '8px',
                height: '8px',
                background: i === active ? '#3b82f6' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
