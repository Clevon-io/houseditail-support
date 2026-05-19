"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Send } from "lucide-react";
import { SITE } from "@/lib/site";
import type { InquiryType } from "@/content/types";

type Props = {
  types: InquiryType[];
  defaultTypeId?: string;
};

export function InquiryForm({ types, defaultTypeId }: Props) {
  const [typeId, setTypeId] = useState(
    defaultTypeId ?? types[0]?.id ?? "",
  );
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [sent, setSent] = useState(false);

  const selectedType = types.find((t) => t.id === typeId);
  const valid =
    agree &&
    subject.trim().length > 0 &&
    message.trim().length >= 10 &&
    email.includes("@");

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!valid) return;
    const mailSubject = `[${SITE.appName} 문의 · ${selectedType?.label ?? ""}] ${subject}`;
    const mailBody = [
      `문의 유형: ${selectedType?.label ?? ""}`,
      `답변 받을 이메일: ${email}`,
      "",
      message,
    ].join("\n");
    const href = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[640px] flex-col gap-10"
    >
      <Field label="문의 유형">
        <div className="relative">
          <select
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
            className="h-11 w-full appearance-none border-b border-zinc-300 bg-transparent pr-6 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none"
          >
            {types.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
          <span
            aria-hidden
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400"
          >
            ▾
          </span>
        </div>
        {selectedType ? (
          <p className="text-[12.5px] leading-relaxed text-zinc-500">
            {selectedType.description}
          </p>
        ) : null}
      </Field>

      <Field label="제목">
        <input
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="문의하실 내용을 한 줄로 요약해 주세요"
          className="h-11 w-full border-b border-zinc-300 bg-transparent text-sm tracking-tight placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
        />
      </Field>

      <Field label="내용">
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
          rows={7}
          placeholder="상황을 구체적으로 적어 주실수록 더 빠르게 도와드릴 수 있어요. 계정 삭제 요청 시 가입 이메일을 함께 적어 주세요."
          className="w-full border border-zinc-200 bg-white p-4 text-sm leading-relaxed placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
        />
        <div className="mt-2 flex items-center justify-end font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
          {String(message.length).padStart(4, "0")} / 1000
        </div>
      </Field>

      <Field label="답변 받을 이메일">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="h-11 w-full border-b border-zinc-300 bg-transparent text-sm tracking-tight placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
        />
      </Field>

      <label className="flex items-start gap-3 border-t border-zinc-200 pt-5 text-sm text-zinc-800">
        <span
          className={`mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center border transition-colors ${
            agree
              ? "border-zinc-900 bg-zinc-950 text-[#FAFAF7]"
              : "border-zinc-400"
          }`}
        >
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="sr-only"
          />
          {agree ? <Check className="h-3 w-3" strokeWidth={2} /> : null}
        </span>
        <span>
          개인정보 수집 및 이용에 동의합니다.{" "}
          <Link
            href="/privacy"
            className="underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-950"
          >
            자세히 보기
          </Link>
        </span>
      </label>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={!valid}
          className="group relative inline-flex h-12 items-center justify-center gap-3 self-start border border-zinc-900 bg-zinc-950 px-7 font-mono text-xs uppercase tracking-[0.22em] text-[#FAFAF7] transition-[transform,background-color,color] hover:-translate-y-[1px] active:scale-[0.98] disabled:cursor-not-allowed disabled:border-zinc-300 disabled:bg-zinc-300 disabled:text-white"
        >
          {sent ? (
            <>
              <Check className="h-4 w-4" strokeWidth={1.8} />
              메일 앱으로 연결됨
            </>
          ) : (
            <>
              문의 보내기
              <Send
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </>
          )}
        </button>
        <p className="text-[12.5px] leading-relaxed text-zinc-500">
          {sent
            ? `메일 앱이 열리지 않으면 ${SITE.supportEmail} 로 직접 보내 주세요.`
            : `버튼을 누르면 작성한 내용이 담긴 메일이 ${SITE.supportEmail} 수신자로 준비됩니다. 답변은 ${SITE.supportHours} 기준으로 드립니다.`}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </span>
      {children}
    </label>
  );
}
