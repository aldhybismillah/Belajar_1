import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { Locale } from "@/lib/i18n";

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  readingTime: number;
};

export type Post = PostMeta & { content: string };

const postsRoot = path.join(process.cwd(), "content", "posts");

function readingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function readPost(locale: Locale, file: string): Post {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(postsRoot, locale, file), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: readingTime(content),
    content,
  };
}

function postFiles(locale: Locale): string[] {
  const dir = path.join(postsRoot, locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => /\.mdx?$/.test(file));
}

export function getPosts(locale: Locale): PostMeta[] {
  return postFiles(locale)
    .map((file) => {
      const { content: _content, ...meta } = readPost(locale, file);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(locale: Locale, slug: string): Post | null {
  const file = postFiles(locale).find((name) => name.replace(/\.mdx?$/, "") === slug);
  return file ? readPost(locale, file) : null;
}

export function hasPost(locale: Locale, slug: string): boolean {
  return postFiles(locale).some((name) => name.replace(/\.mdx?$/, "") === slug);
}

export function formatDate(date: string, locale: Locale): string {
  if (!date) return "";
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
