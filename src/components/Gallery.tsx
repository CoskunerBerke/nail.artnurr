"use client";

import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { shortcode: "DYWuOHYI1mm", title: "Altın Vurgulu Lüks Nail Art", category: "Nail Art" },
  { shortcode: "DYVPS6nRSdV", title: "Doğal Nude Protez Tırnak", category: "Protez Tırnak" },
  { shortcode: "DVp_hl2iE9f", title: "Kalıcı Oje & Jel Güçlendirme", category: "Kalıcı Oje" },
  { shortcode: "DVD8e6nCI90", title: "Geometrik Minimalist Çizimler", category: "Nail Art" },
  { shortcode: "DVlAIVICDkU", title: "Lüks Klasik Manikür & Bakım", category: "Manikür" },
  { shortcode: "DUkoYMiCLen", title: "Mat Siyah & Badem Kesim Protez", category: "Protez Tırnak" },
  { shortcode: "DUYR0xOiDYV", title: "Ombre Geçişli French Tasarım", category: "Nail Art" },
  { shortcode: "DT5XqmCiHmY", title: "Metalik Ayna Efektli Kalıcı Oje", category: "Kalıcı Oje" },
  { shortcode: "DSqPBmiiOva", title: "Medikal Ayak Bakımı & Pedikür", category: "Pedikür" },
  { shortcode: "DSaQTUwCKaN", title: "Simli Özel Gün Nail Art Modeli", category: "Nail Art" }
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIdx(null);
    document.body.style.overflow = "";
  }, []);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  }, [selectedIdx]);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  }, [selectedIdx]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, showPrev, showNext, closeLightbox]);

  return (
    <section id="galeri" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-rose-gold-medium/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-gold font-medium text-xs tracking-widest uppercase mb-4 block">
            Tasarım Galerisi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal mb-4">
            Sanatımızın <span className="font-serif italic text-rose-gold">Yansımaları</span>
          </h2>
          <div className="w-20 h-[1px] bg-rose-gold/40 mx-auto my-6" />
          <p className="text-charcoal-light font-light text-base leading-relaxed">
            Stüdyomuzda tamamlanan ve hepsi el emeği olan bazı özel nail art 
            ve tırnak bakım çalışmalarımızdan seçtiğimiz ilham verici portföy.
          </p>
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => {
            const imgSrc = `/images/${image.shortcode}.jpg`;
            return (
              <div
                key={image.shortcode}
                className="break-inside-avoid relative overflow-hidden rounded-3xl group cursor-pointer border border-rose-gold-light/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-gold-50"
                onClick={() => openLightbox(idx)}
              >
                {/* Image element */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 rounded-3xl"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-rose-gold-medium text-xs tracking-wider uppercase font-semibold mb-1">
                    {image.category}
                  </span>
                  <h4 className="text-white font-serif text-lg font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal-dark/95 flex items-center justify-center p-4 backdrop-blur-md select-none transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl transition-colors cursor-pointer"
            onClick={closeLightbox}
            aria-label="Kapat"
          >
            &times;
          </button>

          {/* Left Navigation Arrow */}
          <button
            className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-lg transition-colors cursor-pointer"
            onClick={showPrev}
            aria-label="Önceki"
          >
            &#10094;
          </button>

          {/* Image Canvas */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/images/${galleryImages[selectedIdx].shortcode}.jpg`}
              alt={galleryImages[selectedIdx].title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            {/* Image Meta details */}
            <div className="text-center mt-4">
              <span className="text-rose-gold-medium text-xs tracking-widest uppercase block mb-1">
                {galleryImages[selectedIdx].category}
              </span>
              <p className="text-white font-serif text-lg font-light">
                {galleryImages[selectedIdx].title}
              </p>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-lg transition-colors cursor-pointer"
            onClick={showNext}
            aria-label="Sonraki"
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}
