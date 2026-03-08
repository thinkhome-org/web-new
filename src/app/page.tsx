import Link from "next/link";

import { ArrowDown } from "lucide-react";

import { Navbar } from "@/components/Navbar";

export default function Home(): React.JSX.Element {
  return (
    <>
      <Navbar position="fixed" />
      <section className="bg-primary relative z-10 flex min-h-screen w-full flex-col items-center justify-between overflow-hidden px-6 pt-(--navbar-height) pb-6 text-white md:px-12 md:pb-12">
        <div className="flex w-full max-w-[1440px] grow flex-col items-center justify-center gap-8 text-center md:gap-10">
          <p className="text-sm font-semibold text-white/40">Vše okolo it bez starostí</p>
          <h1 className="max-w-[920px] text-[48px] leading-[1.05] font-extrabold md:text-[72px]">
            Kompletní IT
            <br />
            pod jednou střechou.
          </h1>
          <p className="max-w-[840px] text-base leading-7 text-white/80 md:text-xl md:leading-8">
            Zjednodušujeme IT tak, aby se firmy nenechaly nachytat a nemusely řešit několik
            dodavatelů zároveň. Věnujte se byznysu, IT nechte na nás.
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
            <Link
              className="text-primary inline-flex min-h-14 min-w-[196px] items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-extrabold transition-opacity hover:opacity-90 md:text-base"
              href="/kontakt"
            >
              Kontaktujte nás
            </Link>
            <Link
              className="inline-flex min-h-14 items-center justify-center rounded-lg px-8 py-4 text-sm font-semibold text-white/70 transition-colors hover:text-white md:text-base"
              href="/cenik-sluzeb"
            >
              Zjistit více
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 pb-2 text-center">
          <span className="text-[12px] font-semibold tracking-[0.12em] text-white/60">
            Posuňte dolů
          </span>
          <div className="flex h-10 w-10 animate-bounce items-center justify-center text-white/50">
            <ArrowDown className="h-[18px] w-[18px]" strokeWidth={3} />
          </div>
        </div>
      </section>
    </>
  );
}
