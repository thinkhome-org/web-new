"use client";

import type { LucideIcon } from "lucide-react";
import { Building2, Landmark, Mail, MapPin, MessageSquareText, Phone, User } from "lucide-react";

import { CONTACT_DETAILS } from "@/lib/site-content";

const DETAIL_ICONS: LucideIcon[] = [Building2, Mail, Phone, Landmark, MapPin];

interface ContactFieldProps {
  label: string;
  multiline?: boolean;
  placeholder: string;
  type?: "email" | "tel" | "text";
}

function ContactField({
  label,
  multiline = false,
  placeholder,
  type = "text",
}: ContactFieldProps): React.JSX.Element {
  const sharedClassName =
    "w-full rounded-lg border border-slate-100 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary focus:bg-white";

  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-900">
      {label}
      <div className="focus-within:border-primary flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-4 focus-within:bg-white">
        {label === "Jméno a příjmení" ? (
          <User className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
        ) : null}
        {label === "E-mail" ? <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" /> : null}
        {label === "Telefon (volitelné)" ? (
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
        ) : null}
        {label === "Zpráva" ? (
          <MessageSquareText className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
        ) : null}
        {multiline ? (
          <textarea
            className={`${sharedClassName} min-h-28 resize-none border-0 bg-transparent p-0`}
            placeholder={placeholder}
          />
        ) : (
          <input
            className={`${sharedClassName} border-0 bg-transparent p-0`}
            placeholder={placeholder}
            type={type}
          />
        )}
      </div>
    </label>
  );
}

export function ContactSection(): React.JSX.Element {
  return (
    <div className="grid gap-8 py-8 md:grid-cols-[minmax(0,1fr)_minmax(320px,416px)] md:gap-12 md:py-12">
      <div className="order-1 flex flex-col gap-6 border-b border-slate-200 pb-8 md:order-2 md:border-t-0 md:border-b-0 md:pt-10 md:pb-0">
        {CONTACT_DETAILS.map((detail, index) => {
          const Icon = DETAIL_ICONS[index];

          return (
            <div className="flex items-start gap-4" key={detail.title}>
              <div className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-sm font-extrabold text-slate-900">{detail.title}</h2>
                {detail.lines.map((line) => (
                  <p className="text-sm leading-6 text-slate-600" key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <form className="order-2 rounded-2xl bg-white py-0 md:order-1 md:rounded-3xl md:border md:border-slate-100 md:px-10 md:py-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl leading-tight font-extrabold text-slate-900">
            Napište nám zprávu
          </h2>
          <p className="text-sm leading-6 text-slate-500">
            Vyplňte formulář níže a my se vám co nejdříve ozveme.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <ContactField label="Jméno a příjmení" placeholder="Jan Novák" />
          <ContactField label="E-mail" placeholder="vas@email.cz" type="email" />
          <ContactField label="Telefon (volitelné)" placeholder="+420" type="tel" />
          <ContactField label="Zpráva" multiline placeholder="Napište nám svůj dotaz..." />
        </div>

        <button
          className="bg-primary mt-6 inline-flex h-14 w-full items-center justify-center rounded-lg px-6 text-sm font-extrabold text-white transition-opacity hover:opacity-90"
          type="button"
        >
          Odeslat zprávu
        </button>
      </form>
    </div>
  );
}
