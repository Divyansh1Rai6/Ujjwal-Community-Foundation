import { cn } from '@/lib/utils';

const MONTHS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
];

export function EventDateBadge({
  iso,
  className,
}: {
  iso: string;
  className?: string;
}) {
  const d = new Date(iso);
  const day = d.getDate();
  const month = MONTHS[d.getMonth()];
  return (
    <div
      className={cn(
        'flex w-14 flex-col items-center justify-center rounded-xl bg-white/95 text-center shadow-soft backdrop-blur',
        className,
      )}
      aria-label={`Date: ${day} ${month} ${d.getFullYear()}`}
    >
      <span className="w-full rounded-t-xl bg-gradient-to-r from-brand-green to-brand-blue py-0.5 text-[10px] font-bold tracking-wider text-white">
        {month}
      </span>
      <span className="font-display text-xl font-bold leading-tight text-foreground">
        {day}
      </span>
    </div>
  );
}
