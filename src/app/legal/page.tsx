import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { LEGAL_DOCUMENT_LINKS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Legal | ThinkHome",
  description:
    "Přehled právních dokumentů ThinkHome na jednom místě včetně ceníku, obchodních podmínek a zásad ochrany osobních údajů.",
};

export default function LegalPage(): React.JSX.Element {
  return (
    <PageShell
      subtitle="Přehled právních dokumentů ThinkHome na jednom místě."
      title="Legal"
      updatedAt="8. března 2026"
    >
      <div className="flex max-w-[980px] flex-col gap-10 py-8 md:gap-12 md:py-12">
        <p className="max-w-[760px] text-sm leading-7 text-slate-600 md:text-base">
          Právní a provozní dokumentace vztahující se ke službám ThinkHome.
        </p>

        <section className="flex flex-col gap-8">
          <h2 className="text-[28px] leading-tight font-extrabold text-slate-900 md:text-[32px]">
            Dokumenty
          </h2>

          <div className="flex flex-col gap-8">
            {LEGAL_DOCUMENT_LINKS.map((document) => (
              <article className="flex max-w-[860px] flex-col gap-3" key={document.href}>
                <h3 className="text-xl leading-tight font-extrabold text-slate-900 md:text-[22px]">
                  {document.label}
                </h3>
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  {document.description}
                </p>
                <Link
                  className="text-primary inline-flex w-fit items-center gap-2 text-sm font-bold transition-all hover:gap-3 hover:text-blue-700"
                  href={document.href}
                >
                  <span>Zjistit více</span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
