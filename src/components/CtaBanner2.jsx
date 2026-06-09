'use client';

import { motion } from 'framer-motion';

export default function CtaBanner2() {
  return (
    <section className="relative overflow-hidden border-y border-blue-700" style={{ background: 'linear-gradient(to right, #2563eb 0%, #1d4ed8 60%, #1e40af 100%)' }}>

      {/* left-to-right light effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 150% at -5% 50%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)',
        }}
      />


      {/* dot grid — only right half */}
      <div
        className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,1) 60%)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,1) 60%)',
          opacity: 0.45,
        }}
      />

      {/* right side: faded </> icon */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <svg
          viewBox="0 0 260 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[320px] h-auto opacity-[0.12]"
        >
          {/* < */}
          <path
            d="M90 30 L20 90 L90 150"
            stroke="#1e293b"
            strokeWidth="28"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
          />
          {/* / */}
          <line
            x1="148"
            y1="20"
            x2="112"
            y2="160"
            stroke="#1e293b"
            strokeWidth="22"
            strokeLinecap="square"
          />
          {/* > */}
          <path
            d="M170 30 L240 90 L170 150"
            stroke="#1e293b"
            strokeWidth="28"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
          />
        </svg>
      </div>

      {/* speed lines behind icon */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-[500px] h-full opacity-[0.07]">
        {[20, 40, 60, 80, 100, 120, 140].map((y, i) => (
          <div
            key={i}
            className="absolute bg-gray-400 rounded-full"
            style={{
              top: `calc(50% + ${(i - 3) * 22}px)`,
              right: 0,
              height: '2px',
              width: `${120 + i * 18}px`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 py-14 flex flex-col gap-4">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white font-semibold text-xl"
        >
          Let's build
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-black text-5xl md:text-6xl text-white uppercase leading-tight"
        >
          Your Dream Project
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center px-6 py-2.5 border border-white text-white font-semibold text-sm rounded transition-all duration-200 hover:bg-white hover:border-white hover:text-blue-600"
          >
            Request a Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
