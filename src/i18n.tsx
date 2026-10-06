import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type Language = 'en' | 'id';

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      contact: 'Contact',
      letsTalk: "Let's Talk",
      toggleMenu: 'Toggle menu',
      language: 'Language',
    },
    hero: {
      location: '[ Depok / Remote Studio ]',
      established: 'Est. 2024 — Web Design & Development',
      coordinates: 'N 6.12 / E 106.49',
      studio: 'Mavost Design Studio',
      headlineBefore: 'Web Design & Development',
      headlineMiddle: 'for',
      headlineAccent: 'ambitious brands',
      description: 'Mavost builds high-performance websites for businesses, creators, and brands that refuse to look like everyone else.',
      startProject: 'Start a Project',
      recentWork: 'See Recent Work',
      scroll: 'Scroll',
      marquee: ['Landing Pages', 'Company Profiles', 'Personal Branding', 'Website Redesign'],
    },
    services: {
      label: 'Services',
      headlineBefore: 'What we build,',
      headlineAccent: 'end to end',
      description: 'Four disciplines, one obsession. Websites that look premium and perform harder. Every project is crafted with precision, purpose, and obsessive detail.',
      items: [
        {
          title: 'Landing Page',
          description: 'High-converting landing pages designed to capture leads and drive sales with precision.',
          tags: ['Conversion', 'Copy', 'CRO'],
        },
        {
          title: 'Company Profile',
          description: 'Professional company websites that establish authority and build immediate trust with visitors.',
          tags: ['Brand', 'CMS', 'SEO'],
        },
        {
          title: 'Personal Branding',
          description: 'Distinctive personal brand websites that set you apart and attract your ideal audience.',
          tags: ['Identity', 'Portfolio', 'Story'],
        },
        {
          title: 'Website Redesign',
          description: 'Transform outdated websites into modern, high-performing digital experiences.',
          tags: ['Audit', 'UX', 'Migration'],
        },
      ],
    },
    portfolio: {
      label: 'Work',
      headlineBefore: 'Work that',
      headlineAccent: 'speaks for itself',
      viewAll: 'View All Projects',
      fullPortfolio: 'See Full Portfolio',
    },
    founder: {
      label: 'The Founder',
      headlineBefore: 'Built by someone who',
      headlineAccent: 'cares about results',
      quote: 'I founded mavost.id to help businesses and creators elevate their online presence with premium digital experiences that actually drive growth.',
      bio: "Hi, I'm Meraldy, a web developer focused on building high-performance, conversion-focused websites. Every project is crafted with precision, purpose, and obsessive attention to detail.",
      foundedBy: 'Mavost is founded and led by Meraldy Ridho Fadillah.',
      role: 'Founder / Frontend Web Dev',
      findMe: 'Find Me Online',
      techStack: 'Tech Stack',
      workWithMe: 'Work With Me',
    },
    pricing: {
      label: 'Pricing',
      headlineBefore: 'Transparent pricing,',
      headlineAccent: 'premium value',
      description: 'Every package includes our full attention, premium craftsmanship, and post-launch support. No hidden fees.',
      popular: 'Popular',
      customQuote: 'Get a custom quote',
      plans: [
        {
          name: 'Starter',
          description: 'For small businesses and personal projects that need a strong first impression.',
          features: ['1 Landing Page', 'Responsive Design', 'Basic SEO', 'Free Maintenance 1 Month'],
          cta: 'Get Started',
        },
        {
          name: 'Pro',
          description: 'For businesses ready to stand out, convert, and outclass the competition.',
          features: ['3–5 Pages', 'Premium Design', 'Advanced Animation', 'Advanced SEO', 'Free Maintenance 3 Months'],
          cta: 'Start Pro',
        },
        {
          name: 'Enterprise',
          description: 'Full-scale solutions for established organizations with custom needs.',
          features: ['Unlimited Pages', 'CMS Integration', 'Custom Features', 'High Performance Optimization', 'Free Maintenance 6 Months'],
          cta: 'Contact Us',
        },
      ],
      note: 'All prices are starting prices. Final quote depends on project scope.',
    },
    contact: {
      label: 'Contact',
      headlineBefore: "Let's build",
      headlineAccent: 'something great',
      description: "Tell us about your project. We'll get back to you within 24 hours with next steps.",
      directChannels: 'Direct Channels',
      followUs: 'Follow Us',
      chatWhatsApp: 'Chat on WhatsApp',
      yourName: 'Your Name',
      emailAddress: 'Email Address',
      projectType: 'Project Type',
      budgetRange: 'Budget Range',
      message: 'Message',
      selectType: 'Select type...',
      selectBudget: 'Select budget...',
      projectTypes: ['Landing Page', 'Company Profile', 'Personal Branding', 'Website Redesign', 'Other'],
      budgets: ['Rp999.000 – Rp3.999.000', 'Rp3.999.000 – Rp7.999.000', 'Rp7.999.000+', "Let's Discuss"],
      messagePlaceholder: 'Tell us about your project, goals, and timeline...',
      sendInquiry: 'Send Inquiry',
      sending: 'Sending...',
      inquirySent: 'Inquiry Sent!',
      thankYou: "Thank you for reaching out. We'll get back to you within 24 hours.",
      sendAnother: 'Send another inquiry',
      nameRequired: 'Name is required.',
      emailRequired: 'Email is required.',
      invalidEmail: 'Invalid email address.',
      projectRequired: 'Please select a project type.',
      messageRequired: 'Message is required.',
      notConnected: 'Form is not connected. Add VITE_FORMSPREE_ENDPOINT first.',
      submitFailed: 'Inquiry failed to send. Try again or contact us via WhatsApp.',
    },
    footer: {
      letsWork: "Let's Work",
      headlineBefore: 'Ready to build your',
      headlineAccent: 'premium website',
      startProject: 'Start a Project',
      brandDescription: 'Create, Inspire, Repeat. | A premium web agency helping brands build elite digital experiences that convert.',
      navigation: 'Navigation',
      contact: 'Contact',
      remote: 'Depok / Remote',
      rights: 'All rights reserved.',
      builtWith: 'Built with care by',
    },
    work: {
      backHome: 'Back to Home',
      label: 'Portfolio',
      headlineBefore: 'Our Recent',
      headlineAccent: 'Work',
      description: 'A curated selection of projects that showcase our commitment to premium design, performance, and conversion-focused development.',
      categories: ['All', 'Landing Page', 'Company Profile', 'Personal Branding', 'Website Redesign'],
      empty: 'No projects in this category yet.',
    },
    detail: {
      backToWork: 'Back to Work',
      role: 'Role',
      year: 'Year',
      category: 'Category',
      projectDetails: 'Project Details',
      handled: 'What I handled',
      overview: 'Overview',
      contributions: 'Key Contributions',
      techStack: 'Tech Stack',
      continueExploring: 'Continue Exploring',
      moreProjects: 'More projects',
      viewAll: 'View all',
      previous: 'Previous project',
      next: 'Next project',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      services: 'Layanan',
      portfolio: 'Portofolio',
      pricing: 'Harga',
      contact: 'Kontak',
      letsTalk: 'Mari Bicara',
      toggleMenu: 'Buka menu',
      language: 'Bahasa',
    },
    hero: {
      location: '[ Depok / Studio Remote ]',
      established: 'Est. 2024 — Desain & Pengembangan Web',
      coordinates: 'N 6.12 / E 106.49',
      studio: 'Mavost Design Studio',
      headlineBefore: 'Desain & Pengembangan Web',
      headlineMiddle: 'untuk',
      headlineAccent: 'brand ambisius',
      description: 'Mavost membangun website berperforma tinggi untuk bisnis, kreator, dan brand yang tidak mau terlihat seperti yang lain.',
      startProject: 'Mulai Proyek',
      recentWork: 'Lihat Karya Terbaru',
      scroll: 'Geser',
      marquee: ['Landing Page', 'Company Profile', 'Personal Branding', 'Redesign Website'],
    },
    services: {
      label: 'Layanan',
      headlineBefore: 'Yang kami bangun,',
      headlineAccent: 'dari awal hingga akhir',
      description: 'Empat keahlian, satu obsesi. Website yang terlihat premium dan bekerja lebih keras. Setiap proyek dibuat dengan presisi, tujuan, dan perhatian mendalam.',
      items: [
        {
          title: 'Landing Page',
          description: 'Landing page berkonversi tinggi yang dirancang untuk mendapatkan leads dan mendorong penjualan dengan presisi.',
          tags: ['Konversi', 'Copywriting', 'CRO'],
        },
        {
          title: 'Company Profile',
          description: 'Website perusahaan profesional yang membangun otoritas dan kepercayaan sejak kunjungan pertama.',
          tags: ['Brand', 'CMS', 'SEO'],
        },
        {
          title: 'Personal Branding',
          description: 'Website personal brand yang khas untuk membuatmu berbeda dan menarik audiens yang tepat.',
          tags: ['Identitas', 'Portofolio', 'Cerita'],
        },
        {
          title: 'Redesign Website',
          description: 'Mengubah website lama menjadi pengalaman digital yang modern dan berperforma tinggi.',
          tags: ['Audit', 'UX', 'Migrasi'],
        },
      ],
    },
    portfolio: {
      label: 'Karya',
      headlineBefore: 'Karya yang',
      headlineAccent: 'berbicara sendiri',
      viewAll: 'Lihat Semua Proyek',
      fullPortfolio: 'Lihat Portofolio Lengkap',
    },
    founder: {
      label: 'Founder',
      headlineBefore: 'Dibangun oleh seseorang yang',
      headlineAccent: 'peduli pada hasil',
      quote: 'Saya mendirikan mavost.id untuk membantu bisnis dan kreator meningkatkan kehadiran online mereka melalui pengalaman digital premium yang benar-benar mendorong pertumbuhan.',
      bio: 'Hai, saya Meraldy, web developer yang fokus membangun website berperforma tinggi dan berorientasi konversi. Setiap proyek dibuat dengan presisi, tujuan, dan perhatian mendalam.',
      foundedBy: 'Mavost didirikan dan dipimpin oleh Meraldy Ridho Fadillah.',
      role: 'Founder / Frontend Web Dev',
      findMe: 'Temui Saya Online',
      techStack: 'Tech Stack',
      workWithMe: 'Bekerja Bersama Saya',
    },
    pricing: {
      label: 'Harga',
      headlineBefore: 'Harga transparan,',
      headlineAccent: 'value premium',
      description: 'Setiap paket mencakup perhatian penuh, pengerjaan premium, dan dukungan setelah peluncuran. Tanpa biaya tersembunyi.',
      popular: 'Populer',
      customQuote: 'Minta penawaran khusus',
      plans: [
        {
          name: 'Starter',
          description: 'Untuk bisnis kecil dan proyek personal yang membutuhkan kesan pertama yang kuat.',
          features: ['1 Landing Page', 'Desain Responsif', 'SEO Dasar', 'Gratis Maintenance 1 Bulan'],
          cta: 'Mulai Sekarang',
        },
        {
          name: 'Pro',
          description: 'Untuk bisnis yang siap tampil berbeda, berkonversi, dan unggul dari kompetitor.',
          features: ['3–5 Halaman', 'Desain Premium', 'Animasi Lanjutan', 'SEO Lanjutan', 'Gratis Maintenance 3 Bulan'],
          cta: 'Mulai Pro',
        },
        {
          name: 'Enterprise',
          description: 'Solusi skala penuh untuk organisasi mapan dengan kebutuhan khusus.',
          features: ['Halaman Tanpa Batas', 'Integrasi CMS', 'Fitur Custom', 'Optimasi Performa Tinggi', 'Gratis Maintenance 6 Bulan'],
          cta: 'Hubungi Kami',
        },
      ],
      note: 'Semua harga adalah harga awal. Penawaran final bergantung pada ruang lingkup proyek.',
    },
    contact: {
      label: 'Kontak',
      headlineBefore: 'Mari bangun',
      headlineAccent: 'sesuatu yang hebat',
      description: 'Ceritakan proyekmu. Kami akan menghubungi kembali dalam 24 jam dengan langkah selanjutnya.',
      directChannels: 'Kanal Langsung',
      followUs: 'Ikuti Kami',
      chatWhatsApp: 'Chat via WhatsApp',
      yourName: 'Nama Kamu',
      emailAddress: 'Alamat Email',
      projectType: 'Jenis Proyek',
      budgetRange: 'Kisaran Budget',
      message: 'Pesan',
      selectType: 'Pilih jenis...',
      selectBudget: 'Pilih budget...',
      projectTypes: ['Landing Page', 'Company Profile', 'Personal Branding', 'Redesign Website', 'Lainnya'],
      budgets: ['Rp999.000 – Rp3.999.000', 'Rp3.999.000 – Rp7.999.000', 'Rp7.999.000+', 'Mari Diskusikan'],
      messagePlaceholder: 'Ceritakan proyek, tujuan, dan timeline kamu...',
      sendInquiry: 'Kirim Inquiry',
      sending: 'Mengirim...',
      inquirySent: 'Inquiry Terkirim!',
      thankYou: 'Terima kasih sudah menghubungi kami. Kami akan membalas dalam 24 jam.',
      sendAnother: 'Kirim inquiry lain',
      nameRequired: 'Nama wajib diisi.',
      emailRequired: 'Email wajib diisi.',
      invalidEmail: 'Format email tidak valid.',
      projectRequired: 'Silakan pilih jenis proyek.',
      messageRequired: 'Pesan wajib diisi.',
      notConnected: 'Form belum terhubung. Tambahkan VITE_FORMSPREE_ENDPOINT terlebih dahulu.',
      submitFailed: 'Inquiry gagal dikirim. Coba lagi atau hubungi kami lewat WhatsApp.',
    },
    footer: {
      letsWork: 'Mari Bekerja',
      headlineBefore: 'Siap membangun',
      headlineAccent: 'website premium',
      startProject: 'Mulai Proyek',
      brandDescription: 'Create, Inspire, Repeat. | Agensi web premium yang membantu brand membangun pengalaman digital unggulan yang menghasilkan.',
      navigation: 'Navigasi',
      contact: 'Kontak',
      remote: 'Depok / Remote',
      rights: 'Hak cipta dilindungi.',
      builtWith: 'Dibangun dengan penuh perhatian oleh',
    },
    work: {
      backHome: 'Kembali ke Beranda',
      label: 'Portofolio',
      headlineBefore: 'Karya',
      headlineAccent: 'Terbaru Kami',
      description: 'Kumpulan proyek pilihan yang menunjukkan komitmen kami pada desain premium, performa, dan pengembangan yang berfokus pada konversi.',
      categories: ['Semua', 'Landing Page', 'Company Profile', 'Personal Branding', 'Redesign Website'],
      empty: 'Belum ada proyek dalam kategori ini.',
    },
    detail: {
      backToWork: 'Kembali ke Karya',
      role: 'Peran',
      year: 'Tahun',
      category: 'Kategori',
      projectDetails: 'Detail Proyek',
      handled: 'Yang Saya Kerjakan',
      overview: 'Gambaran Umum',
      contributions: 'Kontribusi Utama',
      techStack: 'Tech Stack',
      continueExploring: 'Lanjut Menjelajah',
      moreProjects: 'Proyek lainnya',
      viewAll: 'Lihat semua',
      previous: 'Proyek sebelumnya',
      next: 'Proyek berikutnya',
    },
  },
} as const;

type Translation = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const routeLanguage = location.pathname.match(/^\/(en|id)(?=\/|$)/)?.[1] as Language | undefined;
  const [storedLanguage, setStoredLanguage] = useState<Language>(() => {
    if (routeLanguage) return routeLanguage;
    const saved = window.localStorage.getItem('mavost-language');
    return saved === 'id' || saved === 'en' ? saved : 'en';
  });

  const language = routeLanguage ?? storedLanguage;
  const setLanguage = useCallback((nextLanguage: Language) => {
    setStoredLanguage(nextLanguage);
    window.localStorage.setItem('mavost-language', nextLanguage);

    const pathWithoutLanguage = location.pathname.replace(/^\/(en|id)(?=\/|$)/, '') || '/';
    navigate(`/${nextLanguage}${pathWithoutLanguage === '/' ? '' : pathWithoutLanguage}`);
  }, [location.pathname, navigate]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
