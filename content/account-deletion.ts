import { SITE } from "@/lib/site";
import type { DeletionChannel, DeletionDataRow } from "./types";

/**
 * 계정 삭제 요청 채널.
 * - app : 앱에 로그인할 수 있는 사용자
 * - web : 앱을 삭제했거나 로그인할 수 없는 사용자(웹/이메일로 요청)
 *
 * Google Play 요건: "사용자가 계정 삭제를 요청하기 위해 취해야 할 단계를
 * 눈에 띄게 표시" → 두 경로 모두 단계별로 명시한다.
 */
export const deletionChannels: DeletionChannel[] = [
  {
    id: "app",
    badge: "방법 1 · 앱 내에서",
    title: "앱에서 직접 회원 탈퇴",
    summary:
      "앱에 로그인할 수 있다면 마이페이지에서 직접 탈퇴할 수 있습니다. 별도 승인 없이 즉시 접수됩니다.",
    steps: [
      {
        index: 1,
        title: `${SITE.appName} 앱을 열고 로그인합니다.`,
        detail:
          "탈퇴는 본인 계정에서만 진행할 수 있으므로 먼저 로그인 상태인지 확인해 주세요.",
      },
      {
        index: 2,
        title: "하단 탭에서 [마이페이지]로 이동합니다.",
        detail: "화면 우측 하단의 사람 아이콘을 누르면 계정 화면이 열립니다.",
      },
      {
        index: 3,
        title: "[계정 관리] → [회원 탈퇴]를 선택합니다.",
        detail:
          "마이페이지 상단 설정에서 ‘계정 관리’로 들어간 뒤 화면 맨 아래의 ‘회원 탈퇴’를 누릅니다.",
      },
      {
        index: 4,
        title: "안내를 확인하고 [탈퇴하기]로 요청을 확정합니다.",
        detail:
          "삭제·보관되는 데이터 안내에 동의하면 탈퇴가 접수되며, 완료 시 가입 이메일로 결과를 보내드립니다.",
      },
    ],
    note: "진행 중인 주문·배송 또는 환불이 남아 있는 경우, 거래가 종료된 후 탈퇴가 완료됩니다.",
  },
  {
    id: "web",
    badge: "방법 2 · 앱 없이",
    title: "이메일 / 웹 양식으로 요청",
    summary:
      "앱을 이미 삭제했거나 로그인할 수 없어도 계정 삭제를 요청할 수 있습니다. 본인 확인 후 동일하게 처리됩니다.",
    steps: [
      {
        index: 1,
        title: `고객센터 이메일(${SITE.supportEmail})로 요청하거나, 이 사이트의 [1:1 문의]를 이용합니다.`,
        detail:
          "1:1 문의 페이지에서 ‘회원 · 계정’ 유형을 선택하면 동일하게 접수됩니다.",
      },
      {
        index: 2,
        title: "제목에 ‘계정 삭제 요청’이라고 적습니다.",
        detail: "담당자가 우선 처리할 수 있도록 제목을 명확히 적어 주세요.",
      },
      {
        index: 3,
        title: "가입 시 사용한 이메일(또는 휴대전화번호)을 본문에 적습니다.",
        detail:
          "계정 식별과 본인 확인을 위해 필요합니다. 비밀번호 등 민감정보는 보내지 마세요.",
      },
      {
        index: 4,
        title: "본인 확인 후 삭제가 진행되며, 완료되면 회신을 보내드립니다.",
        detail: `처리 소요: ${SITE.deletionSla}.`,
      },
    ],
    note: `문의 채널: ${SITE.supportEmail} · ${SITE.supportTel} (${SITE.supportHours})`,
  },
];

/**
 * 삭제되는 데이터 / 보관되는 데이터 + 추가 보관 기간.
 * 보관 항목·기간은 개인정보 처리방침과 동일하게 유지한다.
 */
export const deletionDataRows: DeletionDataRow[] = [
  {
    category: "계정 · 프로필",
    items: "이메일, 비밀번호, 이름, 연락처, 배송지",
    disposition: "delete",
  },
  {
    category: "반려견 프로필",
    items: "반려견 이름 · 품종 · 생일 · 체중 · 활동량",
    disposition: "delete",
  },
  {
    category: "활동 데이터",
    items: "찜·장바구니, 마케팅 수신 동의, 맞춤 추천 기록",
    disposition: "delete",
  },
  {
    category: "작성 콘텐츠",
    items: "상품 리뷰·평점, 1:1 문의 내역",
    disposition: "delete",
    retention: "리뷰는 즉시 파기하거나 작성자를 식별할 수 없도록 익명 처리",
  },
  {
    category: "부정 이용 방지용 식별값",
    items: "탈퇴 회원 식별 해시(재가입 어뷰징 방지 목적)",
    disposition: "retain",
    retention: "탈퇴 후 30일 보관 후 파기",
    basis: "회사 내부 방침 (부정 이용 방지)",
  },
  {
    category: "계약 · 청약철회 기록",
    items: "주문·취소·반품 등 계약 관련 기록",
    disposition: "retain",
    retention: "5년",
    basis: "전자상거래 등에서의 소비자보호에 관한 법률",
  },
  {
    category: "대금 결제 · 재화 공급 기록",
    items: "결제 수단·금액, 배송 이행 기록",
    disposition: "retain",
    retention: "5년",
    basis: "전자상거래 등에서의 소비자보호에 관한 법률",
  },
  {
    category: "소비자 불만 · 분쟁 처리 기록",
    items: "고객 상담·분쟁 조정 기록",
    disposition: "retain",
    retention: "3년",
    basis: "전자상거래 등에서의 소비자보호에 관한 법률",
  },
  {
    category: "접속 로그 · 접속 IP",
    items: "서비스 접속 기록, 접속 IP 정보",
    disposition: "retain",
    retention: "3개월",
    basis: "통신비밀보호법",
  },
];
