import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Rocket,
  Building2,
  User,
  RefreshCw,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '../i18n';

const services = [
  {
    icon: Rocket,
    title: 'Landing Page',
    description:
      'High-converting landing pages designed to capture leads and drive sales with precision.',
    tags: ['Conversion', 'Copy', 'CRO'],
  },
  {
    icon: Building2,
    title: 'Company Profile',
    description:
      'Professional company websites that establish authority and build immediate trust with visitors.',
    tags: ['Brand', 'CMS', 'SEO'],
  },
  {
    icon: User,
    title: 'Personal Branding',
    description:
      'Distinctive personal brand websites that set you apart and attract your ideal audience.',
    tags: ['Identity', 'Portfolio', 'Story'],
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description:
      'Transform outdated websites into modern, high-performing digital experiences.',
    tags: ['Audit', 'UX', 'Migration'],
  },
];

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor
      className="group relative grid grid-cols-12 items-center gap-4 py-7 lg:py-9 border-b hairline cursor-pointer overflow-hidden"
    >
      {/* Hover fill */}
      <motion.div
        className="absolute inset-0 bg-ink-900"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ originY: 1 }}
      />

      {/* Index */}
      <div className="relative col-span-2 sm:col-span-1">
        <span className={`label transition-colors duration-300 ${hovered ? 'text-primary-400' : 'text-ink-400'}`}>
          /0{index + 1}
        </span>
      </div>

      {/* Icon */}
      <div className="relative col-span-1 hidden sm:block">
        <div
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
            hovered ? 'border-primary-400 text-primary-400' : 'border-ink-300 text-ink-600'
          }`}
        >
          <Icon size={18} />
        </div>
      </div>

      {/* Title */}
      <div className="relative col-span-10 sm:col-span-5 lg:col-span-4">
        <h3
          className={`font-satoshi font-black text-2xl lg:text-3xl tracking-tightest transition-colors duration-300 ${
            hovered ? 'text-bone-50' : 'text-ink-900'
          }`}
        >
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <div className="relative col-span-12 sm:col-span-5 lg:col-span-4 hidden lg:block">
        <p className={`text-sm leading-relaxed transition-colors duration-300 ${hovered ? 'text-bone-200' : 'text-ink-500'}`}>
          {service.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="relative col-span-12 sm:col-span-1 flex sm:justify-end">
        <motion.div
          animate={{ rotate: hovered ? 0 : -45, x: hovered ? 0 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
            hovered ? 'bg-primary-600 text-white' : 'bg-ink-100 text-ink-700'
          }`}
        >
          <ArrowUpRight size={16} />
        </motion.div>
      </div>

      {/* Tags — mobile only inline */}
      <div className="relative col-span-12 sm:hidden -mt-2">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={`label px-2 py-1 rounded-full border transition-colors duration-300 ${
                hovered ? 'border-primary-400/40 text-primary-300' : 'border-ink-200 text-ink-400'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 lg:py-32 bg-bone-100 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-6 mb-12 lg:mb-16"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="label text-primary-600">/ 02 — {t.services.label}</span>
              <span className="h-px w-10 bg-ink-300" />
            </div>
            <h2 className="font-satoshi font-black text-4xl lg:text-6xl text-ink-900 leading-[0.95] tracking-tightest text-balance">
              {t.services.headlineBefore}
              <br />
              <span className="ink-accent">{t.services.headlineAccent}</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-ink-600 leading-relaxed">
              {t.services.description}
            </p>
          </div>
        </motion.div>

        {/* Service rows */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="border-t hairline"
        >
          {services.map((service, i) => (
            <ServiceRow
              key={service.title}
              service={{ ...service, ...t.services.items[i], tags: [...t.services.items[i].tags] }}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
