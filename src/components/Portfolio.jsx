import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    name: 'Sparkle Auto Wash',
    location: 'Houston, TX',
    tag: 'Website + Booking',
    tagColor: 'bg-blue-50 text-primary border-blue-100',
    result: '+40% revenue in 3 months',
    resultColor: 'text-emerald-600',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&auto=format&q=75',
  },
  {
    name: 'Premier Car Spa',
    location: 'Los Angeles, CA',
    tag: 'Automation + CRM',
    tagColor: 'bg-violet-50 text-violet-700 border-violet-100',
    result: '60% fewer no-shows',
    resultColor: 'text-emerald-600',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format&q=75',
  },
  {
    name: 'CleanDrive Network',
    location: 'Miami, FL',
    tag: 'Full Platform',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-100',
    result: '3 locations, 1 dashboard',
    resultColor: 'text-emerald-600',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop&auto=format&q=75',
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.05 });

  return (
    <section id="portfolio" className="relative py-28 bg-white bg-grid-sm overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Our Work
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-ink mb-5">
            Real Websites We've{' '}
            <span className="text-gradient">Built & Launched</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            Every project is custom. Here's a look at what we've delivered for
            car wash businesses just like yours.
          </p>
        </motion.div>

        {/* Project cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.13 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* Browser chrome */}
              <div className="relative overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-100 border-b border-slate-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <div className="flex-1 mx-2 bg-white rounded px-2 py-0.5 text-[10px] text-slate-400 border border-slate-200 truncate">
                    {project.name.toLowerCase().replace(/\s+/g, '')}.com
                  </div>
                </div>
                <div className="overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover object-center"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-ink text-lg leading-tight">{project.name}</h3>
                    <p className="text-ink-faint text-xs mt-0.5">{project.location}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${project.tagColor} shrink-0 ml-2`}>
                    {project.tag}
                  </span>
                </div>
                <div className={`flex items-center gap-1.5 text-sm font-semibold ${project.resultColor}`}>
                  <span className="text-base">↑</span>
                  {project.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4 text-sm"
          >
            Want results like these? Let's talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
