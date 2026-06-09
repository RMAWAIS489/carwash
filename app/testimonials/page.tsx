import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Testimonials — Automations Limited',
  description:
    'Hear from the business owners and operators who have grown with Automations Limited. Real stories, real results, zero fluff.',
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
