const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Corestack Technologies',
  url: siteUrl,
  logo: `${siteUrl}/images/Corestack_Logo.png`,
  email: 'corestacktechnologiesph@gmail.com',
  description: 'Philippine-based AI agency building intelligent software, automation, and SaaS solutions.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'SJDM Bulacan',
    addressCountry: 'PH',
  },
  foundingDate: '2026',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'corestacktechnologiesph@gmail.com',
    contactType: 'sales',
    availableLanguage: ['English', 'Filipino'],
  },
  sameAs: [
    siteUrl,
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CoreStack',
  url: siteUrl,
  description: 'Smart AI & Technology Solutions for Growing Businesses',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Corestack Technologies',
  image: `${siteUrl}/images/Corestack_Logo.png`,
  url: siteUrl,
  telephone: '',
  email: 'corestacktechnologiesph@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'SJDM Bulacan',
    addressCountry: 'PH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 14.86,
    longitude: 120.94,
  },
  areaServed: 'PH',
  priceRange: '₱₱₱',
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
