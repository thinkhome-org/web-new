import { Navbar } from "@/components/Navbar";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar position="fixed" />
      {/* Hero Section */}
      <section className="bg-primary relative z-10 flex min-h-screen w-full flex-col items-center justify-between overflow-hidden p-6 pt-(--navbar-height) text-white md:p-12 md:pt-(--navbar-height)">
        {/* Main Content Wrapper */}
        <div className="flex w-full grow flex-col items-center justify-center gap-6 md:gap-8">
          {/* Badge */}
          <div className="flex items-center opacity-40">
            <span className="text-xs font-semibold md:text-sm">Vše okolo IT bez starostí</span>
          </div>

          {/* Heading */}
          <h1 className="w-full text-center text-[40px] leading-tight font-extrabold md:text-7xl">
            Kompletní IT
            <br className="hidden md:block" /> pod jednou střechou.
          </h1>

          {/* Description */}
          <p className="max-w-[800px] text-center text-base leading-relaxed font-normal text-white opacity-80 md:text-xl md:opacity-80">
            Zjednodušujeme IT tak, aby se firmy nenechaly nachytat a nemusely řešit několik
            dodavatelů zároveň. Věnujte se byznysu, IT nechte na nás.
          </p>

          {/* Buttons Row */}
          <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <button className="text-primary rounded-lg bg-white px-8 py-4 text-center text-base font-extrabold transition-all hover:bg-white/90">
              Kontaktujte nás
            </button>
            <button className="bg-transparent px-4 py-4 text-center text-base font-semibold text-white opacity-70 transition-all hover:opacity-100">
              Zjistit více
            </button>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="flex flex-col items-center gap-3 pb-4">
          <span className="text-xs font-semibold tracking-wide text-white opacity-60">
            Posuňte dolů
          </span>
          <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-transparent opacity-50">
            <ArrowDown className="h-[18px] w-[18px] text-white" strokeWidth={3} />
          </div>
        </div>
      </section>
    </>
  );
}
