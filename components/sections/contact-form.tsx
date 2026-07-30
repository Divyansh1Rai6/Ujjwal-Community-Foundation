'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const message = String(fd.get('message') || '').trim();

    const next: Record<string, string> = {};
    if (!name) next.name = 'Please enter your name';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = 'Enter a valid email address';
    if (!phone || phone.length < 8) next.phone = 'Enter a valid phone number';
    if (!message || message.length < 10)
      next.message = 'Please enter at least 10 characters';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      form.reset();
    }, 1100);
  }

  if (status === 'success') {
    return (
      <div className="reveal flex flex-col items-center justify-center rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-green/5 to-brand-blue/5 p-10 text-center shadow-soft">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-blue text-white shadow-soft-lg">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
          Message sent!
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. We’ll get back to you within 1–2 business
          days at the email or phone you provided.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="reveal rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            className={cn(errors.name && 'border-destructive focus-visible:ring-destructive')}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            className={cn(errors.email && 'border-destructive focus-visible:ring-destructive')}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="phone">
            Phone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            className={cn(errors.phone && 'border-destructive focus-visible:ring-destructive')}
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="How can we help you? Share your query, partnership idea, or feedback."
            aria-invalid={!!errors.message}
            className={cn(errors.message && 'border-destructive focus-visible:ring-destructive')}
          />
          {errors.message && (
            <p className="text-xs text-destructive">{errors.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === 'submitting'}
        className="mt-6 w-full bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-soft hover:shadow-glow sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-1.5 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
