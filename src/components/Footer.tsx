import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark shadow-footer relative z-20 flex w-full flex-col gap-4 p-6 md:gap-8 md:px-16 md:py-16">
      {/* Top section */}
      <div className="flex w-full flex-col items-start justify-between md:flex-row md:items-center">
        <div className="text-xl font-extrabold text-white md:text-2xl">&lt;thinkhome&gt;</div>
        <div className="mt-4 flex flex-col gap-2 md:mt-0 md:flex-row">
          <a
            href="mailto:info@thinkhome.org"
            className="text-sm font-normal text-white opacity-80 transition-opacity hover:opacity-100 md:text-base"
          >
            info@thinkhome.org
          </a>
          <a
            href="tel:+420222160782"
            className="text-sm font-normal text-white opacity-80 transition-opacity hover:opacity-100 md:text-base"
          >
            +420 222 160 782
          </a>
        </div>
      </div>

      <div className="h-px w-full bg-white opacity-10" />

      {/* Bottom section */}
      <div className="flex w-full flex-col-reverse items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
        <div className="text-xs font-normal text-white opacity-50 md:text-sm">
          © 2026 ThinkHome s.r.o. Všechna práva vyhrazena.
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          <Link href="#" className="text-sm font-normal text-white opacity-50">
            Ceník služeb
          </Link>
          <Link href="#" className="text-sm font-normal text-white opacity-50">
            Obchodní podmínky
          </Link>
          <Link href="#" className="text-sm font-normal text-white opacity-50">
            Ochrana osobních údajů
          </Link>
        </div>
      </div>
    </footer>
  );
}
