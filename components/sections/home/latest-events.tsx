import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, MapPin, Clock, ArrowRight } from 'lucide-react';
import { EVENTS } from '@/lib/site';
import { SectionHeading } from '@/components/sections/section-heading';
import { Button } from '@/components/ui/button';
import { EventDateBadge } from '@/components/ui/event-date-badge';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function LatestEvents() {
  const upcoming = EVENTS.filter((e) => e.status === 'upcoming').slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Get Involved"
          title="Upcoming events near you"
          description="Join a plantation drive, staff a health camp, or cheer on our women entrepreneurs. There’s a place for everyone."
          className="max-w-xl"
        />
        <Button asChild variant="outline" className="shrink-0">
          <Link href="/events">
            All Events
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {upcoming.map((event, i) => (
          <article
            key={event.id}
            className="reveal group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg"
            data-reveal-delay={i * 100}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <EventDateBadge iso={event.date} className="absolute left-4 top-4" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                {event.category}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">
                {event.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {event.description}
              </p>
              <div className="mt-4 space-y-1.5 border-t border-border pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5 text-brand-green" />
                  {formatDate(event.date)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-brand-green" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-brand-green" />
                  {event.location}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
