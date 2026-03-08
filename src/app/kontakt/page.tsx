import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Kontakt | ThinkHome",
  description: "Máte dotaz nebo zájem o naše služby? Ozvěte se nám.",
};

export default function ContactPage(): React.JSX.Element {
  return (
    <PageShell subtitle="Máte dotaz nebo zájem o naše služby? Ozvěte se nám." title="Kontakt">
      <ContactSection />
    </PageShell>
  );
}
