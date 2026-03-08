import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { TERMS_SECTIONS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Obchodní podmínky | ThinkHome",
  description: "Práva a povinnosti související s využíváním služeb ThinkHome.",
};

export default function TermsPage(): React.JSX.Element {
  return (
    <PageShell
      breadcrumbs={[{ href: "/legal", label: "Legal" }, { label: "Obchodní podmínky" }]}
      subtitle="Práva a povinnosti související s využíváním služeb ThinkHome."
      title="Obchodní podmínky"
      updatedAt="6. března 2026"
    >
      <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-12">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] leading-tight font-extrabold text-slate-900">
              1. Úvodní ustanovení a definice
            </h2>
          </div>

          {TERMS_SECTIONS.map((section) => (
            <div className="flex flex-col gap-4" key={section.title}>
              <h3 className="text-lg leading-tight font-extrabold text-slate-900 md:text-xl">
                {section.title}
              </h3>
              {section.paragraphs.map((paragraph) => (
                <p className="text-sm leading-7 text-slate-600 md:text-base" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <div className="flex flex-col gap-2">
                  {section.bulletsLabel ? (
                    <p className="text-sm leading-7 font-semibold text-slate-900 md:text-base">
                      {section.bulletsLabel}
                    </p>
                  ) : null}
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-7 text-slate-600 md:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    </PageShell>
  );
}
