import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  MessagesSquare,
  ShieldCheck,
  Trash2,
  UserX,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/site";

const topics = [
  {
    href: "/account-deletion",
    icon: UserX,
    en: "Account Deletion",
    ko: "계정(회원) 삭제",
    desc: "계정 삭제를 요청하는 단계와, 삭제·보관되는 데이터를 안내합니다.",
    featured: true,
  },
  {
    href: "/faq",
    icon: MessagesSquare,
    en: "FAQ",
    ko: "자주 묻는 질문",
    desc: "주문·배송·교환·회원 등 가장 많이 들어온 질문을 모았습니다.",
  },
  {
    href: "/terms",
    icon: FileText,
    en: "Terms",
    ko: "서비스 이용약관",
    desc: "서비스 이용 조건과 회원·회사의 권리·의무를 규정합니다.",
  },
  {
    href: "/privacy",
    icon: ShieldCheck,
    en: "Privacy",
    ko: "개인정보 처리방침",
    desc: "수집 항목, 이용 목적, 보유 기간, 제3자 제공을 설명합니다.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-zinc-900">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-zinc-200/70">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            {SITE.appNameEn} · Help Center
          </p>
          <h1 className="mt-5 max-w-[20ch] font-serif text-[44px] leading-[1.02] tracking-[-0.015em] text-zinc-950 md:text-[80px]">
            무엇을 도와
            <span className="italic text-zinc-400"> 드릴까요?</span>
          </h1>
          <p className="mt-7 max-w-[58ch] text-[16px] leading-relaxed text-zinc-600">
            {SITE.appName} 고객센터입니다. 약관과 개인정보 처리방침, 계정 삭제
            요청 방법, 자주 묻는 질문을 한곳에서 확인하실 수 있어요.
            해결되지 않는 점은 1:1 문의로 직접 도와드립니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/account-deletion"
              className="inline-flex h-12 items-center gap-3 border border-zinc-900 bg-zinc-950 px-6 font-mono text-xs uppercase tracking-[0.22em] text-[#FAFAF7] transition-transform hover:-translate-y-[1px] active:scale-[0.98]"
            >
              <Trash2 className="h-4 w-4" strokeWidth={1.5} />
              계정 삭제 안내
            </Link>
            <Link
              href="/inquiry"
              className="inline-flex h-12 items-center gap-3 border border-zinc-900 px-6 font-mono text-xs uppercase tracking-[0.22em] text-zinc-900 transition-colors hover:bg-zinc-950 hover:text-[#FAFAF7]"
            >
              1:1 문의하기
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Topic grid */}
      <section className="border-b border-zinc-200/70">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Browse by topic
          </p>
          <div className="mt-8 grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
            {topics.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`group flex flex-col gap-5 bg-[#FAFAF7] p-7 transition-colors hover:bg-white md:p-10 ${
                  t.featured ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center border border-zinc-300 text-zinc-700 transition-colors group-hover:border-zinc-900 group-hover:text-zinc-950">
                    <t.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-zinc-300 transition-colors group-hover:text-zinc-950"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    {t.en}
                  </p>
                  <h2 className="mt-2 font-serif text-[26px] leading-tight tracking-tight text-zinc-950 md:text-[32px]">
                    {t.ko}
                  </h2>
                  <p className="mt-3 max-w-[52ch] text-[14.5px] leading-relaxed text-zinc-600">
                    {t.desc}
                  </p>
                </div>
                {t.featured ? (
                  <span className="inline-flex w-fit items-center gap-2 border-t border-zinc-300 pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    Google Play 등록정보 안내 페이지
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-b border-zinc-200/70">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Direct contact
            </p>
            <h2 className="mt-4 font-serif text-[30px] leading-tight tracking-tight text-zinc-950 md:text-[40px]">
              사람이 직접 답합니다.
            </h2>
          </div>
          <dl className="grid grid-cols-1 gap-px self-start border border-zinc-200 bg-zinc-200 sm:grid-cols-2 md:col-span-7">
            {[
              { k: "이메일", v: SITE.supportEmail, href: `mailto:${SITE.supportEmail}` },
              { k: "전화", v: SITE.supportTel, href: `tel:${SITE.supportTel}` },
              { k: "운영 시간", v: SITE.supportHours },
              { k: "개인정보 보호책임자", v: `${SITE.privacyOfficer.name} · ${SITE.privacyOfficer.title}` },
            ].map((row) => (
              <div key={row.k} className="bg-[#FAFAF7] p-6">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  {row.k}
                </dt>
                <dd className="mt-2 text-[14.5px] leading-relaxed text-zinc-800">
                  {row.href ? (
                    <a
                      href={row.href}
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
                    >
                      {row.v}
                    </a>
                  ) : (
                    row.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
