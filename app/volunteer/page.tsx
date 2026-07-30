import type { Metadata } from 'next';
import { HandHeart, Sparkles, Users, Award, Clock, HeartHandshake } from 'lucide-react';
import { PageHero, PageSection } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { CtaBanner } from '@/components/sections/cta-banner';
import { VolunteerForm } from '@/components/sections/volunteer-form';

export const metadata: Metadata = {
  title: 'Volunteer With Us',
  description:
    'Become a volunteer with Ujjwal Community Foundation. Lend your time and skills to education, health, environment, and empowerment programs across Rajasthan. Apply online today.',
  alternates: { canonical: 'https://ujjwalcommunity.org/volunteer' },
};

const steps = [
  {
    icon: HandHeart,
    title: 'Apply',
    text: 'Fill out the short form below telling us your interests and availability.',
  },
  {
    icon: Sparkles,
    title: 'Match',
    text: 'Our team connects you with a program that fits your skills and schedule.',
  },
  {
    icon: Users,
    title: 'Onboard',
    text: 'A short orientation prepares you for your role and introduces the team.',
  },
  {
    icon: HeartHandshake,
    title: 'Make Impact',
    text: 'Start volunteering at events, camps, and centers — and watch lives change.',
  },
];

const perks = [
  { icon: Award, label: 'Certificate of service', sub: 'Recognized for your hours' },
  { icon: Users, label: 'Community of 850+', sub: 'Meet like-minded people' },
  { icon: Clock, label: 'Flexible schedules', sub: 'Weekends or weekdays' },
  { icon: HeartHandshake, label: 'Real-world impact', sub: 'See change firsthand' },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        title="Volunteer With Us"
        description="Lend your time, skills, and heart. Whether it’s a weekend a month or a few hours a week, there’s a role for you."
        image="https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1600"
        crumbs={[{ label: 'Volunteer' }]}
      />

      {/* How it works */}
      <PageSection>
        <SectionHeading
          eyebrow="How It Works"
          title="Four simple steps to start"
          description="Joining our volunteer community is easy and welcoming — no experience required, just willingness."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
              data-reveal-delay={i * 90}
            >
              <span className="absolute right-4 top-3 font-display text-4xl font-bold text-brand-green/15">
                {i + 1}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-blue text-white shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Perks */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Volunteer"
            title="What you gain by joining"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <div
                key={p.label}
                className="reveal flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                data-reveal-delay={i * 90}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{p.label}</div>
                  <div className="text-xs text-muted-foreground">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <PageSection>
        <SectionHeading
          align="left"
          eyebrow="Apply Now"
          title="Ready to make a difference?"
          description="Fill in the form and our volunteer coordinator will get back to you within 2–3 days."
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl">
          <VolunteerForm />
        </div>
      </PageSection>

      <CtaBanner />
    </>
  );
}
