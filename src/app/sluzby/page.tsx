import { PageHero } from "@/components/PageHero";

export default function SluzbyPage() {
  return (
    <div className="flex flex-col overflow-x-hidden font-manrope">
      <PageHero 
        title="Služby" 
        subtitle="Zajišťujeme kompletní IT správu, bezpečnost i moderní technologie pro váš růst."
        breadcrumbs={["Domů", "Služby"]}
      />
      <section className="mx-auto max-w-7xl w-full px-6 py-24 md:px-12">
        <div className="flex flex-col gap-8 max-w-4xl">
          <p className="text-lg text-[#334155] leading-relaxed">
            V ThinkHome věříme, že IT by mělo být neviditelným, ale spolehlivým motorem vašeho podnikání. Naším cílem je zbavit vás starostí s technologiemi, abyste se mohli naplno věnovat tomu, co umíte nejlépe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-[#0f172a]">Správa a podpora</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">Kompletní dohled nad vaší infrastrukturou, koncovými zařízeními a uživatelská podpora, která skutečně pomáhá.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-[#0f172a]">Cloud a infrastruktura</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">Moderní řešení pro spolupráci a bezpečné ukládání dat v cloudu i na vlastních serverech.</p>
            </div>
          </div>
          <p className="text-[#64748b] italic mt-12">
            Detailní portfolio služeb a konkrétní případové studie právě připravujeme.
          </p>
        </div>
      </section>
    </div>
  );
}
