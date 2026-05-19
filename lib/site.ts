/**
 * 사이트 전역 상수.
 *
 * ⚠️ Google Play 등록정보와 "정확히 일치"해야 하는 값(앱 이름·개발자 이름·
 * 고객센터 연락처)은 아래 한 곳에서만 관리합니다. 실제 운영 값으로 채워 주세요.
 * 현재 `OOOO` 자리표시자는 houseditail 본 사이트 푸터와 동일한 컨벤션입니다.
 */
export const SITE = {
  /** Google Play 스토어 등록정보에 표시되는 앱 이름 */
  appName: "하우스디테일",
  appNameEn: "HOUSEDITAIL",
  /** Google Play 스토어 등록정보에 표시되는 개발자(게시자) 이름 */
  developerName: "(주)OOOO",
  /** 사업자 / 법적 고지 (houseditail 본 사이트 푸터와 동일) */
  legalEntity: "(주)OOOO",
  representative: "OOOO",
  businessRegNo: "OOOO",
  mailOrderNo: "OOOO",
  /** 고객센터 채널 */
  supportEmail: "privacy@houseditail.kr",
  supportTel: "02-6947-3183",
  supportHours: "평일 10:00 – 18:00 (점심 13:00 – 14:00 / 주말·공휴일 휴무)",
  /** 개인정보 보호책임자 */
  privacyOfficer: {
    name: "김서현",
    title: "개인정보 보호책임자 · COO",
    email: "privacy@houseditail.kr",
    tel: "02-6947-3183",
  },
  /** 계정 삭제 처리 SLA */
  deletionSla: "영업일 기준 3일 이내(본인 확인 완료 시점부터, 최대 10일 이내)",
} as const;

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "계정 삭제", href: "/account-deletion" },
  { label: "자주 묻는 질문", href: "/faq" },
  { label: "1:1 문의", href: "/inquiry" },
  { label: "이용약관", href: "/terms" },
  { label: "개인정보 처리방침", href: "/privacy" },
];
