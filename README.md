# Nail Art Nurr — Website

**One-page website for Nail Art Nurr, a nail art and nail care salon in Çukurova, Adana.**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

> Client project — designed and developed by Berke Coşkuner for **Nail Art Nurr**.

**Live:** [nailartnurr.com](https://nailartnurr.com)

---

## Overview

A Turkish-language, single-page website for Nail Art Nurr, a salon offering nail extensions, gel polish, custom nail art, manicure and pedicure in the Huzurevleri neighbourhood of Çukurova, Adana. The site presents the salon's services and price list, shows a portfolio of work and makes it easy for visitors to book an appointment over WhatsApp or find the salon on the map. The visual style uses a gold / rose-gold palette with a serif + sans-serif font pairing.

## Features

- **Sticky navbar** with a glass effect on scroll, mobile menu and a WhatsApp "Randevu Al" (book an appointment) button
- **Hero** section introducing the salon, with anchors to services and contact
- **About** section highlighting hygiene and sterilisation, custom designs and product quality
- **Services & price list** — 6 services: nail extensions (*protez tırnak*), nail art, gel polish (*kalıcı oje*), gel strengthening, medical pedicure and manicure
- **Before / after slider** — interactive comparison that works with mouse and touch dragging
- **Portfolio gallery** with category labels and a lightbox (arrow keys to navigate, Esc to close)
- **Review marquee** (`ReviewRiver`) — an infinitely scrolling strip of customer comments
- **Contact** — opening hours, click-to-call, WhatsApp link, street address and an embedded Google Map
- **SEO** — Turkish metadata and keywords, Open Graph tags, `robots.txt` and `sitemap.xml` generated with App Router metadata routes

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 (custom `@theme` colour tokens) |
| Fonts | `next/font` — Playfair Display, Outfit |
| Linting | ESLint 9 (`eslint-config-next`) |

## Project structure

```text
nail.artnurr/
├── public/images/          # Portfolio photos used by the hero, about, slider and gallery
├── scripts/
│   └── download-images.js  # Downloads the portfolio images from the salon's Instagram posts
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Fonts, SEO metadata, Open Graph
│   │   ├── page.tsx        # One-page layout (section order)
│   │   ├── globals.css     # Tailwind v4 theme: gold / rose-gold / charcoal tokens
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   └── components/         # Navbar, Hero, About, Services, BeforeAfter,
│                           # Gallery, ReviewRiver, Contact, Footer
└── next.config.ts          # Allows remote images from Instagram CDNs
```

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm run start
```

To refresh the portfolio images from Instagram:

```bash
node scripts/download-images.js   # saves files to public/images/
```

No environment variables are required.

## Editing content

| What | Where |
| --- | --- |
| Services, descriptions and prices | `src/components/Services.tsx` |
| Gallery items (image, title, category) | `src/components/Gallery.tsx` |
| Before / after images | `src/components/BeforeAfter.tsx` |
| Opening hours, phone, address, map | `src/components/Contact.tsx` |
| Page title, description, keywords | `src/app/layout.tsx` |

---

## Türkçe

**Adana Çukurova'daki nail art ve tırnak bakım salonu Nail Art Nurr için tek sayfalık web sitesi.**

> Müşteri projesi — **Nail Art Nurr** için Berke Coşkuner tarafından tasarlandı ve geliştirildi.

**Canlı:** [nailartnurr.com](https://nailartnurr.com)

### Genel bakış

Adana Çukurova, Huzurevleri Mahallesi'nde protez tırnak, kalıcı oje, nail art, manikür ve pedikür hizmeti veren Nail Art Nurr için hazırlanmış Türkçe, tek sayfalık web sitesi. Site; salonun hizmetlerini ve fiyat listesini sunar, çalışmalarından bir portföy gösterir ve ziyaretçilerin WhatsApp üzerinden kolayca randevu almasını ya da salonu haritada bulmasını sağlar. Tasarımda altın / rose-gold renk paleti ve serif + sans-serif yazı tipi eşleşmesi kullanılır.

### Özellikler

- Kaydırınca buzlu cam efektli sabit menü, mobil menü ve WhatsApp "Randevu Al" butonu
- Salonu tanıtan **hero** bölümü
- Hijyen ve sterilizasyon, kişiye özel tasarım ve ürün kalitesini anlatan **Hakkımızda** bölümü
- **Hizmetler ve fiyat listesi** — protez tırnak, nail art, kalıcı oje, jel güçlendirme, medikal pedikür ve manikür
- Fare ve dokunmatik ile sürüklenebilen **öncesi / sonrası** karşılaştırma slider'ı
- Kategori etiketli **galeri** ve lightbox (ok tuşlarıyla gezinme, Esc ile kapatma)
- Sonsuz kayan **müşteri yorumları** şeridi
- **İletişim** — çalışma saatleri, tıkla-ara, WhatsApp, açık adres ve gömülü Google Haritası
- **SEO** — Türkçe meta etiketler, Open Graph, `robots.txt` ve `sitemap.xml`

### Teknolojiler

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, `next/font` (Playfair Display, Outfit).

### Kurulum

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

Portföy görsellerini Instagram'dan yeniden indirmek için: `node scripts/download-images.js`. Ortam değişkeni gerekmez.

### İçerik düzenleme

- Hizmetler ve fiyatlar → `src/components/Services.tsx`
- Galeri → `src/components/Gallery.tsx`
- Öncesi / sonrası görselleri → `src/components/BeforeAfter.tsx`
- Çalışma saatleri, telefon, adres, harita → `src/components/Contact.tsx`
- Sayfa başlığı ve SEO → `src/app/layout.tsx`

---

Built by [Berke Coşkuner](https://github.com/CoskunerBerke)
