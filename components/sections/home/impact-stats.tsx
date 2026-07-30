import { STATS } from '@/lib/site';
import { StatCounter } from '@/components/sections/stat-counter';
import { SectionHeading } from '@/components/sections/section-heading';

export function ImpactStats() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Our Impact"
        title="Real change, measured in lives"
        description="Numbers that represent real people, real stories, and real transformation on the ground."
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
    </section>
  );
}
