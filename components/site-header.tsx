import Link from "next/link";

import type { Dictionary } from "@/content/dictionaries/types";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function SiteHeader({
  locale,
  altHref,
  dict,
}: {
  locale: Locale;
  altHref: string;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  const links = [
    { href: `${base}#work`, label: dict.nav.work },
    { href: `${base}#about`, label: dict.nav.about },
    { href: `${base}/writing`, label: dict.nav.writing },
    { href: `${base}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href={base}
          className="font-mono text-xs uppercase tracking-[0.18em] text-ink"
        >
          {site.name[locale]}
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-7 text-sm text-muted sm:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={altHref}
          hrefLang={locale === "en" ? "id" : "en"}
          aria-label={locale === "en" ? "Ganti ke bahasa Indonesia" : "Switch to English"}
          className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted transition-colors hover:border-ink hover:text-ink"
        >
          {dict.localeLabel}
        </Link>
      </div>
    </header>
  );
}
