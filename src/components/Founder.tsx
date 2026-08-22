import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layout, Database, Server, ArrowUpRight } from 'lucide-react';
import founder from "../assets/founder.jpeg"


const skills = [
  { icon: Layout, name: 'HTML & CSS' },
  { icon: Code, name: 'React' },
  { icon: Code, name: 'Vite'},
  { icon: Server, name: 'Laravel' },
  { icon: Database, name: 'Database' },
];


export default function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 lg:py-32 bg-bone-100 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative">
              {/* Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-ink-200">
                <img
                  src={founder}
                  alt="Meraldy Ridho Fadillah — Founder"
                  className="w-full h-full object-cover object-top grayscale-[0.15]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />

                {/* Caption strip */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-ink-950/80 to-transparent">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="font-satoshi font-black text-bone-50 text-lg leading-tight">
                        Meraldy Ridho Fadillah
                      </p>
                      <p className="label text-bone-200/80 mt-1">Founder / Frontend Web Dev</p>
                    </div>
                    <span className="font-mono text-[0.65rem] text-bone-200/70">/001</span>
                  </div>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-primary-600 rounded-tl-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-primary-600 rounded-br-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="label text-primary-600">/ 04 — The Founder</span>
                <span className="h-px w-10 bg-ink-300" />
              </div>
              <h2 className="font-satoshi font-black text-3xl lg:text-5xl text-ink-900 leading-[0.98] tracking-tightest text-balance">
                Built by someone who{' '}
                <span className="ink-accent">cares about results</span>.
              </h2>
            </div>

            {/* Quote block */}
            <blockquote className="relative pl-6 border-l-2 border-primary-600">
              <p className="font-satoshi font-medium text-lg lg:text-xl text-ink-700 leading-relaxed italic">
                "I founded mavost.id to help businesses and creators elevate their online
                presence with premium digital experiences that actually drive growth."
              </p>
            </blockquote>

            {/* Bio */}
            <p className="text-base text-ink-600 leading-relaxed max-w-xl">
              Hi, I'm Meraldy, a web developer focused on building high-performance,
              conversion-focused websites. Every project is crafted with precision,
              purpose, and obsessive attention to detail.
            </p>

            {/* Tech Stack */}
            <div>
              <p className="label text-ink-500 mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {skills.map(({ icon: Icon, name }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-bone-50 border hairline text-sm text-ink-800 font-medium hover:border-ink-900 hover:bg-ink-900 hover:text-bone-50 transition-all duration-200"
                    data-cursor
                  >
                    <Icon size={14} />
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="https://wa.me/6282175495541"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor
              className="group inline-flex items-center gap-3 px-7 py-4 bg-ink-900 text-bone-50 font-medium rounded-full hover:bg-primary-600 transition-colors duration-300"
            >
              Work With Me
              <span className="w-8 h-8 rounded-full bg-bone-50/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
