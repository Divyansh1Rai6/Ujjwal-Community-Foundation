import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { NAV_ITEMS, SITE } from '@/lib/site';
import { Logo } from './logo';

const socialLinks = [
  { href: SITE.social.facebook, label: 'Facebook', icon: Facebook },
  { href: SITE.social.instagram, label: 'Instagram', icon: Instagram },
  { href: SITE.social.twitter, label: 'Twitter', icon: Twitter },
  { href: SITE.social.youtube, label: 'YouTube', icon: Youtube },
  { href: SITE.social.linkedin, label: 'LinkedIn', icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border bg-foreground text-background">
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-green via-brand-blue to-brand-green" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand + mission */}
          <div className="lg:pr-4">
            <div className="[&_*]:!text-background">
              <Logo variant="light" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              {SITE.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 text-background/80 transition-all duration-200 hover:bg-brand-green hover:text-white hover:-translate-y-0.5"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-background/70 transition-colors hover:text-background"
                  >
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/volunteer"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  Donate to a Cause
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background">
              Reach Us
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-background/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <span>{SITE.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="flex items-center gap-3 transition-colors hover:text-background"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-green" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-background"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-green" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-6 sm:flex-row">
          <p className="text-center text-xs text-background/60 sm:text-left">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-background/60">
            Made with
            <HeartHandshake className="h-3.5 w-3.5 text-brand-green" />
            for a brighter tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}
