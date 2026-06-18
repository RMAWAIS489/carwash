import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Services | Digital Automation & Web Development',
  description:
    'Explore everything Automations Limited offers — custom website development, workflow automation, CRM systems, email marketing funnels, payment integrations, and real-time analytics dashboards.',
  keywords: [
    'automation services',
    'workflow automation service',
    'custom website development',
    'email marketing automation',
    'CRM integration',
    'business automation services',
    'Automations Limited services',
  ],
  alternates: {
    canonical: 'https://www.automationslimited.com/services',
  },
  openGraph: {
    title: 'Services | Automations Limited',
    description:
      'Custom websites, workflow automation, CRM, email funnels, payment systems — everything your business needs to scale.',
    url: 'https://www.automationslimited.com/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Automations Limited Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Automations Limited',
    description: 'Custom websites, workflow automation, CRM, email funnels — all in one agency.',
    images: ['/og-image.png'],
  },
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        label="What We Offer"
        title="Everything Your Business"
        highlight="Needs to Scale"
        description="We don't just build websites — we build complete digital ecosystems that automate your operations and accelerate growth from day one."
      />
      <Services hideHeader />
    </PageLayout>
  );
}
