'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  label: string;
  title: string;
  highlight: string;
  description: string;
}

export default function PageHero({ label, title, highlight, description }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: '#070f20' }}>
      {/* bg video same as hero */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=60&auto=format"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        aria-hidden="true"
      >
        <source
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040b18]/90 via-[#070f20]/80 to-[#070f20]" />

      {/* ── Light effects (same as HowItWorks) ───────── */}
      {/* Top horizontal beam */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{
        height: '250px',
        background: 'linear-gradient(to bottom, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 50%, transparent 100%)',
      }} />
      {/* Bottom horizontal beam */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
        height: '250px',
        background: 'linear-gradient(to top, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)',
      }} />
      {/* Left vertical beam */}
      <div className="absolute top-0 bottom-0 left-0 pointer-events-none" style={{
        width: '250px',
        background: 'linear-gradient(to right, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)',
      }} />
      {/* Right vertical beam */}
      <div className="absolute top-0 bottom-0 right-0 pointer-events-none" style={{
        width: '250px',
        background: 'linear-gradient(to left, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)',
      }} />
      {/* Center radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.13) 0%, rgba(59,130,246,0.05) 45%, transparent 70%)',
      }} />



      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-5"
        >
          {label}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.08] mb-6"
        >
          {title}{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="text-slate-300 text-base md:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

    </section>
  );
}
