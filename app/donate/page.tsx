import type { Metadata } from 'next';
import { PageHero, PageSection } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { DonatePanel } from '@/components/sections/donate-panel';
import { StatCounter } from '@/components/sections/stat-counter';
import { STATS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support Ujjwal Community Foundation with a one-time or monthly donation. Your contribution is 80G tax-deductible and brings education, healthcare, and hope to rural Rajasthan.',
  alternates: { canonical: 'https://ujjwalcommunity.org/donate' },
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Your donation lights up lives"
        description="Every contribution — large or small — directly fuels our programs on the ground. Choose an amount and see the impact it creates."
        image="https://images.pexels.com/photos/6646878/pexels-photo-6646878.jpeg?auto=compress&cs=tinysrgb&w=1600"
        crumbs={[{ label: 'Donate' }]}
      />

      <PageSection>
        <SectionHeading
          align="left"
          eyebrow="Make a Gift"
          title="Choose how you’d like to give"
          description="Pick a preset or enter your own amount. This is a demonstration interface — payment integration connects here."
          className="mb-10"
        />
        <DonatePanel />
      </PageSection>

      {/* Impact reminder */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Where It Goes"
            title="Your generosity, measured"
            description="These are the real outcomes your support has helped create."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                iconName={stat.iconName}
                data-reveal-delay={i * 100}
                className="reveal"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
