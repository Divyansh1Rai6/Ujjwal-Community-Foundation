import { WHY_CHOOSE_US } from '@/lib/site';
import { SectionHeading } from '@/components/sections/section-heading';

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Why Trust Us"
        title="Why people choose to stand with us"
        description="We pair big-hearted missions with disciplined execution. Here’s what makes Ujjwal a foundation worth your trust."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE_US.map((item, i) => (
          <div
            key={item.title}
            className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            data-reveal-delay={i * 90}
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-green/10 to-brand-blue/10 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-blue text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
