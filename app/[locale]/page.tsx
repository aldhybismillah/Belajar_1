import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostList } from "@/components/post-list";
import { ProjectCard } from "@/components/project-card";
import { SectionHead } from "@/components/section-head";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { stack, testimonials, timeline } from "@/content/profile";
import { projects } from "@/content/projects";
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
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", id: "/id" },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const altHref = `/${otherLocale(locale)}`;
  const posts = getPosts(locale).slice(0, 2);
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    locale === "en" ? "Hello from your portfolio" : "Halo dari portofolio kamu",
  )}`;

  return (
    <>
      <SiteHeader locale={locale} altHref={altHref} dict={dict} />

      <main id="main">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pb-24 sm:pt-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
            {site.name[locale]}
            <span className="mx-2 text-line">/</span>
            {site.role[locale]}
            <span className="mx-2 text-line">/</span>
            {site.location[locale]}
          </p>

          <h1 className="mt-8 max-w-3xl text-balance text-[2.1rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[3.4rem]">
            {dict.hero.headline}
          </h1>

          <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-muted sm:text-lg">
            {dict.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="#work"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              {dict.hero.ctaWork}
            </Link>
            <a
              href={mailto}
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              {dict.hero.ctaEmail}
            </a>
            {site.cvReady ? (
              <a
                href={site.cvPath}
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                {dict.hero.ctaCv}
              </a>
            ) : (
              <span
                title="Drop your PDF at public/cv/cv.pdf and set cvReady: true in content/site.ts"
                className="cursor-default rounded-full border border-dashed border-line px-5 py-2.5 text-sm text-muted"
              >
                {dict.hero.ctaCvPending}
              </span>
            )}
          </div>

          <p className="mt-7 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
            {dict.hero.status}
          </p>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-14 sm:py-20">
          <SectionHead kicker={dict.work.kicker} title={dict.work.title} />
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                dict={dict}
              />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-14 sm:py-20">
          <SectionHead kicker={dict.about.kicker} title={dict.about.title} />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5 text-[0.98rem] leading-relaxed text-body">
              {dict.about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                {dict.about.timelineTitle}
              </p>
              <ol className="mt-4 space-y-7 border-l border-line pl-5">
                {timeline.map((entry) => (
                  <li key={entry.period} className="relative">
                    <span className="absolute -left-[1.4rem] top-2 block size-[5px] rounded-full bg-accent" />
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                      {entry.period}
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      {entry.role[locale]} · {entry.org}
                      {entry.sample ? (
                        <span className="ml-2 rounded-full border border-line px-1.5 py-0.5 align-middle font-mono text-[0.55rem] uppercase tracking-[0.12em] font-normal text-muted">
                          {dict.work.sample}
                        </span>
                      ) : null}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
                      {entry.points[locale].map((point) => (
                        <li key={point.slice(0, 24)}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
          <SectionHead kicker={dict.testimonials.kicker} title={dict.testimonials.title} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {testimonials.map((item) => (
              <figure key={item.author + item.quote[locale].slice(0, 12)} className="rounded-xl border border-line p-6">
                <blockquote className="text-[0.98rem] leading-relaxed text-body">
                  “{item.quote[locale]}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                  {item.author} · {item.role[locale]}
                  {item.sample ? (
                    <span className="rounded-full border border-line px-2 py-0.5">
                      {dict.testimonials.sample}
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
          <SectionHead kicker={dict.stack.kicker} title={dict.stack.title} />
          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            {stack.groups.map((group) => (
              <div key={group.label}>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                  {group.label}
                </dt>
                <dd className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 text-sm text-body"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Writing */}
        <section id="writing" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-14 sm:py-20">
          <SectionHead
            kicker={dict.writing.kicker}
            title={dict.writing.title}
            action={
              <Link
                href={`/${locale}/writing`}
                className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
              >
                {dict.writing.all} →
              </Link>
            }
          />
          <div className="mt-8">
            <PostList posts={posts} locale={locale} dict={dict} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 pb-6 pt-14 sm:pt-20">
          <div className="rounded-2xl border border-line bg-white/40 p-8 sm:p-12">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-accent">
              {dict.contact.kicker}
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-[2rem]">
              {dict.contact.title}
            </h2>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-muted">
              {dict.contact.lead}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={mailto}
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
              >
                {site.email}
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
              >
                {dict.contact.github}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
              >
                {dict.contact.linkedin}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} dict={dict} />
    </>
  );
}
