import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROGRAMS } from '@/lib/site';
import { SectionHeading } from '@/components/sections/section-heading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FeaturedPrograms() {
  const featured = PROGRAMS.slice(0, 3);
  return (
    <section className="relative overflow-hidden bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Programs creating lasting change"
          description="From classroom desks to community clinics, our initiatives meet people where they are and walk alongside them."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((program, i) => (
            <article
              key={program.slug}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg"
              data-reveal-delay={i * 100}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <span
                  className={cn(
                    'absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur',
                    program.color === 'green'
                      ? 'bg-brand-green/85'
                      : 'bg-brand-blue/85',
                  )}
                >
                  <program.icon className="h-3.5 w-3.5" />
                  {program.tagline}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {program.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <Link
                  href="/programs"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-brand-green-dark"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
