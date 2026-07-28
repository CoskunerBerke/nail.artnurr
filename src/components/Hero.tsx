"use client";

import Image from "next/image";

export default function Hero() {
  // Using the first Instagram post URL as the main hero photo
  const heroImageSrc = "https://www.instagram.com/p/DYWuOHYI1mm/media/?size=l";

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-16 bg-gradient-to-tr from-gold-50 via-rose-gold-light/10 to-gold-100/40 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] rounded-full bg-rose-gold-medium/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-[500px] h-[500px] rounded-full bg-gold-200/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Tagline */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-gold-medium/20 text-rose-gold font-medium text-xs tracking-widest uppercase mb-6 animate-pulse">
              Adana'nın En Seçkin Nail Art Deneyimi
            </span>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-charcoal mb-6">
              Tırnaklarınızda <br />
              <span className="font-serif italic text-rose-gold">Sanatın & Zarafetin</span> <br />
              Buluşması
            </h1>

            {/* Description */}
            <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
              Adana Çukurova'da lüks ve hijyenik stüdyomuzda, kişiye özel tırnak
              tasarımları, protez tırnak, kalıcı oje ve profesyonel el-ayak bakımıyla
              kendinizi şımartın. Her tırnağa bir tuval gibi yaklaşıyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-charcoal text-gold-50 font-medium text-sm tracking-wider uppercase shadow-md hover:bg-rose-gold hover:text-white transition-all duration-300"
              >
                Hizmetlerimizi İncele
              </a>
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-rose-gold text-rose-gold font-medium text-sm tracking-wider uppercase hover:bg-rose-gold-medium/10 transition-all duration-300"
              >
                İletişime Geç
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-rose-gold-light/20 w-full max-w-lg text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl font-semibold text-rose-gold">100%</p>
                <p className="text-xs text-charcoal-light uppercase tracking-wider">Hijyen Garantisi</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-rose-gold">500+</p>
                <p className="text-xs text-charcoal-light uppercase tracking-wider">Mutlu Müşteri</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-rose-gold">5★</p>
                <p className="text-xs text-charcoal-light uppercase tracking-wider">Google Yorumu</p>
              </div>
            </div>
          </div>

          {/* Hero Right Visual */}
          <div className="lg:col-span-5 flex justify-center w-full relative">
            {/* Visual Frame */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-t-[160px] rounded-b-[30px] overflow-hidden shadow-[0_20px_50px_rgba(183,110,121,0.25)] border-[8px] border-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImageSrc}
                alt="Nail Art Nurr Premium Manicure Design"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Sparkles Decoration */}
            <div className="absolute -top-4 -right-4 w-12 h-12 text-rose-gold/40 animate-spin" style={{ animationDuration: '8s' }}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
            <div className="absolute bottom-12 -left-6 w-8 h-8 text-gold-500/40 animate-pulse">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
