'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY, GALLERY_CATEGORIES } from '@/lib/site';
import { cn } from '@/lib/utils';

export function GalleryGrid() {
  const [category, setCategory] = useState<string>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    category === 'All'
      ? GALLERY
      : GALLERY.filter((g) => g.category === category);

  return (
    <div>
      {/* Filters */}
      <div className="reveal flex flex-wrap justify-center gap-2">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
              category === cat
                ? 'bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-soft'
                : 'border border-border bg-card text-foreground/70 hover:border-brand-green/40 hover:text-foreground',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            onClick={() => setLightbox(i)}
            className="reveal group relative block w-full overflow-hidden rounded-2xl border border-border shadow-soft transition-all duration-300 hover:shadow-soft-lg"
            data-reveal-delay={(i % 6) * 60}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={900}
              height={700}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                  {item.category}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-white">{item.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close preview"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length));
            }}
            aria-label="Previous image"
          >
            <span className="text-xl">‹</span>
          </button>
          <figure
            className="relative max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {filtered[lightbox].category}
              </span>
              <p className="mt-2 text-sm text-white/90">{filtered[lightbox].alt}</p>
            </figcaption>
          </figure>
          <button
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? null : (p + 1) % filtered.length));
            }}
            aria-label="Next image"
          >
            <span className="text-xl">›</span>
          </button>
        </div>
      )}
    </div>
  );
}
