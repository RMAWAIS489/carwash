'use client';

import { FaCar, FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const links = {
  Services: [
    'Website Development',
    'Booking System',
    'Automated Reminders',
    'Loyalty Programs',
    'Payment Integration',
    'Review Management',
  ],
  Company: ['About Us', 'Case Studies', 'Blog', 'Careers', 'Press'],
  Support: ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <FaCar className="text-white text-lg" />
              </div>
              <span className="font-display font-bold text-xl">
                <span className="text-white">Wash</span>
                <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Hub</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              The digital agency built exclusively for car wash businesses. We
              turn car washes into data-driven, automated revenue machines.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[FaTwitter, FaLinkedin, FaInstagram, FaFacebook].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <span>© 2025 WashHub. All rights reserved.</span>
          <span>Built with ❤️ for car wash businesses everywhere</span>
        </div>
      </div>
    </footer>
  );
}
