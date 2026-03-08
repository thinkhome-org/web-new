import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-20 flex w-full flex-col gap-4 bg-[#0f172a] p-6 md:gap-8 md:px-16 md:py-16">
      {/* Top section */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between md:flex-row md:items-center">
        <div className="text-xl font-extrabold text-white md:text-2xl">&lt;thinkhome&gt;</div>
        <div className="mt-4 flex flex-col gap-2 md:mt-0 md:flex-row md:gap-8">
          <a
            href="mailto:info@thinkhome.org"
            className="text-sm font-normal text-white/80 transition-opacity hover:opacity-100 md:text-base"
          >
            info@thinkhome.org
          </a>
          <a
            href="tel:+420222160782"
            className="text-sm font-normal text-white/80 transition-opacity hover:opacity-100 md:text-base"
          >
            +420 222 160 782
          </a>
        </div>
      </div>

      <div className="mx-auto h-px w-full max-w-7xl bg-white/10" />

      {/* Bottom section */}
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center md:gap-0">
        <div className="text-xs font-normal text-white/50 md:text-sm">
          © 2026 ThinkHome s.r.o. Všechna práva vyhrazena.
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:gap-10">
          <Link
            href="/cenik-sluzeb"
            className="text-sm font-normal text-white/50 transition-opacity hover:opacity-100"
          >
            Ceník služeb
          </Link>
          <Link
            href="/obchodni-podminky"
            className="text-sm font-normal text-white/50 transition-opacity hover:opacity-100"
          >
            Obchodní podmínky
          </Link>
          <Link
            href="/ochrana-osobnich-udaju"
            className="text-sm font-normal text-white/50 transition-opacity hover:opacity-100"
          >
            Ochrana osobních údajů
          </Link>
        </div>
      </div>
    </footer>
  );
}
