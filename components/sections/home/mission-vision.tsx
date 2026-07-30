import { Target, Eye } from 'lucide-react';
import { SectionHeading } from '@/components/sections/section-heading';

export function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-muted/50 py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.4]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Guiding Light"
          title="Mission & Vision"
          description="The principles that shape every program, partnership, and decision we make."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Mission */}
          <div className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-soft-lg lg:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-brand-green/10 blur-2xl transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-dark text-white shadow-soft">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To empower underserved communities across Rajasthan through
                sustainable programs in education, healthcare, women’s
                empowerment, and the environment — building local capacity so
                that change lasts well beyond our involvement.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-soft-lg lg:p-10"
            data-reveal-delay="120"
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-brand-blue/10 blur-2xl transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white shadow-soft">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                A society where every individual — regardless of background or
                circumstance — has access to education, health, dignity, and
                the opportunity to reach their full potential. We envision
                self-reliant communities that thrive on their own strengths.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-8 text-center">
          <a
            href="/mission-vision"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-brand-green-dark"
          >
            Explore our mission & vision in depth
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
