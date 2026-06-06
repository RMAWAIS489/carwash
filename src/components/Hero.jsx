import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useCountUp } from '../hooks/useCountUp';
import { useTypewriter } from '../hooks/useTypewriter';
import carImage from '../assets/car.png';

const stats = [
  { value: '50+', label: 'Clients Served' },
  { value: '8', label: 'Services Offered' },
  { value: '99%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support' },
];

const bullets = [
  'Custom websites built for car washes',
  'Booking & automation in one platform',
  'Launch in as little as 7 days',
];

function StatCard({ stat, index, inView }) {
  const animated = useCountUp(stat.value, 1600, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
      className="bg-white rounded-2xl p-4 text-center shadow-card border border-slate-100"
    >
      <div className="text-2xl font-display font-black text-gradient mb-1">
        {animated}
      </div>
      <div className="text-ink-muted text-xs">{stat.label}</div>
    </motion.div>
  );
}

export default function Hero() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });
  const { displayed, done } = useTypewriter('Car Wash', 90, 600);

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
        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — text content */}
          <div className="pl-6 lg:pl-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 text-primary text-sm font-semibold mb-7"
            >
              <motion.span
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <HiSparkles className="text-base" />
              </motion.span>
              #1 Digital Agency for Car Wash Businesses
            </motion.div>

            {/* Headline */}
            <div className="font-display text-4xl md:text-5xl font-black leading-tight text-ink mb-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We Power Your
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="relative inline-block"
              >
                <span className="text-gradient">
                  {displayed}
                  {/* Blinking cursor while typing */}
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
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Business Online
              </motion.div>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-ink-muted text-base max-w-lg mb-6 leading-relaxed"
            >
              From custom websites to full automation — we build the digital
              tools car wash businesses need to grow faster and work smarter.
            </motion.p>

            {/* Bullet trust points */}
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.65 } } }}
              className="flex flex-col gap-2 mb-7"
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
              className="flex flex-col sm:flex-row gap-3 mb-10"
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

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} inView={statsInView} />
              ))}
            </div>
          </div>

          {/* RIGHT — car image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-2xl scale-110" />

            {/* Badges — static, no animation */}
            <div className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl shadow-card-hover border border-slate-100 px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-lg">📅</div>
              <div>
                <div className="text-ink font-bold text-sm">32 bookings today</div>
                <div className="text-ink-muted text-xs">via online system</div>
              </div>
            </div>

            <div className="absolute bottom-6 -right-4 z-20 bg-white rounded-2xl shadow-card-hover border border-slate-100 px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 font-bold text-lg">↑</div>
              <div>
                <div className="text-ink font-bold text-sm">+40% Revenue</div>
                <div className="text-ink-muted text-xs">in first 3 months</div>
              </div>
            </div>

            {/* The car image */}
            <img
              src={carImage}
              alt="Premium car wash"
              className="relative z-10 w-full rounded-[2rem] object-cover drop-shadow-2xl shadow-[0_32px_80px_rgba(0,0,0,0.18)] -mt-10"
              style={{ maxHeight: '75vh' }}
            />
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
