# Portfolio — Next.js + Tailwind + MDX

A bilingual (EN/ID) one-page portfolio with a writing section, built for Vercel.
No database, no auth, no form backend, no environment variables.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en
npm run build      # production build (this is what Vercel runs)
npm start          # serve the production build
```

## Where the placeholders live

Everything below is sample data on purpose, and the UI labels it (`Sample` /
`Contoh`, `Screenshot pending` / `Screenshot menyusul`) so nothing looks real
before you replace it.

| What | File |
| --- | --- |
| Name, role, location, email, GitHub, LinkedIn, site URL, CV toggle | `content/site.ts` |
| The three project cards | `content/projects.ts` |
| Experience timeline, stack, testimonials | `content/profile.ts` |
| All UI copy and page text (EN/ID) | `content/dictionaries/en.ts`, `content/dictionaries/id.ts` |
| Blog posts and case studies | `content/posts/en/*.mdx`, `content/posts/id/*.mdx` |

### Project screenshots

Covers are CSS gradients, so nothing is broken while you wait for screenshots.
To use a real image, add it to `public/` and extend `Project` in
`content/types.ts` with an `image` field rendered through `next/image` in
`components/project-card.tsx`.

### CV

1. Put your PDF at `public/cv/cv.pdf`.
2. Set `cvReady: true` in `content/site.ts`.

Until then the hero shows a non-clickable “CV coming soon” chip instead of a
broken download link.

## Adding a post

Create `content/posts/en/my-post.mdx` and, for the Indonesian version,
`content/posts/id/my-post.mdx` with the same filename:

```mdx
---
title: "Post title"
summary: "One sentence shown in the list."
date: "2026-11-17"
tags: ["Case study"]
---

Body in Markdown/MDX. GFM (tables, strikethrough) is enabled.
```

If a translation is missing, the language switch falls back to that language's
writing index instead of a 404.

## How the languages work

- `/en` is the default; `/` redirects to it (`next.config.ts`).
- `/id` is the Indonesian mirror.
- Only these two segments are pre-rendered (`dynamicParams = false`).
- The switch in the header keeps you on the same page when a translation exists.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project**, import the repo.
3. Framework preset: **Next.js** (auto-detected). Build command `next build`,
   output `.next`. Leave environment variables empty.
4. Deploy. Then rename the project (Settings → General → Project Name) if you
   want `your-name.vercel.app`, and update `url` in `content/site.ts`.

No `vercel.json` is needed.

## Structure

```
app/[locale]/layout.tsx            root layout: fonts, <html lang>, metadata
app/[locale]/page.tsx              the one-page portfolio
app/[locale]/writing/page.tsx      writing index
app/[locale]/writing/[slug]/page.tsx  MDX post renderer
components/                        header, footer, cards, post list
content/                           site data, dictionaries, projects, MDX
lib/i18n.ts                        locale helpers
lib/posts.ts                       filesystem MDX loader
```
