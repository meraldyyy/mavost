import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Founder from '../components/Founder';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bone-100">
      <SEO
        title="Mavost | Premium Web Design & Development Studio"
        description="Mavost builds premium, high-performance websites for businesses, creators, and personal brands that want to stand out."
        path="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              name: 'Mavost',
              url: 'https://mavost.id/',
              logo: 'https://mavost.id/favicon.svg',
              sameAs: [
                'https://instagram.com/mrldyrdh',
                'https://linkedin.com/meraldy-ridho-fadillah',
                'https://github.com/meraldyyy',
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
