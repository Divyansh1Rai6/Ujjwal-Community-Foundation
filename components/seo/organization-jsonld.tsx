import { SITE } from '@/lib/site';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: SITE.name,
    alternateName: SITE.shortName,
    url: 'https://ujjwalcommunity.org',
    logo: `${'https://ujjwalcommunity.org'}/og-image.jpg`,
    description: SITE.description,
    foundingDate: `${SITE.foundedYear}-01-01`,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.pincode,
      addressCountry: 'IN',
    },
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.twitter,
      SITE.social.youtube,
      SITE.social.linkedin,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
