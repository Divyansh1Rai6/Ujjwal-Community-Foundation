import Link from 'next/link';
import { HandHeart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({
  className,
  variant = 'dark',
}: {
  className?: string;
  variant?: 'dark' | 'light';
}) {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      aria-label="Ujjwal Community Foundation — Home"
    >
      <span
        className={cn(
          'relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-blue text-white shadow-soft transition-transform duration-300 group-hover:scale-105',
        )}
      >
        <HandHeart className="h-5 w-5" />
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-base font-bold tracking-tight sm:text-lg',
            variant === 'light' ? 'text-white' : 'text-foreground',
          )}
        >
          Ujjwal
        </span>
        <span
          className={cn(
            'text-[10px] font-medium uppercase tracking-[0.18em]',
            variant === 'light' ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          Community Foundation
        </span>
      </span>
    </Link>
  );
}
