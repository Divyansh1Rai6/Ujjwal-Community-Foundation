import Link from 'next/link';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="reveal relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-blue-dark px-6 py-14 text-center shadow-soft-lg sm:px-12 lg:py-20">
        {/* decorative blobs */}
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-brand-blue/30 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <HeartHandshake className="h-4 w-4" />
            Be the Change
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Your support can light up a lifetime
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Every contribution, every hour of volunteering, every shared
            message brings education, health, and hope to those who need it
            most. Join us in building brighter communities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-green-dark shadow-soft hover:bg-white/90 hover:shadow-glow"
            >
              <Link href="/donate">
                Donate Now
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
            >
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
