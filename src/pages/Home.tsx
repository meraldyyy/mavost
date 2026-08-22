import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Founder from '../components/Founder';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bone-100">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Founder />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
