import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { PageHero, PageSection } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { ContactForm } from '@/components/sections/contact-form';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ujjwal Community Foundation. Visit us at Lotus Business Park, MG Road, Jaipur, call +91 9876543210, or send us a message online.',
  alternates: { canonical: 'https://ujjwalcommunity.org/contact' },
};

const socials = [
  { href: SITE.social.facebook, label: 'Facebook', icon: Facebook },
  { href: SITE.social.instagram, label: 'Instagram', icon: Instagram },
  { href: SITE.social.twitter, label: 'Twitter', icon: Twitter },
  { href: SITE.social.youtube, label: 'YouTube', icon: Youtube },
  { href: SITE.social.linkedin, label: 'LinkedIn', icon: Linkedin },
];

const contactCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [SITE.address.line1, SITE.address.line2, `${SITE.address.city}, ${SITE.address.state} ${SITE.address.pincode}`],
    action: { label: 'Get Directions', href: SITE.mapLink },
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [SITE.phone, 'Mon–Sat, 10 AM – 6 PM'],
    action: { label: 'Call Now', href: `tel:${SITE.phoneHref}` },
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [SITE.email, 'We reply within 1–2 days'],
    action: { label: 'Send Email', href: `mailto:${SITE.email}` },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        description="Have a question, a partnership idea, or just want to say hello? We’d love to hear from you."
        image="https://images.pexels.com/photos/6646781/pexels-photo-6646781.jpeg?auto=compress&cs=tinysrgb&w=1600"
        crumbs={[{ label: 'Contact' }]}
      />

      {/* Contact cards */}
      <PageSection className="!pb-0">
        <div className="grid gap-6 sm:grid-cols-3">
          {contactCards.map((c, i) => (
            <div
              key={c.title}
              className="reveal group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
              data-reveal-delay={i * 90}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-blue text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {c.title}
              </h3>
              <div className="mt-2 space-y-0.5 text-sm text-muted-foreground">
                {c.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
              <a
                href={c.action.href}
                target={c.action.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-brand-green-dark"
              >
                {c.action.label}
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Form + Map */}
      <PageSection>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Form */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Send a Message"
              title="We’re here to help"
              description="Fill out the form and our team will respond within 1–2 business days."
              className="mb-8"
            />
            <ContactForm />
          </div>

          {/* Map + hours */}
          <div className="space-y-6">
            <div className="reveal overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Ujjwal Community Foundation location map"
                src={SITE.mapEmbedSrc}
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
                style={{ filter: 'saturate(1.05)' }}
              />
            </div>

            <div className="reveal rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-brand-green" />
                <h3 className="font-display text-base font-bold text-foreground">
                  Office Hours
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { d: 'Monday – Friday', h: '10:00 AM – 6:00 PM' },
                  { d: 'Saturday', h: '10:00 AM – 2:00 PM' },
                  { d: 'Sunday', h: 'Closed (events only)' },
                ].map((r) => (
                  <li
                    key={r.d}
                    className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-muted-foreground">{r.d}</span>
                    <span className="font-medium text-foreground">{r.h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal rounded-3xl border border-border bg-muted/40 p-6 shadow-soft">
              <h3 className="font-display text-base font-bold text-foreground">
                Follow our journey
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Stay updated on events, stories, and impact.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-green hover:text-white hover:shadow-soft"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
