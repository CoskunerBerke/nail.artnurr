"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Before image (natural/prior state)
  const beforeImage = "/images/DSaQTUwCKaN.jpg";
  // After image (final premium nail art)
  const afterImage = "/images/DYWuOHYI1mm.jpg";

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp]);

  return (
    <section id="degisim" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-gold font-medium text-xs tracking-widest uppercase mb-4 block">
            Görsel Değişim
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal mb-4">
            Mucizevi <span className="font-serif italic text-rose-gold">Dönüşüm</span>
          </h2>
          <div className="w-20 h-[1px] bg-rose-gold/40 mx-auto my-6" />
          <p className="text-charcoal-light font-light text-base leading-relaxed">
            Stüdyomuzda uygulanan tırnak güçlendirme, form verme ve tırnak sanatı 
            işlemlerimizin yarattığı farkı interaktif sürgüyü kaydırarak kendiniz görün.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/5] md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-white select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* Before Image (Background Layer) */}
            <div className="absolute inset-0 w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={beforeImage}
                alt="Before Nail Art Treatment"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute bottom-6 right-6 px-4 py-1.5 rounded-full bg-charcoal/80 text-gold-50 backdrop-blur-sm text-xs font-semibold tracking-wider uppercase">
                Öncesi
              </div>
            </div>

            {/* After Image (Foreground Layer with ClipPath) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={afterImage}
                alt="After Nail Art Treatment"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute bottom-6 left-6 px-4 py-1.5 rounded-full bg-rose-gold/90 text-white backdrop-blur-sm text-xs font-semibold tracking-wider uppercase">
                Sonrası
              </div>
            </div>

            {/* Drag Handle Bar */}
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-white cursor-ew-resize pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Circle Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-rose-gold flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                {/* Arrow Left-Right SVGs */}
                <svg className="w-5 h-5 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                </svg>
              </div>
            </div>
          </div>
          
          <span className="text-xs text-charcoal-light/60 mt-4 tracking-wider uppercase animate-pulse">
            Görmek İçin Sürgüyü Sağa/Sola Kaydırın
          </span>
        </div>
      </div>
    </section>
  );
}
