import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import { getDictionary, isLocale, locales, otherLocale } from "@/lib/i18n";
import { formatDate, getPost, getPosts, hasPost } from "@/lib/posts";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getPosts(locale).map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const post = getPost(locale, slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/${locale}/writing/${slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const post = getPost(locale, slug);
  if (!post) notFound();

  const dict = getDictionary(locale);
  const other = otherLocale(locale);
  const altHref = hasPost(other, slug)
    ? `/${other}/writing/${slug}`
    : `/${other}/writing`;

  return (
    <>
      <SiteHeader locale={locale} altHref={altHref} dict={dict} />

      <main id="main" className="mx-auto max-w-2xl px-6 py-14 sm:py-20">
        <Link
          href={`/${locale}/writing`}
          className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
        >
          ← {dict.post.back}
        </Link>

        <h1 className="mt-6 text-balance text-[1.85rem] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.4rem]">
          {post.title}
        </h1>

        <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
          {formatDate(post.date, locale)} · {post.readingTime} {dict.post.readingTime}
          {post.tags.length > 0 ? ` · ${post.tags.join(" · ")}` : ""}
        </p>

        <div className="mt-10">
          <div className="mdx">
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-sm text-muted">
          {site.name[locale]} ·{" "}
          <a href={`mailto:${site.email}`} className="text-accent hover:opacity-70">
            {site.email}
          </a>
        </p>
      </main>

      <SiteFooter locale={locale} dict={dict} />
    </>
  );
}
