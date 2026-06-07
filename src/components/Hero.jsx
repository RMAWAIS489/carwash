'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useTypewriter } from '../hooks/useTypewriter';

const bullets = [
  'Custom websites & automation built for your business',
  'Full-stack digital solutions in one platform',
  'Launch in as little as 7 days',
];

export default function Hero() {
  const { displayed, done } = useTypewriter('Your Growth Engine', 80, 600);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/30 bg-grid"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-blue-100/70 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-cyan-100/60 blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col items-center">

          {/* CENTER — text content */}
          <div className="w-full max-w-3xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 text-primary text-sm font-semibold mb-7 mx-auto"
            >
              <motion.span
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <HiSparkles className="text-base" />
              </motion.span>
              Digital Automation Agency
            </motion.div>

            {/* Headline */}
            <div className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-ink mb-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We Build &amp; Automate
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="relative inline-block"
              >
                <span className="text-gradient">
                  {displayed}
                  {!done && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-0.5 h-10 bg-primary ml-1 align-middle"
                    />
                  )}
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: done ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full origin-left"
                />
              </motion.div>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-ink-muted text-base max-w-2xl mx-auto mb-6 leading-relaxed"
            >
              From custom websites to full workflow automation — Automations Limited
              builds the digital infrastructure your business needs to grow faster
              and work smarter.
            </motion.p>

            {/* Bullet trust points */}
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.65 } } }}
              className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 mb-7"
            >
              {bullets.map((b) => (
                <motion.li
                  key={b}
                  variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                  className="flex items-center gap-2.5 text-ink-soft text-sm font-medium"
                >
                  <FaCheckCircle className="text-primary shrink-0 text-base" />
                  {b}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row justify-center gap-3 mb-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-base shadow-primary"
              >
                Get a Free Consultation
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border-2 border-slate-200 text-ink-soft hover:text-ink hover:border-slate-300 font-semibold text-base bg-white transition-all"
              >
                See Our Services
              </motion.a>
            </motion.div>

          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
