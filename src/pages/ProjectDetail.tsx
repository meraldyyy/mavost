import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getProjectBySlug, projects } from '../projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug ?? '');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  return (
    <div className="relative min-h-screen bg-bone-100">
      <SEO
        title={`${project.title} | Mavost`}
        description={project.overview}
        path={`/work/${project.slug}`}
        image={project.image}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.overview,
          image: project.image,
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
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-primary-600 transition-colors duration-200 mb-12 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Work
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end"
            >
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="label text-primary-600">/ {project.category}</span>
                  <span className="h-px w-10 bg-ink-300" />
                  <span className="font-mono text-xs text-ink-400">{project.year}</span>
                </div>
                <h1 className="font-satoshi font-black text-5xl sm:text-6xl lg:text-8xl text-ink-900 leading-[0.9] tracking-tightest text-balance">
                  {project.title}
                  <span className="text-primary-600">.</span>
                </h1>
              </div>
              <p className="lg:col-span-4 text-base lg:text-lg text-ink-600 leading-relaxed">
                {project.overview}
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
                src={project.image}
                alt={`${project.title} project preview`}
                className="w-full aspect-[16/8] object-cover object-center"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-5 overflow-hidden rounded-2xl bg-ink-300/50">
              <div className="bg-bone-50 p-5 lg:p-7">
                <p className="label text-ink-400 mb-3">Role</p>
                <p className="font-satoshi font-bold text-lg text-ink-900">{project.role}</p>
              </div>
              <div className="bg-bone-50 p-5 lg:p-7">
                <p className="label text-ink-400 mb-3">Year</p>
                <p className="font-satoshi font-bold text-lg text-ink-900">{project.year}</p>
              </div>
              <div className="bg-bone-50 p-5 lg:p-7">
                <p className="label text-ink-400 mb-3">Category</p>
                <p className="font-satoshi font-bold text-lg text-ink-900">{project.category}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-ink-900 text-bone-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="label text-primary-400 mb-5">/ Project Details</p>
              <h2 className="font-satoshi font-black text-4xl lg:text-5xl leading-[0.95] tracking-tightest">
                What I handled
                <span className="text-primary-400">.</span>
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="pb-10 border-b border-bone-50/15">
                <p className="label text-bone-400 mb-4">Overview</p>
                <p className="text-xl lg:text-2xl text-bone-100 leading-relaxed max-w-3xl">
                  {project.overview}
                </p>
              </div>

              <div className="py-10 border-b border-bone-50/15">
                <p className="label text-bone-400 mb-5">Key Contributions</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  {project.contributions.map((contribution) => (
                    <li key={contribution} className="flex gap-3 text-bone-200 leading-relaxed">
                      <Check size={18} className="shrink-0 mt-1 text-primary-400" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-10">
                <p className="label text-bone-400 mb-5">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
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
                <p className="label text-primary-600 mb-3">/ Continue Exploring</p>
                <h2 className="font-satoshi font-black text-3xl lg:text-5xl text-ink-900 tracking-tightest">
                  More projects<span className="text-primary-600">.</span>
                </h2>
              </div>
              <Link
                to="/work"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-primary-600 transition-colors"
              >
                View all <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[previousProject, nextProject].filter(Boolean).map((item) => (
                <Link
                  key={item!.id}
                  to={`/work/${item!.slug}`}
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
                <Link to={`/work/${previousProject.slug}`} className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-primary-600 transition-colors">
                  <ChevronLeft size={16} /> Previous project
                </Link>
              ) : <span />}
              {nextProject && (
                <Link to={`/work/${nextProject.slug}`} className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-primary-600 transition-colors">
                  Next project <ChevronRight size={16} />
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
