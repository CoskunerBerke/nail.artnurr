"use client";

const reviews = [
  {
    id: 1,
    name: "Zeynep Yılmaz",
    date: "1 hafta önce",
    rating: 5,
    text: "Adana'da gitmediğim nail art salonu kalmadı ama Nur Hanım'ın temizliği, el pratikliği ve güler yüzü bambaşka. Tırnaklarım asla yıpranmıyor. Protez tırnakta tek adresim!"
  },
  {
    id: 2,
    name: "Melis Şahin",
    date: "3 gün önce",
    rating: 5,
    text: "Kalıcı oje için geliyorum, 4 hafta geçmesine rağmen tek bir kalkma veya soyulma olmadı. Tırnak süsleme çizimleri tam anlamıyla bir sanat eseri. Kesinlikle tavsiye ederim."
  },
  {
    id: 3,
    name: "Elif Demir",
    date: "2 hafta önce",
    rating: 5,
    text: "Çukurova Huzurevleri şubesinde bugün manikür ve jel güçlendirme yaptırdım. Hijyen konusunda inanılmaz titizler, tüm aletler gözümün önünde otoklavdan çıkarıldı. Çok memnun kaldım."
  },
  {
    id: 4,
    name: "Buse Kaya",
    date: "5 gün önce",
    rating: 5,
    text: "Instagram'dan görüp gelmiştim, iyi ki gelmişim. İstediğim nail art modelinin birebir aynısını, hatta çok daha zarifini yaptılar. Güler yüzlü hizmet ve harika kahve ikramı!"
  },
  {
    id: 5,
    name: "Ceren Aslan",
    date: "1 ay önce",
    rating: 5,
    text: "Medikal ayak bakımı ve pedikür yaptırdım. Kendimi pamuk gibi hissediyorum. Ortam çok şık, çok ferah ve çalışanlar aşırı profesyonel. Düzenli olarak geleceğim."
  },
  {
    id: 6,
    name: "Merve Çelik",
    date: "2 hafta önce",
    rating: 5,
    text: "Protez tırnak yaptırırken hep tırnağım zarar görür diye korkardım ama burada kullanılan kaliteli malzemeler sayesinde hiçbir sorun yaşamadım. Tasarımlar harika!"
  }
];

// Doubling the array to make the infinite loop transition seamless
const doubledReviews = [...reviews, ...reviews];

export default function ReviewRiver() {
  return (
    <section id="yorumlar" className="py-24 bg-gold-50/30 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-rose-gold-medium/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-rose-gold font-medium text-xs tracking-widest uppercase mb-4 block">
            Müşteri Deneyimleri
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal mb-4">
            Misafirlerimizin <span className="font-serif italic text-rose-gold">Gözünden</span>
          </h2>
          <div className="w-20 h-[1px] bg-rose-gold/40 mx-auto my-6" />
          <p className="text-charcoal-light font-light text-base leading-relaxed">
            Salonumuzdan mutlu ayrılan misafirlerimizin Google Maps ve sosyal medya üzerinden 
            bizimle paylaştığı en güncel ve samimi geri bildirimler.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper Container */}
      <div className="w-full relative flex items-center overflow-x-hidden py-4 select-none">
        {/* Infinite Scrolling River */}
        {/* We use hover:[animation-play-state:running] explicitly to guarantee the animation NEVER stops on hover */}
        <div className="flex w-max space-x-6 animate-marquee hover:[animation-play-state:running]">
          {doubledReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[320px] md:w-[380px] bg-white rounded-3xl p-8 border border-rose-gold-light/10 shadow-[0_10px_35px_rgba(183,110,121,0.03)] flex flex-col justify-between"
            >
              <div>
                {/* Header: Name, Stars & Date */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-charcoal text-base">{review.name}</h4>
                    <span className="text-xs text-charcoal-light/50">{review.date}</span>
                  </div>
                  {/* Stars Group */}
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-rose-gold fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-charcoal-light text-sm font-light leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Social Proof Tag */}
              <div className="mt-6 flex items-center text-xs text-rose-gold font-medium">
                {/* Google Maps Logo Icon */}
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Google Maps Doğrulanmış Yorum
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
