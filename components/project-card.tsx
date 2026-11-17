import Link from "next/link";

import type { Dictionary } from "@/content/dictionaries/types";
import type { Project } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export function ProjectCard({
  project,
  locale,
  dict,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
}) {
  const caseStudy = project.caseStudySlug
    ? `/${locale}/writing/${project.caseStudySlug}`
    : null;

  const links = [
    project.liveUrl ? { href: project.liveUrl, label: dict.work.live, external: true } : null,
    project.repoUrl ? { href: project.repoUrl, label: dict.work.repo, external: true } : null,
    caseStudy ? { href: caseStudy, label: dict.work.caseStudy, external: false } : null,
  ].filter((link): link is { href: string; label: string; external: boolean } => link !== null);

  return (
    <article className="flex h-full flex-col">
      <div
        className="relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-xl p-4"
        style={{
          backgroundImage: `linear-gradient(140deg, ${project.cover.from}, ${project.cover.to})`,
        }}
        role="img"
        aria-label={`${project.title[locale]} — ${dict.work.screenshotPending}`}
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/60">
          {dict.work.screenshotPending}
        </span>
        <span className="font-mono text-3xl font-medium tracking-tight text-white/70">
          {project.cover.initials}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
        <span>{project.year}</span>
        <span aria-hidden="true">·</span>
        <span className="truncate">{project.role[locale]}</span>
        {project.sample ? (
          <span className="ml-auto shrink-0 rounded-full border border-line px-2 py-0.5">
            {dict.work.sample}
          </span>
        ) : null}
      </div>

      <h3 className="mt-2 text-lg font-semibold tracking-[-0.01em]">
        {project.title[locale]}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.summary[locale]}
      </p>

      <div className="mt-3 border-l-2 border-line pl-3">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
          {dict.work.result}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-body">
          {project.result[locale]}
        </p>
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {links.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-accent transition-opacity hover:opacity-70"
              {...(link.external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
            >
              {link.label}
              <span aria-hidden="true"> ↗</span>
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}
