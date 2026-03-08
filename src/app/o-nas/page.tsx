import { PageHero } from "@/components/PageHero";

export default function ONasPage() {
  return (
    <div className="flex flex-col overflow-x-hidden font-manrope">
      <PageHero 
        title="O nás" 
        subtitle="Jsme tým expertů, kteří zjednodušují svět IT pro firmy i domácnosti."
        breadcrumbs={["Domů", "O nás"]}
      />
      <section className="mx-auto max-w-7xl w-full px-6 py-24 md:px-12">
        <div className="flex flex-col gap-8 max-w-4xl">
          <p className="text-lg text-[#334155] leading-relaxed">
            ThinkHome vzniklo s jednoduchou vizí: Zjednodušit IT tak, aby se v něm nikdo nenechal nachytat. Viděli jsme příliš mnoho firem, které platily za služby, které nepotřebovaly, nebo měly roztříštěné dodavatele, kteří se vymlouvali jeden na druhého.
          </p>
          <p className="text-lg text-[#334155] leading-relaxed font-bold">
            My jsme ten jeden partner, kterého potřebujete.
          </p>
          <div className="h-px w-full bg-slate-200 my-4" />
          <p className="text-[#64748b] leading-relaxed">
            Naše vize je postavená na transparentnosti, bezpečnosti a lidském přístupu. Nejsme jen "ajťáci", jsme vaši partneři v digitálním světě.
          </p>
          <p className="text-[#64748b] italic mt-8">
            Příběh našeho týmu a vize ThinkHome právě sepisujeme.
          </p>
        </div>
      </section>
    </div>
  );
}
