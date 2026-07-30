import { Hero } from '@/components/sections/home/hero';
import { AboutPreview } from '@/components/sections/home/about-preview';
import { MissionVision } from '@/components/sections/home/mission-vision';
import { ImpactStats } from '@/components/sections/home/impact-stats';
import { FeaturedPrograms } from '@/components/sections/home/featured-programs';
import { WhyChooseUs } from '@/components/sections/home/why-choose-us';
import { Testimonials } from '@/components/sections/home/testimonials';
import { LatestEvents } from '@/components/sections/home/latest-events';
import { CtaBanner } from '@/components/sections/cta-banner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <MissionVision />
      <ImpactStats />
      <FeaturedPrograms />
      <WhyChooseUs />
      <Testimonials />
      <LatestEvents />
      <CtaBanner />
    </>
  );
}
