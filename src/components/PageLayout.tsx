import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import CtaBanner2 from './CtaBanner2';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      {children}
      <Contact />
      <CtaBanner2/>
      <Footer />
    </div>
  );
}
