import type { Metadata } from "next";
import { LegalViewer } from "@/components/legal-viewer";
import { PageShell } from "@/components/page-shell";
import { termsDoc } from "@/content/legal";

export const metadata: Metadata = {
  title: "서비스 이용약관",
  description:
    "하우스디테일 서비스의 이용 조건과 절차, 회원·회사의 권리·의무 및 책임 사항을 확인하세요.",
};

export default function TermsPage() {
  return (
    <PageShell
      overline={termsDoc.overline}
      title={termsDoc.title}
      subtitle={termsDoc.subtitle}
      description={termsDoc.description}
    >
      <LegalViewer doc={termsDoc} />
    </PageShell>
  );
}
