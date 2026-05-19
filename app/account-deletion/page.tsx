import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import {
  deletionChannels,
  deletionDataRows,
} from "@/content/account-deletion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "계정(회원) 삭제 안내",
  description: `${SITE.appName} 계정 삭제 요청 방법과, 삭제·보관되는 데이터 및 보관 기간을 안내합니다.`,
};

export default function AccountDeletionPage() {
  return (
    <PageShell
      overline="Account · Deletion Request"
      title="계정 삭제 안내"
      subtitle="Delete"
      description={`${SITE.appName} 계정을 삭제(회원 탈퇴)하는 방법과, 삭제되는 데이터·법령에 따라 일정 기간 보관되는 데이터를 안내합니다. 이 페이지는 Google Play 스토어 등록정보에 표시되는 계정 삭제 안내입니다.`}
      meta={
        <div className="border border-zinc-200 bg-white p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            App / Developer
          </p>
          <dl className="mt-4 space-y-3 text-[13.5px] leading-relaxed">
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-500">앱 이름</dt>
              <dd className="text-right font-medium text-zinc-900">
                {SITE.appName} ({SITE.appNameEn})
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-zinc-100 pt-3">
              <dt className="text-zinc-500">개발자</dt>
              <dd className="text-right font-medium text-zinc-900">
                {SITE.developerName}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-zinc-100 pt-3">
              <dt className="text-zinc-500">처리 기한</dt>
              <dd className="text-right font-medium text-zinc-900">
                {SITE.deletionSla}
              </dd>
            </div>
          </dl>
        </div>
      }
    >
      {/* 요청 방법 — 채널별 단계 */}
      <div>
        <div className="flex items-baseline justify-between border-b border-zinc-900 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            How to request deletion
          </p>
          <span className="font-mono text-[11px] tracking-wider text-zinc-400">
            {String(deletionChannels.length).padStart(2, "0")} ways
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 lg:grid-cols-2">
          {deletionChannels.map((ch) => (
            <div key={ch.id} className="flex flex-col gap-7 bg-[#FAFAF7] p-7 md:p-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  {ch.badge}
                </p>
                <h2 className="mt-3 font-serif text-[26px] leading-tight tracking-tight text-zinc-950 md:text-[32px]">
                  {ch.title}
                </h2>
                <p className="mt-3 max-w-[48ch] text-[14.5px] leading-relaxed text-zinc-600">
                  {ch.summary}
                </p>
              </div>

              <ol className="flex flex-col">
                {ch.steps.map((s) => (
                  <li
                    key={s.index}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-zinc-200 py-5 first:border-t-0 first:pt-0"
                  >
                    <span className="font-serif text-[24px] italic leading-none text-zinc-400">
                      {String(s.index).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[15px] font-medium leading-snug tracking-tight text-zinc-900">
                        {s.title}
                      </p>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-zinc-600">
                        {s.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {ch.note ? (
                <p className="border-t border-zinc-300 pt-5 text-[13px] leading-relaxed text-zinc-500">
                  {ch.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${SITE.supportEmail}?subject=${encodeURIComponent(
              `[${SITE.appName}] 계정 삭제 요청`,
            )}&body=${encodeURIComponent(
              "가입 이메일(또는 휴대전화번호):\n요청 내용: 계정 삭제를 요청합니다.\n",
            )}`}
            className="inline-flex h-12 items-center gap-3 border border-zinc-900 bg-zinc-950 px-6 font-mono text-xs uppercase tracking-[0.22em] text-[#FAFAF7] transition-transform hover:-translate-y-[1px] active:scale-[0.98]"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            이메일로 삭제 요청
          </a>
          <Link
            href="/inquiry?type=inq-account"
            className="inline-flex h-12 items-center gap-3 border border-zinc-900 px-6 font-mono text-xs uppercase tracking-[0.22em] text-zinc-900 transition-colors hover:bg-zinc-950 hover:text-[#FAFAF7]"
          >
            1:1 문의로 요청
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <a
            href={`tel:${SITE.supportTel}`}
            className="inline-flex h-12 items-center gap-3 border border-zinc-300 px-6 font-mono text-xs uppercase tracking-[0.22em] text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-950"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            {SITE.supportTel}
          </a>
        </div>
      </div>

      {/* 삭제 / 보관 데이터 + 보관 기간 */}
      <div className="mt-20 md:mt-28">
        <div className="flex items-baseline justify-between border-b border-zinc-900 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            What is deleted &amp; what is retained
          </p>
          <span className="font-mono text-[11px] tracking-wider text-zinc-400">
            {String(deletionDataRows.length).padStart(2, "0")} categories
          </span>
        </div>

        <p className="mt-6 max-w-[72ch] text-[14.5px] leading-relaxed text-zinc-600">
          계정 삭제 시 아래 데이터는 지체 없이 파기됩니다. 다만 전자상거래 등에서의
          소비자보호에 관한 법률 등 관계 법령에서 보관을 의무화한 일부 기록은,
          명시된 기간 동안 분리·보관된 뒤 파기됩니다.
        </p>

        {/* 데스크톱 표 */}
        <div className="mt-10 hidden border border-zinc-200 md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-zinc-300 bg-white">
                {["데이터 항목", "포함 내용", "처리", "보관 기간 · 근거"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {deletionDataRows.map((r) => (
                <tr
                  key={r.category}
                  className="border-b border-zinc-200 last:border-b-0 align-top"
                >
                  <td className="px-5 py-5 text-[14px] font-medium text-zinc-900">
                    {r.category}
                  </td>
                  <td className="px-5 py-5 text-[13.5px] leading-relaxed text-zinc-600">
                    {r.items}
                  </td>
                  <td className="px-5 py-5">
                    <Disposition kind={r.disposition} />
                  </td>
                  <td className="px-5 py-5 text-[13.5px] leading-relaxed text-zinc-600">
                    {r.disposition === "delete" ? (
                      <span className="text-zinc-500">
                        {r.retention ?? "탈퇴 시 지체 없이 파기"}
                      </span>
                    ) : (
                      <span>
                        <span className="font-medium text-zinc-900">
                          {r.retention}
                        </span>
                        {r.basis ? (
                          <span className="mt-1 block text-[12.5px] text-zinc-500">
                            {r.basis}
                          </span>
                        ) : null}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일 카드 */}
        <ul className="mt-8 grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 md:hidden">
          {deletionDataRows.map((r) => (
            <li key={r.category} className="bg-[#FAFAF7] p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[15px] font-medium text-zinc-900">
                  {r.category}
                </p>
                <Disposition kind={r.disposition} />
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-600">
                {r.items}
              </p>
              <p className="mt-3 border-t border-zinc-200 pt-3 text-[13px] leading-relaxed">
                {r.disposition === "delete" ? (
                  <span className="text-zinc-500">
                    {r.retention ?? "탈퇴 시 지체 없이 파기"}
                  </span>
                ) : (
                  <>
                    <span className="font-medium text-zinc-900">
                      {r.retention}
                    </span>
                    {r.basis ? (
                      <span className="block text-[12.5px] text-zinc-500">
                        {r.basis}
                      </span>
                    ) : null}
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-zinc-900 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Note
          </p>
          <ul className="mt-3 max-w-[72ch] space-y-2 text-[13.5px] leading-relaxed text-zinc-600">
            <li>
              · 처리 완료 후에는 데이터가 파기되어 복구할 수 없습니다. 진행 중인
              주문·환불이 있으면 거래 종료 후 삭제가 완료됩니다.
            </li>
            <li>
              · 법령에 따라 보관되는 기록은 보관 목적 외의 용도로 이용되지 않으며,
              보관 기간 경과 시 지체 없이 파기됩니다.
            </li>
            <li>
              · 데이터 처리에 대한 상세 내용은{" "}
              <Link
                href="/privacy"
                className="text-zinc-900 underline decoration-zinc-400 underline-offset-4 hover:decoration-zinc-900"
              >
                개인정보 처리방침
              </Link>
              에서 확인할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}

function Disposition({ kind }: { kind: "delete" | "retain" }) {
  const isDelete = kind === "delete";
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${
        isDelete
          ? "border-zinc-900 bg-zinc-950 text-[#FAFAF7]"
          : "border-zinc-300 bg-white text-zinc-600"
      }`}
    >
      {isDelete ? "삭제" : "기간 보관"}
    </span>
  );
}
