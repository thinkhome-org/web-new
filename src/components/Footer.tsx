import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] flex flex-col p-[24px] gap-[16px] md:px-[64px] md:py-[64px] md:gap-[32px]">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
        <div className="font-[800] text-[20px] md:text-[24px] text-white">
          &lt;thinkhome&gt;
        </div>
        <div className="flex flex-col md:flex-row gap-[8px] mt-[16px] md:mt-0">
          <span className="text-white opacity-80 font-normal text-[14px] md:text-[16px]">info@thinkhome.org</span>
          <span className="text-white opacity-80 font-normal text-[14px] md:text-[16px]">+420 222 160 782</span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-white opacity-10" />

      {/* Bottom section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center w-full gap-[16px] md:gap-0">
        <div className="text-white opacity-50 text-[12px] md:text-[14px] font-normal">
          © 2026 ThinkHome s.r.o. Všechna práva vyhrazena.
        </div>
        <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px]">
          <Link href="#" className="text-white opacity-50 text-[14px] font-normal">Ceník služeb</Link>
          <Link href="#" className="text-white opacity-50 text-[14px] font-normal">Obchodní podmínky</Link>
          <Link href="#" className="text-white opacity-50 text-[14px] font-normal">Ochrana osobních údajů</Link>
        </div>
      </div>
    </footer>
  );
}
