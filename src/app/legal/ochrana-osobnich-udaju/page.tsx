import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { PRIVACY_SECTIONS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | ThinkHome",
  description: "Zásady nakládání s vašimi daty a zajištění maximální bezpečnosti.",
};

export default function PrivacyPage(): React.JSX.Element {
  return (
    <PageShell
      breadcrumbs={[{ label: "Legal" }, { label: "Ochrana osobních údajů" }]}
      subtitle="Zásady nakládání s vašimi daty a zajištění maximální bezpečnosti."
      title="Ochrana osobních údajů"
      updatedAt="6. března 2026"
    >
      <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-12">
        <p className="text-sm leading-7 text-slate-600 md:text-base">
          Společnost ThinkHome s.r.o., se sídlem Rytířova 777/3, 143 00 Praha - Kamýk, IČO: 23893591
          (dále jen „Správce“), chrání vaše osobní údaje v souladu s Nařízením Evropského parlamentu
          a Rady (EU) 2016/679 (GDPR).
        </p>

        {PRIVACY_SECTIONS.map((section, index) => (
          <section className="flex flex-col gap-4" key={section.title}>
            <div className="h-px w-full bg-slate-200" />
            <h2 className="pt-4 text-[24px] leading-tight font-extrabold text-slate-900">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => {
              const isClosingSection = index === PRIVACY_SECTIONS.length - 1;
              const isBulletIntro = isClosingSection && paragraphIndex === 0;

              if (isClosingSection && !isBulletIntro) {
                return null;
              }

              return (
                <p className="text-sm leading-7 text-slate-600 md:text-base" key={paragraph}>
                  {paragraph}
                </p>
              );
            })}
            {section.bullets ? (
              <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-7 text-slate-600 md:text-base">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {index === PRIVACY_SECTIONS.length - 1
              ? section.paragraphs.slice(1, -1).map((paragraph) => (
                  <p className="text-sm leading-7 text-slate-600 md:text-base" key={paragraph}>
                    {paragraph}
                  </p>
                ))
              : null}
            {index === PRIVACY_SECTIONS.length - 1 ? (
              <p className="text-sm leading-7 font-semibold text-slate-900 md:text-base">
                {section.paragraphs.at(-1)}
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </PageShell>
  );
}
