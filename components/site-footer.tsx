import Link from "next/link";
import { SITE } from "@/lib/site";

const footerNav: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "Account",
    links: [
      { label: "계정 삭제 안내", href: "/account-deletion" },
      { label: "1:1 문의", href: "/inquiry" },
      { label: "자주 묻는 질문", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "서비스 이용약관", href: "/terms" },
      { label: "개인정보 처리방침", href: "/privacy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-[#FAFAF7]">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 border-b border-[#FAFAF7]/10 pb-12 md:grid-cols-3 md:gap-8">
          {footerNav.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FAFAF7]/55">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[#FAFAF7]/85">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-block transition-colors hover:text-[#FAFAF7]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FAFAF7]/55">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#FAFAF7]/85">
              <li>
                <a
                  href={`mailto:${SITE.supportEmail}`}
                  className="inline-block transition-colors hover:text-[#FAFAF7]"
                >
                  {SITE.supportEmail}
                </a>
              </li>
              <li>{SITE.supportTel}</li>
              <li className="text-[#FAFAF7]/55">{SITE.supportHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[60ch] text-[13px] leading-relaxed text-[#FAFAF7]/55">
            {SITE.appName} ({SITE.appNameEn}) · 개발자 {SITE.developerName}
            <br />
            {SITE.legalEntity} · 대표 {SITE.representative} · 사업자등록번호{" "}
            {SITE.businessRegNo} · 통신판매업 {SITE.mailOrderNo}
            <br />
            개인정보 보호책임자 {SITE.privacyOfficer.name} ·{" "}
            {SITE.privacyOfficer.email}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FAFAF7]/40">
            © {new Date().getFullYear()} {SITE.appNameEn}
          </p>
        </div>
      </div>
    </footer>
  );
}
