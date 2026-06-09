import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import WhyUs from '@/components/WhyUs';

export const metadata: Metadata = {
  title: 'Why Us — Automations Limited',
  description:
    'Discover why 50+ businesses choose Automations Limited. Speed, custom design, mobile-first builds, and 24/7 support — all in one agency.',
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
