import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import Portfolio from '@/components/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio | Real Projects & Case Studies',
  description:
    'Real projects, real results. Browse the work Automations Limited has delivered — custom websites, automation platforms, CRM systems, and full-stack digital solutions across multiple industries.',
  keywords: [
    'automation portfolio',
    'website development portfolio',
    'automation case studies',
    'digital agency projects',
    'Automations Limited portfolio',
    'web development projects',
  ],
  alternates: {
    canonical: 'https://www.automationslimited.com/projects',
  },
  openGraph: {
    title: 'Portfolio | Automations Limited',
    description:
      'See the custom websites, automation platforms, and CRM systems we have built for businesses across multiple industries.',
    url: 'https://www.automationslimited.com/projects',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Automations Limited Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Automations Limited',
    description: 'Real projects, real results — custom websites, automation platforms & CRM systems.',
    images: ['/og-image.png'],
  },
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
