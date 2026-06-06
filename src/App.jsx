import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
