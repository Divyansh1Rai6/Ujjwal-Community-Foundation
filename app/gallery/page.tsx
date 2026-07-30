import type { Metadata } from 'next';
import { PageHero, PageSection } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { CtaBanner } from '@/components/sections/cta-banner';
import { GalleryGrid } from '@/components/sections/gallery-grid';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'See Ujjwal Community Foundation’s work in action — photos from education centers, health camps, plantation drives, women’s empowerment groups, and food distribution across Rajasthan.',
  alternates: { canonical: 'https://ujjwalcommunity.org/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Moments of hope, effort, and joy from the communities we serve across Rajasthan."
        image="https://images.pexels.com/photos/6646778/pexels-photo-6646778.jpeg?auto=compress&cs=tinysrgb&w=1600"
        crumbs={[{ label: 'Gallery' }]}
      />

      <PageSection>
        <SectionHeading
          eyebrow="In Pictures"
          title="Our work, captured"
          description="Browse by category or click any photo to view it full size."
        />
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </PageSection>

      <CtaBanner />
    </>
  );
}
