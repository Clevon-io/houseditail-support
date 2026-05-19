import type { Metadata } from "next";
import { LegalViewer } from "@/components/legal-viewer";
import { PageShell } from "@/components/page-shell";
import { privacyDoc } from "@/content/legal";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description:
    "하우스디테일의 개인정보 수집 항목, 이용 목적, 보유 기간, 제3자 제공, 계정 삭제 및 안전성 확보 조치를 확인하세요.",
};

export default function PrivacyPage() {
  return (
    <PageShell
      overline={privacyDoc.overline}
      title={privacyDoc.title}
      subtitle={privacyDoc.subtitle}
      description={privacyDoc.description}
    >
      <LegalViewer doc={privacyDoc} />
    </PageShell>
  );
}
