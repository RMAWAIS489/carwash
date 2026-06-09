'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

export const allProjects = [
  {
    name: 'FlowSync Automation',
    category: 'Workflow Automation',
    result: '80% reduction in manual tasks',
    metric: '80%',
    tagClass: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop&auto=format&q=80',
    gradFrom: '#0891b2',
    gradTo: '#0e7490',
    glowColor: 'rgba(8,145,178,0.25)',
  },
  {
    name: 'LeadPilot CRM',
    category: 'Automation + CRM',
    result: '3× faster client onboarding',
    metric: '3×',
    tagClass: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&auto=format&q=80',
    gradFrom: '#7c3aed',
    gradTo: '#0891b2',
    glowColor: 'rgba(124,58,237,0.25)',
  },
  {
    name: 'NovaTech Solutions',
    category: 'Website Development',
    result: '+55% lead conversion in 60 days',
    metric: '+55%',
    tagClass: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=600&fit=crop&auto=format&q=80',
    gradFrom: '#1d4ed8',
    gradTo: '#0891b2',
    glowColor: 'rgba(37,99,235,0.25)',
  },
  {
    name: 'TrackMate Mobile',
    category: 'Mobile App',
    result: '4.8★ App Store rating',
    metric: '4.8★',
    tagClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop&auto=format&q=80',
    gradFrom: '#059669',
    gradTo: '#0891b2',
    glowColor: 'rgba(5,150,105,0.25)',
  },
  {
    name: 'Meridian Finance',
    category: 'CRM + Email Funnels',
    result: '$120k additional pipeline tracked',
    metric: '$120k',
    tagClass: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format&q=80',
    gradFrom: '#d97706',
    gradTo: '#dc2626',
    glowColor: 'rgba(217,119,6,0.25)',
  },
  {
    name: 'Apex Retail Group',
    category: 'Full Platform Build',
    result: '2× revenue in first quarter',
    metric: '2×',
    tagClass: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=600&fit=crop&auto=format&q=80',
    gradFrom: '#e11d48',
    gradTo: '#7c3aed',
    glowColor: 'rgba(225,29,72,0.25)',
  },
];

function ProjectCard({ p, i }) {
  return (
    <motion.div
      key={p.name}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: i * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #0d1b2e 0%, #0a1628 100%)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 40px ${p.glowColor} inset, 0 0 40px ${p.glowColor}` }}
      />

      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <motion.img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, #0d1b2e 0%, transparent 60%)` }} />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-400"
          style={{ background: `linear-gradient(135deg, ${p.gradFrom}cc, ${p.gradTo}99)` }}
        />
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaExternalLinkAlt className="text-white text-xs" />
        </div>
        <div className="absolute top-4 left-4">
          <span className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border backdrop-blur-sm ${p.tagClass}`}>
            {p.category}
          </span>
        </div>
        <div
          className="absolute bottom-4 right-5 font-display font-black text-5xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 select-none"
          style={{ background: `linear-gradient(90deg, ${p.gradFrom}, ${p.gradTo})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          {p.metric}
        </div>
      </div>

      {/* Body */}
      <div className="p-7">
        <h3 className="font-display font-bold text-white text-2xl mb-2">{p.name}</h3>
        <p className="text-emerald-400 text-sm font-semibold flex items-center gap-1.5 mb-5">
          <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px]" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>↑</span>
          {p.result}
        </p>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-blue-400 transition-colors duration-300">
          View case study
          <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * @param {{ hideHeader?: boolean, limit?: number }} props
 */
export default function Portfolio({ hideHeader = false, limit }) {
  const projects = limit ? allProjects.slice(0, limit) : allProjects;
  const showSeeMore = limit && allProjects.length > limit;

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden" style={{ background: '#060e1e' }}>
      {/* light effects — same as HowItWorks */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '250px', background: 'linear-gradient(to bottom, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 50%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '250px', background: 'linear-gradient(to top, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }} />
      <div className="absolute top-0 bottom-0 left-0 pointer-events-none" style={{ width: '250px', background: 'linear-gradient(to right, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }} />
      <div className="absolute top-0 bottom-0 right-0 pointer-events-none" style={{ width: '250px', background: 'linear-gradient(to left, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.13) 0%, rgba(59,130,246,0.05) 45%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-4"
            >
              <span className="w-6 h-px bg-blue-500/60" />
              Our Work
              <span className="w-6 h-px bg-blue-500/60" />
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-5xl text-white mb-5 leading-tight"
            >
              Recent{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-lg"
            >
              Every project is custom-built. Here&apos;s a look at what we&apos;ve
              delivered for businesses across industries.
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i} />
          ))}
        </div>

        {/* See More button */}
        {showSeeMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(59,130,246,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base shadow-lg"
            >
              See More Projects
              <FaArrowRight className="text-sm" />
            </motion.a>
          </motion.div>
        )}

        {/* CTA for full page */}
        {!showSeeMore && !hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-cyan-400 transition-colors border-b border-blue-400/30 hover:border-cyan-400/50 pb-0.5">
              Want results like these? Let&apos;s talk →
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
