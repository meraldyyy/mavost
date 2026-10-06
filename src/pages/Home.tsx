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
import founderPhoto from '../assets/founder.webp';

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
              '@id': 'https://mavost.id/#organization',
              name: 'Mavost',
              alternateName: ['Mavost Design Studio', 'mavost.id'],
              url: 'https://mavost.id/',
              logo: 'https://mavost.id/Mavost.id%20-%201.png',
              description: 'Mavost is a web design and development studio founded and led by Meraldy Ridho Fadillah.',
              foundingDate: '2024',
              founder: { '@id': 'https://mavost.id/#meraldy-ridho-fadillah' },
              sameAs: [
                'https://instagram.com/mavost.id',
                'https://facebook.com/mavost.id',
              ],
            },
            {
              '@type': 'Person',
              '@id': 'https://mavost.id/#meraldy-ridho-fadillah',
              name: 'Meraldy Ridho Fadillah',
              givenName: 'Meraldy',
              familyName: 'Ridho Fadillah',
              jobTitle: 'Founder and Frontend Web Developer',
              url: 'https://mavost.id/en#founder',
              image: `https://mavost.id${founderPhoto}`,
              worksFor: { '@id': 'https://mavost.id/#organization' },
              sameAs: [
                'https://instagram.com/mrldyrdh',
                'https://linkedin.com/meraldy-ridho-fadillah',
                'https://github.com/meraldyyy',
              ],
            },
            {
              '@type': 'WebSite',
              '@id': 'https://mavost.id/#website',
              name: 'Mavost',
              url: 'https://mavost.id/',
              publisher: { '@id': 'https://mavost.id/#organization' },
              about: { '@id': 'https://mavost.id/#organization' },
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
