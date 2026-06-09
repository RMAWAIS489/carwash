'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLightbulb, FaClipboardList, FaCode, FaSyncAlt, FaCheckDouble } from 'react-icons/fa';

const steps = [
  {
    icon: FaLightbulb,
    num: '01',
    title: 'Discovery',
    description: 'We start by understanding your vision, goals, and requirements through a detailed consultation. No generic playbooks — just focused listening.',
    color: 'text-blue-400',
    glow: 'rgba(59,130,246,0.2)',
    border: 'rgba(59,130,246,0.35)',
    lineGlow: 'rgba(59,130,246,0.4)',
  },
  {
    icon: FaClipboardList,
    num: '02',
    title: 'Plan',
    description: 'Our team creates a comprehensive roadmap with timelines, milestones, and technical specifications tailored to your exact goals.',
    color: 'text-cyan-400',
    glow: 'rgba(6,182,212,0.2)',
    border: 'rgba(6,182,212,0.35)',
    lineGlow: 'rgba(6,182,212,0.4)',
  },
  {
    icon: FaCode,
    num: '03',
    title: 'Develop',
    description: 'Using agile methodologies, we build your solution with regular updates and feedback cycles. You see progress every step of the way.',
    color: 'text-violet-400',
    glow: 'rgba(139,92,246,0.2)',
    border: 'rgba(139,92,246,0.35)',
    lineGlow: 'rgba(139,92,246,0.4)',
  },
  {
    icon: FaSyncAlt,
    num: '04',
    title: 'Iterate',
    description: 'Build in short cycles, allowing for continuous feedback and rapid improvements. We refine until every detail is exactly right.',
    color: 'text-amber-400',
    glow: 'rgba(245,158,11,0.2)',
    border: 'rgba(245,158,11,0.35)',
    lineGlow: 'rgba(245,158,11,0.4)',
  },
  {
    icon: FaCheckDouble,
    num: '05',
    title: 'Launch & Scale',
    description: 'We launch your solution and stick around. Ongoing support, monitoring, and optimisation so your business keeps growing.',
    color: 'text-emerald-400',
    glow: 'rgba(16,185,129,0.2)',
    border: 'rgba(16,185,129,0.35)',
    lineGlow: 'rgba(16,185,129,0.4)',
  },
];

export default function HowItWorks({ hideHeader = false }) {
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: '-100px' });
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden" style={{ background: '#070f20' }}>
      {/* ── Light effects ─────────────────────────────── */}

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

      {/* Center glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.13) 0%, rgba(59,130,246,0.05) 45%, transparent 70%)',
      }} />

      {/* Top edge glowing line */}
      {/* Top edge glowing line removed */}
      {/* Bottom edge glowing line removed */}

      <div className="max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-4"
            >
              <span className="w-6 h-px bg-blue-500/60" />
              Simple Process
              <span className="w-6 h-px bg-blue-500/60" />
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-5xl text-white mb-5 leading-tight"
            >
              How We{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Work
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-lg max-w-xl mx-auto"
            >
              Our proven development process ensures quality results and
              transparent communication at every step.
            </motion.p>
          </div>
        )}

        {/* Timeline */}
        <div className="relative">
          <div ref={stepsRef} className="flex flex-col md:flex-row gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  className="group flex-1 flex flex-col items-center text-center gap-2"
                >
                  {/* step number — outside card, animates in chain */}
                  <motion.div
                    className={`text-7xl font-black leading-none ${step.color} select-none`}
                    initial={{ opacity: 0.15 }}
                    animate={stepsInView ? { opacity: 1 } : { opacity: 0.15 }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.5, ease: 'easeOut' }}
                  >
                    {step.num}
                  </motion.div>

                  {/* card */}
                  <motion.div
                    className="w-full flex-1 flex flex-col items-center text-center gap-4 rounded-2xl p-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.5, ease: 'easeOut' }}
                  >
                    {/* icon bubble */}
                    <div
                      className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: step.glow,
                        border: `1px solid ${step.border}`,
                        boxShadow: `0 0 24px ${step.glow}`,
                      }}
                    >
                      <Icon className={`text-xl ${step.color}`} />
                    </div>

                    <h3 className="font-display font-bold text-white text-lg leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
