import type { Metadata } from 'next';
import { PageHero, PageSection } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { CtaBanner } from '@/components/sections/cta-banner';
import { EventsList } from '@/components/sections/events-list';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming and past events by Ujjwal Community Foundation — plantation drives, free health camps, women’s empowerment melas, and education bootcamps across Jaipur and rural Rajasthan.',
  alternates: { canonical: 'https://ujjwalcommunity.org/events' },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events & Campaigns"
        description="Find an event near you and be part of the change. From plantation drives to health camps, there’s always a way to get involved."
        image="https://images.pexels.com/photos/4894659/pexels-photo-4894659.jpeg?auto=compress&cs=tinysrgb&w=1600"
        crumbs={[{ label: 'Events' }]}
      />

      <PageSection>
        <SectionHeading
          align="left"
          eyebrow="Join Us"
          title="Mark your calendar"
          description="Switch between upcoming and past events to see what’s next and what we’ve accomplished together."
          className="mb-10"
        />
        <EventsList />
      </PageSection>

      <CtaBanner />
    </>
  );
}
