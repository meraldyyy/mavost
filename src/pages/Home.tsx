import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Founder from '../components/Founder';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useLanguage } from '../i18n';

export default function Home() {
  const { language } = useLanguage();
  const seo = language === 'id'
    ? {
        title: 'Mavost | Studio Desain & Pengembangan Web Premium',
        description: 'Mavost membangun website premium berperforma tinggi untuk bisnis, kreator, dan personal brand.',
      }
    : {
        title: 'Mavost | Premium Web Design & Development Studio',
        description: 'Mavost builds premium, high-performance websites for businesses, creators, and personal brands that want to stand out.',
      };

  return (
    <div className="relative min-h-screen bg-bone-100">
      <SEO
        title={seo.title}
        description={seo.description}
        path={`/${language}`}
        language={language}
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              name: 'Mavost',
              url: 'https://mavost.id/',
              logo: 'https://mavost.id/favicon.svg',
              sameAs: [
                'https://instagram.com/mavost.id',
                'https://facebook.com/mavost.id',
              ],
            },
            {
              '@type': 'WebSite',
              name: 'Mavost',
              url: 'https://mavost.id/',
            },
          ],
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Founder />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
