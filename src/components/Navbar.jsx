'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiSparkles } from 'react-icons/hi';

const navLinks = [
  { label: 'Home',         href: '/'             },
  { label: 'Services',     href: '/services'     },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why Us',       href: '/why-us'       },
  { label: 'Projects',     href: '/projects'    },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact',      href: '/#contact'     },
];

export default function Navbar() {
  const pathname = usePathname();
  // scrolled = true means StatsBar has reached the top (navbar should be white)
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) {
      // On non-home pages always show solid navbar
      setScrolled(true);
      return;
    }

    const updateScrollState = () => {
      // Find StatsBar section; fall back to a pixel threshold if not found
      const statsBar = document.querySelector('section.bg-white');
      if (statsBar) {
        const { top } = statsBar.getBoundingClientRect();
        // When StatsBar top reaches or passes the navbar bottom (~72px), go solid
        setScrolled(top <= 72);
      } else {
        setScrolled(window.scrollY > 40);
      }
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, [isHome]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white border-b border-gray-200 shadow-sm'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="relative flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-primary group-hover:scale-110 transition-transform">
            <HiSparkles className="text-white text-lg" />
          </div>
          <span className="font-display font-bold text-xl">
            <span className={scrolled ? 'text-gray-900' : 'text-white'}>Automations</span>
            <span className="text-gradient"> Limited</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = link.href === pathname;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-base font-semibold transition-colors relative group ${
                    isActive
                      ? 'text-primary'
                      : scrolled
                        ? 'text-gray-800 hover:text-primary'
                        : 'text-white hover:text-white/80'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-primary"
        >
          Get Started
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-2xl ${scrolled ? 'text-gray-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-base block py-1 font-medium transition-colors ${
                      link.href === pathname ? 'text-primary' : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
