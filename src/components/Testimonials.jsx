import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Marcus Johnson',
    role: 'Owner, Sparkle Auto Wash',
    location: 'Houston, TX',
    rating: 5,
    text: "WashHub transformed our business completely. Before them, we had zero online presence. Now we get 30+ online bookings every week and our revenue has grown by 40% in just 3 months.",
    avatar: 'MJ',
    avatarBg: 'bg-gradient-to-br from-blue-400 to-primary',
  },
  {
    name: 'Sarah Chen',
    role: 'Manager, Premier Car Spa',
    location: 'Los Angeles, CA',
    rating: 5,
    text: "The automated reminder system alone has cut our no-shows by half. The loyalty program they built keeps our regulars coming back. Absolutely worth every penny.",
    avatar: 'SC',
    avatarBg: 'bg-gradient-to-br from-cyan-400 to-teal-500',
  },
  {
    name: 'David Rivera',
    role: 'CEO, CleanDrive Network',
    location: 'Miami, FL',
    rating: 5,
    text: "We have 3 locations and WashHub integrated everything — one dashboard, all bookings, all customer data. The POS integration saved my team hours of manual work every day.",
    avatar: 'DR',
    avatarBg: 'bg-gradient-to-br from-violet-400 to-purple-600',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="relative py-28 bg-slate-50 bg-grid overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Real Results
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-ink mb-5">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            Don't take our word for it. Here's what car wash owners across the
            country are saying after working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-2xl bg-white border border-slate-100 p-8 flex flex-col gap-5 hover:shadow-card-hover hover:border-slate-200 transition-colors duration-300"
            >
              {/* Profile at top */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.avatar}
                </motion.div>
                <div>
                  <div className="font-semibold text-ink text-sm">{t.name}</div>
                  <div className="text-ink-muted text-xs">{t.role}</div>
                  <div className="text-primary text-xs font-medium">{t.location}</div>
                   <motion.div
                className="flex gap-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: index * 0.15 + 0.2 } } }}
              >
                {[...Array(t.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
                  >
                    <FaStar className="text-amber-400 text-base" />
                  </motion.span>
                ))}
              </motion.div>
                </div>
              </div>

              {/* Stars */}
             

              <p className="text-ink-soft leading-relaxed flex-1 italic text-[15px]">
                "{t.text}"
              </p>

            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-ink-faint text-sm"
        >
          <div className="flex items-center gap-2">
            <FaStar className="text-amber-400" />
            <span>4.9/5 Average Rating</span>
          </div>
          <div className="w-px h-4 bg-slate-200" />
          <span>50+ Happy Clients</span>
          <div className="w-px h-4 bg-slate-200" />
          <span>100% Project Success Rate</span>
          <div className="w-px h-4 bg-slate-200" />
          <span>No long-term contracts</span>
        </motion.div>
      </div>
    </section>
  );
}
