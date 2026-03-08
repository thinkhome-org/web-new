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
  const menuRef = useRef<HTMLDivElement>(null);
  const isMenuOpenRef = useRef(isMenuOpen);

  const effectivePosition = position || (pathname === "/" ? "fixed" : "static");

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

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

  // Správa scrollování body
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

  // Listener na resize okna
  useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Zavřít mobilní menu, pokud se okno zvětší na desktopovou velikost (md: 768px)
        if (window.innerWidth >= 768 && isMenuOpenRef.current) {
          setIsMenuOpen(false);
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={
          effectivePosition === "fixed"
            ? `fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-primary py-4 shadow-lg md:py-6" : "bg-transparent py-6 md:py-12"} px-6 md:px-12`
            : "bg-primary relative z-50 w-full px-6 py-6 md:px-12 md:py-8"
        }
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
          className="bg-dark fixed inset-0 z-50 flex flex-col"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobilní menu"
            className="flex h-full w-full flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Copy */}
            <div
              className={
                effectivePosition === "fixed"
                  ? `w-full transition-all duration-300 ${isScrolled ? "py-4 md:py-6" : "py-6 md:py-12"} px-6 md:px-12`
                  : "w-full px-6 py-6 md:px-12 md:py-8"
              }
            >
              <nav className="flex w-full items-center justify-between">
                <div className="text-xl font-extrabold text-white md:text-2xl">
                  &lt;thinkhome&gt;
                </div>

                {/* Desktop Links (dummy to match exactly 3 flex items) */}
                <div className="hidden items-center gap-10 md:flex">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <div
                        key={link.href}
                        className={`text-base text-white transition-opacity ${
                          isActive
                            ? "font-semibold opacity-100"
                            : "font-medium opacity-70 hover:opacity-100"
                        }`}
                      >
                        {link.label}
                      </div>
                    );
                  })}
                </div>

                <button
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Zavřít menu"
                >
                  <X className="h-7 w-7 text-white" />
                </button>
              </nav>
            </div>

            {/* Links */}
            <div className="flex w-full flex-col gap-2 px-6 pt-4 pb-8 md:px-12">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex w-full items-center gap-4 rounded-xl p-[14px] transition-colors ${
                      isActive ? "bg-slate-800" : "bg-transparent"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon
                      className={`h-5 w-5 ${isActive ? "text-white" : "text-white/50"}`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
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
        </div>
      )}
    </>
  );
}
