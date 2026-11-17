import type { ReactNode } from "react";

export function SectionHead({
  kicker,
  title,
  action,
}: {
  kicker: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
      <div>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-accent">
          {kicker}
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-[1.75rem]">
          {title}
        </h2>
      </div>
      {action ? <div className="pb-1">{action}</div> : null}
    </div>
  );
}
