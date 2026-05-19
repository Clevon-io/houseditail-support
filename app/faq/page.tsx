import type { Metadata } from "next";
import { FaqView } from "@/components/faq-view";
import { PageShell } from "@/components/page-shell";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description:
    "계정 삭제, 주문·배송·교환·회원 등 가장 많이 들어온 질문과 답변을 카테고리별로 정리했습니다.",
};

export default function FaqPage() {
  return (
    <PageShell
      overline="Support · FAQ"
      title="자주 묻는 질문"
      subtitle="FAQ"
      description="많이 주신 질문과, 가장 정확한 답을 모아 두었습니다. 해결되지 않는 내용은 언제든 1:1 문의로 이어집니다."
    >
      <FaqView items={faqs} />
    </PageShell>
  );
}
