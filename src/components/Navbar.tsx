"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#002bff] shadow-lg py-[16px] md:py-[24px]" : "bg-transparent py-[24px] md:py-[48px]"} px-[24px] md:px-[48px]`}>
        <nav className="w-full flex items-center justify-between">
        <div className="font-[800] text-[20px] md:text-[24px] text-white">
          &lt;thinkhome&gt;
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[40px]">
          <Link href="/" className="text-[#ffffff] font-[600] text-[16px]">Domů</Link>
          <Link href="/o-nas" className="text-[#ffffff] opacity-70 hover:opacity-100 transition-opacity font-[500] text-[16px]">O nás</Link>
          <Link href="/sluzby" className="text-[#ffffff] opacity-70 hover:opacity-100 transition-opacity font-[500] text-[16px]">Služby</Link>
          <Link href="/kontakt" className="text-[#ffffff] opacity-70 hover:opacity-100 transition-opacity font-[500] text-[16px]">Kontakt</Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(true)}
          aria-label="Otevřít menu"
        >
          <Menu className="w-7 h-7 text-white" />
        </button>
      </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0f172a] flex flex-col justify-between p-6">
          <div className="w-full flex items-center justify-between">
            <div className="font-[800] text-[20px] text-white">
              &lt;thinkhome&gt;
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Zavřít menu"
            >
              <X className="w-7 h-7 text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-2 w-full mt-[40px]">
            <Link href="/" className="flex items-center justify-between py-[20px] w-full" onClick={() => setIsMenuOpen(false)}>
              <span className="text-white font-[700] text-[32px]">Domů</span>
              <ArrowRight className="w-6 h-6 text-[#FFFFFF4D]" />
            </Link>
            <div className="h-[1px] w-full bg-[#FFFFFF1A]" />
            <Link href="/o-nas" className="flex items-center justify-between py-[20px] w-full" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#FFFFFFCC] font-[700] text-[32px]">O nás</span>
              <ArrowRight className="w-6 h-6 text-[#FFFFFF4D]" />
            </Link>
            <div className="h-[1px] w-full bg-[#FFFFFF1A]" />
            <Link href="/sluzby" className="flex items-center justify-between py-[20px] w-full" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#FFFFFFCC] font-[700] text-[32px]">Služby</span>
              <ArrowRight className="w-6 h-6 text-[#FFFFFF4D]" />
            </Link>
            <div className="h-[1px] w-full bg-[#FFFFFF1A]" />
            <Link href="/kontakt" className="flex items-center justify-between py-[20px] w-full" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#FFFFFFCC] font-[700] text-[32px]">Kontakt</span>
              <ArrowRight className="w-6 h-6 text-[#FFFFFF4D]" />
            </Link>
          </div>

          <div className="flex flex-col gap-[24px] w-full mt-auto mb-2">
            <button className="w-full bg-[#002bff] text-white py-[16px] px-[32px] rounded-[8px] font-[800] text-[16px] text-center">
              Kontaktujte nás
            </button>
            <div className="flex items-center justify-center gap-[16px]">
              <a href="mailto:info@thinkhome.org" className="text-white opacity-80 hover:opacity-100 transition-opacity text-[13px] font-normal">info@thinkhome.org</a>
              <span className="text-[#FFFFFF4D] text-[13px] font-bold">·</span>
              <a href="tel:+420222160782" className="text-white opacity-80 hover:opacity-100 transition-opacity text-[13px] font-normal">+420 222 160 782</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
