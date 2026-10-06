import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getLocalizedProject, getProjectBySlug, projects } from '../projects';
import { useLanguage } from '../i18n';

export default function ProjectDetail() {
  const { language, t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug ?? '');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return <Navigate to={`/${language}/work`} replace />;
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const localizedProject = getLocalizedProject(project, language);
  const previousProject = projects[projectIndex - 1]
    ? getLocalizedProject(projects[projectIndex - 1], language)
    : undefined;
  const nextProject = projects[projectIndex + 1]
    ? getLocalizedProject(projects[projectIndex + 1], language)
    : undefined;

  return (
    <div className="relative min-h-screen bg-bone-100">
      <SEO
        title={`${localizedProject.title} | Mavost`}
        description={localizedProject.overview}
        path={`/${language}/work/${project.slug}`}
        language={language}
        image={localizedProject.image}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: localizedProject.title,
          description: localizedProject.overview,
          image: localizedProject.image,
          creator: {
            '@type': 'Person',
            name: 'Meraldy Ridho Fadillah',
          },
        }}
      />
      <Navbar />

      <main>
        <section className="pt-28 lg:pt-36 pb-14 lg:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <Link
              to={`/${language}/work`}
              className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-primary-600 transition-colors duration-200 mb-12 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              {t.detail.backToWork}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end"
            >
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="label text-primary-600">/ {localizedProject.category}</span>
                  <span className="h-px w-10 bg-ink-300" />
                  <span className="font-mono text-xs text-ink-400">{project.year}</span>
                </div>
                <h1 className="font-satoshi font-black text-5xl sm:text-6xl lg:text-8xl text-ink-900 leading-[0.9] tracking-tightest text-balance">
                  {localizedProject.title}
                  <span className="text-primary-600">.</span>
                </h1>
              </div>
              <p className="lg:col-span-4 text-base lg:text-lg text-ink-600 leading-relaxed">
                {localizedProject.overview}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="overflow-hidden rounded-2xl bg-ink-900"
            >
              <img
                src={localizedProject.image}
                alt={`${localizedProject.title} project preview`}
                className="w-full aspect-[16/8] object-cover object-center"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-5 overflow-hidden rounded-2xl bg-ink-300/50">
              <div className="bg-bone-50 p-5 lg:p-7">
                <p className="label text-ink-400 mb-3">{t.detail.role}</p>
                <p className="font-satoshi font-bold text-lg text-ink-900">{localizedProject.role}</p>
              </div>
              <div className="bg-bone-50 p-5 lg:p-7">
                <p className="label text-ink-400 mb-3">{t.detail.year}</p>
                <p className="font-satoshi font-bold text-lg text-ink-900">{localizedProject.year}</p>
              </div>
              <div className="bg-bone-50 p-5 lg:p-7">
                <p className="label text-ink-400 mb-3">{t.detail.category}</p>
                <p className="font-satoshi font-bold text-lg text-ink-900">{localizedProject.category}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-ink-900 text-bone-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="label text-primary-400 mb-5">/ {t.detail.projectDetails}</p>
              <h2 className="font-satoshi font-black text-4xl lg:text-5xl leading-[0.95] tracking-tightest">
                {t.detail.handled}
                <span className="text-primary-400">.</span>
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="pb-10 border-b border-bone-50/15">
                <p className="label text-bone-400 mb-4">{t.detail.overview}</p>
                <p className="text-xl lg:text-2xl text-bone-100 leading-relaxed max-w-3xl">
                  {localizedProject.overview}
                </p>
              </div>

              <div className="py-10 border-b border-bone-50/15">
                <p className="label text-bone-400 mb-5">{t.detail.contributions}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  {localizedProject.contributions.map((contribution) => (
                    <li key={contribution} className="flex gap-3 text-bone-200 leading-relaxed">
                      <Check size={18} className="shrink-0 mt-1 text-primary-400" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-10">
                <p className="label text-bone-400 mb-5">{t.detail.techStack}</p>
                <div className="flex flex-wrap gap-2">
                  {localizedProject.tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-4 py-2 rounded-full border border-bone-50/20 text-sm text-bone-100"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="label text-primary-600 mb-3">/ {t.detail.continueExploring}</p>
                <h2 className="font-satoshi font-black text-3xl lg:text-5xl text-ink-900 tracking-tightest">
                  {t.detail.moreProjects}<span className="text-primary-600">.</span>
                </h2>
              </div>
              <Link
                to={`/${language}/work`}
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-primary-600 transition-colors"
              >
                {t.detail.viewAll} <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[previousProject, nextProject].filter(Boolean).map((item) => (
                <Link
                  key={item!.id}
                  to={`/${language}/work/${item!.slug}`}
                  className="group relative min-h-56 overflow-hidden rounded-2xl bg-ink-900"
                >
                  <img
                    src={item!.image}
                    alt={`${item!.title} project preview`}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="label text-bone-300 mb-2">{item!.category}</p>
                      <h3 className="font-satoshi font-black text-xl text-bone-50 group-hover:text-primary-400 transition-colors">
                        {item!.title}
                      </h3>
                    </div>
                    <ArrowUpRight size={20} className="shrink-0 text-bone-50 group-hover:text-primary-400 group-hover:rotate-45 transition-all" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-between gap-4">
              {previousProject ? (
                <Link to={`/${language}/work/${previousProject.slug}`} className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-primary-600 transition-colors">
                  <ChevronLeft size={16} /> {t.detail.previous}
                </Link>
              ) : <span />}
              {nextProject && (
                <Link to={`/${language}/work/${nextProject.slug}`} className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-primary-600 transition-colors">
                  {t.detail.next} <ChevronRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
