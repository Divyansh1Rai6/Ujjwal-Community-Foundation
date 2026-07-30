'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, MapPin, ArrowRight } from 'lucide-react';
import { EVENTS, type EventItem } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { EventDateBadge } from '@/components/ui/event-date-badge';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function EventCard({ event, past }: { event: EventItem; past?: boolean }) {
  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg sm:flex-row',
        past && 'opacity-95',
      )}
    >
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-square sm:w-56">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 640px) 100vw, 224px"
          className={cn(
            'object-cover transition-transform duration-700 group-hover:scale-105',
            past && 'grayscale-[0.3]',
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        <EventDateBadge iso={event.date} className="absolute left-3 top-3" />
        {past && (
          <span className="absolute bottom-3 right-3 rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
            Completed
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
            {event.category}
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold leading-snug text-foreground">
          {event.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {event.description}
        </p>
        <div className="mt-4 grid gap-2 border-t border-border pt-4 text-xs text-muted-foreground sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 text-brand-green" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-brand-green" />
            {event.time}
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <MapPin className="h-3.5 w-3.5 text-brand-green" />
            {event.location}
          </div>
        </div>
        {!past && (
          <div className="mt-5">
            <Button asChild size="sm" variant="outline">
              <Link href="/volunteer">
                Register to attend
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

export function EventsList() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const upcoming = EVENTS.filter((e) => e.status === 'upcoming');
  const past = EVENTS.filter((e) => e.status === 'past');
  const shown = tab === 'upcoming' ? upcoming : past;

  return (
    <div>
      {/* Tabs */}
      <div className="reveal inline-flex rounded-full border border-border bg-card p-1 shadow-soft">
        <button
          onClick={() => setTab('upcoming')}
          className={cn(
            'rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200',
            tab === 'upcoming'
              ? 'bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-soft'
              : 'text-foreground/70 hover:text-foreground',
          )}
        >
          Upcoming ({upcoming.length})
        </button>
        <button
          onClick={() => setTab('past')}
          className={cn(
            'rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200',
            tab === 'past'
              ? 'bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-soft'
              : 'text-foreground/70 hover:text-foreground',
          )}
        >
          Past Events ({past.length})
        </button>
      </div>

      {/* List */}
      <div className="mt-10 grid gap-6">
        {shown.map((event, i) => (
          <div key={event.id} className="reveal" data-reveal-delay={i * 80}>
            <EventCard event={event} past={tab === 'past'} />
          </div>
        ))}
        {shown.length === 0 && (
          <p className="rounded-2xl border border-dashed border-border bg-muted/40 p-10 text-center text-muted-foreground">
            No {tab} events at the moment. Please check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
