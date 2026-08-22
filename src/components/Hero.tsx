import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

const marqueeItems = [
  'Landing Pages',
  'Company Profiles',
  'Personal Branding',
  'Website Redesign',
];

function MagneticButton({
  children,
  className,
  onClick,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.2);
    y.set((e.clientY - cy) * 0.2);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      onClick={onClick}
      data-cursor
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <a href={href}>{inner}</a>;
  }
  return inner;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-bone-100 pt-24 lg:pt-28">
      {/* Top metadata bar */}
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-10 pt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-between border-t hairline pt-4"
        >
          <span className="label text-ink-500 hidden sm:block">
            [ Depok / Remote Studio ]
          </span>
          <span className="label text-ink-500">
            Est. 2024 — Web Design & Development
          </span>
          <span className="label text-ink-500 hidden md:block">
            N 6.12 / E 106.49
          </span>
        </motion.div>
      </div>

      {/* Main headline area */}
      <div className="relative max-w-[1400px] w-full mx-auto px-6 lg:px-10 flex-1 flex items-center py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
            <span className="label text-primary-600">/ 01 — Intro</span>
            <span className="h-px w-10 bg-ink-300" />
            <span className="label text-ink-500">Mavost Design Studio</span>
          </motion.div>

          {/* Headline */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            <motion.h1
              variants={itemVariants}
              className="lg:col-span-9 font-satoshi font-black text-[13vw] sm:text-[11vw] lg:text-[8.5vw] xl:text-[7.8vw] leading-[0.92] tracking-tightest text-ink-900 text-balance"
            >
              Create,
              <br />
              <span className="inline-block">
                Inspire, <span className="ink-accent">Repeat</span>
                <span className="text-primary-600">.</span>
              </span>
            </motion.h1>

            {/* Right column — description */}
            <motion.div variants={itemVariants} className="lg:col-span-3 lg:pl-4 lg:pb-3">
              <p className="text-base text-ink-600 leading-relaxed max-w-xs">
                Mavost builds high-performance websites for businesses, creators, and brands
                that refuse to look like everyone else.
              </p>
            </motion.div>
          </div>

          {/* CTA row */}
          <motion.div
            variants={itemVariants}
            className="mt-10 lg:mt-14 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              className="group inline-flex items-center gap-3 pl-7 pr-5 py-4 bg-ink-900 text-bone-50 font-medium rounded-full hover:bg-primary-600 transition-colors duration-300 cursor-pointer"
              onClick={handleScrollToContact}
            >
              <span>Start a Project</span>
              <span className="w-8 h-8 rounded-full bg-bone-50/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} />
              </span>
            </MagneticButton>

            <MagneticButton
              className="cursor-pointer group"
              href="/work"
            >
              <div className="inline-flex items-center gap-2 px-7 py-4 border hairline text-ink-800 font-medium rounded-full hover:border-ink-900 hover:bg-ink-900 hover:text-bone-50 transition-all duration-300">
                See Recent Work
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom: marquee + stats */}
      <div className="relative">
        {/* Marquee */}
        <div className="relative border-y hairline bg-ink-900 text-bone-50 py-4 overflow-hidden">
          <div className="flex animate-marquee">
            {[0, 1].map((dup) => (
              <div key={dup} className="marquee-track shrink-0">
                {marqueeItems.map((item, i) => (
                  <span key={`${dup}-${i}`} className="flex items-center gap-6 px-6">
                    <span className="font-satoshi font-black text-2xl lg:text-3xl tracking-tight">
                      {item}
                    </span>
                    <span className="text-primary-500 text-2xl">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.1, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-28 right-6 lg:right-10 hidden md:flex flex-col items-center gap-2 text-ink-400"
      >
        <span className="label rotate-90 origin-center mb-6">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
