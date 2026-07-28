import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Nail Art Nurr | Adana Protez Tırnak, Kalıcı Oje ve Nail Art Salonu",
  description: "Adana Çukurova'da en trend nail art tasarımları, profesyonel protez tırnak, kalıcı oje ve manikür hizmetleri. Hijyenik ortamda, el ve ayak bakımınız için lüks dokunuşlar.",
  keywords: ["adana nail art", "çukurva protez tırnak", "adana protez tırnak", "kalıcı oje adana", "nail art nurr", "manikür pedikür adana", "tırnak süsleme"],
  authors: [{ name: "Nail Art Nurr" }],
  openGraph: {
    title: "Nail Art Nurr | Adana Protez Tırnak ve Nail Art Salonu",
    description: "Adana Çukurova'da en trend nail art tasarımları ve profesyonel tırnak bakımı.",
    url: "https://nailartnurr.com",
    siteName: "Nail Art Nurr",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gold-50 text-charcoal">
        {children}
      </body>
    </html>
  );
}
