import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3100";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: `${SITE.appName} 고객센터 — 약관 · 계정 삭제 · 문의`,
    template: `%s · ${SITE.appName} 고객센터`,
  },
  description: `${SITE.appName} 고객센터입니다. 서비스 이용약관, 개인정보 처리방침, 계정 삭제 요청 방법과 자주 묻는 질문을 한곳에서 확인하세요.`,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        {children}
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}
