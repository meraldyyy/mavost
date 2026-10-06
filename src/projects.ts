import tenerres from './assets/optimized/tenerres.webp';
import mbangun from './assets/optimized/mbangun.webp';
import diego from './assets/optimized/diego.webp';
import kebab from './assets/optimized/kebab.webp';
import joes from './assets/optimized/joes.webp';
import hayatun from './assets/optimized/hayatun.webp';
import ioni from './assets/optimized/ioni.webp';
import type { Language } from './i18n';

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  span: string;
  tall?: boolean;
  role: string;
  tech: string[];
  overview: string;
  contributions: string[];
  challenge?: string;
  result?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'tenerres-sablon-merchandise',
    title: 'Tenerres Sablon & Merchandise',
    description: 'Website bisnis sablon dan merchandise dengan visual yang clean dan modern.',
    category: 'Landing Page',
    year: '2026',
    image: tenerres,
    span: 'lg:col-span-7 lg:row-span-2',
    tall: true,
    role: 'Frontend Developer',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    overview:
      'Mengembangkan website untuk bisnis sablon dan merchandise dengan pendekatan visual yang clean, modern, dan berorientasi pada kebutuhan pelanggan.',
    contributions: [
      'Mengembangkan frontend menggunakan React dan Vite.',
      'Membuat responsive layout dengan Tailwind CSS.',
      'Menyusun struktur halaman berdasarkan kebutuhan bisnis.',
      'Mengembangkan interface katalog dan layanan.',
      'Menyiapkan project untuk deployment menggunakan Vercel atau Netlify.',
    ],
  },
  {
    id: 2,
    slug: 'mbangun-lab',
    title: 'Mbangun Lab',
    description: 'Laboratory product and e-commerce website.',
    category: 'Landing Page',
    year: '2026',
    image: mbangun,
    span: 'lg:col-span-5',
    role: 'Frontend Developer',
    tech: ['React', 'Vite', 'Tailwind CSS', 'LocalStorage'],
    overview:
      'Mengembangkan website untuk perusahaan penyedia kebutuhan laboratorium dengan fitur katalog produk dan shopping cart.',
    contributions: [
      'Membuat katalog produk laboratorium.',
      'Menampilkan formula, CAS Number, grade, purity, storage, COA, dan MSDS.',
      'Mengembangkan shopping cart menggunakan LocalStorage.',
      'Membuat responsive interface untuk desktop dan mobile.',
      'Mengoptimalkan struktur UI agar informasi produk mudah dipahami.',
    ],
  },
  {
    id: 3,
    slug: 'diego-firdaus',
    title: 'Diego Firdaus',
    description: 'Personal branding site for a photographer and videographer.',
    category: 'Personal Branding',
    year: '2026',
    image: diego,
    span: 'lg:col-span-5',
    role: 'Frontend Developer',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    overview:
      'Membangun website personal branding untuk fotografer dan videografer dengan fokus pada penyajian karya yang visual dan mudah dieksplorasi.',
    contributions: [
      'Menyusun struktur halaman berdasarkan kebutuhan personal branding.',
      'Mengembangkan responsive interface untuk berbagai ukuran perangkat.',
      'Membuat layout yang menempatkan portfolio sebagai fokus utama.',
    ],
  },
  {
    id: 4,
    slug: 'kebab-monster',
    title: 'Kebab Monster',
    description: 'Restaurant and branch information website.',
    category: 'Website',
    year: '2026',
    image: kebab,
    span: 'lg:col-span-4',
    role: 'Frontend Developer',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    overview:
      'Membangun website restoran yang menampilkan informasi menu, cabang, layanan pemesanan, dan informasi bisnis secara responsive.',
    contributions: [
      'Mengembangkan website menggunakan React dan Vite.',
      'Membuat responsive UI untuk desktop dan mobile.',
      'Membuat halaman Home, Menu, Cabang, About Us, dan Big Order.',
      'Mengintegrasikan channel pemesanan seperti WhatsApp dan platform food delivery.',
      'Menampilkan informasi lokasi dan jumlah cabang secara terstruktur.',
    ],
  },
  {
    id: 5,
    slug: 'joes-family-plumbing',
    title: "Joe's Family Plumbing",
    description: 'A modern website redesign for a trusted plumbing business.',
    category: 'Website Redesign',
    year: '2026',
    image: joes,
    span: 'lg:col-span-4',
    role: 'Frontend Developer / UI Designer',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Figma'],
    overview:
      'Melakukan redesign website untuk bisnis plumbing dengan fokus pada tampilan yang lebih modern, profesional, dan membangun kepercayaan pelanggan.',
    contributions: [
      'Menganalisis tampilan dan struktur website existing.',
      'Merancang konsep visual baru yang lebih modern.',
      'Meningkatkan hierarchy informasi dan CTA.',
      'Membuat responsive layout untuk berbagai ukuran perangkat.',
      'Menyesuaikan desain dengan karakter bisnis dan pengalaman perusahaan yang telah berjalan puluhan tahun.',
    ],
  },
  {
    id: 6,
    slug: 'hayatun-tour',
    title: 'Hayatun Tour',
    description: 'Hajj and Umrah company profile with a premium visual direction.',
    category: 'Company Profile',
    year: '2026',
    image: hayatun,
    span: 'lg:col-span-4',
    role: 'Frontend Developer / UI Developer',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Figma'],
    overview:
      'Membangun website company profile untuk layanan perjalanan Haji dan Umrah dengan pendekatan visual yang profesional dan terpercaya.',
    contributions: [
      'Mendesain struktur landing page dan user flow.',
      'Mengembangkan responsive website menggunakan React dan Tailwind CSS.',
      'Membuat section layanan, paket perjalanan, informasi perusahaan, dan CTA.',
      'Menggunakan kombinasi warna navy, sand, gold, dan emerald untuk membangun kesan premium.',
      'Mengintegrasikan CTA WhatsApp untuk memudahkan komunikasi calon pelanggan.',
    ],
  },
  {
    id: 7,
    slug: 'ioni-jaya',
    title: 'IONI Jaya',
    description: 'Company profile for an IT equipment and service provider.',
    category: 'Company Profile',
    year: '2026',
    image: ioni,
    span: 'lg:col-span-12',
    role: 'Frontend Developer',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    overview:
      'Mengembangkan website company profile IONI Jaya sebagai media informasi dan representasi digital perusahaan dengan tampilan yang profesional, modern, dan responsive.',
    contributions: [
      'Mengembangkan website company profile menggunakan React dan Vite.',
      'Membuat responsive UI untuk desktop, tablet, dan mobile.',
      'Menyusun struktur halaman berdasarkan kebutuhan informasi perusahaan.',
      'Mengimplementasikan desain dan komponen UI menggunakan Tailwind CSS.',
      'Mengoptimalkan tampilan website agar informatif, clean, dan mudah dinavigasi.',
      'Menyiapkan website untuk proses deployment dan pengelolaan domain atau hosting.',
    ],
  },
];

type ProjectCopy = Pick<Project, 'description' | 'category' | 'role' | 'overview' | 'contributions'>;

const projectCopies: Record<string, Partial<Record<Language, Partial<ProjectCopy>>>> = {
  'tenerres-sablon-merchandise': {
    en: {
      description: 'A clean and modern business website for a screen printing and merchandise brand.',
      category: 'Landing Page',
      role: 'Frontend Developer',
      overview: 'A clean, modern website for a screen printing and merchandise business, built around the needs of its customers.',
      contributions: [
        'Developed the frontend with React and Vite.',
        'Created a responsive layout with Tailwind CSS.',
        'Structured the pages around the business requirements.',
        'Built the catalog and services interface.',
        'Prepared the project for deployment on Vercel or Netlify.',
      ],
    },
    id: {
      description: 'Website bisnis sablon dan merchandise dengan visual yang clean dan modern.',
    },
  },
  'mbangun-lab': {
    en: {
      description: 'Laboratory product and e-commerce website.',
      category: 'Landing Page',
      role: 'Frontend Developer',
      overview: 'A product catalog and shopping cart website for a laboratory supplies company.',
      contributions: [
        'Built a laboratory product catalog.',
        'Displayed formula, CAS Number, grade, purity, storage, COA, and MSDS details.',
        'Developed a shopping cart using LocalStorage.',
        'Created a responsive interface for desktop and mobile.',
        'Optimized the UI structure to make product information easy to understand.',
      ],
    },
    id: {
      description: 'Website produk laboratorium dan e-commerce.',
    },
  },
  'diego-firdaus': {
    en: {
      description: 'Personal branding site for a photographer and videographer.',
      category: 'Personal Branding',
      role: 'Frontend Developer',
      overview: 'A personal branding website for a photographer and videographer, focused on making visual work easy to explore.',
      contributions: [
        'Structured the pages around personal branding goals.',
        'Developed a responsive interface for different screen sizes.',
        'Created a layout that keeps the portfolio as the primary focus.',
      ],
    },
    id: {
      description: 'Website personal branding untuk fotografer dan videografer.',
    },
  },
  'kebab-monster': {
    en: {
      description: 'Restaurant and branch information website.',
      category: 'Website',
      role: 'Frontend Developer',
      overview: 'A responsive restaurant website featuring menus, branches, ordering services, and business information.',
      contributions: [
        'Developed the website with React and Vite.',
        'Created a responsive UI for desktop and mobile.',
        'Built Home, Menu, Branches, About Us, and Big Order pages.',
        'Integrated ordering channels such as WhatsApp and food delivery platforms.',
        'Presented location and branch count information in a structured way.',
      ],
    },
    id: {
      description: 'Website informasi restoran dan cabang.',
    },
  },
  'joes-family-plumbing': {
    en: {
      description: 'A modern website redesign for a trusted plumbing business.',
      category: 'Website Redesign',
      role: 'Frontend Developer / UI Designer',
      overview: 'A website redesign for a plumbing business, focused on a more modern, professional look that builds customer trust.',
      contributions: [
        'Analyzed the existing website structure and visual direction.',
        'Designed a more modern visual concept.',
        'Improved information hierarchy and calls to action.',
        'Created a responsive layout for different screen sizes.',
        'Aligned the design with the business character and decades of experience.',
      ],
    },
    id: {
      description: 'Redesign website modern untuk bisnis plumbing terpercaya.',
    },
  },
  'hayatun-tour': {
    en: {
      description: 'Hajj and Umrah company profile with a premium visual direction.',
      category: 'Company Profile',
      role: 'Frontend Developer / UI Developer',
      overview: 'A professional and trustworthy company profile website for a Hajj and Umrah travel service.',
      contributions: [
        'Designed the landing page structure and user flow.',
        'Developed a responsive website with React and Tailwind CSS.',
        'Created service, travel package, company information, and CTA sections.',
        'Used navy, sand, gold, and emerald to create a premium feel.',
        'Integrated a WhatsApp CTA to make prospect communication easier.',
      ],
    },
    id: {
      description: 'Company profile layanan perjalanan Haji dan Umrah dengan visual premium.',
    },
  },
  'ioni-jaya': {
    en: {
      description: 'Company profile for an IT equipment and service provider.',
      category: 'Company Profile',
      role: 'Frontend Developer',
      overview: 'A professional, modern, and responsive company profile website for IONI Jaya as its digital information hub.',
      contributions: [
        'Developed the company profile with React and Vite.',
        'Created a responsive UI for desktop, tablet, and mobile.',
        'Structured the pages around the company information needs.',
        'Implemented the UI design and components with Tailwind CSS.',
        'Optimized the experience to be informative, clean, and easy to navigate.',
        'Prepared the website for deployment and domain or hosting management.',
      ],
    },
    id: {
      description: 'Company profile penyedia perangkat dan layanan IT.',
    },
  },
};

export function getLocalizedProject(project: Project, language: Language): Project {
  const copy = projectCopies[project.slug]?.[language];
  return copy ? { ...project, ...copy } : project;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
