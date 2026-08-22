import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const allProjects = [
 {
    id: 1,
    title: 'Tenerres Sablon & Merchandise',
    description: 'Premium interior design agency with immersive scroll experience.',
    category: 'Landing Page',
    year: '2026',
    image: './src/assets/tenerres.png',
    span: 'lg:col-span-7 lg:row-span-2',
    tall: true,
  },
  {
    id: 2,
    title: 'Mbangun Lab',
    description: 'WebStore For Chemical Distributor',
    category: 'Landing Page',
    year: '2026',
    image: './src/assets/mbangun.png',
    span: 'lg:col-span-5',
  },
  {
    id: 3,
    title: 'Diego Firdaus',
    description: 'Personal branding site for a Photographer & Videographer.',
    category: 'Personal Branding',
    year: '2026',
    image: './src/assets/diego.png',
    span: 'lg:col-span-5',
  },
  {
    id: 4,
    title: 'Kebab Monster',
    description: 'Most Liked Kebab Franchise',
    category: 'Website',
    year: '2026',
     image: './src/assets/kebab.png',
    span: 'lg:col-span-4',
  },
  {
    id: 5,
    title: 'Joes Family Plumbing Inc.',
    description: 'Plumbing that serve like a family',
    category: 'Company Profile',
    year: '2026',
   image: './src/assets/joes.png',
    span: 'lg:col-span-4',
  },
  {
    id: 6,
    title: 'Hayatun Tour',
    description: 'Umrah & Hajj Plus .',
    category: 'Company Profile',
    year: '2026',
   image: './src/assets/hayatun.png',
    span: 'lg:col-span-4',
  },
  {
    id: 7,
    title: 'Ioni Jaya',
    description: 'IT equipment and service provider.',
    category: 'Company Profile',
    image: './src/assets/ioni.png',
    year: '2026',
    span: 'lg:col-span-12',
  },
  
];

const categories = ['All', 'Landing Page', 'Company Profile', 'Personal Branding', 'Website Redesign'];

export default function RecentWork() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-bone-100">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-12 bg-bone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-primary-600 transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-12 gap-6 items-end"
          >
            <div className="lg:col-span-9">
              <div className="flex items-center gap-3 mb-6">
                <span className="label text-primary-600">/ Portfolio</span>
                <span className="h-px w-10 bg-ink-300" />
              </div>
              <h1 className="font-satoshi font-black text-5xl sm:text-6xl lg:text-7xl text-ink-900 leading-[0.92] tracking-tightest text-balance">
                Our Recent{' '}
                <span className="ink-accent">Work</span>
                <span className="text-primary-600">.</span>
              </h1>
            </div>
            <div className="lg:col-span-3">
              <p className="text-base text-ink-600 leading-relaxed">
                A curated selection of projects that showcase our commitment to
                premium design, performance, and conversion-focused development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              data-cursor
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-ink-900 text-bone-50'
                  : 'bg-bone-50 border hairline text-ink-700 hover:border-ink-900/40 hover:text-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid — bento */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-[minmax(0,1fr)]"
          >
            {filtered.map((project, i) => (
              <motion.a
                key={project.id}
                href="#"
                onClick={(e) => e.preventDefault()}
                data-cursor
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`group relative ${project.span} overflow-hidden rounded-2xl bg-ink-900 cursor-pointer`}
              >
                <div className={`relative w-full ${project.tall ? 'h-72 sm:h-96 lg:h-full lg:min-h-[460px]' : 'h-60 sm:h-64'} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />

                  {/* Top meta */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="label text-bone-200 bg-ink-950/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-bone-50/10">
                      {project.category}
                    </span>
                    <span className="font-mono text-[0.65rem] text-bone-200 bg-ink-950/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-bone-50/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Caption */}
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
                      <div className="shrink-0 w-10 h-10 rounded-full bg-bone-50/10 backdrop-blur-sm border border-bone-50/20 flex items-center justify-center text-bone-50 group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-ink-400">
            No projects in this category yet.
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
