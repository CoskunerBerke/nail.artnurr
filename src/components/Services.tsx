"use client";

const services = [
  {
    id: 1,
    name: "Protez Tırnak",
    price: "₺950",
    duration: "90 Dk",
    description: "Şablon veya tip tekniği kullanılarak tırnaklarınızın boyunu ve formunu kusursuz bir şekilde uzatma işlemi. Jel veya akrilik seçenekleriyle kalıcı şıklık.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
      </svg>
    )
  },
  {
    id: 2,
    name: "Nail Art Tasarımı",
    price: "₺200'den başlayan",
    duration: "30-60 Dk",
    description: "Kişiye özel el çizimi tasarımlar, soyut çizgiler, taş süslemeler, chrome efektler ve mermer desenleriyle tırnaklarınızda özgün sanat dokunuşları.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  {
    id: 3,
    name: "Kalıcı Oje",
    price: "₺550",
    duration: "45 Dk",
    description: "UV/LED ışık teknolojisiyle kurutulan, 3 ila 4 hafta boyunca parlaklığını ve kusursuzluğunu kaybetmeyen, soyulmayan oje uygulaması.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
      </svg>
    )
  },
  {
    id: 4,
    name: "Jel Tırnak Güçlendirme",
    price: "₺750",
    duration: "60 Dk",
    description: "Kendi doğal tırnağınızın üzerine uygulanan koruyucu jel tabakasıyla tırnak kırılmalarını önleyin, sağlıklı ve güçlü uzamasını sağlayın.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 5,
    name: "Medikal Pedikür & Ayak Bakımı",
    price: "₺750",
    duration: "60 Dk",
    description: "Ayak sağlığınız ve estetiğiniz için özel cihazlarla tırnak eti bakımı, nasır giderme, topuk törpüleme ve derinlemesine nemlendirici terapi.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 6,
    name: "Manikür & El Bakımı",
    price: "₺450",
    duration: "40 Dk",
    description: "Tırnak eti temizliği, törpüleme, el masajı, peeling ve tırnak besleyici vitamin yağlarıyla ellerinizi yenileyen klasik ve ıslak manikür bakımı.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-gold-50/50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-rose-gold-medium/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-gold font-medium text-xs tracking-widest uppercase mb-4 block">
            Özel Hizmetlerimiz
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal mb-4">
            Stiliniz İçin <span className="font-serif italic text-rose-gold">Özel Çözümler</span>
          </h2>
          <div className="w-20 h-[1px] bg-rose-gold/40 mx-auto my-6" />
          <p className="text-charcoal-light font-light text-base leading-relaxed">
            Nail Art Nurr stüdyosunda, en kaliteli malzemelerle, kusursuz tekniklerle ve 
            hijyen kurallarına tam uyum sağlayarak el ve ayak güzelliğinizi ortaya çıkarıyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 border border-rose-gold-light/10 shadow-[0_10px_30px_rgba(183,110,121,0.04)] hover:shadow-[0_20px_45px_rgba(183,110,121,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-rose-gold-light/20 flex items-center justify-center text-rose-gold mb-6">
                  {service.icon}
                </div>

                {/* Service Name */}
                <h3 className="font-serif text-xl text-charcoal font-semibold mb-3">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="text-charcoal-light text-sm font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Service Footer / Price Info */}
              <div className="pt-6 border-t border-rose-gold-light/15 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-xs text-charcoal-light/60 uppercase tracking-widest block">Başlangıç</span>
                  <span className="text-lg font-semibold text-rose-gold-dark">{service.price}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-charcoal-light/60 uppercase tracking-widest block">Süre</span>
                  <span className="text-sm font-medium text-charcoal">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner inside Services */}
        <div className="mt-16 bg-gradient-to-r from-charcoal to-charcoal-dark text-gold-50 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-rose-gold/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 mb-6 md:mb-0 max-w-xl text-center md:text-left">
            <h4 className="font-serif text-2xl md:text-3xl mb-3">Tırnaklarınıza Sanatla Dokunalım</h4>
            <p className="text-gold-100/70 font-light text-sm leading-relaxed">
              Tırnak yapınıza en uygun protez uygulaması ve hayalinizdeki nail art çizimleri için hemen bugün randevunuzu oluşturun.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a
              href="https://wa.me/905424503287?text=Merhaba,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-rose-gold hover:bg-rose-gold-dark text-white text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(183,110,121,0.2)]"
            >
              Hemen Randevu Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
