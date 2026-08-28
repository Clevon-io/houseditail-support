import Link from "next/link";
import { worksNav } from "@/content/works";

export function WorksNav({ current }: { current: string }) {
  return (
    <nav aria-label="웍스 앱 안내 페이지">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
        Works App Pages
      </p>
      <ul className="mt-4 space-y-2 text-[13.5px] leading-relaxed">
        {worksNav.map((item) => {
          const on = item.href === current;
          return (
            <li key={item.href}>
              {on ? (
                <span className="font-medium text-zinc-950" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-zinc-900"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
