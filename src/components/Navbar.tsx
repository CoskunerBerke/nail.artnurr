"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Hizmetler", href: "#hizmetler" },
    { name: "Değişim", href: "#degisim" },
    { name: "Galeri", href: "#galeri" },
    { name: "Yorumlar", href: "#yorumlar" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="font-serif tracking-widest text-lg md:text-xl font-semibold uppercase text-rose-gold-dark hover:text-rose-gold transition-colors duration-300"
            >
              Nail Art Nurr
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-charcoal hover:text-rose-gold text-sm tracking-wide uppercase transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/905424503287?text=Merhaba,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-rose-gold text-white font-medium text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(183,110,121,0.3)] hover:bg-rose-gold-dark hover:shadow-[0_0_20px_rgba(183,110,121,0.5)] transition-all duration-300"
            >
              {/* WhatsApp Icon */}
              <svg
                className="w-4 h-4 mr-2 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.782.001-2.592-1.006-5.031-2.836-6.861-1.83-1.83-4.27-2.834-6.862-2.835-5.41 0-9.813 4.381-9.815 9.782-.001 1.79.499 3.479 1.447 4.965l-.965 3.525 3.636-.95zM17.65 14.92c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-1.02-.51-1.74-.83-2.43-2.01-.2-.35-.2-.1-.05.1.75.9 1.38 1.83 2.1 2.9.22.3.2.58-.08.73-.28.15-.62.3-.92.35-.3.05-.6.1-.88-.05-.28-.15-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.58-1.98-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.25-.24-.59-.49-.51-.68-.52-.18-.01-.38-.01-.58-.01-.2 0-.53.08-.8.38-.28.3-1.08 1.05-1.08 2.57 0 1.52 1.11 3 1.26 3.2.15.2 2.19 3.34 5.3 4.69.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.28-.2-.58-.35z" />
              </svg>
              Randevu Al
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-rose-gold focus:outline-none"
              aria-label="Menüyü Aç"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-gold-50 border-b border-rose-gold-light/20`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-charcoal hover:text-rose-gold uppercase tracking-wider transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="https://wa.me/905424503287?text=Merhaba,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-4/5 px-6 py-3 rounded-full bg-rose-gold text-white font-medium text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(183,110,121,0.3)] hover:bg-rose-gold-dark hover:shadow-[0_0_20px_rgba(183,110,121,0.5)] transition-all duration-300"
            >
              {/* WhatsApp Icon */}
              <svg
                className="w-4 h-4 mr-2 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.782.001-2.592-1.006-5.031-2.836-6.861-1.83-1.83-4.27-2.834-6.862-2.835-5.41 0-9.813 4.381-9.815 9.782-.001 1.79.499 3.479 1.447 4.965l-.965 3.525 3.636-.95zM17.65 14.92c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-1.02-.51-1.74-.83-2.43-2.01-.2-.35-.2-.1-.05.1.75.9 1.38 1.83 2.1 2.9.22.3.2.58-.08.73-.28.15-.62.3-.92.35-.3.05-.6.1-.88-.05-.28-.15-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.58-1.98-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.25-.24-.59-.49-.51-.68-.52-.18-.01-.38-.01-.58-.01-.2 0-.53.08-.8.38-.28.3-1.08 1.05-1.08 2.57 0 1.52 1.11 3 1.26 3.2.15.2 2.19 3.34 5.3 4.69.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.28-.2-.58-.35z" />
              </svg>
              Randevu Al
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
