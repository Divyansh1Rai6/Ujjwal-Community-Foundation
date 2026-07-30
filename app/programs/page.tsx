import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { PageHero, PageSection } from '@/components/sections/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { Button } from '@/components/ui/button';
import { PROGRAMS } from '@/lib/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Programs & Initiatives',
  description:
    'Explore Ujjwal Community Foundation’s six flagship programs — Shiksha (education), Aarogya (health), Shakti (women empowerment), Hara Bhara (environment), Annadata (food security), and Unnati (youth skilling).',
  alternates: { canonical: 'https://ujjwalcommunity.org/programs' },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Our Programs & Initiatives"
        description="Six flagship programs, each tackling a different facet of community well-being — designed with communities, delivered with care."
        image="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=1600"
        crumbs={[{ label: 'Programs' }]}
      />

      <PageSection className="!py-16 lg:!py-20">
        <div className="space-y-16 lg:space-y-24">
          {PROGRAMS.map((program, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={program.slug}
                id={program.slug}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {/* Image */}
                <div
                  className={cn(
                    'reveal relative',
                    reversed && 'lg:order-2',
                  )}
                >
                  <div className="overflow-hidden rounded-3xl shadow-soft-lg">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={1100}
                      height={820}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div
                    className={cn(
                      'absolute -bottom-5 hidden rounded-2xl border border-border bg-card p-4 shadow-soft-lg sm:block',
                      reversed ? '-left-4' : '-right-4',
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-soft',
                        program.color === 'green'
                          ? 'bg-gradient-to-br from-brand-green to-brand-green-dark'
                          : 'bg-gradient-to-br from-brand-blue to-brand-blue-dark',
                      )}
                    >
                      <program.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div
                    className={cn(
                      'absolute -z-10 h-24 w-24 rounded-full blur-2xl',
                      reversed
                        ? '-right-6 -top-6 bg-brand-blue/15'
                        : '-left-6 -top-6 bg-brand-green/15',
                    )}
                  />
                </div>

                {/* Text */}
                <div
                  className={cn('reveal', reversed && 'lg:order-1')}
                  data-reveal-delay="80"
                >
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider',
                      program.color === 'green'
                        ? 'bg-brand-green/10 text-brand-green-dark'
                        : 'bg-brand-blue/10 text-brand-blue-dark',
                    )}
                  >
                    <program.icon className="h-3.5 w-3.5" />
                    {program.tagline}
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {program.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {program.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-foreground/80"
                      >
                        <span
                          className={cn(
                            'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white',
                            program.color === 'green'
                              ? 'bg-brand-green'
                              : 'bg-brand-blue',
                          )}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href="/volunteer">
                        Volunteer for this
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/donate">Support this program</Link>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </PageSection>

      <CtaBanner />
    </>
  );
}
