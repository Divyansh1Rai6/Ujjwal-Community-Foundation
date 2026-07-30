import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Users, Award, Leaf } from 'lucide-react';
import { PageHero, PageSection } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { StatCounter } from '@/components/sections/stat-counter';
import { CtaBanner } from '@/components/sections/cta-banner';
import { Button } from '@/components/ui/button';
import { ABOUT_HERO_IMAGE, STATS, TEAM, VALUES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Ujjwal Community Foundation — a Jaipur-based NGO founded in 2014, serving 320+ villages across Rajasthan through education, healthcare, empowerment, and environment programs.',
  alternates: { canonical: 'https://ujjwalcommunity.org/about' },
};

const journey = [
  {
    year: '2014',
    title: 'The Beginning',
    text: 'Founded by a small group of friends with a single classroom and a big belief — that education changes everything.',
  },
  {
    year: '2017',
    title: 'Going Beyond Classrooms',
    text: 'Expanded into healthcare camps and women’s self-help groups after communities asked for holistic support.',
  },
  {
    year: '2020',
    title: 'Scaling During Crisis',
    text: 'Pivoted to emergency relief, running community kitchens that served over 2 lakh meals during the pandemic.',
  },
  {
    year: '2024',
    title: '320 Villages & Counting',
    text: 'Today we work across 320+ villages with 850+ volunteers, while keeping our grassroots roots intact.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Ujjwal Community Foundation"
        description="We are a grassroots non-profit turning empathy into measurable, lasting change across rural Rajasthan."
        image={ABOUT_HERO_IMAGE}
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Story */}
      <PageSection>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative">
            <div className="overflow-hidden rounded-3xl shadow-soft-lg">
              <Image
                src="https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Volunteers organizing donation boxes"
                width={1000}
                height={760}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-soft-lg sm:block">
              <div className="font-display text-3xl font-bold text-brand-green">
                {new Date().getFullYear() - SITE.foundedYear}+
              </div>
              <div className="text-xs text-muted-foreground">years of impact</div>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="From one classroom to 320 villages"
              description="What started in 2014 as a weekend tuition class for ten children has grown into a movement touching thousands of lives — but our heart remains the same."
            />
            <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Ujjwal — meaning <em>“bright”</em> — was born from a simple
                conviction: that lasting change begins at the grassroots, with
                people who understand their own communities best. We don’t
                parachute in with solutions. We listen, partner, and build
                capacity alongside the people we serve.
              </p>
              <p>
                Over a decade later, that philosophy still guides every program
                — from our learning centers to our mobile health vans. We
                measure success not by what we do for communities, but by what
                they can do for themselves long after we’ve stepped back.
              </p>
            </div>
            <div className="reveal mt-8">
              <Button asChild>
                <Link href="/mission-vision">
                  Our Mission & Vision
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Values */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our core values"
            description="Four principles that shape every decision, partnership, and program we run."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="reveal group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
                data-reveal-delay={i * 90}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-blue text-white transition-transform duration-300 group-hover:scale-110">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <PageSection>
        <SectionHeading
          eyebrow="Our Journey"
          title="A decade of growing impact"
          description="Milestones that mark our path from a single classroom to a state-wide movement."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {journey.map((m, i) => (
            <div
              key={m.year}
              className="reveal relative pl-6"
              data-reveal-delay={i * 100}
            >
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-brand-green to-brand-blue ring-4 ring-accent" />
              {i < journey.length - 1 && (
                <span className="absolute left-1.5 top-5 h-full w-px bg-border" />
              )}
              <div className="font-display text-2xl font-bold text-brand-green">
                {m.year}
              </div>
              <h3 className="mt-1 font-display text-base font-bold text-foreground">
                {m.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Stats */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Our impact at a glance"
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

      {/* Team */}
      <PageSection>
        <SectionHeading
          eyebrow="Our People"
          title="The faces behind the work"
          description="A dedicated team supported by hundreds of volunteers who give their time, skills, and heart."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="reveal group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg"
              data-reveal-delay={i * 90}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display text-base font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-brand-green">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* quick badges */}
        <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Heart, label: 'Registered NGO', sub: '12A & 80G certified' },
            { icon: Award, label: 'Audited Yearly', sub: 'Transparent finances' },
            { icon: Users, label: '850+ Volunteers', sub: 'Across Rajasthan' },
            { icon: Leaf, label: 'Climate Positive', sub: '25,000 trees planted' },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{b.label}</div>
                <div className="text-xs text-muted-foreground">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <CtaBanner />
    </>
  );
}
