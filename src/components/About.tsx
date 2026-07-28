"use client";

export default function About() {
  const aboutImageSrc = "https://www.instagram.com/p/DYVPS6nRSdV/media/?size=l";

  return (
    <section id="hakkimizda" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gold-100/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Outer Decorative Gold Border */}
              <div className="absolute -inset-4 rounded-[40px] border border-rose-gold/20 pointer-events-none" />
              
              {/* Image Frame */}
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={aboutImageSrc}
                  alt="Nail Art Nurr Hijyenik Salon Estetiği"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-rose-gold font-medium text-xs tracking-widest uppercase mb-4">
              Hikayemiz & Değerlerimiz
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal mb-6">
              Güzelliğinizi Detaylarda <br />
              <span className="font-serif italic text-rose-gold">Yeniden Keşfedin</span>
            </h2>
            <div className="space-y-6 text-charcoal-light font-light leading-relaxed max-w-2xl">
              <p>
                <strong>Nail Art Nurr</strong>, Adana Çukurova’da tırnak estetiğini sıradan bir bakımdan çıkarıp kişisel bir sanat formuna dönüştürmek amacıyla kuruldu. Stüdyomuzda her misafirimize ayrıcalıklı ve rahatlatıcı bir güzellik deneyimi sunuyoruz.
              </p>
              <p>
                Bizim için en büyük öncelik <strong>hijyendir</strong>. Kullandığımız tüm aletler her işlem öncesinde tıbbi standartlarda sterilize edilmekte ve tek kullanımlık törpü setleri tercih edilmektedir. Sağlığınızdan ödün vermeden, dünya standartlarında lüks ürünlerle tırnaklarınızı güçlendiriyoruz.
              </p>
              <p>
                Protez tırnak, kalıcı oje ve özel çizim nail art uygulamalarında sınır tanımayan uzman kadromuzla, hayalinizdeki tasarımı ellerinize taşıyoruz. Tarzınızı tırnaklarınızla yansıtmak için sizi de kahve eşliğinde bu keyifli deneyime davet ediyoruz.
              </p>
            </div>

            {/* Core Features Icons Row */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-8 border-t border-rose-gold-light/20">
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-10 h-10 rounded-full bg-rose-gold-light/35 flex items-center justify-center text-rose-gold mb-3">
                  {/* Clean/Shield Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-medium text-charcoal text-sm mb-1">Maksimum Hijyen</h4>
                <p className="text-xs text-charcoal-light font-light">Tıbbi sterilizasyon standartları</p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="w-10 h-10 rounded-full bg-rose-gold-light/35 flex items-center justify-center text-rose-gold mb-3">
                  {/* Paint Brush Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="font-medium text-charcoal text-sm mb-1">Kişiye Özel Tasarım</h4>
                <p className="text-xs text-charcoal-light font-light">El yapımı özel nail art çizimleri</p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="w-10 h-10 rounded-full bg-rose-gold-light/35 flex items-center justify-center text-rose-gold mb-3">
                  {/* Premium Brand Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L11 3z" />
                  </svg>
                </div>
                <h4 className="font-medium text-charcoal text-sm mb-1">Lüks Markalar</h4>
                <p className="text-xs text-charcoal-light font-light">Tırnağınıza zarar vermeyen ürünler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
