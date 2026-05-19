"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import type { LegalDoc } from "@/content/types";

export function LegalViewer({ doc }: { doc: LegalDoc }) {
  const [active, setActive] = useState(doc.sections[0]?.id ?? "");

  useEffect(() => {
    const els = doc.sections
      .map((s) => document.getElementById(s.id))
      .filter((e): e is HTMLElement => Boolean(e));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 1] },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [doc]);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
      <aside className="md:col-span-4 md:border-r md:border-zinc-200 md:pr-12">
        <div className="sticky top-28">
          <div className="flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            <span>{doc.version}</span>
            <span className="text-zinc-300">·</span>
            <span>시행 {doc.effectiveAt}</span>
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Table of Contents
          </p>
          <ol className="mt-4 space-y-0.5">
            {doc.sections.map((s, i) => {
              const on = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`group grid grid-cols-[2.25rem_1fr] items-baseline gap-1 border-l-2 py-2 pl-3 text-[13.5px] leading-snug transition-colors ${
                      on
                        ? "border-zinc-950 text-zinc-950"
                        : "border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-900"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] tracking-wider ${
                        on ? "text-zinc-800" : "text-zinc-400"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s.title}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </aside>

      <article className="md:col-span-8">
        {doc.sections.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-32 border-t border-zinc-200 pt-12 first:border-none first:pt-0 [&:not(:first-child)]:mt-16"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[11px] tracking-wider text-zinc-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-[26px] leading-tight tracking-tight text-zinc-950 md:text-[34px]">
                {s.title}
              </h2>
            </div>

            <div className="mt-7 space-y-5 text-[14.5px] leading-[1.85] text-zinc-700">
              {s.paragraphs.map((p, j) => (
                <p key={j} className="max-w-[68ch] whitespace-pre-line">
                  {p}
                </p>
              ))}

              {s.list ? (
                <ol className="mt-4 max-w-[68ch] list-none space-y-2 pl-0">
                  {s.list.map((li, k) => (
                    <li
                      key={k}
                      className="grid grid-cols-[2.25rem_1fr] items-baseline gap-1"
                    >
                      <span className="font-mono text-[11px] tracking-wider text-zinc-400">
                        {String(k + 1).padStart(2, "0")}
                      </span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ol>
              ) : null}
            </div>
          </section>
        ))}

        <div className="mt-20 border-t border-zinc-900 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            End of document
          </p>
          <p className="mt-2 max-w-[60ch] text-[13px] leading-relaxed text-zinc-500">
            문서에 대한 궁금한 점이 있다면{" "}
            <Link
              href="/inquiry"
              className="text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-900"
            >
              1:1 문의
            </Link>{" "}
            또는 {SITE.supportEmail} 로 남겨 주세요.
          </p>
        </div>
      </article>
    </div>
  );
}
