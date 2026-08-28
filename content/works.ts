import { SITE } from "@/lib/site";
import type {
  DeletionChannel,
  DeletionDataRow,
  LegalDoc,
  WorksFaqItem,
} from "./types";

export const WORKS = {
  appName: "하우스디테일 웍스",
  appNameEn: "HOUSEDITAIL WORKS",
  tagline: "하우스디테일 임직원 전용 출퇴근·보고서 앱",
  developerName: SITE.developerName,
  supportEmail: SITE.supportEmail,
  retention: "퇴사 후 3년",
  paths: {
    support: "/apps/works/support",
    privacy: "/apps/works/privacy",
    accountDeletion: "/apps/works/account-deletion",
  },
} as const;

export const worksNav = [
  { label: "웍스 앱 지원", href: WORKS.paths.support },
  { label: "개인정보 처리방침", href: WORKS.paths.privacy },
  { label: "계정 삭제 안내", href: WORKS.paths.accountDeletion },
] as const;

export const worksPrivacyDoc: LegalDoc = {
  slug: "works-privacy",
  overline: "Works App · Privacy Policy",
  title: "웍스 앱 개인정보 처리방침",
  subtitle: "Privacy",
  description: `${WORKS.appName}는 ${SITE.legalEntity}(이하 "회사")의 임직원이 출퇴근 기록과 업무 보고서 제출에 사용하는 직원 전용 앱입니다. 본 처리방침은 앱이 수집하는 개인정보 항목과 목적, 위치정보 처리 방식, 보유 기간, 위탁 현황과 직원의 권리를 설명합니다.`,
  version: "v 1.0",
  effectiveAt: "2026-08-26",
  lastUpdatedAt: "2026-08-26",
  sections: [
    {
      id: "works-privacy-01",
      title: "적용 범위",
      paragraphs: [
        `본 처리방침은 ${WORKS.appName} 앱(이하 "앱")과 앱이 연결되는 회사 인트라넷에서 이루어지는 임직원 개인정보 처리에 적용됩니다. 앱은 회사가 계정을 발급한 재직 임직원만 이용할 수 있으며, 고객용 서비스(하우스디테일 케어 앱·쇼핑몰)의 개인정보 처리방침과는 별도로 운영됩니다.`,
      ],
    },
    {
      id: "works-privacy-02",
      title: "수집하는 개인정보 항목",
      paragraphs: [
        "회사는 근태 관리와 업무 보고에 필요한 최소한의 정보만 수집합니다. 계정 정보는 인사 담당자가 재직 정보를 바탕으로 등록하며, 나머지 항목은 직원이 앱에서 해당 기능을 사용하는 시점에 생성됩니다.",
      ],
      list: [
        "계정 정보 : 이메일 주소, 비밀번호, 이름, 연락처, 소속·직급(인사 담당자가 등록)",
        "출퇴근 기록 : 출근·퇴근 시각, 사업장, 인증 방식(QR·GPS), 위치 좌표와 정확도(GPS 인증을 켠 사업장에서 출퇴근 버튼을 누른 시점에 한함)",
        "보고서 : 양식에 입력한 내용, 첨부한 사진·파일, 제출·검토 이력",
        "근태 수정 요청·휴가 : 요청 날짜, 희망 출퇴근 시각, 사유",
        "자동 수집 : 푸시 알림 토큰, 기기 종류·운영체제·앱 버전, 접속 로그·IP",
      ],
    },
    {
      id: "works-privacy-03",
      title: "개인정보의 수집 및 이용 목적",
      paragraphs: [
        "수집한 개인정보는 아래 목적으로만 이용하며, 목적이 바뀌는 경우 사전에 안내하고 필요한 동의를 받습니다.",
      ],
      list: [
        "임직원 본인 확인, 로그인 및 계정 관리",
        "출퇴근 기록 작성과 근무 시간표 기준의 근태 판정(지각·조퇴·초과 근무·결근)",
        "업무 보고서 제출, 검토, 반려·재제출 관리",
        "근태 수정 요청·휴가 등록 처리",
        "보고서 반려, 마감 임박, 출근 누락, 수정 요청 결과 등 업무 알림 발송",
        "근로기준법 등 법령상 의무 이행과 노무 분쟁 시 증빙 확보",
      ],
    },
    {
      id: "works-privacy-04",
      title: "위치정보의 처리",
      paragraphs: [
        "앱은 직원의 위치를 추적하지 않습니다. 위치 좌표는 GPS 인증이 켜진 사업장에서 직원이 출근 또는 퇴근 버튼을 누르는 그 시점에 한 번만 수집되며, 앱이 꺼져 있거나 화면 뒤에 있는 동안(백그라운드)에는 어떠한 위치 정보도 수집하지 않습니다.",
        "수집된 좌표는 해당 사업장 반경 안에 있는지 판정하는 데만 사용되고, 출퇴근 기록의 인증 근거로 그 기록과 함께 보관됩니다. 사업장 관리자가 GPS 인증을 끈 사업장에서는 위치 정보를 수집하지 않습니다.",
        "위치 권한은 기기 설정에서 언제든 철회할 수 있습니다. 다만 GPS 인증이 켜진 사업장에서는 위치 확인 없이 출퇴근을 기록할 수 없으므로, 이 경우 관리자에게 수기 처리를 요청해야 합니다.",
        "QR 인증에 사용하는 카메라는 QR 코드를 인식하는 동안에만 동작하며, 촬영된 화면은 저장하거나 전송하지 않습니다.",
      ],
    },
    {
      id: "works-privacy-05",
      title: "개인정보의 보유 및 이용 기간",
      paragraphs: [
        `임직원의 개인정보는 재직 기간 동안 보유·이용하며, 퇴사 처리 시 계정은 즉시 비활성화됩니다. 근태·보고서 기록은 근로기준법 등 관계 법령이 정한 보존 의무에 따라 ${WORKS.retention}간 보관한 뒤 지체 없이 파기합니다. 항목별 삭제·보관 범위는 [계정 삭제 안내] 페이지에 표로 정리되어 있습니다.`,
      ],
      list: [
        "로그인 계정 · 푸시 토큰 : 퇴사 처리 시 즉시 비활성화 및 파기",
        `직원 정보(이름·연락처·소속·직급·재직 기간) : ${WORKS.retention} (근로기준법 제42조 및 같은 법 시행령 제22조)`,
        `출퇴근 기록(시각·사업장·인증 방식·출퇴근 시점 위치 좌표)과 근태 수정·휴가 기록 : ${WORKS.retention} (근로기준법 제42조 및 같은 법 시행령 제22조)`,
        `제출한 보고서와 첨부 파일 : ${WORKS.retention} (회사 내부 방침 · 업무 기록 보존)`,
        "지출·경비 보고서의 증빙 자료 : 5년 (국세기본법 제85조의3)",
        "임시 저장 상태의 보고서 초안 : 퇴사 처리 시 지체 없이 파기",
        "접속 로그 · IP : 3개월 (통신비밀보호법)",
      ],
    },
    {
      id: "works-privacy-06",
      title: "개인정보의 제3자 제공",
      paragraphs: [
        "회사는 앱에서 수집한 임직원의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 근거하거나 수사·재판 목적으로 법원·수사기관 등의 적법한 요청이 있는 경우에 한하여 예외적으로 제공될 수 있습니다.",
      ],
    },
    {
      id: "works-privacy-07",
      title: "개인정보의 처리 위탁",
      paragraphs: [
        "회사는 앱 운영을 위해 아래 업무를 외부 업체에 위탁하고 있으며, 위탁 계약 시 개인정보의 안전한 관리에 필요한 사항을 규정하고 수탁자를 감독합니다.",
      ],
      list: [
        "Supabase, Inc. : 데이터베이스 호스팅, 로그인 인증, 보고서 첨부 파일 저장",
        "Google LLC (Firebase Cloud Messaging) : 앱 푸시 알림 발송 — 이전 항목은 푸시 토큰과 알림 내용에 한정되며 미국 소재 서버에서 처리",
      ],
    },
    {
      id: "works-privacy-08",
      title: "임직원의 권리와 행사 방법",
      paragraphs: [
        "임직원은 언제든지 자신의 개인정보에 대해 열람·정정·처리 정지를 요구할 수 있습니다. 앱의 [설정 › 내 정보]에서 등록된 정보를 확인할 수 있으며, 정정이 필요하면 인사 담당자에게 요청하면 지체 없이 조치합니다.",
        "직원 계정은 회사가 관리하므로 앱 안에서 직접 삭제할 수 없습니다. 퇴사 또는 계정 삭제를 원하는 경우 인사 담당자에게 퇴사 처리를 요청하며, 구체적인 절차와 삭제·보관 데이터는 [계정 삭제 안내] 페이지를 참고해 주세요.",
        "푸시 알림은 앱의 [설정]에서 끌 수 있고, 위치 권한은 기기 설정에서 철회할 수 있습니다.",
      ],
    },
    {
      id: "works-privacy-09",
      title: "안전성 확보 조치",
      paragraphs: [
        "회사는 임직원의 개인정보를 안전하게 관리하기 위해 다음과 같은 조치를 시행합니다.",
      ],
      list: [
        "전송 구간 암호화(HTTPS)와 비밀번호 단방향 해시 저장",
        "행 단위 접근 제어 : 직원은 본인 기록만 조회하고, 타인의 기록은 권한이 부여된 관리자만 범위 안에서 열람",
        "출퇴근 기록은 서버에서만 생성되며 앱은 기록을 임의로 수정할 수 없음",
        "QR 인증 비밀키는 서버 내부에서만 사용하고 외부에 노출하지 않음",
        "개인정보 취급자 최소화와 접근 권한의 주기적 점검",
      ],
    },
    {
      id: "works-privacy-10",
      title: "개인정보 보호책임자",
      paragraphs: [
        "회사는 개인정보 처리에 관한 업무를 총괄하고, 임직원의 문의·불만 처리 및 피해 구제를 위해 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.",
      ],
      list: [
        `성명 : ${SITE.privacyOfficer.name}`,
        `직책 : ${SITE.privacyOfficer.title}`,
        `이메일 : ${SITE.privacyOfficer.email}`,
        `유선 : ${SITE.privacyOfficer.tel}`,
      ],
    },
    {
      id: "works-privacy-11",
      title: "처리방침 변경",
      paragraphs: [
        "본 처리방침은 시행일로부터 적용되며, 법령 또는 앱 기능 변경에 따라 내용을 추가·삭제·수정하는 경우 시행 7일 전부터 앱과 이 페이지에 공지합니다.",
        "최초 시행일 : 2026년 8월 26일.",
      ],
    },
  ],
};

export const worksDeletionChannels: DeletionChannel[] = [
  {
    id: "hr",
    badge: "방법 1 · 재직 중",
    title: "인사 담당자에게 퇴사 처리 요청",
    summary:
      "직원 계정은 회사가 발급·관리하므로 앱 안에서 직접 삭제할 수 없습니다. 퇴사 처리가 완료되면 계정이 비활성화되고 데이터 삭제·보관 절차가 시작됩니다.",
    steps: [
      {
        index: 1,
        title: "소속 인사 담당자(또는 팀장)에게 퇴사 처리를 요청합니다.",
        detail:
          "사내 퇴사 절차에 따라 요청하면 됩니다. 앱 계정 삭제만 따로 원하는 경우에도 같은 담당자에게 요청합니다.",
      },
      {
        index: 2,
        title: "담당자가 인트라넷에서 퇴사 처리를 진행합니다.",
        detail:
          "퇴사 처리와 동시에 계정이 비활성화되어 앱에 더 이상 로그인할 수 없고, 푸시 알림도 중단됩니다.",
      },
      {
        index: 3,
        title: "삭제·보관 절차가 자동으로 적용됩니다.",
        detail:
          "로그인 정보와 푸시 토큰은 즉시 파기되고, 근태·보고서 기록은 법정 보존 기간 동안 분리 보관된 뒤 파기됩니다.",
      },
      {
        index: 4,
        title: "기기에서 앱을 삭제합니다.",
        detail:
          "앱을 삭제하면 기기에 남아 있던 로그인 세션과 임시 저장 데이터가 함께 지워집니다.",
      },
    ],
    note: "퇴사 처리 후 재입사하는 경우 새 계정이 발급되며, 이전 계정은 복구되지 않습니다.",
  },
  {
    id: "email",
    badge: "방법 2 · 앱 없이 · 퇴사 후",
    title: "이메일로 요청",
    summary:
      "이미 퇴사했거나 앱을 삭제해 담당자에게 연락하기 어려운 경우, 이메일로 계정 삭제를 요청할 수 있습니다. 재직 여부와 본인 확인 후 동일하게 처리됩니다.",
    steps: [
      {
        index: 1,
        title: `${SITE.supportEmail} 로 이메일을 보냅니다.`,
        detail: `제목에 '${WORKS.appName} 계정 삭제 요청'이라고 적어 주세요.`,
      },
      {
        index: 2,
        title: "이름, 계정 이메일, 소속(매장 또는 팀)을 본문에 적습니다.",
        detail:
          "계정 식별과 본인 확인에 필요한 정보입니다. 비밀번호 등 민감정보는 보내지 마세요.",
      },
      {
        index: 3,
        title: "담당자가 재직 여부와 본인 확인 후 퇴사 처리를 진행합니다.",
        detail: `처리 소요: ${SITE.deletionSla}. 완료되면 회신을 보내드립니다.`,
      },
    ],
    note: `문의 채널: ${SITE.supportEmail} · ${SITE.supportTel} (${SITE.supportHours})`,
  },
];

export const worksDeletionDataRows: DeletionDataRow[] = [
  {
    category: "로그인 계정",
    items: "비밀번호, 로그인 세션, 푸시 알림 토큰",
    disposition: "delete",
    retention: "퇴사 처리 시 즉시 비활성화 및 파기",
  },
  {
    category: "임시 저장 보고서",
    items: "제출하지 않은 보고서 초안과 첨부 파일",
    disposition: "delete",
    retention: "퇴사 처리 시 지체 없이 파기",
  },
  {
    category: "직원 정보",
    items: "이름, 이메일, 연락처, 소속·직급, 재직 기간",
    disposition: "retain",
    retention: WORKS.retention,
    basis: "근로기준법 제42조 · 같은 법 시행령 제22조 (근로자 명부 등 서류 보존)",
  },
  {
    category: "출퇴근 기록",
    items:
      "출근·퇴근 시각, 사업장, 인증 방식, 출퇴근 시점 위치 좌표, 근태 수정 요청·승인 내역, 휴가",
    disposition: "retain",
    retention: WORKS.retention,
    basis: "근로기준법 제42조 · 같은 법 시행령 제22조 (근로계약 관련 서류 보존)",
  },
  {
    category: "제출한 보고서",
    items: "보고서 입력 내용, 첨부 사진·파일, 검토·반려 기록",
    disposition: "retain",
    retention: WORKS.retention,
    basis: "회사 내부 방침 (업무 기록 보존)",
  },
  {
    category: "지출·경비 증빙",
    items: "지출·경비 보고서에 첨부된 영수증 등 증빙 자료",
    disposition: "retain",
    retention: "5년",
    basis: "국세기본법 제85조의3 (장부 및 증빙서류 보존)",
  },
  {
    category: "접속 로그 · 접속 IP",
    items: "앱 접속 기록, 접속 IP 정보",
    disposition: "retain",
    retention: "3개월",
    basis: "통신비밀보호법",
  },
];

export const worksFaqs: WorksFaqItem[] = [
  {
    id: "works-faq-login",
    question: "로그인이 안 돼요.",
    answer:
      "웍스 앱 계정은 회사 인사 담당자가 발급합니다. 초대 링크나 임시 비밀번호를 받지 못했거나, '직원 계정이 아닙니다' 안내가 뜬다면 담당자에게 계정이 등록·활성화되어 있는지 확인을 요청해 주세요. 이메일 주소의 오타와 대소문자도 함께 확인해 보세요.",
  },
  {
    id: "works-faq-temp-password",
    question: "임시 비밀번호는 어떻게 쓰나요?",
    answer:
      "임시 비밀번호로 처음 로그인하면 비밀번호 변경 화면이 바로 열립니다. 새 비밀번호를 설정해야 앱을 이용할 수 있습니다. 임시 비밀번호를 잊었거나 기한이 지났다면 인사 담당자에게 재발급을 요청해 주세요.",
  },
  {
    id: "works-faq-clock-in",
    question: "출근이 안 찍혀요.",
    answer:
      "디지털 QR은 5초마다 바뀌므로 화면에 표시된 최신 QR을 바로 스캔해야 합니다. 'QR 만료' 안내가 뜨면 다시 스캔해 주세요. 'GPS 반경 밖' 안내가 뜨면 사업장 반경(기본 100m) 안에서 위치 권한을 허용한 뒤 다시 시도합니다. QR과 GPS 인증이 모두 켜진 사업장에서는 둘 다 통과해야 기록됩니다. 그래도 기록되지 않으면 [내 근태]에서 수정 요청을 남기고 관리자에게 알려 주세요.",
  },
  {
    id: "works-faq-correction",
    question: "출퇴근 기록이 잘못됐어요.",
    answer:
      "[내 근태]에서 해당 날짜를 누르면 수정 요청을 작성할 수 있습니다. 희망 출근·퇴근 시각과 사유를 적어 제출하면 관리자가 검토한 뒤 승인 또는 반려하며, 결과는 푸시 알림으로 안내됩니다. 같은 날짜에 대기 중인 요청이 있으면 새 요청을 만들 수 없습니다.",
  },
  {
    id: "works-faq-update",
    question: "앱을 최신 버전으로 업데이트하려면요?",
    answer:
      "Google Play 또는 App Store에서 '하우스디테일 웍스'를 검색해 업데이트할 수 있습니다. 출퇴근이나 보고서 제출이 예상과 다르게 동작하면 먼저 최신 버전인지 확인해 주세요. 현재 버전은 앱의 [설정] 맨 아래에서 볼 수 있습니다.",
  },
];
