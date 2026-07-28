"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import ReviewRiver from "@/components/ReviewRiver";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Gallery />
        <ReviewRiver />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
