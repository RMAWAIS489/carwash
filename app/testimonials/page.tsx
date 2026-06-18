import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Client Testimonials | Results That Speak for Themselves',
  description:
    'Hear from the business owners and operators who have grown with Automations Limited. From 55% higher conversion rates to saving hours every week — real stories, real results.',
  keywords: [
    'Automations Limited reviews',
    'automation agency testimonials',
    'client reviews automation',
    'digital agency results',
    'automation success stories',
    'Automations Limited clients',
  ],
  alternates: {
    canonical: 'https://www.automationslimited.com/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials | Automations Limited',
    description:
      'Real stories from business owners who have grown with Automations Limited — higher conversions, saved hours, and automated workflows.',
    url: 'https://www.automationslimited.com/testimonials',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Automations Limited Testimonials' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials | Automations Limited',
    description: 'Real results from real clients. See how we have helped businesses grow on autopilot.',
    images: ['/og-image.png'],
  },
};

export default function TestimonialsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Real Results"
        title="What Our Clients"
        highlight="Say"
        description="Don't take our word for it. Here's what business owners and operators say after working with Automations Limited."
      />
      <Testimonials hideHeader />
    </PageLayout>
  );
}
