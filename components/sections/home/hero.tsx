import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HERO_IMAGE, STATS } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Volunteers coming together to support their community"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-grid opacity-[0.07] mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_3px_rgba(255,255,255,0.2)]" />
            Serving Rajasthan since 2014
          </span>

          <h1 className="reveal mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Lighting lives,
            <span className="block bg-gradient-to-r from-emerald-200 via-white to-sky-200 bg-clip-text text-transparent">
              building communities
            </span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Ujjwal Community Foundation works across rural Rajasthan to bring
            education, healthcare, women’s empowerment, and environmental
            change to the communities that need it most.
          </p>

          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-green-dark shadow-soft-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
            >
              <Link href="/donate">
                <HeartHandshake className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:text-white"
            >
              <Link href="/volunteer">
                <ArrowRight className="mr-2 h-4 w-4" />
                Become a Volunteer
              </Link>
            </Button>
          </div>

          {/* mini stats */}
          <dl className="reveal mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/20 pt-7">
            {STATS.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {s.value.toLocaleString('en-IN')}
                  <span className="text-emerald-300">{s.suffix}</span>
                </dt>
                <dd className="mt-1 text-xs font-medium text-white/70 sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="h-12 w-full sm:h-16"
          aria-hidden="true"
        >
          <path
            d="M0 80V40C240 80 480 0 720 20C960 40 1200 80 1440 50V80H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      {/* floating play badge */}
      <Link
        href="/about"
        aria-label="Learn our story"
        className="group absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-3 pr-5 text-white backdrop-blur transition-all duration-300 hover:bg-white/20 lg:flex"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 transition-transform duration-300 group-hover:scale-110">
          <Play className="h-5 w-5 fill-white" />
        </span>
        <span className="text-sm font-medium leading-tight">
          Our Story
          <span className="block text-xs font-normal text-white/70">
            in 2 minutes
          </span>
        </span>
      </Link>
    </section>
  );
}
