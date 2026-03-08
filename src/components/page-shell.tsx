import type { ReactNode } from "react";
import Link from "next/link";

import { Navbar } from "@/components/Navbar";

interface BreadcrumbItem {
  href?: string;
  label: string;
}

interface PageShellProps {
  breadcrumbs?: BreadcrumbItem[];
  children: ReactNode;
  title: string;
  subtitle: string;
  updatedAt?: string;
}

export function PageShell({
  breadcrumbs,
  children,
  title,
  subtitle,
  updatedAt,
}: PageShellProps): React.JSX.Element {
  const resolvedBreadcrumbs = breadcrumbs ?? [{ label: title }];

  return (
    <>
      <Navbar position="static" />
      <section className="bg-primary relative flex w-full flex-col items-center overflow-hidden">
        <div className="flex w-full max-w-[1440px] flex-col gap-3 px-6 pt-8 pb-24 md:gap-4 md:px-12 md:pt-12 md:pb-32">
          <nav className="flex items-center gap-1.5 text-[12px] font-medium text-white/60 md:gap-2 md:px-12 md:text-sm">
            {resolvedBreadcrumbs.map((item, index) => (
              <div className="contents" key={`${item.label}-${index}`}>
                {index > 0 ? <span className="text-white/40">/</span> : null}
                {item.href ? (
                  <Link className="transition-colors hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </div>
            ))}
          </nav>
          <div className="flex max-w-[900px] flex-col gap-3 md:gap-4 md:px-12">
            <h1 className="text-[32px] leading-[1.1] font-extrabold text-white md:text-6xl">
              {title}
            </h1>
            <p className="max-w-[760px] text-[15px] leading-6 text-white/72 md:text-base md:leading-7">
              {subtitle}
            </p>
            {updatedAt ? (
              <p className="text-[12px] font-semibold text-white/72 md:text-sm">
                Aktualizováno: {updatedAt}
              </p>
            ) : null}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <svg
            className="h-[72px] w-full md:h-24"
            fill="white"
            preserveAspectRatio="none"
            viewBox="0 0 1440 96"
          >
            <path d="M0 38L1440 0V96H0Z" />
          </svg>
        </div>
      </section>
      <section className="flex w-full justify-center bg-white px-6 pb-6 md:px-12 md:pb-12">
        <div className="w-full max-w-[1440px] md:px-12">{children}</div>
      </section>
    </>
  );
}
