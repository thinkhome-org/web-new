import type { PriceSection } from "@/lib/site-content";

interface PricingTableProps {
  section: PriceSection;
}

export function PricingTable({ section }: PricingTableProps): React.JSX.Element {
  return (
    <section className="flex flex-col gap-4 md:gap-5">
      <h2 className="text-[24px] leading-tight font-extrabold text-slate-900">{section.title}</h2>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="hidden grid-cols-[1.1fr_1.6fr_0.8fr] gap-6 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-bold text-slate-500 md:grid">
          <span>Služba</span>
          <span>Popis</span>
          <span className="text-right">Cena (bez DPH)</span>
        </div>

        <div className="divide-y divide-slate-200">
          {section.items.map((item) => (
            <div
              className="grid gap-2 px-4 py-4 md:grid-cols-[1.1fr_1.6fr_0.8fr] md:gap-6 md:px-6 md:py-5"
              key={item.service}
            >
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold tracking-[0.12em] text-slate-400 uppercase md:hidden">
                  Služba
                </span>
                <p className="text-sm leading-6 font-semibold text-slate-900">{item.service}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold tracking-[0.12em] text-slate-400 uppercase md:hidden">
                  Popis
                </span>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
              <div className="flex flex-col gap-1 md:items-end">
                <span className="text-[11px] font-bold tracking-[0.12em] text-slate-400 uppercase md:hidden">
                  Cena (bez DPH)
                </span>
                <p className="text-primary text-sm leading-6 font-semibold md:text-right">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
