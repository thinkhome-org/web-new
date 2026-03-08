"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home, Mail, Menu, Settings, Users, X, type LucideIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { NAV_ITEMS, type NavItem } from "@/lib/site-content";

const ICONS: Record<string, LucideIcon> = {
  Domů: Home,
  Kontakt: Mail,
  "O nás": Users,
  Služby: Settings,
};

export interface NavbarProps {
  position?: "fixed" | "static";
}

function isNavItemActive(item: NavItem, pathname: string): boolean {
  if (item.href === "/kontakt") {
    return pathname === "/kontakt";
  }

  if (item.href === "/") {
    return (
      pathname === "/" ||
      pathname === "/cenik-sluzeb" ||
      pathname === "/obchodni-podminky" ||
      pathname === "/ochrana-osobnich-udaju"
    );
  }

  return false;
}

function DesktopNavItem({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}): React.JSX.Element {
  const isActive = isNavItemActive(item, pathname);
  const className = isActive
    ? "text-base font-semibold text-white"
    : "text-base font-medium text-white/70 transition-opacity hover:opacity-100";

  if (item.href) {
    return (
      <Link className={className} href={item.href}>
        {item.label}
      </Link>
    );
  }

  return (
    <span aria-disabled="true" className={`${className} cursor-default`}>
      {item.label}
    </span>
  );
}

function MobileNavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
  pathname: string;
}): React.JSX.Element {
  const Icon = ICONS[item.label];
  const isActive = isNavItemActive(item, pathname);
  const rowClassName = isActive
    ? "bg-slate-800 text-white"
    : item.href
      ? "text-white/70 transition-colors hover:bg-white/5"
      : "text-white/70";

  if (item.href) {
    return (
      <Link
        className={`flex items-center gap-4 rounded-xl px-4 py-[14px] ${rowClassName}`}
        href={item.href}
        onClick={onNavigate}
      >
        <Icon className={isActive ? "h-5 w-5 text-white" : "h-5 w-5 text-white/50"} />
        <span className={isActive ? "grow text-base font-bold" : "grow text-base font-semibold"}>
          {item.label}
        </span>
        <ChevronRight
          className={
            isActive ? "h-[18px] w-[18px] text-white/40" : "h-[18px] w-[18px] text-white/25"
          }
        />
      </Link>
    );
  }

  return (
    <div
      aria-disabled="true"
      className={`flex items-center gap-4 rounded-xl px-4 py-[14px] ${rowClassName}`}
    >
      <Icon className="h-5 w-5 text-white/50" />
      <span className="grow text-base font-semibold">{item.label}</span>
      <ChevronRight className="h-[18px] w-[18px] text-white/25" />
    </div>
  );
}

export function Navbar({ position }: NavbarProps = {}): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const effectivePosition = position ?? (pathname === "/" ? "fixed" : "static");
  const navClassName = useMemo(() => {
    if (effectivePosition === "static") {
      return "bg-primary relative z-50 w-full px-6 py-6 md:px-12 md:py-6";
    }

    return `fixed inset-x-0 top-0 z-50 w-full px-6 py-6 transition-colors duration-300 md:px-12 md:py-6 ${
      isScrolled ? "bg-primary/96 backdrop-blur-sm" : "bg-transparent"
    }`;
  }, [effectivePosition, isScrolled]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (effectivePosition !== "fixed") {
      return;
    }

    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [effectivePosition]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const menuNode = menuRef.current;
    if (!menuNode) {
      return;
    }

    const focusableElements = menuNode.querySelectorAll<HTMLElement>("a[href], button");
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={navClassName}>
        <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
          <Link className="text-[20px] font-extrabold text-white md:text-2xl" href="/">
            &lt;thinkhome&gt;
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem item={item} key={item.label} pathname={pathname} />
            ))}
          </div>

          <button
            aria-label="Otevřít menu"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </nav>
      </header>

      {isMenuOpen ? (
        <div className="bg-dark fixed inset-0 z-[60]" onClick={() => setIsMenuOpen(false)}>
          <div
            aria-label="Mobilní menu"
            aria-modal="true"
            className="flex h-full w-full flex-col px-6 py-6"
            onClick={(event) => event.stopPropagation()}
            ref={menuRef}
            role="dialog"
          >
            <div className="flex items-center justify-between">
              <Link
                className="text-[20px] font-extrabold text-white"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                &lt;thinkhome&gt;
              </Link>
              <button aria-label="Zavřít menu" onClick={() => setIsMenuOpen(false)} type="button">
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem
                  item={item}
                  key={item.label}
                  onNavigate={() => setIsMenuOpen(false)}
                  pathname={pathname}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
