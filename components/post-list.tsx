import Link from "next/link";

import type { Dictionary } from "@/content/dictionaries/types";
import type { Locale } from "@/lib/i18n";
import { formatDate, type PostMeta } from "@/lib/posts";

export function PostList({
  posts,
  locale,
  dict,
}: {
  posts: PostMeta[];
  locale: Locale;
  dict: Dictionary;
}) {
  if (posts.length === 0) {
    return <p className="py-6 text-sm text-muted">{dict.writing.empty}</p>;
  }

  return (
    <ul className="divide-y divide-line border-b border-line">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/${locale}/writing/${post.slug}`}
            className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <span className="shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted sm:w-32">
              {formatDate(post.date, locale)}
            </span>
            <span className="flex-1">
              <span className="block text-base font-medium tracking-[-0.01em] transition-colors group-hover:text-accent sm:text-lg">
                {post.title}
              </span>
              <span className="mt-1 block max-w-xl text-sm leading-relaxed text-muted">
                {post.summary}
              </span>
            </span>
            <span className="shrink-0 font-mono text-[0.68rem] text-muted">
              {post.readingTime} {dict.post.readingTime}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
