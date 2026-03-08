"use client";

import type { LucideIcon } from "lucide-react";
import { Building2, Landmark, Mail, MapPin, MessageSquareText, Phone, User } from "lucide-react";
import type { FormEvent } from "react";

import { CONTACT_DETAILS } from "@/lib/site-content";

const DETAIL_ICONS: Record<"bank" | "building" | "email" | "map-pin" | "phone", LucideIcon> = {
  bank: Landmark,
  building: Building2,
  email: Mail,
  "map-pin": MapPin,
  phone: Phone,
};

const FIELD_ICONS: Partial<Record<string, LucideIcon>> = {
  "E-mail": Mail,
  "Jméno a příjmení": User,
  "Telefon (volitelné)": Phone,
  Zpráva: MessageSquareText,
};

interface ContactFieldProps {
  icon?: LucideIcon;
  label: string;
  multiline?: boolean;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: "email" | "tel" | "text";
}

function ContactField({
  label,
  multiline = false,
  name,
  placeholder,
  required = false,
  type = "text",
  icon: Icon,
}: ContactFieldProps): React.JSX.Element {
  const iconClassName = "mt-0.5 h-4 w-4 shrink-0 text-slate-400 md:h-[18px] md:w-[18px]";
  const fieldClassName =
    "focus-within:border-primary flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 px-3.5 py-[14px] focus-within:bg-white md:gap-3 md:px-4 md:py-4";
  const inputClassName =
    "w-full border-0 bg-transparent p-0 text-[15px] text-slate-900 outline-none placeholder:text-slate-400 md:text-base";

  return (
    <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-slate-700 md:gap-2 md:text-sm">
      {label}
      <div className={fieldClassName}>
        {Icon ? <Icon className={iconClassName} /> : null}
        {multiline ? (
          <textarea
            className={`${inputClassName} min-h-[90px] resize-none md:min-h-[108px]`}
            name={name}
            placeholder={placeholder}
            required={required}
          />
        ) : (
          <input
            className={inputClassName}
            name={name}
            placeholder={placeholder}
            required={required}
            type={type}
          />
        )}
      </div>
    </label>
  );
}

function handleSubmit(event: FormEvent<HTMLFormElement>): void {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const body = [
    `Jméno a příjmení: ${fullName}`,
    `E-mail: ${email}`,
    `Telefon: ${phone || "neuvedeno"}`,
    "",
    "Zpráva:",
    message,
  ].join("\n");

  window.location.href = `mailto:info@thinkhome.org?subject=${encodeURIComponent("Nová zpráva z kontaktního formuláře")}&body=${encodeURIComponent(body)}`;
}

export function ContactSection(): React.JSX.Element {
  return (
    <div className="grid gap-8 pt-12 pb-8 md:grid-cols-[minmax(0,1fr)_minmax(320px,416px)] md:gap-12 md:pt-16 md:pb-12">
      <div className="order-1 flex flex-col gap-8 border-b border-slate-200 pb-8 md:order-2 md:gap-10 md:border-t-0 md:border-b-0 md:pt-10 md:pb-0">
        {CONTACT_DETAILS.map((detail) => {
          const Icon = DETAIL_ICONS[detail.icon];

          return (
            <div className="flex items-start gap-3 md:gap-4" key={detail.title}>
              <div className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 md:h-12 md:w-12">
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="text-base font-bold text-slate-900 md:text-[18px]">
                  {detail.title}
                </h2>
                {detail.lines.map((line) => {
                  if (detail.title === "E-mail") {
                    return (
                      <a
                        className="hover:text-primary text-[15px] leading-6 text-slate-600 transition-colors md:text-base md:leading-6"
                        href={`mailto:${line}`}
                        key={line}
                      >
                        {line}
                      </a>
                    );
                  }

                  if (detail.title === "Telefon") {
                    return (
                      <a
                        className="hover:text-primary text-[15px] leading-6 text-slate-600 transition-colors md:text-base md:leading-6"
                        href="tel:+420222160782"
                        key={line}
                      >
                        {line}
                      </a>
                    );
                  }

                  return (
                    <p
                      className="text-[15px] leading-6 text-slate-600 md:text-base md:leading-6"
                      key={line}
                    >
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <form
        className="order-2 rounded-2xl bg-white py-0 md:order-1 md:rounded-2xl md:px-10 md:py-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] leading-tight font-extrabold text-slate-900 md:text-2xl">
            Napište nám zprávu
          </h2>
          <p className="text-sm leading-6 text-slate-500 md:text-[15px]">
            Vyplňte formulář níže a my se vám co nejdříve ozveme.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 md:mt-8">
          <ContactField
            icon={FIELD_ICONS["Jméno a příjmení"]}
            label="Jméno a příjmení"
            name="fullName"
            placeholder="Jan Novák"
            required
          />
          <ContactField
            icon={FIELD_ICONS["E-mail"]}
            label="E-mail"
            name="email"
            placeholder="vas@email.cz"
            required
            type="email"
          />
          <ContactField
            icon={FIELD_ICONS["Telefon (volitelné)"]}
            label="Telefon (volitelné)"
            name="phone"
            placeholder="+420"
            type="tel"
          />
          <ContactField
            icon={FIELD_ICONS.Zpráva}
            label="Zpráva"
            multiline
            name="message"
            placeholder="Napište nám svůj dotaz..."
            required
          />
        </div>

        <button
          className="bg-primary mt-6 inline-flex h-14 w-full items-center justify-center rounded-lg px-6 text-sm font-extrabold text-white transition-opacity hover:opacity-90 md:mt-8"
          type="submit"
        >
          Odeslat zprávu
        </button>
      </form>
    </div>
  );
}
