import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import WhyUs from '@/components/WhyUs';

export const metadata: Metadata = {
  title: 'Why Choose Us | Speed, Design & Results',
  description:
    'Discover why 50+ businesses choose Automations Limited over other agencies — 95+ PageSpeed scores, custom designs (no templates), mobile-first builds, results-driven strategy, and 24/7 support.',
  keywords: [
    'why choose Automations Limited',
    'best automation agency',
    'custom web design agency',
    'fast website development',
    'mobile first web development',
    'automation agency UK',
    'reliable automation partner',
  ],
  alternates: {
    canonical: 'https://www.automationslimited.com/why-us',
  },
  openGraph: {
    title: 'Why Choose Us | Automations Limited',
    description:
      '95+ PageSpeed scores, custom designs, mobile-first builds, and 24/7 support. See why 50+ businesses partner with Automations Limited.',
    url: 'https://www.automationslimited.com/why-us',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Why Choose Automations Limited' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Us | Automations Limited',
    description: 'Speed, custom design, mobile-first, results-driven — see what sets us apart.',
    images: ['/og-image.png'],
  },
};

export default function WhyUsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Our Edge"
        title="Why Businesses"
        highlight="Choose Us"
        description="We combine strategic thinking with deep technical execution. A full-stack agency that delivers fast, builds right, and sticks around long after launch."
      />
      <WhyUs hideHeader />
    </PageLayout>
  );
}
