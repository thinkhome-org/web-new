import Link from "next/link";

import { FOOTER_LINKS } from "@/lib/site-content";

export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-dark shadow-footer relative z-20 flex w-full justify-center">
      <div className="flex w-full max-w-[1440px] flex-col gap-4 px-6 py-6 md:gap-5 md:px-12 md:py-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-[20px] font-extrabold text-white transition-opacity hover:opacity-80 md:text-2xl">
            &lt;thinkhome&gt;
          </div>
          <div className="flex flex-col gap-1.5 md:flex-row md:items-center md:gap-8">
            <a
              className="text-sm text-white/80 transition-opacity hover:opacity-100 md:text-base"
              href="mailto:info@thinkhome.org"
            >
              info@thinkhome.org
            </a>
            <a
              className="text-sm text-white/80 transition-opacity hover:opacity-100 md:text-base"
              href="tel:+420222160782"
            >
              +420 222 160 782
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="order-2 text-[12px] text-white/50 md:order-1">
            © 2026 ThinkHome s.r.o. Všechna práva vyhrazena.
          </div>
          <div className="order-1 flex flex-col gap-3 md:order-2 md:flex-row md:items-center md:gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                className="text-sm text-white/50 transition-opacity hover:opacity-100"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
