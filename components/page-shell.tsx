import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type Props = {
  overline: string;
  title: string;
  subtitle?: string;
  description?: string;
  meta?: ReactNode;
  children?: ReactNode;
};

export function PageShell({
  overline,
  title,
  subtitle,
  description,
  meta,
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-zinc-900">
      <SiteHeader />
      <section className="border-b border-zinc-200/70">
        <div className="mx-auto max-w-[1400px] px-5 pb-14 pt-10 md:px-8 md:pb-24 md:pt-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                {overline}
              </p>
              <h1 className="mt-4 font-serif text-[42px] leading-[1.02] tracking-[-0.015em] text-zinc-950 md:text-[68px]">
                {title}
                {subtitle ? (
                  <span className="ml-4 align-[0.18em] font-serif italic text-zinc-400 md:text-[40px]">
                    /{subtitle}
                  </span>
                ) : null}
              </h1>
              {description ? (
                <p className="mt-6 max-w-[62ch] text-[15.5px] leading-relaxed text-zinc-600">
                  {description}
                </p>
              ) : null}
            </div>
            {meta ? <div className="md:col-span-4 md:pt-3">{meta}</div> : null}
          </div>

          {children ? <div className="mt-12 md:mt-20">{children}</div> : null}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
