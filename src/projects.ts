import tenerres from './assets/tenerres.webp';
import mbangun from './assets/mbangun.webp';
import diego from './assets/diego.webp';
import kebab from './assets/kebab.webp';
import joes from './assets/joes.webp';
import hayatun from './assets/hayatun.webp';
import ioni from './assets/ioni.webp';

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

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
