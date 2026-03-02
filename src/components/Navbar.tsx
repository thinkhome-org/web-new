"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "/", label: "Domů" },
  { href: "/o-nas", label: "O nás" },
  { href: "/sluzby", label: "Služby" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Esc klávesa a Focus trap
  useEffect(() => {
    if (!isMenuOpen) return;

    const menuNode = menuRef.current;
    if (!menuNode) return;

    const focusableElements = menuNode.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])',
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    firstElement.focus();
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Optimalizovaný scroll listener pomocí requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Dle specifikace není nutné předávat { passive: true } do removeEventListener, ale dodržujeme konvenci
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Správa scrollování body a listener na resize okna
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Zavřít mobilní menu, pokud se okno zvětší na desktopovou velikost (md: 768px)
        if (window.innerWidth >= 768 && isMenuOpen) {
          setIsMenuOpen(false);
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-primary py-4 shadow-lg md:py-6" : "bg-transparent py-6 md:py-12"} px-6 md:px-12`}
      >
        <nav className="flex w-full items-center justify-between">
          <div className="text-xl font-extrabold text-white md:text-2xl">&lt;thinkhome&gt;</div>

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
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobilní menu"
          className="bg-dark fixed inset-0 z-50 flex flex-col justify-between p-6"
        >
          <div className="flex w-full items-center justify-between">
            <div className="text-xl font-extrabold text-white">&lt;thinkhome&gt;</div>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Zavřít menu">
              <X className="h-7 w-7 text-white" />
            </button>
          </div>

          <div className="mt-10 flex w-full flex-col gap-2">
            {NAV_LINKS.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.href} className="w-full">
                  <Link
                    href={link.href}
                    className="flex w-full items-center justify-between py-5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span
                      className={`text-3xl font-bold ${isActive ? "text-white" : "text-white/80"}`}
                    >
                      {link.label}
                    </span>
                    <ArrowRight className="h-6 w-6 text-white/30" />
                  </Link>
                  {index < NAV_LINKS.length - 1 && <div className="h-px w-full bg-white/10" />}
                </div>
              );
            })}
          </div>

          <div className="mt-auto mb-2 flex w-full flex-col gap-6">
            <button className="bg-primary w-full rounded-lg px-8 py-4 text-center text-base font-extrabold text-white">
              Kontaktujte nás
            </button>
            <div className="flex items-center justify-center gap-4">
              <a
                href="mailto:info@thinkhome.org"
                className="text-[13px] font-normal text-white opacity-80 transition-opacity hover:opacity-100"
              >
                info@thinkhome.org
              </a>
              <span className="text-[13px] font-bold text-white/30">·</span>
              <a
                href="tel:+420222160782"
                className="text-[13px] font-normal text-white opacity-80 transition-opacity hover:opacity-100"
              >
                +420 222 160 782
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
