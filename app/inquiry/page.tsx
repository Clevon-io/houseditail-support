import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { PageShell } from "@/components/page-shell";
import { inquiryTypes } from "@/content/faq";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "1:1 문의",
  description:
    "계정 삭제 요청을 포함한 모든 문의를 남겨 주세요. 담당자가 직접 확인하고 답변드립니다.",
};

export default async function InquiryPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const defaultTypeId = inquiryTypes.some((t) => t.id === type)
    ? type
    : undefined;

  return (
    <PageShell
      overline="Support · Contact"
      title="1:1 문의"
      subtitle="Contact"
      description={`계정 삭제 요청을 포함해, 해결되지 않은 점을 남겨 주세요. ${SITE.privacyOfficer.name} 담당자가 직접 확인하고 ${SITE.supportHours} 기준으로 답변드립니다.`}
      meta={
        <div className="border border-zinc-200 bg-white p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            Other channels
          </p>
          <ul className="mt-4 space-y-3 text-[13.5px] leading-relaxed text-zinc-700">
            <li>
              이메일{" "}
              <a
                href={`mailto:${SITE.supportEmail}`}
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                {SITE.supportEmail}
              </a>
            </li>
            <li>
              전화{" "}
              <a
                href={`tel:${SITE.supportTel}`}
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                {SITE.supportTel}
              </a>
            </li>
            <li className="text-zinc-500">{SITE.supportHours}</li>
          </ul>
        </div>
      }
    >
      <InquiryForm types={inquiryTypes} defaultTypeId={defaultTypeId} />
    </PageShell>
  );
}
