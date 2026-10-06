import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getLocalizedProject, projects } from '../projects';
import { useLanguage } from '../i18n';

function BentoCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { language } = useLanguage();

  return (
    <motion.article
      data-cursor
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
      }}
      className={`group relative ${project.span} overflow-hidden rounded-2xl bg-ink-900 cursor-pointer`}
    >
      <Link to={`/${language}/work/${project.slug}`} className="block">
        {/* Image */}
        <div className={`relative w-full ${project.tall ? 'h-72 sm:h-96 lg:h-full lg:min-h-[460px]' : 'h-56 sm:h-64'} overflow-hidden`}>
          <img
            src={project.image}
            alt={`${project.title} website project by Mavost`}
            className="w-full h-full object-cover transform-gpu group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />

          {/* Top meta */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="label text-bone-200 bg-ink-950/75 px-2.5 py-1 rounded-full border border-bone-50/10">
              {project.category}
            </span>
            <span className="font-mono text-[0.65rem] text-bone-200 bg-ink-950/75 px-2.5 py-1 rounded-full border border-bone-50/10">
              {project.year}
            </span>
          </div>

          {/* Bottom caption */}
          <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-satoshi font-black text-xl lg:text-2xl text-bone-50 tracking-tightest leading-tight mb-1.5 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-bone-200/80 leading-snug max-w-sm">
                  {project.description}
                </p>
              </div>
              <div
                className="shrink-0 w-10 h-10 rounded-full bg-bone-50/10 border border-bone-50/20 flex items-center justify-center text-bone-50 group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:rotate-45 transition-all duration-300"
              >
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Portfolio() {
  const { language, t } = useLanguage();
  const localizedProjects = projects.map((project) => getLocalizedProject(project, language));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-ink-900 text-bone-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="label text-primary-400">/ 03 — {t.portfolio.label}</span>
              <span className="h-px w-10 bg-bone-50/30" />
            </div>
            <h2 className="font-satoshi font-black text-4xl lg:text-6xl text-bone-50 leading-[0.95] tracking-tightest text-balance">
              {t.portfolio.headlineBefore}
              <br />
              <span className="ink-accent text-primary-400">{t.portfolio.headlineAccent}</span>.
            </h2>
          </div>

          <Link
            to={`/${language}/work`}
            data-cursor
            className="group inline-flex items-center gap-2 text-bone-200 hover:text-primary-400 font-medium text-sm transition-colors shrink-0"
          >
            {t.portfolio.viewAll}
            <span className="w-7 h-7 rounded-full border border-bone-50/30 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:text-white transition-all">
              <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-[minmax(0,1fr)]"
        >
          {localizedProjects.map((project, i) => (
            <BentoCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to={`/${language}/work`}
            data-cursor
            className="group inline-flex items-center gap-3 px-7 py-3.5 border border-bone-50/30 text-bone-100 font-medium rounded-full hover:bg-bone-50 hover:text-ink-900 transition-all duration-300"
          >
            {t.portfolio.fullPortfolio}
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
