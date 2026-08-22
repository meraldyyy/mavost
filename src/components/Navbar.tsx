import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home', index: '01' },
  { label: 'Services', href: '#services', index: '02' },
  { label: 'Portfolio', href: '#portfolio', index: '03' },
  { label: 'Pricing', href: '#pricing', index: '04' },
  { label: 'Contact', href: '#contact', index: '05' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) return;
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bone-100/90 backdrop-blur-md border-b hairline'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-1 group" data-cursor>
            <span className="font-satoshi font-black text-lg text-ink-900 tracking-tightest">
              mavost
            </span>
            <span className="font-mono text-[0.65rem] text-primary-600 tracking-tight">
              .id
            </span>
          </Link>

          {/* Desktop Nav — mono numbered */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={() => handleNavClick(link.href)}
                data-cursor
                className="group relative flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-primary-600 transition-colors duration-200"
              >
                <span className="font-mono text-[0.6rem] text-ink-400 group-hover:text-primary-500 transition-colors">
                  {link.index}
                </span>
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-600 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/491047120138021"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-ink-900 text-bone-50 text-sm font-medium rounded-full hover:bg-primary-600 transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Let's Talk
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-ink-800 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-ink-900 border-t border-ink-700 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-0">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 py-3.5 text-bone-100 font-medium hover:text-primary-400 transition-colors border-b border-ink-700/60"
                >
                  <span className="font-mono text-[0.65rem] text-ink-400">{link.index}</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/491047120138021"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4 py-3.5 px-5 bg-primary-600 text-white text-center font-medium rounded-full"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
