'use client';

import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const links = {
  Services: [
    'Website Development',
    'Workflow Automation',
    'Email Marketing',
    'CRM & Lead Management',
    'Payment Integration',
    'Analytics & Reporting',
  ],
  Company: ['About Us', 'Case Studies', 'Blog', 'Careers', 'Press'],
  Support: ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'],
};

const socials = [
  { Icon: FaTwitter,   href: 'https://x.com/automations_ltd' },
  { Icon: FaLinkedin,  href: 'https://www.linkedin.com/company/127233955/' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/automationslimited/' },
  { Icon: FaFacebook,  href: 'https://www.facebook.com/profile.php?id=61590403694008' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#030810' }}>

      {/* right side vertical light beam */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: '45vw',
          height: '100%',
          background: 'radial-gradient(ellipse 90% 100% at 100% 50%, rgba(59,130,246,0.28) 0%, rgba(37,99,235,0.14) 45%, rgba(6,182,212,0.04) 70%, transparent 90%)',
          filter: 'blur(18px)',
        }}
      />
      {/* ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 100% at 100% 50%, rgba(59,130,246,0.18) 0%, transparent 70%)',
        }}
      />
      {/* left bottom light beam */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          left: 0,
          width: '45vw',
          height: '100%',
          background: 'radial-gradient(ellipse 90% 100% at 0% 100%, rgba(59,130,246,0.28) 0%, rgba(37,99,235,0.14) 45%, rgba(6,182,212,0.04) 70%, transparent 90%)',
          filter: 'blur(18px)',
        }}
      />


      {/* ── Main footer body ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
            {/* Brand col */}
            <div className="lg:col-span-2">
              <a href="#home" className="inline-flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <HiSparkles className="text-white text-xl" />
                </div>
                <span className="font-display font-bold text-2xl">
                  <span className="text-white">Automations</span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Limited</span>
                </span>
              </a>
              <p className="text-white/75 text-base leading-relaxed mb-6 max-w-xs">
                A digital automation agency helping businesses grow faster through
                smart websites, automated workflows, and data-driven systems.
              </p>
              <div className="flex gap-2">
                {socials.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white/60 hover:text-blue-400 transition-all"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <Icon className="text-base" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link cols */}
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-blue-400 font-bold text-sm mb-5 uppercase tracking-[0.15em]">
                  {category}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white text-base transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="pt-4 flex items-center justify-center"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <span className="text-white text-sm text-center">
              © 2026 Rights Reserved. Designed By{' '}
              <a href="#" className="text-white hover:text-blue-400 hover:font-semibold transition-colors ">AUTOMATIONS LIMITED</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
