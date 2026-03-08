import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export interface MdxLayoutProps {
  children: React.ReactNode;
  metadata: {
    title: string;
    subtitle: string;
    updatedAt: string;
    breadcrumbs: Array<{ label: string; href?: string }>;
  };
}

export function MdxLayout({ children, metadata }: MdxLayoutProps) {
  return (
    <>
      <Navbar position="static" />
      <section className="bg-primary relative flex w-full flex-col items-center overflow-hidden px-6 pt-8 pb-24 md:px-12 md:pt-12 md:pb-32">
        <div className="relative z-10 flex w-full max-w-[1440px] flex-col gap-3 md:gap-4 md:px-[48px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm font-medium text-white/70 md:gap-2">
            <Link href="/" className="transition-colors hover:text-white">
              Domů
            </Link>
            {metadata.breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="h-4 w-4" />
                {bc.href ? (
                  <Link className="transition-colors hover:text-white" href={bc.href}>
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-white">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="text-[32px] leading-tight font-extrabold text-white md:text-[48px]">
            {metadata.title}
          </h1>
          <p className="max-w-3xl text-[15px] font-normal text-white/70 md:text-[18px]">
            {metadata.subtitle}
          </p>
          <p className="mt-1 text-[12px] font-semibold text-white/70 md:mt-2 md:text-[14px]">
            Aktualizováno: {metadata.updatedAt}
          </p>
        </div>

        {/* Diagonal Cut */}
        <div className="absolute bottom-0 left-0 z-0 w-full translate-y-px">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1440 96"
            className="h-[72px] w-full md:h-[96px]"
            fill="white"
          >
            <path d="M0 40L1440 0V96H0Z" />
          </svg>
        </div>
      </section>

      <section className="flex w-full justify-center bg-white px-6 pb-8 md:px-12 md:pb-16">
        <article className="prose prose-slate prose-headings:font-bold prose-h1:text-[32px] md:prose-h1:text-[40px] prose-a:text-primary w-full max-w-[1440px] md:px-[48px]">
          {children}
        </article>
      </section>
    </>
  );
}
