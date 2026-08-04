
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Crumb = { label: string; href?: string };

export function PageHero({
  title,
  description,
  image,
  crumbs = [],
}: {
  title: string;
  description?: string;
  image: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-blue-dark  pt-16 lg:pt-20">

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <nav
          aria-label="Breadcrumb"
          className="reveal mb-5 flex flex-wrap items-center gap-1.5 text-sm text-white/80"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-white/50" />
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="font-medium text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="reveal max-w-3xl font-display text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            {description}
          </p>
        )}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </section>
  );
}

export function PageSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn('mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24', className)}
    >
      {children}
    </section>
  );
}
