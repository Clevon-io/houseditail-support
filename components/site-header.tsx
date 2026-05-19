import Link from "next/link";
import { LifeBuoy } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-[#FAFAF7]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-6 px-5 md:h-20 md:px-8">
        <Link
          href="/"
          aria-label={`${SITE.appName} 고객센터 홈`}
          className="inline-flex items-baseline gap-2.5"
        >
          <span className="font-serif text-[24px] font-normal leading-none tracking-[-0.01em] text-zinc-950 md:text-[28px]">
            {SITE.appNameEn}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:inline">
            Help Center
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 text-sm text-zinc-600 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 transition-colors hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/inquiry"
          className="ml-auto inline-flex h-10 items-center gap-2 border border-zinc-900 bg-zinc-950 px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#FAFAF7] transition-transform hover:-translate-y-[1px] active:scale-[0.98] lg:ml-0"
        >
          <LifeBuoy className="h-3.5 w-3.5" strokeWidth={1.5} />
          1:1 문의
        </Link>
      </div>

      <nav className="border-t border-zinc-200/60 lg:hidden">
        <div className="no-scrollbar mx-auto flex max-w-[1400px] items-center gap-6 overflow-x-auto px-5 py-3 text-[13px] text-zinc-600">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
