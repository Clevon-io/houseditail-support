import type { Metadata } from "next";
import { LegalViewer } from "@/components/legal-viewer";
import { PageShell } from "@/components/page-shell";
import { WorksNav } from "@/components/works-nav";
import { WORKS, worksPrivacyDoc } from "@/content/works";

export const metadata: Metadata = {
  title: `${WORKS.appName} 개인정보 처리방침`,
  description: `${WORKS.appName} 앱이 수집하는 개인정보 항목과 목적, 출퇴근 시점에만 수집하는 위치정보의 처리 방식, 보유 기간, 처리 위탁과 임직원의 권리를 안내합니다.`,
};

export default function WorksPrivacyPage() {
  return (
    <PageShell
      overline={worksPrivacyDoc.overline}
      title={worksPrivacyDoc.title}
      subtitle={worksPrivacyDoc.subtitle}
      description={worksPrivacyDoc.description}
      meta={
        <div className="border border-zinc-200 bg-white p-6">
          <WorksNav current={WORKS.paths.privacy} />
        </div>
      }
    >
      <LegalViewer
        doc={worksPrivacyDoc}
        contactHref={WORKS.paths.support}
        contactLabel="웍스 앱 지원 페이지"
      />
    </PageShell>
  );
}
