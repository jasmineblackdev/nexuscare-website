/**
 * SEO — per-page head management
 *
 * Renders title, meta description, canonical URL, Open Graph, Twitter Card,
 * and JSON-LD structured data for each route.
 *
 * Usage:
 *   <SEO
 *     title="NexusCare — Healthcare Referral Coordination"
 *     description="..."
 *     canonical="https://nexuscare.io"
 *     schema={[organizationSchema, softwareSchema]}
 *   />
 */

import { Helmet } from 'react-helmet-async';

const SITE_URL   = 'https://nexuscare.io';
const SITE_NAME  = 'NexusCare';
const OG_IMAGE   = `${SITE_URL}/og-image.png`;
const TWITTER_HANDLE = '@nexuscare_io';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  /** 'website' for homepage, 'article' for blog posts, etc. */
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  /** Additional JSON-LD schema objects to inject */
  schema?: object[];
}

export function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = OG_IMAGE,
  noindex = false,
  schema = [],
}: SEOProps) {
  const canonicalUrl = canonical ?? SITE_URL;

  return (
    <Helmet>
      {/* ── Primary ──────────────────────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph ───────────────────────────────────────────────────── */}
      <meta property="og:type"        content={ogType} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"    content={`${SITE_NAME} — ${title}`} />

      {/* ── Twitter Card ─────────────────────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content={TWITTER_HANDLE} />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
      <meta name="twitter:image:alt"   content={title} />

      {/* ── JSON-LD structured data ───────────────────────────────────────── */}
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

// ── Reusable schema objects ────────────────────────────────────────────────────

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NexusCare',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'NexusCare streamlines referral intake, insurance authorization, and admissions coordination for senior living operators.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@nexuscare.io',
    contactType: 'customer support',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://app.nexuscare.io',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NexusCare',
  url: SITE_URL,
  description: 'Healthcare referral coordination platform for senior living operators and admissions teams.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'NexusCare',
  applicationCategory: 'HealthcareApplication',
  operatingSystem: 'Web',
  description: 'NexusCare is a cloud-based referral coordination and admissions management platform built for senior living facilities, skilled nursing facilities, and assisted living communities.',
  url: SITE_URL,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free pilot available — request a demo to get started.',
  },
  featureList: [
    'Referral intake management',
    'Insurance authorization tracking',
    'Admissions coordination',
    'Hospital liaison tools',
    'Real-time bed availability',
    'Payor mix optimization',
    'HIPAA-compliant document management',
    'Family portal',
  ],
  provider: {
    '@type': 'Organization',
    name: 'NexusCare',
    url: SITE_URL,
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is NexusCare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NexusCare is a healthcare referral coordination platform that streamlines referral intake, insurance authorization, and admissions coordination for senior living operators and healthcare teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is NexusCare built for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NexusCare is built for senior living operators, skilled nursing facilities (SNFs), assisted living communities, memory care facilities, and the hospital liaison teams that work with them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is NexusCare HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NexusCare is built with HIPAA compliance at its core, including encrypted data storage, access controls, and Business Associate Agreements (BAAs) for all covered entities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with NexusCare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Request a demo at nexuscare.io. Our team will reach out to schedule a walkthrough and set up a free pilot for your facility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does NexusCare integrate with EHR systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NexusCare integrates with major EHR and clearinghouse systems to streamline insurance verification and authorization workflows for admissions teams.',
      },
    },
  ],
};
