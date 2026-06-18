import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = 'https://www.automationslimited.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Automations Limited | Digital Automation Agency',
    template: '%s | Automations Limited',
  },
  description:
    'Automations Limited is a digital automation agency that builds custom websites, AI-powered workflow automation, CRM systems, email funnels, and payment integrations — helping businesses grow faster and work smarter.',

  keywords: [
    'Automations Limited',
    'automation agency',
    'digital automation',
    'workflow automation',
    'business automation',
    'custom website development',
    'AI automation',
    'CRM systems',
    'email marketing funnels',
    'automation limited',
    'automations ltd',
    'business growth automation',
    'web design and automation',
    'digital agency',
    'website automation',
    'automated notifications',
    'reputation management automation',
    'payment integration',
    'analytics dashboard',
    'lead automation',
  ],

  authors: [{ name: 'Automations Limited', url: siteUrl }],
  creator: 'Automations Limited',
  publisher: 'Automations Limited',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Automations Limited',
    title: 'Automations Limited | Digital Automation Agency',
    description:
      'We build custom websites, AI-powered workflow automation, CRM systems, and email funnels that help businesses grow faster and work smarter.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Automations Limited — Digital Automation Agency',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@automations_ltd',
    creator: '@automations_ltd',
    title: 'Automations Limited | Digital Automation Agency',
    description:
      'Custom websites, AI automation, CRM systems, and email funnels — built to scale your business.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/logo2.png',
    shortcut: '/logo2.png',
    apple: '/logo2.png',
  },

  verification: {
    google: '9mai9_ReGJKq2_KpcEtW2PA7rNhAAUQm7fBxX8I7qgk',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Automations Limited',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
      description:
        'Automations Limited is a digital automation agency specialising in custom websites, workflow automation, CRM systems, email marketing funnels, and business integrations.',
      sameAs: [
        'https://x.com/automations_ltd',
        'https://www.linkedin.com/company/127233955/',
        'https://www.instagram.com/automationslimited/',
        'https://www.facebook.com/profile.php?id=61590403694008',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Automations Limited',
      publisher: { '@id': `${siteUrl}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#service`,
      name: 'Automations Limited',
      url: siteUrl,
      image: `${siteUrl}/logo.png`,
      description:
        'Digital automation agency offering website development, workflow automation, email marketing, CRM, payment systems, and analytics.',
      priceRange: '££',
      serviceType: [
        'Website Design & Development',
        'Workflow Automation',
        'Email Marketing Funnels',
        'CRM & Customer Management',
        'Payment & Subscription Systems',
        'Automated Notifications',
        'Reputation Management',
        'Analytics & Reporting',
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
