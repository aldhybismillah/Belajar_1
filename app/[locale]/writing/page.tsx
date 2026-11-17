import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostList } from "@/components/post-list";
import { SectionHead } from "@/components/section-head";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import { getDictionary, isLocale, otherLocale } from "@/lib/i18n";
import { getPosts } from "@/lib/posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    title: `${dict.writing.kicker} — ${site.name[locale]}`,
    description: dict.writing.indexLead,
    alternates: {
      canonical: `/${locale}/writing`,
      languages: { en: "/en/writing", id: "/id/writing" },
    },
  };
}

export default async function WritingIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const posts = getPosts(locale);

  return (
    <>
      <SiteHeader
        locale={locale}
        altHref={`/${otherLocale(locale)}/writing`}
        dict={dict}
      />

      <main id="main" className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <SectionHead kicker={dict.writing.kicker} title={dict.writing.title} />
        <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted">
          {dict.writing.indexLead}
        </p>
        <div className="mt-10">
          <PostList posts={posts} locale={locale} dict={dict} />
        </div>
      </main>

      <SiteFooter locale={locale} dict={dict} />
    </>
  );
}
