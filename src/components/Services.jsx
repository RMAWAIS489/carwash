'use client';

import { motion } from 'framer-motion';

const services = [
  { title: 'Website Design & Development',    description: 'Custom, mobile-first websites built to represent your brand. Modern design, fast loading, and fully optimised for conversions.',   tag: 'Most Popular', tagClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20',       image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80' },
  { title: 'Workflow Automation',             description: 'Automate repetitive tasks across your entire business — from lead follow-ups to internal reporting. Save hours every week.',         tag: 'High Demand',  tagClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',         image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
  { title: 'Automated Notifications',         description: 'SMS and email sequences triggered by customer actions. Keep your audience engaged and reduce drop-offs by up to 60%.',              tag: 'Automation',   tagClass: 'bg-violet-500/10 text-violet-400 border-violet-500/20',   image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80' },
  { title: 'Email Marketing Funnels',         description: 'Drip campaigns, newsletters, and lead nurture sequences crafted to convert prospects into loyal paying customers.',                  tag: 'Growth',       tagClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', image: 'https://images.unsplash.com/photo-1596526131083-e8c633064dba?w=600&q=80' },
  { title: 'Payment & Subscription Systems',  description: 'Accept online payments, build subscription products, and manage billing — all seamlessly integrated into your platform.',          tag: 'Revenue',      tagClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20',       image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
  { title: 'Reputation Management',           description: 'Automatically request reviews after every interaction. Build your brand authority and dominate search results on autopilot.',        tag: 'Branding',     tagClass: 'bg-rose-500/10 text-rose-400 border-rose-500/20',         image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
  { title: 'CRM & Customer Management',       description: 'Track leads, clients, and deals in one place. Use data-driven insights to send personalised offers that close faster.',            tag: 'Data',         tagClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
  { title: 'Analytics & Reporting',           description: "Real-time dashboards that surface the metrics that matter. Know exactly what's working and where to double down.",                  tag: 'Insights',     tagClass: 'bg-teal-500/10 text-teal-400 border-teal-500/20',         image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl overflow-hidden cursor-default"
      style={{ minHeight: '300px' }}
    >
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

      {/* content */}
      <div className="relative z-10 p-6 flex flex-col justify-between" style={{ minHeight: '300px' }}>
        {/* top: number + tag */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm ${service.tagClass}`}>
            {service.tag}
          </span>
        </div>

        {/* bottom: title + desc */}
        <div>
          <h3 className="font-display font-bold text-white text-base mb-2 leading-snug">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {service.description}
          </p>
          <div className="mt-4 text-xs font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
            Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services({ hideHeader = false }) {
  return (
    <section id="services" className="relative py-28 overflow-hidden" style={{ background: '#ffffff' }}>



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
              What We Offer
              <span className="w-6 h-px bg-blue-500/60" />
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-5xl text-gray-900 mb-5 leading-tight"
            >
              Everything Your Business{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Needs to Scale
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed"
            >
              We don&apos;t just build websites — we build complete digital ecosystems
              that automate operations and accelerate growth.
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
