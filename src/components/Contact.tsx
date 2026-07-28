"use client";

export default function Contact() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.352482312683!2d35.29294247656686!3d37.04911767220054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f3f878fbb07%3A0xc39f80277df6063b!2sHuzurevleri%2C%20%C5%9Eehit%20Jandarma%20Sefa%20%C4%B0zbudak%20Sk.%20No%3A14%2C%2001150%20%C3%87ukurova%2FAdana!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str";

  return (
    <section id="iletisim" className="py-24 bg-gold-50/50 relative overflow-hidden">
      <div className="absolute top-12 left-12 w-[300px] h-[300px] rounded-full bg-rose-gold-medium/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-gold font-medium text-xs tracking-widest uppercase mb-4 block">
            İletişim & Konum
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal mb-4">
            Bize <span className="font-serif italic text-rose-gold">Ulaşın</span>
          </h2>
          <div className="w-20 h-[1px] bg-rose-gold/40 mx-auto my-6" />
          <p className="text-charcoal-light font-light text-base leading-relaxed">
            Salonumuz Adana'nın en elit semtlerinden Çukurova Huzurevleri'nde yer almaktadır. 
            Randevu almak, hizmetlerimizle ilgili sorular sormak veya konum almak için bize kolayca ulaşabilirsiniz.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Box: Working Hours */}
            <div className="bg-white rounded-3xl p-8 border border-rose-gold-light/10 shadow-sm">
              <h3 className="font-serif text-xl text-charcoal font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-3 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Çalışma Saatleri
              </h3>
              <ul className="space-y-3 text-sm text-charcoal-light font-light">
                <li className="flex justify-between pb-2 border-b border-rose-gold-light/10">
                  <span>Pazartesi - Cumartesi</span>
                  <span className="font-semibold text-charcoal">09:30 - 19:30</span>
                </li>
                <li className="flex justify-between text-rose-gold font-medium">
                  <span>Pazar</span>
                  <span className="uppercase tracking-wider">Kapalı</span>
                </li>
              </ul>
            </div>

            {/* Box: Contact Information */}
            <div className="bg-white rounded-3xl p-8 border border-rose-gold-light/10 shadow-sm flex-grow">
              <h3 className="font-serif text-xl text-charcoal font-semibold mb-6 flex items-center">
                <svg className="w-5 h-5 mr-3 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                İrtibat Bilgileri
              </h3>
              
              <div className="space-y-6">
                {/* Phone Call */}
                <div>
                  <span className="text-xs text-charcoal-light/60 uppercase tracking-widest block mb-1">Telefon</span>
                  <a
                    href="tel:+905424503287"
                    className="text-lg font-medium text-charcoal hover:text-rose-gold transition-colors"
                  >
                    +90 542 450 32 87
                  </a>
                </div>

                {/* WhatsApp Chat */}
                <div>
                  <span className="text-xs text-charcoal-light/60 uppercase tracking-widest block mb-1">WhatsApp Randevu</span>
                  <a
                    href="https://wa.me/905424503287?text=Merhaba,%20randevu%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-rose-gold hover:text-rose-gold-dark transition-colors flex items-center"
                  >
                    Hemen Mesaj Gönder
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Full Address */}
                <div>
                  <span className="text-xs text-charcoal-light/60 uppercase tracking-widest block mb-1">Açık Adres</span>
                  <p className="text-sm font-light text-charcoal-light leading-relaxed">
                    Huzurevleri Mah., Şehit Jandarma Sefa İzbudak Sok., <br />
                    No: 14/2, Çukurova, Adana
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Map Panel */}
          <div className="lg:col-span-7 flex">
            <div className="relative w-full rounded-[32px] overflow-hidden border-[6px] border-white shadow-2xl flex-grow min-h-[380px] lg:min-h-full">
              <iframe
                title="Nail Art Nurr Adana Harita Konumu"
                src={mapEmbedUrl}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
