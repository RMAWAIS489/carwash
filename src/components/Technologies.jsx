'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiVuedotjs, SiNextdotjs, SiNuxt, SiShopify, SiWordpress, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiLaravel, SiGraphql,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiSupabase, SiRedis,
  SiZapier, SiMake, SiN8N, SiOpenai, SiAnthropic, SiLangchain,
  SiSlack, SiNotion, SiAirtable, SiHubspot, SiStripe, SiTwilio,
} from 'react-icons/si';

const tabs = [
  {
    label: 'Automation & AI',
    techs: [
      { icon: SiZapier,    name: 'Zapier',      color: '#FF4A00', bg: 'rgba(255,74,0,0.08)'    },
      { icon: SiMake,      name: 'Make',        color: '#9B59B6', bg: 'rgba(109,0,204,0.08)'   },
      { icon: SiN8N,       name: 'n8n',         color: '#EA4B71', bg: 'rgba(234,75,113,0.08)'  },
      { icon: SiOpenai,    name: 'OpenAI',      color: '#74AA9C', bg: 'rgba(116,170,156,0.08)' },
      { icon: SiAnthropic, name: 'Anthropic',   color: '#CC9B7A', bg: 'rgba(204,155,122,0.08)' },
      { icon: SiLangchain, name: 'LangChain',   color: '#65B89C', bg: 'rgba(100,180,160,0.08)' },
      { icon: SiSlack,     name: 'Slack',       color: '#E01E5A', bg: 'rgba(224,30,90,0.08)'   },
      { icon: SiNotion,    name: 'Notion',      color: '#ffffff',  bg: 'rgba(255,255,255,0.08)' },
      { icon: SiAirtable,  name: 'Airtable',    color: '#18BFFF', bg: 'rgba(24,191,255,0.08)'  },
      { icon: SiHubspot,   name: 'HubSpot',     color: '#FF7A59', bg: 'rgba(255,122,89,0.08)'  },
      { icon: SiStripe,    name: 'Stripe',      color: '#635BFF', bg: 'rgba(99,91,255,0.08)'   },
      { icon: SiTwilio,    name: 'Twilio',      color: '#F22F46', bg: 'rgba(242,47,70,0.08)'   },
    ],
  },
  {
    label: 'Front-End',
    techs: [
      { icon: SiReact,       name: 'React.js',     color: '#61DAFB', bg: 'rgba(97,218,251,0.08)'  },
      { icon: SiVuedotjs,    name: 'Vue.js',       color: '#42B883', bg: 'rgba(66,184,131,0.08)'  },
      { icon: SiNextdotjs,   name: 'Next.js',      color: '#ffffff', bg: 'rgba(255,255,255,0.08)' },
      { icon: SiNuxt,        name: 'Nuxt.js',      color: '#00DC82', bg: 'rgba(0,220,130,0.08)'   },
      { icon: SiShopify,     name: 'Shopify',      color: '#96BF48', bg: 'rgba(150,191,72,0.08)'  },
      { icon: SiWordpress,   name: 'WordPress',    color: '#21759B', bg: 'rgba(33,117,155,0.08)'  },
      { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38BDF8', bg: 'rgba(56,189,248,0.08)'  },
      { icon: SiTypescript,  name: 'TypeScript',   color: '#3178C6', bg: 'rgba(49,120,198,0.08)'  },
    ],
  },
  {
    label: 'Back-End',
    techs: [
      { icon: SiNodedotjs, name: 'Node.js',    color: '#339933', bg: 'rgba(51,153,51,0.08)'   },
      { icon: SiExpress,   name: 'Express.js', color: '#ffffff',  bg: 'rgba(255,255,255,0.08)' },
      { icon: SiPython,    name: 'Python',     color: '#3776AB', bg: 'rgba(55,118,171,0.08)'  },
      { icon: SiDjango,    name: 'Django',     color: '#44B78B', bg: 'rgba(68,183,139,0.08)'  },
      { icon: SiLaravel,   name: 'Laravel',    color: '#FF2D20', bg: 'rgba(255,45,32,0.08)'   },
      { icon: SiGraphql,   name: 'GraphQL',    color: '#E10098', bg: 'rgba(225,0,152,0.08)'   },
    ],
  },
  {
    label: 'Database',
    techs: [
      { icon: SiMongodb,    name: 'MongoDB',    color: '#47A248', bg: 'rgba(71,162,72,0.08)'   },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791', bg: 'rgba(51,103,145,0.08)'  },
      { icon: SiMysql,      name: 'MySQL',      color: '#4479A1', bg: 'rgba(68,121,161,0.08)'  },
      { icon: SiFirebase,   name: 'Firebase',   color: '#FFCA28', bg: 'rgba(255,202,40,0.08)'  },
      { icon: SiSupabase,   name: 'Supabase',   color: '#3ECF8E', bg: 'rgba(62,207,142,0.08)'  },
      { icon: SiRedis,      name: 'Redis',      color: '#DC382D', bg: 'rgba(220,56,45,0.08)'   },
    ],
  },
];

export default function Technologies() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#070f20' }}>

      {/* light effects */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '250px', background: 'linear-gradient(to bottom, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 50%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '250px', background: 'linear-gradient(to top, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }} />
      <div className="absolute top-0 bottom-0 left-0 pointer-events-none" style={{ width: '250px', background: 'linear-gradient(to right, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }} />
      <div className="absolute top-0 bottom-0 right-0 pointer-events-none" style={{ width: '250px', background: 'linear-gradient(to left, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.13) 0%, rgba(59,130,246,0.05) 45%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-4"
          >
            <span className="w-6 h-px bg-blue-500/60" />
            Our Stack
            <span className="w-6 h-px bg-blue-500/60" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-white leading-tight"
          >
            Technologies{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              We Use
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base mt-4 max-w-xl mx-auto"
          >
            From modern web frameworks to powerful AI & automation platforms — we use the right tools for every job.
          </motion.p>
        </div>

        {/* tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`relative px-8 py-3 text-sm font-bold rounded-xl transition-all duration-200 ${
                active === i
                  ? 'text-white bg-white/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
              {active === i && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-1.5 left-4 right-4 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* tech slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tabs[active].techs.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/8 cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl snap-start shrink-0"
                  style={{
                    background: tech.bg,
                    width: '160px',
                    height: '160px',
                    minWidth: '160px',
                  }}
                >
                  {/* icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${tech.bg}`,
                      border: `1px solid ${tech.color}30`,
                      boxShadow: `0 0 24px ${tech.color}20`,
                    }}
                  >
                    <Icon className="text-4xl" style={{ color: tech.color }} />
                  </div>
                  <span className="text-slate-400 text-sm font-semibold text-center leading-tight group-hover:text-white transition-colors duration-200 px-2">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
