"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  updated?: string;
  breadcrumbs?: string[];
}

export function PageHero({ title, subtitle, updated, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[400px] w-full flex-col justify-center bg-[#002bff] px-6 pt-32 pb-24 md:min-h-[480px] md:px-12">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-4 md:gap-6">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="mb-2 flex items-center gap-2">
            {breadcrumbs.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <Link
                  href={i === 0 ? "/" : "#"}
                  className={`text-sm font-bold tracking-wide transition-opacity ${i === breadcrumbs.length - 1 ? "text-white" : "text-white/50 hover:text-white"}`}
                >
                  {b}
                </Link>
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4 text-white/30" />}
              </div>
            ))}
          </nav>
        )}

        <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-white md:text-6xl lg:text-[72px]">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-2xl text-lg leading-relaxed font-normal text-white/70 md:text-xl">
            {subtitle}
          </p>
        )}

        {updated && (
          <div className="mt-2 text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">
            {updated}
          </div>
        )}
      </div>

      {/* Diagonal Cut Effect (SVG) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 96"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block h-[96px] w-full"
        >
          <path d="M0 96H1440V0L0 96Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
