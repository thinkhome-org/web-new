"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between">
        <div className="font-[800] text-[20px] md:text-[24px] text-white">
          &lt;thinkhome&gt;
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[40px]">
          <Link href="/" className="text-[#ffffff] font-[600] text-[16px]">Domů</Link>
          <Link href="/o-nas" className="text-[#ffffff] opacity-70 font-[500] text-[16px]">O nás</Link>
          <Link href="/sluzby" className="text-[#ffffff] opacity-70 font-[500] text-[16px]">Služby</Link>
          <Link href="/kontakt" className="text-[#ffffff] opacity-70 font-[500] text-[16px]">Kontakt</Link>
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0f172a] flex flex-col justify-between p-6">
          <div className="w-full flex items-center justify-between">
            <div className="font-[800] text-[20px] text-white">
              &lt;thinkhome&gt;
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
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
              <span className="text-[#FFFFFF80] text-[13px] font-normal">info@thinkhome.org</span>
              <span className="text-[#FFFFFF4D] text-[13px] font-bold">·</span>
              <span className="text-[#FFFFFF80] text-[13px] font-normal">+420 222 160 782</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
