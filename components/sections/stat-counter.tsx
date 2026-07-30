'use client';

import { useEffect, useRef, useState } from 'react';
import {
  HandHeart,
  Target,
  Sparkles,
  CalendarDays,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ICONS: Record<string, LucideIcon> = {
  HandHeart,
  Target,
  Sparkles,
  CalendarDays,
};

export function StatCounter({
  value,
  suffix = '',
  label,
  iconName,
  className,
  ...rest
}: {
  value: number;
  suffix?: string;
  label: string;
  iconName: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const Icon = ICONS[iconName];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done) {
          setDone(true);
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, done]);

  return (
    <div
      ref={ref}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg',
        className,
      )}
      {...rest}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-green to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {Icon && (
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green/10 to-brand-blue/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <div className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {count.toLocaleString('en-IN')}
        <span className="text-brand-blue">{suffix}</span>
      </div>
      <div className="mt-1.5 text-sm font-medium text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
