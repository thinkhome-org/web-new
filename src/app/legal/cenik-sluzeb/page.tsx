import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { PricingTable } from "@/components/pricing-table";
import { PRICE_INTRO, PRICE_SECTIONS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Ceník služeb | ThinkHome",
  description: "Transparentní ceny a balíčky služeb bez skrytých poplatků.",
};

export default function PriceListPage(): React.JSX.Element {
  return (
    <PageShell
      breadcrumbs={[{ label: "Legal" }, { label: "Ceník služeb" }]}
      subtitle="Transparentní ceny a balíčky služeb bez skrytých poplatků."
      title="Ceník služeb"
      updatedAt="6. března 2026"
    >
      <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-12">
        <p className="max-w-[1120px] text-sm leading-7 text-slate-600 md:text-base">
          {PRICE_INTRO}
        </p>

        {PRICE_SECTIONS.map((section) => (
          <PricingTable key={section.title} section={section} />
        ))}

        <aside className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 md:px-5">
          <p className="text-[11px] font-bold tracking-[0.12em] text-amber-700 uppercase">
            Upozornění
          </p>
          <p className="mt-2 text-sm leading-6 text-amber-800">
            Tento ceník je pouze orientační a slouží výhradně jako přehled tržních mediánů. Nejedná
            se o závaznou nabídku služeb. Finální ceny se mohou lišit v závislosti na konkrétních
            požadavcích.
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
