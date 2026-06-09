import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import CtaBanner from '@/components/CtaBanner';
import Technologies from '@/components/Technologies';
import WhyUs from '@/components/WhyUs';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import CtaBanner2 from '@/components/CtaBanner2';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <CtaBanner />
      <Technologies />
      <Services />
      <WhyUs />
      <Testimonials />
      <Portfolio limit={4} />
      <Contact />
      <CtaBanner2 />
      <Footer />
    </div>
  );
}
