import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/sections/section-heading';
import { ABOUT_PREVIEW_IMAGE, SITE } from '@/lib/site';
import { Button } from '@/components/ui/button';

const points = [
  'Registered non-profit with 80G & 12A certification',
  'Programs co-created with local communities',
  'Transparent, audited impact reporting',
];

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image collage */}
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
            <Image
              src={ABOUT_PREVIEW_IMAGE}
              alt="Volunteers packing aid supplies for community distribution"
              width={1000}
              height={760}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          {/* floating stat card */}
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-soft-lg sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-blue text-white">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground">
                  {new Date().getFullYear() - SITE.foundedYear}+ Years
                </div>
                <div className="text-xs text-muted-foreground">
                  of trusted service
                </div>
              </div>
            </div>
          </div>
          {/* decorative ring */}
          <div className="absolute -left-6 -top-6 -z-10 h-28 w-28 rounded-full border-2 border-brand-green/20" />
          <div className="absolute -left-3 -top-3 -z-10 h-16 w-16 rounded-full bg-brand-blue/10 blur-xl" />
        </div>

        {/* Text */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title="A movement built on compassion and action"
            description="Ujjwal Community Foundation began in 2014 with a handful of volunteers and a simple belief — that lasting change starts at the grassroots. Today we partner with over 320 villages across Rajasthan."
          />

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li
                key={p}
                className="reveal flex items-start gap-3 text-sm text-foreground/80 sm:text-base"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                {p}
              </li>
            ))}
          </ul>

          <div className="reveal mt-8">
            <Button asChild variant="default" size="lg">
              <Link href="/about">
                Read Our Story
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
