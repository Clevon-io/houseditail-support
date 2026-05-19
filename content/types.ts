export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalDoc = {
  slug: "terms" | "privacy";
  overline: string;
  title: string;
  subtitle?: string;
  description: string;
  version: string;
  effectiveAt: string;
  lastUpdatedAt: string;
  sections: LegalSection[];
};

export type FaqCategory = "account" | "order" | "shipping" | "return" | "etc";

export type FaqItem = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  popular?: boolean;
};

export type InquiryType = {
  id: string;
  label: string;
  description: string;
};

/** 계정 삭제 안내 페이지(구글 플레이 필수 요건)용 구조화 데이터 */
export type DeletionStep = {
  index: number;
  title: string;
  detail: string;
};

export type DeletionChannel = {
  id: string;
  badge: string;
  title: string;
  summary: string;
  steps: DeletionStep[];
  note?: string;
};

export type DeletionDataRow = {
  category: string;
  items: string;
  /** 'delete' = 탈퇴 시 파기 / 'retain' = 법령 등에 따라 일정 기간 보관 */
  disposition: "delete" | "retain";
  /** 보관되는 경우 보관 기간 + 근거 */
  retention?: string;
  basis?: string;
};
