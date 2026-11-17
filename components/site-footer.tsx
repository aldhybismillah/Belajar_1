import type { Dictionary } from "@/content/dictionaries/types";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const links = [
    { href: site.github, label: dict.contact.github },
    { href: site.linkedin, label: dict.contact.linkedin },
    { href: `mailto:${site.email}`, label: dict.contact.email },
  ].filter((link) => Boolean(link.href));

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em]">
          {site.name[locale]} · {year}
        </p>
        <div className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-ink"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs">{dict.footer.built}</p>
      </div>
    </footer>
  );
}
