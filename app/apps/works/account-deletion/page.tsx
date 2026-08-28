import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import {
  DeletionChannelGrid,
  DeletionDataTable,
} from "@/components/deletion-guide";
import { PageShell } from "@/components/page-shell";
import { WorksNav } from "@/components/works-nav";
import {
  WORKS,
  worksDeletionChannels,
  worksDeletionDataRows,
} from "@/content/works";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${WORKS.appName} 계정 삭제 안내`,
  description: `${WORKS.appName} 직원 계정의 삭제(퇴사 처리) 요청 절차와, 삭제되는 데이터·법령에 따라 보관되는 데이터 및 보관 기간을 안내합니다.`,
};

export default function WorksAccountDeletionPage() {
  return (
    <PageShell
      overline="Works App · Account Deletion"
      title="웍스 앱 계정 삭제 안내"
      subtitle="Delete"
      description={`${WORKS.appName}의 직원 계정은 회사가 발급·관리하므로 앱 안에서 직접 삭제할 수 없습니다. 이 페이지는 인사 담당자에게 퇴사 처리를 요청하는 절차와, 처리 후 삭제되는 데이터·법령에 따라 일정 기간 보관되는 데이터를 안내합니다. Google Play 스토어 등록정보에 표시되는 계정 삭제 안내입니다.`}
      meta={
        <div className="border border-zinc-200 bg-white p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            App / Developer
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
              <dt className="shrink-0 text-zinc-500">처리 기한</dt>
              <dd className="text-right font-medium text-zinc-900">
                퇴사 처리 즉시 · 이메일 요청은 영업일 기준 3일 이내
              </dd>
            </div>
          </dl>
          <div className="mt-6 border-t border-zinc-100 pt-5">
            <WorksNav current={WORKS.paths.accountDeletion} />
          </div>
        </div>
      }
    >
      <div>
        <div className="flex items-baseline justify-between border-b border-zinc-900 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            How to request deletion
          </p>
          <span className="font-mono text-[11px] tracking-wider text-zinc-400">
            {String(worksDeletionChannels.length).padStart(2, "0")} ways
          </span>
        </div>

        <DeletionChannelGrid channels={worksDeletionChannels} />

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${SITE.supportEmail}?subject=${encodeURIComponent(
              `[${WORKS.appName}] 계정 삭제 요청`,
            )}&body=${encodeURIComponent(
              "이름:\n계정 이메일:\n소속(매장 또는 팀):\n요청 내용: 웍스 앱 계정 삭제(퇴사 처리)를 요청합니다.\n",
            )}`}
            className="inline-flex h-12 items-center gap-3 border border-zinc-900 bg-zinc-950 px-6 font-mono text-xs uppercase tracking-[0.22em] text-[#FAFAF7] transition-transform hover:-translate-y-[1px] active:scale-[0.98]"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            이메일로 삭제 요청
          </a>
          <a
            href={`tel:${SITE.supportTel}`}
            className="inline-flex h-12 items-center gap-3 border border-zinc-300 px-6 font-mono text-xs uppercase tracking-[0.22em] text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-950"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            {SITE.supportTel}
          </a>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <div className="flex items-baseline justify-between border-b border-zinc-900 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            What is deleted &amp; what is retained
          </p>
          <span className="font-mono text-[11px] tracking-wider text-zinc-400">
            {String(worksDeletionDataRows.length).padStart(2, "0")} categories
          </span>
        </div>

        <p className="mt-6 max-w-[72ch] text-[14.5px] leading-relaxed text-zinc-600">
          퇴사 처리가 완료되면 로그인 계정은 즉시 비활성화되고 아래 삭제 항목은
          지체 없이 파기됩니다. 근태·보고서 기록은 근로기준법 등 관계 법령의
          보존 의무에 따라 {WORKS.retention}간 분리 보관된 뒤 파기되며, 보관
          중에는 보존 목적 외의 용도로 이용되지 않습니다.
        </p>

        <DeletionDataTable
          rows={worksDeletionDataRows}
          defaultDeleteLabel="퇴사 처리 시 지체 없이 파기"
        />

        <div className="mt-10 border-t border-zinc-900 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Note
          </p>
          <ul className="mt-3 max-w-[72ch] space-y-2 text-[13.5px] leading-relaxed text-zinc-600">
            <li>
              · 출퇴근 시점에 수집된 위치 좌표는 출퇴근 기록의 인증 근거로 그
              기록과 함께 보관되며, 별도로 활용되지 않습니다.
            </li>
            <li>
              · 보관 기간이 지난 기록은 지체 없이 파기되며, 파기 후에는 복구할
              수 없습니다.
            </li>
            <li>
              · 데이터 처리에 대한 상세 내용은{" "}
              <Link
                href={WORKS.paths.privacy}
                className="text-zinc-900 underline decoration-zinc-400 underline-offset-4 hover:decoration-zinc-900"
              >
                웍스 앱 개인정보 처리방침
              </Link>
              에서 확인할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
