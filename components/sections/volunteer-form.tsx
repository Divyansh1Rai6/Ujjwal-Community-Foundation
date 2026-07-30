'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const opportunities = [
  { id: 'education', label: 'Education & Teaching' },
  { id: 'health', label: 'Health Camps' },
  { id: 'environment', label: 'Environment Drives' },
  { id: 'empowerment', label: 'Women Empowerment' },
  { id: 'food', label: 'Food Distribution' },
  { id: 'other', label: 'Other / Not Sure' },
];

type Status = 'idle' | 'submitting' | 'success';

export function VolunteerForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const interest = String(fd.get('interest') || '').trim();
    const message = String(fd.get('message') || '').trim();

    const next: Record<string, string> = {};
    if (!name) next.name = 'Please enter your name';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = 'Enter a valid email address';
    if (!phone || phone.length < 8) next.phone = 'Enter a valid phone number';
    if (!interest) next.interest = 'Please choose an area of interest';
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
          Thank you for stepping up!
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your volunteer application has been received. Our team will reach out
          within 2–3 days to welcome you onboard and match you with the right
          opportunity.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Submit another response
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
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="e.g. Aarav Sharma"
            aria-invalid={!!errors.name}
            className={cn(errors.name && 'border-destructive focus-visible:ring-destructive')}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name}</p>
          )}
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
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>

        <div className="space-y-1.5">
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
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="interest">
            Area of Interest <span className="text-destructive">*</span>
          </Label>
          <Select name="interest">
            <SelectTrigger
              id="interest"
              className={cn(errors.interest && 'border-destructive')}
              aria-invalid={!!errors.interest}
            >
              <SelectValue placeholder="Choose an area" />
            </SelectTrigger>
            <SelectContent>
              {opportunities.map((o) => (
                <SelectItem key={o.id} value={o.id}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.interest && (
            <p className="text-xs text-destructive">{errors.interest}</p>
          )}
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="message">Why do you want to volunteer?</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a little about yourself, your skills, and what motivates you to join us."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to be contacted by our volunteer team.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={status === 'submitting'}
          className="bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-soft hover:shadow-glow"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              Submit Application
              <Send className="ml-1.5 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
