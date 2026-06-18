import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';

export const metadata: Metadata = {
  title: 'How It Works | Our 5-Step Process',
  description:
    'From discovery to launch in as little as 7 days. Learn how Automations Limited turns your business goals into working automation systems — step by step, with full transparency.',
  keywords: [
    'how automation works',
    'automation process',
    'digital agency process',
    'website development process',
    'Automations Limited process',
    'business automation steps',
  ],
  alternates: {
    canonical: 'https://www.automationslimited.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works | Automations Limited',
    description:
      'Our proven 5-step process takes your idea from discovery to a fully automated digital system — fast, transparent, and built around your goals.',
    url: 'https://www.automationslimited.com/how-it-works',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'How Automations Limited Works' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works | Automations Limited',
    description: 'Discovery to launch in as little as 7 days. See our step-by-step process.',
    images: ['/og-image.png'],
  },
};

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <PageHero
        label="Simple Process"
        title="How We"
        highlight="Work"
        description="Getting your business automated and online is simpler than you think. Our proven process ensures quality results and transparent communication at every step."
      />
      <HowItWorks hideHeader />
    </PageLayout>
  );
}
