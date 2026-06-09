import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Services — Automations Limited',
  description:
    'Explore our full range of digital services — from custom website development and workflow automation to CRM, email funnels, and analytics dashboards.',
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
