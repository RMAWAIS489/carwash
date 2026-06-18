import type { Metadata } from 'next';
import Script from 'next/script';
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

export const metadata: Metadata = {
  title: 'Automations Limited | Digital Automation Agency',
  description:
    'Automations Limited is a digital automation agency that builds custom websites, AI-powered workflow automation, CRM systems, email funnels, and payment integrations — helping businesses grow faster and work smarter.',
  alternates: {
    canonical: 'https://www.automationslimited.com',
  },
  openGraph: {
    title: 'Automations Limited | Digital Automation Agency',
    description:
      'We build custom websites, AI-powered workflow automation, CRM systems, and email funnels that help businesses grow faster and work smarter.',
    url: 'https://www.automationslimited.com',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Automations Limited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Automations Limited is a digital automation agency that builds custom websites, workflow automation systems, CRM platforms, email marketing funnels, and business integrations to help companies grow faster and work smarter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Automations Limited offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Automations Limited offers website design and development, workflow automation, automated notifications, email marketing funnels, payment and subscription systems, reputation management, CRM and customer management, and analytics and reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to launch a project with Automations Limited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Automations Limited can launch projects in as little as 7 days, depending on scope. Our proven 5-step process ensures fast delivery without sacrificing quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Automations Limited offer ongoing support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Automations Limited provides 24/7 ongoing maintenance and support as part of every plan, ensuring your systems stay live, secure, and optimised.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Automations Limited automate my business workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Automations Limited specialises in automating repetitive business tasks — from lead follow-ups and internal reporting to invoicing, SMS and email sequences, and CRM updates — saving businesses hours every week.',
      },
    },
  ],
};

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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
