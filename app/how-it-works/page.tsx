import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';

export const metadata: Metadata = {
  title: 'How It Works — Automations Limited',
  description:
    'Our proven 5-step process takes your idea from discovery to launch. Transparent, agile, and built around your business goals.',
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
