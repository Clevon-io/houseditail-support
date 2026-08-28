import type { DeletionChannel, DeletionDataRow } from "@/content/types";

export function DeletionChannelGrid({
  channels,
}: {
  channels: DeletionChannel[];
}) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 lg:grid-cols-2">
      {channels.map((ch) => (
        <div key={ch.id} className="flex flex-col gap-7 bg-[#FAFAF7] p-7 md:p-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              {ch.badge}
            </p>
            <h2 className="mt-3 font-serif text-[26px] leading-tight tracking-tight text-zinc-950 md:text-[32px]">
              {ch.title}
            </h2>
            <p className="mt-3 max-w-[48ch] text-[14.5px] leading-relaxed text-zinc-600">
              {ch.summary}
            </p>
          </div>

          <ol className="flex flex-col">
            {ch.steps.map((s) => (
              <li
                key={s.index}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-zinc-200 py-5 first:border-t-0 first:pt-0"
              >
                <span className="font-serif text-[24px] italic leading-none text-zinc-400">
                  {String(s.index).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[15px] font-medium leading-snug tracking-tight text-zinc-900">
                    {s.title}
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-zinc-600">
                    {s.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {ch.note ? (
            <p className="border-t border-zinc-300 pt-5 text-[13px] leading-relaxed text-zinc-500">
              {ch.note}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function DeletionDataTable({
  rows,
  defaultDeleteLabel = "탈퇴 시 지체 없이 파기",
}: {
  rows: DeletionDataRow[];
  defaultDeleteLabel?: string;
}) {
  return (
    <>
      <div className="mt-10 hidden border border-zinc-200 md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-zinc-300 bg-white">
              {["데이터 항목", "포함 내용", "처리", "보관 기간 · 근거"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.category}
                className="border-b border-zinc-200 last:border-b-0 align-top"
              >
                <td className="px-5 py-5 text-[14px] font-medium text-zinc-900">
                  {r.category}
                </td>
                <td className="px-5 py-5 text-[13.5px] leading-relaxed text-zinc-600">
                  {r.items}
                </td>
                <td className="px-5 py-5">
                  <Disposition kind={r.disposition} />
                </td>
                <td className="px-5 py-5 text-[13.5px] leading-relaxed text-zinc-600">
                  {r.disposition === "delete" ? (
                    <span className="text-zinc-500">
                      {r.retention ?? defaultDeleteLabel}
                    </span>
                  ) : (
                    <span>
                      <span className="font-medium text-zinc-900">
                        {r.retention}
                      </span>
                      {r.basis ? (
                        <span className="mt-1 block text-[12.5px] text-zinc-500">
                          {r.basis}
                        </span>
                      ) : null}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 md:hidden">
        {rows.map((r) => (
          <li key={r.category} className="bg-[#FAFAF7] p-5">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[15px] font-medium text-zinc-900">
                {r.category}
              </p>
              <Disposition kind={r.disposition} />
            </div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-600">
              {r.items}
            </p>
            <p className="mt-3 border-t border-zinc-200 pt-3 text-[13px] leading-relaxed">
              {r.disposition === "delete" ? (
                <span className="text-zinc-500">
                  {r.retention ?? defaultDeleteLabel}
                </span>
              ) : (
                <>
                  <span className="font-medium text-zinc-900">
                    {r.retention}
                  </span>
                  {r.basis ? (
                    <span className="block text-[12.5px] text-zinc-500">
                      {r.basis}
                    </span>
                  ) : null}
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

function Disposition({ kind }: { kind: "delete" | "retain" }) {
  const isDelete = kind === "delete";
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${
        isDelete
          ? "border-zinc-900 bg-zinc-950 text-[#FAFAF7]"
          : "border-zinc-300 bg-white text-zinc-600"
      }`}
    >
      {isDelete ? "삭제" : "기간 보관"}
    </span>
  );
}
