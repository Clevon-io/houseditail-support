"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Minus, Plus, Search, Sparkle } from "lucide-react";
import type { FaqCategory, FaqItem } from "@/content/types";

type Filter = FaqCategory | "all";

const labels: Record<Filter, string> = {
  all: "전체",
  account: "회원 · 계정",
  order: "주문 · 결제",
  shipping: "배송",
  return: "교환 · 반품",
  etc: "기타",
};

export function FaqView({ items }: { items: FaqItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((it) => {
      const catMatch = category === "all" || it.category === category;
      const qMatch =
        !q ||
        it.question.toLowerCase().includes(q) ||
        it.answer.toLowerCase().includes(q);
      return catMatch && qMatch;
    });
  }, [items, query, category]);

  const popular = useMemo(
    () => items.filter((i) => i.popular).slice(0, 4),
    [items],
  );

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
      <aside className="md:col-span-4 md:border-r md:border-zinc-200 md:pr-12">
        <div className="relative">
          <Search
            className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            strokeWidth={1.5}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="키워드로 빠르게 찾기"
            className="h-11 w-full border-b border-zinc-300 bg-transparent pl-7 pr-2 text-[15px] placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400 hover:text-zinc-900"
            >
              Clear
            </button>
          ) : null}
        </div>

        <div className="mt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Category
          </p>
          <ul className="mt-4 space-y-0.5">
            {(Object.keys(labels) as Filter[]).map((key) => {
              const count =
                key === "all"
                  ? items.length
                  : items.filter((i) => i.category === key).length;
              const on = category === key;
              return (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => setCategory(key)}
                    className={`group flex w-full items-center justify-between border-l-2 py-2.5 pl-3 text-left text-[14px] transition-colors ${
                      on
                        ? "border-zinc-950 text-zinc-950"
                        : "border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-900"
                    }`}
                  >
                    <span className={on ? "font-medium" : ""}>
                      {labels[key]}
                    </span>
                    <span
                      className={`font-mono text-[11px] tracking-wider ${
                        on ? "text-zinc-700" : "text-zinc-400"
                      }`}
                    >
                      {String(count).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Popular
          </p>
          <ul className="mt-4 space-y-3">
            {popular.map((q) => (
              <li key={q.id}>
                <button
                  type="button"
                  onClick={() => {
                    setOpenId(q.id);
                    setCategory("all");
                    const el = document.getElementById(`faq-${q.id}`);
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="group flex items-start gap-3 text-left text-[13.5px] leading-relaxed text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  <Sparkle
                    className="mt-[3px] h-3.5 w-3.5 shrink-0 text-zinc-400 group-hover:text-zinc-950"
                    strokeWidth={1.5}
                  />
                  <span>{q.question}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border border-zinc-200 bg-white p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Still not resolved?
          </p>
          <p className="mt-3 font-serif text-[20px] leading-tight tracking-tight text-zinc-950">
            담당 매니저가 직접 답해 드릴게요.
          </p>
          <Link
            href="/inquiry"
            className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-900 transition-colors hover:text-zinc-600"
          >
            1:1 문의 남기기
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </aside>

      <div className="md:col-span-8">
        <div className="flex items-baseline justify-between border-b border-zinc-900 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            {labels[category]}
          </p>
          <span className="font-mono text-[11px] tracking-wider text-zinc-400">
            {String(filtered.length).padStart(3, "0")} /{" "}
            {String(items.length).padStart(3, "0")} results
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 flex flex-col items-start gap-3 border border-dashed border-zinc-300 px-6 py-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
              No match
            </p>
            <p className="font-serif text-[24px] leading-tight tracking-tight text-zinc-900">
              &ldquo;{query}&rdquo;에 맞는 답변을 찾지 못했어요.
            </p>
            <p className="text-sm text-zinc-500">
              필터를 해제하거나 1:1 문의로 바로 연결해 드릴게요.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="mt-2 inline-flex h-10 items-center gap-2 border border-zinc-900 bg-zinc-950 px-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[#FAFAF7] transition-transform hover:-translate-y-[1px] active:scale-[0.98]"
            >
              필터 초기화
            </button>
          </div>
        ) : (
          <ul className="divide-y divide-zinc-200">
            {filtered.map((it, i) => {
              const open = openId === it.id;
              return (
                <li
                  key={it.id}
                  id={`faq-${it.id}`}
                  className="animate-rise-in scroll-mt-28"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : it.id)}
                    aria-expanded={open}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-5 py-7 text-left"
                  >
                    <span className="mt-0.5 font-serif text-[22px] italic leading-none text-zinc-400">
                      Q
                    </span>
                    <span className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                        {labels[it.category]}
                      </span>
                      <span className="text-[16px] font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-950">
                        {it.question}
                      </span>
                    </span>
                    <span
                      className={`mt-1 flex h-9 w-9 items-center justify-center border transition-[transform,colors] ${
                        open
                          ? "rotate-0 border-zinc-900 bg-zinc-950 text-[#FAFAF7]"
                          : "border-zinc-300 text-zinc-500 group-hover:border-zinc-900 group-hover:text-zinc-900"
                      }`}
                    >
                      {open ? (
                        <Minus className="h-4 w-4" strokeWidth={1.5} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="grid grid-cols-[auto_1fr] items-start gap-5 pb-9">
                        <span className="mt-0.5 font-serif text-[22px] italic leading-none text-zinc-900">
                          A
                        </span>
                        <p className="max-w-[62ch] whitespace-pre-line text-[14.5px] leading-[1.8] text-zinc-600">
                          {it.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
