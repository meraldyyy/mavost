import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/mrldyrdh" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/meraldy-ridho-fadillah" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/meraldyyy" },
];

const navLinks = [
  { label: 'Home', href: '#home', index: '/01' },
  { label: 'Services', href: '#services', index: '/02' },
  { label: 'Portfolio', href: '#portfolio', index: '/03' },
  { label: 'Pricing', href: '#pricing', index: '/04' },
  { label: 'Contact', href: '#contact', index: '/05' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-bone-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top CTA — oversized */}
        <div className="py-20 lg:py-28 border-b border-bone-50/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8"
          >
            <div className="max-w-3xl">
              <p className="label text-primary-400 mb-5">/ Let's Work</p>
              <h3 className="font-satoshi font-black text-4xl sm:text-5xl lg:text-7xl text-bone-50 leading-[0.95] tracking-tightest text-balance">
                Ready to build your{' '}
                <span className="ink-accent text-primary-400">premium website</span>?
              </h3>
            </div>
            <motion.a
              href="https://wa.me/6282175495541"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              data-cursor
              className="group shrink-0 inline-flex items-center gap-3 px-7 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-500 transition-colors duration-200"
            >
              Start a Project
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Middle — brand + columns */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-6 space-y-5">
            <Link to="/" className="flex items-baseline gap-1 group" data-cursor>
              <span className="font-satoshi font-black text-2xl text-bone-50 tracking-tightest">
                mavost
              </span>
              <span className="font-mono text-xs text-primary-400">.id</span>
            </Link>
            <p className="text-sm text-bone-300 max-w-sm leading-relaxed">
              Create, Inspire, Repeat. | A premium web agency helping brands build
              elite digital experiences that convert.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  data-cursor
                  className="w-10 h-10 rounded-full border border-bone-50/15 flex items-center justify-center text-bone-400 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-200"
                  aria-label={s.label}
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="label text-bone-500 mb-4">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    data-cursor
                    className="group flex items-center gap-2 text-sm text-bone-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <span className="font-mono text-[0.6rem] text-bone-500 group-hover:text-primary-500 transition-colors">
                      {link.index}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="label text-bone-500 mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ajkdal@gmail.com"
                  data-cursor
                  className="text-sm text-bone-300 hover:text-primary-400 transition-colors duration-200"
                >
                  meraldyridho@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6282175495541"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="text-sm text-bone-300 hover:text-primary-400 transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-2">
                <p className="label text-bone-500">Depok / Remote</p>
                <p className="label text-bone-500 mt-1">N 6.12 / E 106.49</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-bone-50/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-bone-500">
            &copy; {currentYear} mavost.id | All rights reserved.
          </p>
          <p className="text-xs text-bone-500">
            Built with care by{' '}
            <span className="text-bone-300">Meraldy Ridho Fadillah</span>
          </p>
        </div>
      </div>

      {/* Decorative oversized brand mark */}
      <div className="relative overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <div className="font-satoshi font-black text-[20vw] leading-[0.8] tracking-tightest text-bone-50/[0.04] whitespace-nowrap text-center -mb-[2vw]">
          MAVOST.ID
        </div>
      </div>
    </footer>
  );
}
