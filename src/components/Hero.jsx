'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowRight, FaCheckCircle, FaPlay } from 'react-icons/fa';
import { HiSparkles, HiChevronDown } from 'react-icons/hi';
import { useTypewriter } from '../hooks/useTypewriter';



/* ── Hero ───────────────────────────────────────────────── */
export default function Hero() {
  const { displayed, done } = useTypewriter('Your Business', 75, 700);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Solid dark base ────────────────────────────── */}
      <div className="absolute inset-0 bg-[#060d1f]" />

      {/* ── Top-left primary spotlight — main light source ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 65% at -5% -5%, rgba(59,130,246,0.55) 0%, rgba(37,99,235,0.30) 35%, rgba(6,182,212,0.10) 60%, transparent 75%)',
        }}
      />

      {/* ── Top-left hard beam sweep ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'conic-gradient(from 145deg at -5% -5%, rgba(147,197,253,0.22) 0deg, rgba(59,130,246,0.12) 35deg, transparent 65deg)',
        }}
      />

      {/* ── Subtle center ambient — very faint so light feels directional ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)',
        }}
      />

      {/* ── Outer edge vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 35%, rgba(4,8,20,0.75) 100%)',
        }}
      />

      {/* ── Top-left animated glow blob ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '-20%',
          left: '-15%',
          width: '75vw',
          height: '75vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 15% 15%, rgba(99,179,237,0.40) 0%, rgba(59,130,246,0.20) 35%, transparent 65%)',
          filter: 'blur(50px)',
        }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Bottom-right subtle cyan accent ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%',
          right: '-5%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* ── Floating particles ────────────────────────── */}
      {[
        { top: '5%',  left: '3%',  size: 2,   delay: 0   },
        { top: '10%', left: '15%', size: 1.5, delay: 0.5 },
        { top: '12%', left: '8%',  size: 3,   delay: 0   },
        { top: '8%',  left: '40%', size: 1.5, delay: 1.2 },
        { top: '15%', left: '65%', size: 2,   delay: 0.7 },
        { top: '20%', left: '30%', size: 1.5, delay: 2.0 },
        { top: '22%', left: '82%', size: 2,   delay: 1.5 },
        { top: '25%', left: '50%', size: 2,   delay: 3.2 },
        { top: '28%', left: '95%', size: 1.5, delay: 0.3 },
        { top: '30%', left: '12%', size: 2,   delay: 1.0 },
        { top: '35%', left: '75%', size: 2.5, delay: 2.5 },
        { top: '38%', left: '92%', size: 2,   delay: 2.2 },
        { top: '40%', left: '22%', size: 1.5, delay: 4.2 },
        { top: '42%', left: '58%', size: 2,   delay: 0.9 },
        { top: '45%', left: '35%', size: 1.5, delay: 3.8 },
        { top: '48%', left: '18%', size: 2,   delay: 1.8 },
        { top: '50%', left: '88%', size: 1.5, delay: 2.7 },
        { top: '52%', left: '70%', size: 2,   delay: 1.3 },
        { top: '55%', left: '5%',  size: 2,   delay: 3   },
        { top: '58%', left: '42%', size: 1.5, delay: 0.6 },
        { top: '60%', left: '25%', size: 2,   delay: 4.5 },
        { top: '63%', left: '45%', size: 1.5, delay: 3.5 },
        { top: '65%', left: '80%', size: 2,   delay: 1.1 },
        { top: '68%', left: '55%', size: 2.5, delay: 2.4 },
        { top: '70%', left: '72%', size: 3,   delay: 0.8 },
        { top: '72%', left: '10%', size: 1.5, delay: 3.1 },
        { top: '75%', left: '35%', size: 2,   delay: 2.0 },
        { top: '78%', left: '90%', size: 1.5, delay: 0.4 },
        { top: '80%', left: '28%', size: 2,   delay: 4   },
        { top: '82%', left: '62%', size: 2,   delay: 1.6 },
        { top: '85%', left: '48%', size: 1.5, delay: 3.3 },
        { top: '88%', left: '20%', size: 2,   delay: 2.9 },
        { top: '90%', left: '60%', size: 2,   delay: 2.8 },
        { top: '92%', left: '78%', size: 1.5, delay: 1.4 },
        { top: '95%', left: '38%', size: 2,   delay: 0.2 },
        { top: '18%', left: '55%', size: 1.5, delay: 1   },
        { top: '33%', left: '48%', size: 2,   delay: 4.8 },
        { top: '47%', left: '3%',  size: 1.5, delay: 2.1 },
        { top: '57%', left: '97%', size: 2,   delay: 3.6 },
        { top: '73%', left: '15%', size: 1.5, delay: 1.9 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: 'rgba(255,255,255,0.9)',
            boxShadow: `0 0 ${p.size + 1}px rgba(255,255,255,0.7)`,
          }}
          animate={{
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}



      {/* ── Main content ──────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 pb-10 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-sm font-semibold mb-8"
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
        <motion.h1
          className="font-display font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.08] text-white mb-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="block"
          >
            Build, Automate &amp;
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="relative inline-block"
          >
            {/* gradient animated text */}
            <span
              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
              style={{ backgroundSize: '200% auto', animation: 'gradientShift 4s linear infinite' }}
            >
              Scale&nbsp;{displayed}
              {!done && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[3px] h-12 bg-cyan-400 ml-1 align-middle rounded-full"
                />
              )}
            </span>
            {/* underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: done ? 1 : 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full origin-left"
            />
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-white text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          We help businesses grow through custom websites, AI solutions, workflow
          automation, and business integrations — building the systems that power
          long-term growth.
        </motion.p>

        {/* Trust bullets */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.65 } } }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10"
        >
          {[
            'Custom websites & automation',
            'Full-stack digital solutions',
            'Launch in as little as 7 days',
          ].map((b) => (
            <motion.li
              key={b}
              variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
              className="flex items-center gap-2 text-white text-sm font-medium"
            >
              <FaCheckCircle className="text-cyan-400 shrink-0" />
              {b}
            </motion.li>
          ))}
        </motion.ul>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(59,130,246,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-base shadow-primary transition-all"
          >
            Get a Free Consultation
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-base bg-white/8 backdrop-blur-sm hover:bg-white/12 hover:border-white/30 transition-all"
          >
            <FaPlay className="text-xs text-cyan-400" />
            See Our Work
          </motion.a>
        </motion.div>

      </div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative z-10 flex flex-col items-center gap-1 pb-8"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase font-medium">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiChevronDown className="text-slate-400 text-xl" />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade ───────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />

      {/* ── Bottom wide horizontal glow ───────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '180px',
          background: 'linear-gradient(to top, rgba(59,130,246,0.18) 0%, rgba(37,99,235,0.10) 40%, transparent 100%)',
        }}
      />
    </section>
  );
}
