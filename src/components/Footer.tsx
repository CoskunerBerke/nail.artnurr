"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-gold-50/80 py-16 border-t border-rose-gold/10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-rose-gold/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-serif tracking-widest text-xl font-bold uppercase text-white mb-4">
              Nail Art Nurr
            </h3>
            <p className="text-gold-100/50 text-sm font-light leading-relaxed max-w-sm">
              Adana Çukurova'da tırnak estetiğini ve el-ayak sağlığını ön planda tutarak, 
              kişiye özel trend nail art tasarımları sunuyoruz. Sanatımız tırnaklarınızda hayat bulsun.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Hızlı Menü
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#hakkimizda" className="hover:text-rose-gold transition-colors font-light">Hakkımızda</a>
              <a href="#hizmetler" className="hover:text-rose-gold transition-colors font-light">Hizmetler</a>
              <a href="#degisim" className="hover:text-rose-gold transition-colors font-light">Değişim</a>
              <a href="#galeri" className="hover:text-rose-gold transition-colors font-light">Galeri</a>
              <a href="#yorumlar" className="hover:text-rose-gold transition-colors font-light">Yorumlar</a>
              <a href="#iletisim" className="hover:text-rose-gold transition-colors font-light">İletişim</a>
            </div>
          </div>

          {/* Column 3: Social & Booking Link */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Bizi Takip Edin
            </h4>
            <div className="flex space-x-4 mb-6">
              {/* Instagram Icon Link */}
              <a
                href="https://www.instagram.com/nail.artnurr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-100/20 flex items-center justify-center text-gold-50/80 hover:bg-rose-gold hover:text-white hover:border-rose-gold transition-all duration-300"
                aria-label="Instagram sayfamızı ziyaret edin"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            
            <a
              href="https://wa.me/905424503287?text=Merhaba,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs tracking-wider uppercase font-semibold text-rose-gold hover:text-white transition-colors"
            >
              WhatsApp Hızlı İletişim &rarr;
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gold-100/10 mb-8" />

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gold-100/40 font-light">
          <p>&copy; {currentYear} Nail Art Nurr. Tüm Hakları Saklıdır.</p>
          <p className="mt-2 sm:mt-0">Adana Çukurova Protez Tırnak ve Güzellik Salonu</p>
        </div>
      </div>
    </footer>
  );
}
