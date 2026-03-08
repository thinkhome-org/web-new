import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[844px] w-full flex-col justify-between bg-[#002bff] p-6 md:min-h-[900px] md:p-12">
        <div /> {/* Spacer for flex-between since Navbar is fixed/absolute */}
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center md:gap-10">
          {/* Badge */}
          <div className="inline-flex rounded-full border border-white/40 bg-transparent px-4 py-2 opacity-40 md:px-6">
            <span className="text-[10px] font-bold tracking-widest text-white uppercase md:text-xs">
              IT řešení pro firmy a domácnosti
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl leading-[1.1] font-extrabold text-white md:text-7xl lg:text-[72px]">
            Kompletní IT <br /> pod jednou střechou.
          </h1>

          {/* Description */}
          <p className="max-w-3xl text-lg leading-relaxed font-normal text-white/80 md:text-xl lg:text-[20px]">
            Zjednodušujeme IT tak, aby se firmy nenechaly nachytat a nemusely řešit několik
            dodavatelů zároveň. Věnujte se byznysu, IT nechte na nás.
          </p>

          {/* Button Row */}
          <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link
              href="/kontakt"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#002bff] transition-all hover:scale-105 hover:bg-white/95"
            >
              Nezávazná konzultace
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/sluzby"
              className="text-base font-semibold text-white/90 decoration-white/30 underline-offset-8 transition-all hover:decoration-white"
            >
              Prohlédnout služby
            </Link>
          </div>
        </div>
        {/* Bottom Indicator */}
        <div className="flex flex-col items-center gap-4 pb-4 md:pb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
            Posuňte dolů
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-transparent">
            <ChevronDown className="h-5 w-5 animate-bounce text-white" />
          </div>
        </div>
      </section>

      {/* Hero section ends here as per initial pencil design view. Other sections would follow. */}
    </div>
  );
}
