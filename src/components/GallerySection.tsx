import { useState, useEffect, useCallback } from 'react';
import AnimatedSection from './AnimatedSection';

// T: ngang 5, dọc 4 — 8 ảnh active
const T_GRID = [
  [true,  true,  true,  true,  true ],
  [false, false, true,  false, false],
  [false, false, true,  false, false],
  [false, false, true,  false, false],
];

// V: ngang 5, dọc 4 — 7 ảnh active
const V_GRID = [
  [true,  false, false, false, true ],
  [true,  false, false, false, true ],
  [false, true,  false, true,  false],
  [false, false, true,  false, false],
];

const ALBUM_ITEMS = [
  ...Array.from({ length: 8 }, (_, i) => ({ id: i + 1, src: '/images/co-dau.png', label: `Ảnh ${i + 1}` })),
  ...Array.from({ length: 7 }, (_, i) => ({ id: i + 9, src: '/images/chu-re.png', label: `Ảnh ${i + 9}` })),
];

function LetterGrid({
  grid,
  items,
  globalOffset,
  onPhotoClick,
}: {
  grid: boolean[][];
  items: { id: number; src: string; label: string }[];
  globalOffset: number;
  onPhotoClick: (index: number) => void;
}) {
  const BG_PHOTOS = ['/images/co-dau.png', '/images/chu-re.png'];
  let activeIdx = 0;
  let cellIdx = 0;

  const cells = grid.flatMap((row, ri) =>
    row.map((active, ci) => {
      const li = active ? activeIdx++ : -1;
      const bgSrc = BG_PHOTOS[cellIdx++ % BG_PHOTOS.length];
      return { active, key: `${ri}-${ci}`, li, bgSrc };
    })
  );

  return (
    <div className="grid grid-cols-5 gap-2 md:gap-3">
      {cells.map(({ active, key, li, bgSrc }) => (
        <div
          key={key}
          className={`aspect-square rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
            active
              ? 'cursor-pointer group ring-2 ring-accent/60 shadow-md shadow-accent/20 scale-105 z-10 relative'
              : 'opacity-30'
          }`}
          onClick={active ? () => onPhotoClick(globalOffset + li) : undefined}
        >
          <img
            src={active ? items[li].src : bgSrc}
            alt={active ? items[li].label : ''}
            className={`w-full h-full object-cover ${
              active ? 'transition-transform duration-500 group-hover:scale-110' : ''
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function Lightbox({ index, onClose }: { index: number; onClose: () => void }) {
  const [current, setCurrent] = useState(index);
  const total = ALBUM_ITEMS.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Đóng"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Ảnh trước"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Image */}
      <div className="max-w-3xl max-h-[80vh] px-20" onClick={(e) => e.stopPropagation()}>
        <img
          src={ALBUM_ITEMS[current].src}
          alt={ALBUM_ITEMS[current].label}
          className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
        />
        <p className="text-center text-white/60 text-sm mt-3" style={{ fontFamily: 'var(--font-body)' }}>
          {current + 1} / {total}
        </p>
      </div>

      {/* Next button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Ảnh tiếp theo"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4">
        {ALBUM_ITEMS.map((item, i) => (
          <button
            key={item.id}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              i === current ? 'border-accent scale-110' : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgb(245,243,237) 0%, rgb(240,237,228) 50%, rgb(245,243,237) 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            Our Memories
          </p>
          <h2 className="text-4xl md:text-5xl text-primary" style={{ fontFamily: 'var(--font-script)' }}>
            Album Ảnh
          </h2>
          <div className="section-divider mt-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(180,150,80)">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        </AnimatedSection>

        {/* T-V letter gallery */}
        <AnimatedSection delay={0.2}>
          <div className="flex justify-center items-start gap-4 md:gap-10">
            <div className="w-[46%] max-w-xs md:max-w-sm">
              <LetterGrid
                grid={T_GRID}
                items={ALBUM_ITEMS.slice(0, 8)}
                globalOffset={0}
                onPhotoClick={setLightboxIndex}
              />
            </div>
            <div className="w-[46%] max-w-xs md:max-w-sm">
              <LetterGrid
                grid={V_GRID}
                items={ALBUM_ITEMS.slice(8)}
                globalOffset={8}
                onPhotoClick={setLightboxIndex}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* View more button */}
        <AnimatedSection className="text-center mt-12" delay={0.6}>
          <button
            onClick={() => setLightboxIndex(0)}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 text-sm tracking-widest uppercase cursor-pointer"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            Xem thêm album
          </button>
        </AnimatedSection>
      </div>

      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </section>
  );
}
