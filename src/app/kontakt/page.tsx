import { PageHero } from "@/components/PageHero";
import {
  Building,
  Mail,
  Phone,
  Landmark,
  MapPin,
  User,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function KontaktPage() {
  return (
    <div className="font-manrope flex flex-col overflow-x-hidden">
      <PageHero
        title="Kontakt"
        subtitle="Máte dotaz nebo zájem o naše služby? Ozvěte se nám. Jsme tu pro vás."
        breadcrumbs={["Domů", "Kontakt"]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-12 md:py-24">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-10">
              {/* Společnost */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff]">
                  <Building className="h-6 w-6 text-[#002bff]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-[#0f172a]">Společnost</h3>
                  <p className="leading-relaxed text-[#475569]">
                    ThinkHome s.r.o.
                    <br />
                    IČ: 23893591
                    <br />
                    DIČ: CZ23893591
                    <br />C 434666 vedená u Městského soudu v Praze
                  </p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff]">
                  <Mail className="h-6 w-6 text-[#002bff]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-[#0f172a]">E-mail</h3>
                  <a
                    href="mailto:info@thinkhome.org"
                    className="text-lg font-medium text-[#475569] transition-colors hover:text-[#002bff]"
                  >
                    info@thinkhome.org
                  </a>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff]">
                  <Phone className="h-6 w-6 text-[#002bff]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-[#0f172a]">Telefon</h3>
                  <a
                    href="tel:+420222160782"
                    className="text-lg font-medium text-[#475569] transition-colors hover:text-[#002bff]"
                  >
                    +420 222 160 782
                  </a>
                </div>
              </div>

              {/* Bankovní spojení */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff]">
                  <Landmark className="h-6 w-6 text-[#002bff]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-[#0f172a]">Bankovní spojení</h3>
                  <p className="text-lg font-medium text-[#475569]">Účet: 363677109/0300</p>
                </div>
              </div>

              {/* Sídlo */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff]">
                  <MapPin className="h-6 w-6 text-[#002bff]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-[#0f172a]">Sídlo</h3>
                  <p className="text-[#475569]">Rytířova 777/3, 143 00 Praha 12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-[40px] border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl md:p-12">
            <div className="mb-10 flex flex-col gap-3">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#0f172a]">
                Napište nám zprávu
              </h2>
              <p className="leading-relaxed text-[#64748b]">
                Vyplňte formulář níže a my se vám co nejdříve ozveme s návrhem řešení.
              </p>
            </div>

            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="ml-1 text-sm font-bold text-[#334155]">Jméno a příjmení</label>
                <div className="group relative">
                  <User className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#002bff]" />
                  <input
                    type="text"
                    placeholder="Např. Jan Novák"
                    className="w-full rounded-2xl border border-transparent bg-[#f8fafc] py-4.5 pr-5 pl-14 text-sm transition-all outline-none focus:border-[#002bff]/20 focus:bg-white focus:ring-4 focus:ring-[#002bff]/5"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="ml-1 text-sm font-bold text-[#334155]">E-mail</label>
                <div className="group relative">
                  <Mail className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#002bff]" />
                  <input
                    type="email"
                    placeholder="vas@email.cz"
                    className="w-full rounded-2xl border border-transparent bg-[#f8fafc] py-4.5 pr-5 pl-14 text-sm transition-all outline-none focus:border-[#002bff]/20 focus:bg-white focus:ring-4 focus:ring-[#002bff]/5"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="ml-1 text-sm font-bold text-[#334155]">Telefon (volitelné)</label>
                <div className="group relative">
                  <Phone className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#002bff]" />
                  <input
                    type="tel"
                    placeholder="+420 123 456 789"
                    className="w-full rounded-2xl border border-transparent bg-[#f8fafc] py-4.5 pr-5 pl-14 text-sm transition-all outline-none focus:border-[#002bff]/20 focus:bg-white focus:ring-4 focus:ring-[#002bff]/5"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="ml-1 text-sm font-bold text-[#334155]">Zpráva</label>
                <div className="group relative">
                  <MessageSquare className="absolute top-5 left-5 h-5 w-5 text-slate-400 transition-colors group-focus-within:text-[#002bff]" />
                  <textarea
                    rows={4}
                    placeholder="Jak vám můžeme pomoci?"
                    className="w-full resize-none rounded-2xl border border-transparent bg-[#f8fafc] py-4.5 pr-5 pl-14 text-sm transition-all outline-none focus:border-[#002bff]/20 focus:bg-white focus:ring-4 focus:ring-[#002bff]/5"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-[#002bff] py-5 text-base font-bold text-white shadow-lg shadow-[#002bff]/20 transition-all hover:scale-[1.02] hover:bg-[#002bff]/90 active:scale-100"
              >
                Odeslat zprávu
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
