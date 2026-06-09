import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import Portfolio from '@/components/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio — Automations Limited',
  description:
    'Real projects, real results. See how we have helped businesses across industries with custom websites, automation platforms, and CRM systems.',
};

export default function PortfolioPage() {
  return (
    <PageLayout>
      <PageHero
        label="Our Work"
        title="Recent"
        highlight="Projects"
        description="Every project is custom-built to the client's exact needs. Here's a look at what we've delivered for businesses across industries."
      />
      <Portfolio hideHeader />
    </PageLayout>
  );
}
