import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, ShieldCheck, UserX } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { WorksNav } from "@/components/works-nav";
import { WORKS, worksFaqs } from "@/content/works";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${WORKS.appName} 지원`,
  description: `${WORKS.tagline}. 로그인·임시 비밀번호·출퇴근 기록·앱 업데이트 등 자주 묻는 질문과 문의 이메일, 개인정보 처리방침·계정 삭제 안내 링크를 제공합니다.`,
};

const documents = [
  {
    href: WORKS.paths.privacy,
    icon: ShieldCheck,
    en: "Privacy",
    ko: "개인정보 처리방침",
    desc: "수집 항목과 목적, 출퇴근 시점에만 수집하는 위치정보, 보유 기간, 처리 위탁을 설명합니다.",
  },
  {
    href: WORKS.paths.accountDeletion,
    icon: UserX,
    en: "Account Deletion",
    ko: "계정 삭제 안내",
    desc: "인사 담당자에게 퇴사 처리를 요청하는 절차와, 삭제·보관되는 데이터를 안내합니다.",
  },
];

export default function WorksSupportPage() {
  const mailto = `mailto:${WORKS.supportEmail}?subject=${encodeURIComponent(
    `[${WORKS.appName}] 문의`,
  )}`;

  return (
    <PageShell
      overline="Works App · Support"
      title="웍스 앱 지원"
      subtitle="Support"
      description={`${WORKS.appName}는 ${WORKS.tagline}입니다. 회사가 발급한 직원 계정으로만 이용할 수 있으며, 출퇴근 기록(QR·GPS)과 업무 보고서 제출 두 가지 기능을 제공합니다. 앱 이용 중 해결되지 않는 문제는 아래 문의 이메일로 알려 주세요.`}
      meta={
        <div className="border border-zinc-200 bg-white p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            App / Contact
          </p>
          <dl className="mt-4 space-y-3 text-[13.5px] leading-relaxed">
            <div className="flex justify-between gap-4">
              <dt className="shrink-0 text-zinc-500">앱 이름</dt>
              <dd className="text-right font-medium text-zinc-900">
                {WORKS.appName} ({WORKS.appNameEn})
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-zinc-100 pt-3">
              <dt className="shrink-0 text-zinc-500">개발자</dt>
              <dd className="text-right font-medium text-zinc-900">
                {WORKS.developerName}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-zinc-100 pt-3">
              <dt className="shrink-0 text-zinc-500">문의 이메일</dt>
              <dd className="text-right font-medium text-zinc-900">
                <a
                  href={mailto}
                  className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
                >
                  {WORKS.supportEmail}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-zinc-100 pt-3">
              <dt className="shrink-0 text-zinc-500">운영 시간</dt>
              <dd className="text-right text-zinc-700">{SITE.supportHours}</dd>
            </div>
          </dl>
          <div className="mt-6 border-t border-zinc-100 pt-5">
            <WorksNav current={WORKS.paths.support} />
          </div>
        </div>
      }
    >
      <div>
        <div className="flex items-baseline justify-between border-b border-zinc-900 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Frequently asked questions
          </p>
          <span className="font-mono text-[11px] tracking-wider text-zinc-400">
            {String(worksFaqs.length).padStart(2, "0")} questions
          </span>
        </div>

        <ul className="divide-y divide-zinc-200">
          {worksFaqs.map((item) => (
            <li key={item.id} id={item.id} className="scroll-mt-28 py-8">
              <div className="grid grid-cols-[auto_1fr] items-start gap-5">
                <span className="mt-0.5 font-serif text-[22px] italic leading-none text-zinc-400">
                  Q
                </span>
                <h2 className="text-[16px] font-medium tracking-tight text-zinc-900">
                  {item.question}
                </h2>
              </div>
              <div className="mt-4 grid grid-cols-[auto_1fr] items-start gap-5">
                <span className="mt-0.5 font-serif text-[22px] italic leading-none text-zinc-900">
                  A
                </span>
                <p className="max-w-[62ch] whitespace-pre-line text-[14.5px] leading-[1.8] text-zinc-600">
                  {item.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 md:mt-28">
        <div className="flex items-baseline justify-between border-b border-zinc-900 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Documents
          </p>
          <span className="font-mono text-[11px] tracking-wider text-zinc-400">
            {String(documents.length).padStart(2, "0")} pages
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
          {documents.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group flex flex-col gap-5 bg-[#FAFAF7] p-7 transition-colors hover:bg-white md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center border border-zinc-300 text-zinc-700 transition-colors group-hover:border-zinc-900 group-hover:text-zinc-950">
                  <d.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-zinc-300 transition-colors group-hover:text-zinc-950"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  {d.en}
                </p>
                <h2 className="mt-2 font-serif text-[26px] leading-tight tracking-tight text-zinc-950 md:text-[32px]">
                  {d.ko}
                </h2>
                <p className="mt-3 max-w-[52ch] text-[14.5px] leading-relaxed text-zinc-600">
                  {d.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <div className="flex items-baseline justify-between border-b border-zinc-900 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Contact
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h2 className="font-serif text-[28px] leading-tight tracking-tight text-zinc-950 md:text-[36px]">
              해결되지 않으면 이메일로 알려 주세요.
            </h2>
            <p className="mt-4 max-w-[58ch] text-[14.5px] leading-relaxed text-zinc-600">
              계정 발급·비밀번호 재발급·퇴사 처리는 소속 인사 담당자에게 먼저
              요청하는 것이 가장 빠릅니다. 앱 오류나 기록 문제는 사용 중인 기기와
              앱 버전, 발생 시각을 함께 적어 주시면 {SITE.supportHours} 기준으로
              답변드립니다.
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
            <a
              href={mailto}
              className="inline-flex h-12 items-center gap-3 border border-zinc-900 bg-zinc-950 px-6 font-mono text-xs uppercase tracking-[0.22em] text-[#FAFAF7] transition-transform hover:-translate-y-[1px] active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              {WORKS.supportEmail}
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
