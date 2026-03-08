export interface NavItem {
  href: string | null;
  isPlaceholder?: boolean;
  label: string;
}

export interface FooterLink {
  href: string;
  label: string;
}

export interface ContactDetail {
  lines: string[];
  title: string;
}

export interface PriceItem {
  description: string;
  price: string;
  service: string;
}

export interface PriceSection {
  items: PriceItem[];
  title: string;
}

export interface ContentSection {
  bullets?: string[];
  paragraphs: string[];
  title: string;
}

export interface TermsSubsection {
  bullets?: string[];
  paragraphs: string[];
  title: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Domů" },
  { href: null, isPlaceholder: true, label: "O nás" },
  { href: null, isPlaceholder: true, label: "Služby" },
  { href: "/kontakt", label: "Kontakt" },
];

export const FOOTER_LINKS: FooterLink[] = [
  { href: "/cenik-sluzeb", label: "Ceník služeb" },
  { href: "/obchodni-podminky", label: "Obchodní podmínky" },
  { href: "/ochrana-osobnich-udaju", label: "Ochrana osobních údajů" },
];

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    lines: [
      "ThinkHome s.r.o.",
      "IČ: 23893591",
      "DIČ: CZ23893591",
      "C 434666 vedená u Městského soudu v Praze",
    ],
    title: "Společnost",
  },
  {
    lines: ["info@thinkhome.org"],
    title: "E-mail",
  },
  {
    lines: ["+420 222 160 782"],
    title: "Telefon",
  },
  {
    lines: ["Účet: 363677109/0300"],
    title: "Bankovní spojení",
  },
  {
    lines: ["Rytířova 777/3, 143 00 Praha 12"],
    title: "Sídlo",
  },
];

export const PRICE_INTRO =
  "ThinkHome nabízí kompletní digitální a technologické služby pro moderní firmy i domácnosti. Níže naleznete orientační ceny jednotlivých služeb na základě mediánů trhu. Uvedené ceny jsou nezávazným odhadem odvozeným z tržních standardů.";

export const PRICE_SECTIONS: PriceSection[] = [
  {
    items: [
      {
        description: "Základní posouzení současného stavu vašeho IT prostředí a návrh řešení.",
        price: "Zdarma",
        service: "IT Audit zdarma",
      },
      {
        description: "Dle typu a složitosti úkonu.",
        price: "od 1 200 Kč / hod",
        service: "Hodinové sazby",
      },
      {
        description: "Individuální ceny na základě SLA a sjednaného rozsahu služeb.",
        price: "od 5 000 Kč",
        service: "Měsíční paušály",
      },
    ],
    title: "Weby, CMS a online řešení",
  },
  {
    items: [
      {
        description: "Implementace webu na míru dle náročnosti.",
        price: "od 20 000 Kč",
        service: "Tvorba webových stránek",
      },
      {
        description: "Cenová nabídka po analýze požadavků.",
        price: "Na míru",
        service: "Vývoj aplikací na míru",
      },
      {
        description: "Správa a pravidelné aktualizace systému.",
        price: "od 1 500 Kč",
        service: "Správa a aktualizace webu",
      },
    ],
    title: "Servis, podpora a školení",
  },
  {
    items: [
      {
        description: "Kompletní migrace a nastavení firemního cloudu.",
        price: "8 000 - 20 000 Kč",
        service: "Nasazení Google Workspace / Microsoft 365",
      },
      {
        description: "Instalace a konfigurace moderní telefonní ústředny.",
        price: "15 000 - 40 000 Kč",
        service: "Nastavení PBX/VoIP ústředny",
      },
      {
        description: "Audit a nastavení komunikačních platforem pro efektivní spolupráci.",
        price: "5 000 - 15 000 Kč / rok",
        service: "Správa nástrojů Slack / Teams",
      },
    ],
    title: "Cloud, komunikace a infrastruktura",
  },
  {
    items: [
      {
        description: "Rychlé nasazení chatbota pro zákaznickou podporu.",
        price: "500 - 10 000 Kč / měsíc",
        service: "AI chatbot - základní (SaaS)",
      },
      {
        description: "Vývoj vlastního AI asistenta integrovaného s vašimi procesy.",
        price: "150 000 - 800 000 Kč",
        service: "AI chatbot - pokročilý (na míru)",
      },
      {
        description: "Vytvoření AI modelu na vašich firemních datech.",
        price: "200 000+ Kč",
        service: "Interní LLM - trénování vlastní AI",
      },
      {
        description: "Implementace chytrých agentů a nástrojů.",
        price: "50 000 - 300 000 Kč",
        service: "Automatizace procesů pomocí AI",
      },
    ],
    title: "Umělá inteligence (AI)",
  },
  {
    items: [
      {
        description: "Nepřetržitý dohled nad firemní sítí a infrastrukturou.",
        price: "20 000 - 60 000 Kč",
        service: "Monitoring 24/7 (ročně)",
      },
      {
        description: "Pravidelné zálohy a testování obnovy pro kritická data.",
        price: "5 000 - 20 000 Kč",
        service: "Zálohování a obnova dat",
      },
      {
        description: "Analýza základní bezpečnostní vrstvy vaší firmy.",
        price: "10 000 - 30 000 Kč",
        service: "Bezpečnostní audit",
      },
      {
        description: "Testování zabezpečení webu nebo konkrétní aplikace.",
        price: "120 000 - 500 000 Kč",
        service: "Penetrační test - základní",
      },
      {
        description: "Komplexní simulace a testování.",
        price: "500 000+ Kč",
        service: "Penetrační test - enterprise",
      },
    ],
    title: "Kyberbezpečnost a dohled",
  },
  {
    items: [
      {
        description: "Zajištění koncové výbavy a serverů dle potřeby.",
        price: "dle zařízení",
        service: "Dodání a zprovoznění hardware",
      },
      {
        description: "Sledování dostupnosti a stavu fyzických zařízení.",
        price: "3 000 - 10 000 Kč / rok",
        service: "Monitoring zařízení",
      },
      {
        description: "Rychlé opravy výpočetní a síťové techniky.",
        price: "700 - 1 500 Kč / hod",
        service: "Opravy a servis HW",
      },
    ],
    title: "Hardware a fyzická infrastruktura",
  },
  {
    items: [
      {
        description: "Kompletní projektová dokumentace a plán firemní architektury.",
        price: "10 000 - 40 000 Kč",
        service: "Návrh sítě (firemní)",
      },
      {
        description: "Fyzické natažení, konfigurace přepínačů a instalace síťových prvků.",
        price: "20 000 - 100 000+ Kč",
        service: "Realizace sítě",
      },
      {
        description: "Instalace a nastavení access pointů a bezdrátové infrastruktury.",
        price: "10 000 - 50 000 Kč",
        service: "Profesionální Wi-Fi",
      },
      {
        description: "Pomoc při výběru poskytovatele a zmapování optimálního řešení.",
        price: "2 000 - 10 000 Kč",
        service: "Výběr internetové konektivity",
      },
    ],
    title: "Sítě, Wi-Fi a konektivita",
  },
];

export const TERMS_SECTIONS: TermsSubsection[] = [
  {
    paragraphs: [
      "Tyto Všeobecné obchodní podmínky (dále jen „VOP“) obchodní společnosti ThinkHome s.r.o., se sídlem Rytířova 777/3, 143 00 Praha - Kamýk, IČO: 23893591, DIČ: CZ23893591, zapsané v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 434666 (dále jen „Dodavatel“), upravují v souladu s ustanovením § 1751 odst. 1 zákona č. 89/2012 Sb., občanský zákoník, ve znění pozdějších předpisů (dále jen „OZ“), vzájemná práva a povinnosti smluvních stran vzniklé v souvislosti nebo na základě smlouvy uzavírané mezi Dodavatelem a Zákazníkem.",
    ],
    title: "1.1 Identifikace Dodavatele",
    bullets: [
      "E-mail: info@thinkhome.org",
      "Telefon: +420 222 160 782",
      "Webová stránka: https://thinkhome.org",
    ],
  },
  {
    paragraphs: [
      "„Zákazník“ - fyzická nebo právnická osoba, která uzavírá Smlouvu s Dodavatelem. Zákazníkem může být podnikatel i spotřebitel. „Spotřebitel“ - každý člověk, který mimo rámec své podnikatelské činnosti uzavírá smlouvu s Dodavatelem. „Podnikatel“ - osoba, která uzavírá Smlouvu v rámci své podnikatelské činnosti. „Smlouva“ - kupní smlouva, smlouva o dílo, smlouva o poskytování služeb nebo jiná smlouva uzavřená mezi Dodavatelem a Zákazníkem, jejíž nedílnou součástí jsou tyto VOP.",
    ],
    title: "1.2 Definice pojmů",
  },
  {
    paragraphs: [
      "Tyto VOP tvoří nedílnou součást každé Smlouvy uzavřené mezi Dodavatelem a Zákazníkem a jsou absolutně závazné pro veškerý obchodní styk s Dodavatelem. Dodavatel je v souladu s § 1752 OZ oprávněn jednostranně měnit či doplňovat tyto VOP v přiměřeném rozsahu.",
    ],
    title: "1.3 Působnost VOP",
  },
];

export const PRIVACY_SECTIONS: ContentSection[] = [
  {
    bullets: [
      "Identifikační údaje: jméno a příjmení, IČO, DIČ.",
      "Kontaktní údaje: e-mailová adresa, telefonní číslo, doručovací a fakturační adresa.",
      "Údaje o objednávkách a platbách: historie objednávek, bankovní spojení.",
    ],
    paragraphs: [
      "Zpracováváme pouze ty osobní údaje, které nám sami poskytnete v souvislosti s využíváním našich služeb, uzavřením smlouvy nebo při komunikaci s námi. Jedná se zejména o:",
    ],
    title: "1. Jaké osobní údaje zpracováváme?",
  },
  {
    bullets: [
      "Plnění smlouvy a poskytování služeb: Vyřízení vašich objednávek, fakturace, instalace a podpora. (Právní základ: plnění smlouvy).",
      "Komunikace: Odpovědi na vaše dotazy zaslané přes kontaktní formulář nebo e-mail. (Právní základ: oprávněný zájem nebo příprava smlouvy).",
      "Plnění právních povinností: Vedení účetnictví a daňových záznamů. (Právní základ: plnění právní povinnosti).",
      "Ochrana našich práv: Vymáhání pohledávek a řešení právních sporů. (Právní základ: oprávněný zájem).",
    ],
    paragraphs: ["Osobní údaje zpracováváme k následujícím účelům:"],
    title: "2. Za jakým účelem údaje zpracováváme?",
  },
  {
    paragraphs: [
      "Vaše osobní údaje neprodáváme žádným třetím stranám. Mohou k nim mít přístup pouze ověření zpracovatelé, kteří nám pomáhají se zajištěním našich služeb (např. účetní firma, poskytovatelé webhostingu, marketingových a IT nástrojů, přepravní společnosti).",
      "V případě online plateb jsou platební údaje (číslo karty apod.) zpracovávány výhradně poskytovatelem platební brány (GoPay) a k nám nemají přístup.",
    ],
    title: "3. Komu údaje předáváme?",
  },
  {
    bullets: [
      "Údaje nezbytné pro plnění smlouvy po dobu trvání smluvního vztahu a následně po dobu stanovenou účetními a daňovými zákony (zpravidla 10 let).",
      "Údaje zpracovávané na základě oprávněného zájmu uchováváme po dobu trvání tohoto zájmu (např. případné sjednávání smluv nebo obrana práv).",
    ],
    paragraphs: ["Vaše osobní údaje uchováváme pouze po dobu nezbytně nutnou:"],
    title: "4. Jak dlouho údaje uchováváme?",
  },
  {
    bullets: [
      "Na přístup: Zeptat se, jaké údaje o vás zpracováváme.",
      "Na opravu: Požádat o opravu nepřesných nebo neaktuálních údajů.",
      "Na výmaz (právo být zapomenut): Požádat o smazání údajů, pokud již nejsou potřebné pro stanovené účely nebo pokud odvoláte souhlas.",
      "Na omezení zpracování: Požádat o omezení zpracování v určitých případech.",
      "Vznést námitku: Proti zpracování na základě našeho oprávněného zájmu.",
      "Na přenositelnost údajů: Získat své údaje ve strojově čitelném formátu.",
    ],
    paragraphs: [
      "V souvislosti se zpracováním osobních údajů máte právo:",
      "Případné žádosti týkající se vašich práv zasílejte na náš e-mail: info@thinkhome.org.",
      "Dozorovým úřadem, kam se můžete v případě stížnosti obrátit, je Úřad pro ochranu osobních údajů (www.uoou.cz).",
      "ThinkHome s.r.o.",
    ],
    title: "5. Jaká jsou vaše práva?",
  },
];
