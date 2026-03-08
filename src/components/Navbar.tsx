"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Users, Settings, Mail, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "/", label: "Domů", icon: Home },
  { href: "/o-nas", label: "O nás", icon: Users },
  { href: "/sluzby", label: "Služby", icon: Settings },
  { href: "/kontakt", label: "Kontakt", icon: Mail },
];

export interface NavbarProps {
  position?: "fixed" | "static";
}

export function Navbar({ position }: NavbarProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMenuOpenRef = useRef(isMenuOpen);

  const effectivePosition = position || (pathname === "/" ? "fixed" : "static");

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

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
      <header
        className={
          effectivePosition === "fixed"
            ? `fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
                isScrolled ? "bg-primary py-4 shadow-lg" : "bg-transparent py-6 md:py-12"
              } px-6 md:px-12`
            : "bg-primary relative z-50 w-full px-6 py-6 md:px-12 md:py-8"
        }
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-white md:text-2xl">
            &lt;thinkhome&gt;
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base text-white transition-opacity ${
                    isActive
                      ? "font-semibold opacity-100"
                      : "font-medium opacity-70 hover:opacity-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Otevřít menu"
          >
            <Menu className="h-7 w-7 text-white" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#0f172a] p-6 pt-6 pb-8 md:p-12">
          <div className="mb-10 flex w-full items-center justify-between">
            <div className="text-xl font-extrabold text-white">&lt;thinkhome&gt;</div>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Zavřít menu">
              <X className="h-7 w-7 text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex w-full items-center gap-4 rounded-xl p-[14px] transition-colors ${
                    isActive ? "bg-[#1e293b]" : "bg-transparent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-white/50"}`} />
                  <span
                    className={`grow text-base ${
                      isActive ? "font-bold text-white" : "font-semibold text-white/70"
                    }`}
                  >
                    {link.label}
                  </span>
                  <ChevronRight
                    className={`h-[18px] w-[18px] ${isActive ? "text-white/50" : "text-white/25"}`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
