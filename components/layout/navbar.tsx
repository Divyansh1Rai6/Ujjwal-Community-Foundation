'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { NAV_ITEMS, SITE } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md shadow-soft'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:h-20 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                  active
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground',
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-green to-brand-blue transition-all duration-300',
                    active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0',
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-soft hover:shadow-glow hover:opacity-95 sm:inline-flex"
          >
            <Link href="/donate">
              <HeartHandshake className="mr-1.5 h-4 w-4" />
              Donate
            </Link>
          </Button>

          {/* Mobile menu trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground transition-colors hover:bg-muted xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-xs border-l-border bg-background p-0"
            >
              <div className="flex h-16 items-center justify-between border-b border-border px-5">
                <SheetTitle asChild>
                  <span>
                    <Logo />
                  </span>
                </SheetTitle>
                <SheetClose asChild>
                  <button
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>
              <nav
                className="flex flex-col gap-1 overflow-y-auto p-4"
                aria-label="Mobile"
              >
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-3.5 py-3 text-sm font-medium transition-colors',
                          active
                            ? 'bg-accent text-accent-foreground'
                            : 'text-foreground/80 hover:bg-muted',
                        )}
                      >
                        <item.icon
                          className={cn(
                            'h-4.5 w-4.5 shrink-0',
                            active ? 'text-primary' : 'text-muted-foreground',
                          )}
                        />
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
                <SheetClose asChild>
                  <Button
                    asChild
                    className="mt-3 bg-gradient-to-r from-brand-green to-brand-blue text-white"
                  >
                    <Link href="/donate">
                      <HeartHandshake className="mr-1.5 h-4 w-4" />
                      Donate Now
                    </Link>
                  </Button>
                </SheetClose>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="mt-2 rounded-lg bg-muted px-3.5 py-3 text-center text-sm font-semibold text-foreground"
                >
                  {SITE.phone}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
