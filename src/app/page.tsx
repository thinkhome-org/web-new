import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col font-[family-name:var(--font-manrope)]">
      {/* Hero Section */}
      <section className="w-full relative z-10 bg-[#002bff] text-white flex flex-col justify-between items-center min-h-screen p-[24px] md:p-[48px] overflow-hidden pt-[100px] md:pt-[150px]">
        {/* Top Nav (now fixed) */}
        <Navbar />

        {/* Main Content Wrapper */}
        <div className="flex flex-col items-center justify-center gap-[24px] md:gap-[32px] w-full flex-grow">
          
          {/* Badge */}
          <div className="flex items-center opacity-40">
            <span className="font-[600] text-[12px] md:text-[14px]">Vše okolo IT bez starostí</span>
          </div>

          {/* Heading */}
          <h1 className="font-[800] text-[40px] leading-[1.1] md:text-[72px] text-center w-full">
            Kompletní IT
            <br className="hidden md:block" /> pod jednou střechou.
          </h1>

          {/* Description */}
          <p className="font-normal text-[16px] md:text-[20px] text-white opacity-80 md:opacity-80 text-center max-w-[800px] leading-[1.5]">
            Zjednodušujeme IT tak, aby se firmy nenechaly nachytat a nemusely řešit několik dodavatelů zároveň. Věnujte se byznysu, IT nechte na nás.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-[16px] md:gap-[32px] mt-[16px] w-full">
            <button className="bg-white text-[#002bff] px-[32px] py-[16px] rounded-[8px] font-[800] text-[16px] text-center transition-all hover:bg-white/90">
              Kontaktujte nás
            </button>
            <button className="bg-transparent text-white opacity-70 px-[16px] py-[16px] font-[600] text-[16px] text-center transition-all hover:opacity-100">
              Zjistit více
            </button>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="flex flex-col items-center gap-[12px] pb-[16px]">
          <span className="font-[600] text-[12px] tracking-[1px] text-white opacity-60">Posuňte dolů</span>
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[20px] bg-transparent opacity-50 animate-bounce">
            <ArrowDown className="w-[18px] h-[18px] text-white" strokeWidth={3} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
