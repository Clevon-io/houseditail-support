import type { FaqItem, InquiryType } from "./types";

export const faqs: FaqItem[] = [
  {
    id: "faq-account-delete-01",
    category: "account",
    question: "계정(회원)을 삭제하려면 어떻게 하나요?",
    answer:
      "앱에 로그인할 수 있다면 [마이페이지 › 계정 관리 › 회원 탈퇴]에서 직접 진행할 수 있습니다. 앱을 이미 삭제했거나 로그인할 수 없다면 고객센터 이메일(privacy@houseditail.kr) 또는 이 사이트의 1:1 문의로 ‘계정 삭제 요청’을 보내 주세요. 자세한 단계는 [계정 삭제] 페이지에 정리되어 있습니다.",
    popular: true,
  },
  {
    id: "faq-account-delete-02",
    category: "account",
    question: "계정을 삭제하면 어떤 데이터가 지워지고, 무엇이 남나요?",
    answer:
      "이메일·이름·연락처·배송지, 반려견 프로필, 찜·장바구니, 마케팅 동의 등은 파기됩니다. 다만 전자상거래법 등 관련 법령에 따라 계약·결제 기록은 5년, 소비자 불만·분쟁 기록은 3년, 접속 로그는 3개월간 보관된 뒤 파기됩니다. 부정 이용 방지를 위한 식별값은 탈퇴 후 30일간 보관됩니다.",
    popular: true,
  },
  {
    id: "faq-account-delete-03",
    category: "account",
    question: "계정 삭제는 얼마나 걸리나요? 취소할 수 있나요?",
    answer:
      "본인 확인 완료 시점부터 영업일 기준 3일 이내(최대 10일 이내)에 처리되며 완료 시 가입 이메일로 안내드립니다. 처리 완료 후에는 데이터가 파기되어 복구할 수 없으므로, 취소를 원하시면 처리 완료 전에 같은 채널로 알려 주세요.",
    popular: true,
  },
  {
    id: "faq-account-04",
    category: "account",
    question: "진행 중인 주문이 있어도 탈퇴할 수 있나요?",
    answer:
      "배송 중이거나 환불이 진행 중인 거래가 있으면 해당 거래가 종료된 뒤 탈퇴가 완료됩니다. 거래 보호를 위한 절차이며, 종료 후 자동으로 처리됩니다.",
  },
  {
    id: "faq-account-05",
    category: "account",
    question: "소셜 로그인(Apple·Google·Kakao) 계정도 같은 방법으로 삭제되나요?",
    answer:
      "네. 가입 방식과 관계없이 동일한 절차로 삭제됩니다. 단, 소셜 제공자 측 계정 자체는 삭제되지 않으며, 하우스디테일에 연결된 데이터만 파기됩니다.",
  },
  {
    id: "faq-order-01",
    category: "order",
    question: "주문을 취소하고 싶어요.",
    answer:
      "[마이페이지 › 주문 내역]에서 상태가 ‘결제 완료’인 주문은 직접 취소할 수 있습니다. ‘상품 준비 중’부터는 1:1 문의로 요청해 주세요. 출고 이후에는 반품 절차로 안내됩니다.",
  },
  {
    id: "faq-shipping-01",
    category: "shipping",
    question: "배송은 얼마나 걸리나요?",
    answer:
      "평일 오후 1시 이전 결제 건은 당일 출고, 이후 주문은 다음 영업일 출고됩니다. 수령까지는 출고 후 1~2영업일이 일반적이며, 제주·도서산간은 1일 추가됩니다.",
  },
  {
    id: "faq-return-01",
    category: "return",
    question: "교환·반품은 어떻게 신청하나요?",
    answer:
      "[마이페이지 › 주문 내역 › 교환/반품 신청]에서 요청하실 수 있습니다. 식품·냉장 상품은 개봉 후 교환·환불이 어려우나, 배송 중 파손·변질은 증빙과 함께 7일 내 알려 주시면 즉시 교환해 드립니다.",
  },
  {
    id: "faq-etc-01",
    category: "etc",
    question: "개인정보 열람·정정을 요청하고 싶어요.",
    answer:
      "[마이페이지 › 계정 관리]에서 직접 조회·수정하거나, 개인정보 보호책임자(privacy@houseditail.kr)에게 이메일로 요청하시면 지체 없이 조치합니다.",
  },
];

export const inquiryTypes: InquiryType[] = [
  {
    id: "inq-account",
    label: "회원 · 계정 (계정 삭제 포함)",
    description: "회원 탈퇴, 계정 삭제, 로그인, 개인정보 열람·정정",
  },
  {
    id: "inq-order",
    label: "주문 · 결제",
    description: "결제 오류, 주문 취소, 영수증 재발급",
  },
  {
    id: "inq-shipping",
    label: "배송",
    description: "송장 추적, 분실·지연, 배송지 변경",
  },
  {
    id: "inq-return",
    label: "교환 · 반품",
    description: "파손, 사이즈 교환, 환불 처리",
  },
  {
    id: "inq-etc",
    label: "기타",
    description: "제휴·미디어 제안, 그 외 문의",
  },
];
