import type { Metadata } from 'next';
import { Target, Eye, Sparkles, HandHeart, Leaf, HeartHandshake } from 'lucide-react';
import { PageHero, PageSection } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { CtaBanner } from '@/components/sections/cta-banner';
import { VALUES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mission & Vision',
  description:
    'Discover the mission, vision, and core values that guide Ujjwal Community Foundation’s work across rural Rajasthan — empowerment through education, health, and sustainability.',
  alternates: { canonical: 'https://ujjwalcommunity.org/mission-vision' },
};

const pillars = [
  {
    icon: Sparkles,
    title: 'Education',
    text: 'Every child deserves a chance to learn, dream, and grow. We remove the barriers that keep children out of classrooms.',
    color: 'from-brand-blue to-brand-blue-dark',
  },
  {
    icon: HeartHandshake,
    title: 'Health',
    text: 'Quality healthcare is a right, not a privilege. We bring doctors, diagnostics, and medicines to remote doorsteps.',
    color: 'from-brand-green to-brand-green-dark',
  },
  {
    icon: HandHeart,
    title: 'Empowerment',
    text: 'When women thrive, communities thrive. We build skills, savings groups, and confidence that outlast our programs.',
    color: 'from-brand-green to-brand-blue',
  },
  {
    icon: Leaf,
    title: 'Environment',
    text: 'We protect the land that sustains us — planting trees, conserving water, and teaching the next generation to care for it.',
    color: 'from-brand-blue to-brand-green',
  },
];

const goals = [
  'Reach 500 villages across Rajasthan by 2030',
  'Educate 25,000 out-of-school children through learning centers',
  'Empower 5,000 women with sustainable livelihoods',
  'Plant 100,000 trees and build 200 water-harvesting structures',
  'Run 1,000 free health camps reaching 5 lakh patients',
  'Train 2,000 rural youth for dignified employment',
];

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        title="Our Mission & Vision"
        description="The purpose that fuels every camp, every classroom, and every conversation on the ground."
        image="https://images.pexels.com/photos/4894659/pexels-photo-4894659.jpeg?auto=compress&cs=tinysrgb&w=1600"
        crumbs={[{ label: 'Mission & Vision' }]}
      />

      {/* Mission & Vision statements */}
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-green/5 to-brand-blue/5 p-8 shadow-soft lg:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-dark text-white shadow-soft">
              <Target className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To empower underserved communities across Rajasthan through
              sustainable programs in education, healthcare, women’s
              empowerment, and the environment. We build local capacity so that
              change lasts well beyond our involvement — creating
              self-reliant communities that thrive on their own strengths.
            </p>
          </div>
          <div
            className="reveal relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-blue/5 to-brand-green/5 p-8 shadow-soft lg:p-10"
            data-reveal-delay="120"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white shadow-soft">
              <Eye className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
              Our Vision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A society where every individual — regardless of background or
              circumstance — has access to education, health, dignity, and the
              opportunity to reach their full potential. We envision
              self-reliant communities that thrive on their own strengths and
              carry change forward for generations to come.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Four pillars */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Focus"
            title="Four pillars of change"
            description="Every program we run falls under one of these pillars. Together they form a holistic approach to community development."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="reveal group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg"
                data-reveal-delay={i * 90}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <PageSection>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our core values"
          description="These principles are non-negotiable. They shape how we hire, partner, fundraise, and deliver programs."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="reveal group flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg"
              data-reveal-delay={i * 90}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-blue text-white transition-transform duration-300 group-hover:scale-110">
                <v.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Goals */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-blue-dark py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              <Target className="h-4 w-4" />
              Goals for 2030
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Where we’re headed next
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Ambitious targets that keep us accountable and focused on the
              change that matters most.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map((g, i) => (
              <div
                key={g}
                className="reveal flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur transition-colors hover:bg-white/15"
                data-reveal-delay={i * 80}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-sm font-medium leading-relaxed">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
