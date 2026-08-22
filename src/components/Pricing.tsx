import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '999.000',
    description: 'For small businesses and personal projects that need a strong first impression.',
    features: [
      '1 Landing Page',
      'Responsive Design',
      'Basic SEO',
      'Free Maintenance 1 Months',
    ],
    cta: 'Get Started',
    highlight: false,
    index: '/001',
  },
  {
    name: 'Pro',
    price: '3.999.000',
    description: 'For businesses ready to stand out, convert, and outclass the competition.',
    features: [
      '3-5 Pages',
      'Premium Design',
      'Advanced Animation',
      'Advanced SEO',
      'Free Maintenance 3 Months',
    ],
    cta: 'Start Pro',
    highlight: true,
    index: '/002',
  },
  {
    name: 'Enterprise',
    price: '7.999.000',
    description: 'Full-scale solutions for established organizations with custom needs.',
    features: [
      'Unlimited Pages',
      'CMS Integration',
      'Custom Features',
      'High Performance Optimization',
      'Free Maintenance 6 Months',
    ],
    cta: 'Contact Us',
    highlight: false,
    index: '/003',
  },
];

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[number];
  index: number;
}) {
  const handleCTA = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative rounded-2xl p-7 lg:p-8 transition-all duration-300 flex flex-col ${
        plan.highlight
          ? 'bg-ink-900 text-bone-50 border border-ink-900'
          : 'bg-bone-50 border hairline hover:border-ink-900/40'
      }`}
    >
      {/* Top row: index + highlight marker */}
      <div className="flex items-center justify-between mb-8">
        <span className={`label ${plan.highlight ? 'text-primary-400' : 'text-ink-400'}`}>
          {plan.index} — {plan.name}
        </span>
        {plan.highlight && (
          <span className="flex items-center gap-1.5 px-3 py-1 bg-primary-600 text-white text-[0.65rem] font-bold rounded-full uppercase tracking-wider">
            Popular
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mb-5">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-mono text-sm ${plan.highlight ? 'text-bone-300' : 'text-ink-500'}`}>
            Rp
          </span>
          <span
            className={`font-satoshi font-black text-4xl lg:text-5xl tracking-tightest leading-none ${
              plan.highlight ? 'text-bone-50' : 'text-ink-900'
            }`}
          >
            {plan.price}
          </span>
        </div>
        <p className={`text-sm mt-4 leading-relaxed ${plan.highlight ? 'text-bone-300' : 'text-ink-500'}`}>
          {plan.description}
        </p>
      </div>

      {/* Divider */}
      <div className={`h-px w-full my-6 ${plan.highlight ? 'bg-bone-50/15' : 'bg-ink-200/60'}`} />

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                plan.highlight ? 'bg-primary-600' : 'bg-primary-50'
              }`}
            >
              <Check
                size={12}
                className={plan.highlight ? 'text-white' : 'text-primary-600'}
                strokeWidth={3}
              />
            </div>
            <span className={`text-sm ${plan.highlight ? 'text-bone-200' : 'text-ink-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={handleCTA}
        data-cursor
        className={`group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ${
          plan.highlight
            ? 'bg-primary-600 text-white hover:bg-primary-500'
            : 'bg-ink-900 text-bone-50 hover:bg-primary-600'
        }`}
      >
        {plan.cta}
        <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
      </button>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-bone-100">
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
              <span className="label text-primary-600">/ 05 — Pricing</span>
              <span className="h-px w-10 bg-ink-300" />
            </div>
            <h2 className="font-satoshi font-black text-4xl lg:text-6xl text-ink-900 leading-[0.95] tracking-tightest text-balance">
              Transparent pricing,
              <br />
              <span className="ink-accent">premium value</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-ink-600 leading-relaxed">
              Every package includes our full attention, premium craftsmanship, and
              post-launch support. No hidden fees.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-ink-500 mt-10"
        >
          All prices are starting prices. Final quote depends on project scope.{' '}
          <a
            href="#contact"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary-600 hover:underline font-medium cursor-pointer"
          >
            Get a custom quote
          </a>
        </motion.p>
      </div>
    </section>
  );
}
