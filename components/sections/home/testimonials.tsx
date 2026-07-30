'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/site';
import { SectionHeading } from '@/components/sections/section-heading';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const go = (dir: number) => setActive((p) => (p + dir + total) % total);

  return (
    <section className="relative overflow-hidden bg-muted/40 py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.35]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Voices of Change"
          title="Stories from the people we serve"
          description="The real measure of our work is in the lives transformed. Hear from the community members, volunteers, and partners who make it possible."
        />

        <div className="reveal mt-12">
          <div className="relative mx-auto max-w-4xl">
            {/* large quote card */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft-lg sm:p-12">
              <Quote
                className="absolute right-8 top-8 h-20 w-20 text-brand-green/8"
                aria-hidden
              />
              <div className="relative">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed text-foreground text-balance sm:text-2xl">
                  “{TESTIMONIALS[active].quote}”
                </blockquote>
                <div className="mt-7 flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-brand-green/30 ring-offset-2 ring-offset-card">
                    <Image
                      src={TESTIMONIALS[active].avatar}
                      alt={TESTIMONIALS[active].name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-foreground">
                      {TESTIMONIALS[active].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {TESTIMONIALS[active].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* controls */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-brand-green hover:text-white hover:shadow-soft"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      i === active
                        ? 'w-8 bg-gradient-to-r from-brand-green to-brand-blue'
                        : 'w-2 bg-border hover:bg-muted-foreground/40',
                    )}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-brand-green hover:text-white hover:shadow-soft"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
