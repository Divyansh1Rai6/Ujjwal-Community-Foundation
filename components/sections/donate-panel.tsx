'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Check, ShieldCheck, Receipt, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const PRESETS = [
  { amount: 500, label: '₹500', impact: 'School kit for 1 child' },
  { amount: 1500, label: '₹1,500', impact: 'Health check-up for 5 people' },
  { amount: 5000, label: '₹5,000', impact: 'Sponsor 1 month of tuition' },
  { amount: 12000, label: '₹12,000', impact: 'Plant 100 saplings' },
];

export function DonatePanel() {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number>(1500);
  const [custom, setCustom] = useState('');

  const selectedAmount = custom ? Number(custom) : amount;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
      {/* Left: donation options */}
      <div className="reveal rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
        {/* Frequency toggle */}
        <div className="inline-flex w-full rounded-xl border border-border bg-muted p-1 sm:w-auto">
          {(['one-time', 'monthly'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFrequency(f)}
              className={cn(
                'flex-1 rounded-lg px-5 py-2.5 text-sm font-semibold capitalize transition-all duration-200 sm:flex-none',
                frequency === f
                  ? 'bg-white text-brand-green-dark shadow-soft'
                  : 'text-foreground/60 hover:text-foreground',
              )}
            >
              {f === 'one-time' ? 'One-Time' : 'Monthly'}
            </button>
          ))}
        </div>

        {/* Preset amounts */}
        <div className="mt-6">
          <Label className="mb-3 block text-sm font-semibold text-foreground">
            Choose an amount
            {frequency === 'monthly' && (
              <span className="ml-2 text-xs font-normal text-muted-foreground">
                (billed every month)
              </span>
            )}
          </Label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PRESETS.map((p) => {
              const active = !custom && amount === p.amount;
              return (
                <button
                  key={p.amount}
                  onClick={() => {
                    setAmount(p.amount);
                    setCustom('');
                  }}
                  className={cn(
                    'group relative flex flex-col items-center rounded-xl border-2 p-3 text-center transition-all duration-200',
                    active
                      ? 'border-brand-green bg-brand-green/5 shadow-soft'
                      : 'border-border bg-background hover:border-brand-green/40',
                  )}
                >
                  <span
                    className={cn(
                      'font-display text-lg font-bold',
                      active ? 'text-brand-green-dark' : 'text-foreground',
                    )}
                  >
                    {p.label}
                  </span>
                  <span className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
                    {p.impact}
                  </span>
                  {active && (
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-white shadow-soft">
                      <Check className="h-3 w-3" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom amount */}
        <div className="mt-5">
          <Label htmlFor="custom" className="mb-2 block text-sm font-semibold text-foreground">
            Or enter a custom amount
          </Label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">
              ₹
            </span>
            <Input
              id="custom"
              type="number"
              min={1}
              placeholder="Enter amount"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        {/* Donor info */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="donor-name">Name</Label>
            <Input id="donor-name" placeholder="Your name" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="donor-email">Email</Label>
            <Input id="donor-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="donor-pan">PAN (for 80G receipt)</Label>
            <Input id="donor-pan" placeholder="ABCDE1234F" className="uppercase" />
          </div>
        </div>

        {/* Submit (UI only) */}
        <Button
          type="button"
          size="lg"
          className="mt-7 w-full bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-soft hover:shadow-glow"
          onClick={() => alert('This is a demo donation flow. Payment integration would connect here.')}
        >
          <Heart className="mr-2 h-5 w-5" />
          Donate {selectedAmount ? `₹${selectedAmount.toLocaleString('en-IN')}` : ''}{' '}
          {frequency === 'monthly' ? '/month' : ''}
        </Button>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-brand-green" />
          Secure payment · 80G tax-deductible · 100% transparent
        </p>
      </div>

      {/* Right: impact summary + reassurance */}
      <div className="space-y-6">
        <div className="reveal overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-blue-dark p-7 text-white shadow-soft-lg">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/80">
            <Sparkles className="h-4 w-4" />
            Your Impact
          </div>
          <div className="mt-4 font-display text-4xl font-bold">
            ₹{selectedAmount.toLocaleString('en-IN')}
          </div>
          <p className="mt-2 text-sm text-white/85">
            {frequency === 'monthly' ? 'every month' : 'one-time'} can{' '}
            {selectedAmount >= 12000
              ? 'transform a whole community program'
              : selectedAmount >= 5000
                ? 'sponsor a child’s education for a month'
                : selectedAmount >= 1500
                  ? 'bring healthcare to those without access'
                  : 'put a school kit in a child’s hands'}
            .
          </p>
          <div className="mt-5 space-y-2.5 border-t border-white/20 pt-5 text-sm">
            {[
              '85% of every rupee reaches the field',
              'Audited annually & publicly reported',
              'Tax-deductible under 80G',
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-emerald-200" />
                <span className="text-white/90">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Receipt className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">
              Need a custom or corporate contribution?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              For CSR partnerships and large grants, reach out and we’ll tailor
              a plan with you.
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-brand-green-dark"
            >
              Contact our team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="reveal overflow-hidden rounded-2xl border border-border shadow-soft">
          <Image
            src="https://images.pexels.com/photos/5909876/pexels-photo-5909876.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="A child benefiting from community support"
            width={800}
            height={500}
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="aspect-video w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
