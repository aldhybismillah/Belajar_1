import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Your Name — Frontend Developer",
    description:
      "Frontend developer building fast, accessible web interfaces with React, Next.js and TypeScript.",
  },
  nav: {
    work: "Work",
    about: "About",
    writing: "Writing",
    contact: "Contact",
  },
  localeLabel: "ID",
  hero: {
    eyebrow: "Frontend Developer — portfolio",
    headline: "I build fast, accessible interfaces that feel effortless.",
    lead: "Frontend developer working mostly in React, Next.js and TypeScript. I care about the unglamorous parts: load time, empty states, focus order, and copy that makes sense on a slow phone.",
    ctaWork: "See the work",
    ctaEmail: "Email me",
    ctaCv: "Download CV",
    ctaCvPending: "CV coming soon",
    status: "Open to remote and hybrid roles · replies within 1–2 working days",
  },
  work: {
    kicker: "Selected work",
    title: "Three projects and what I actually did in each.",
    sample: "Sample",
    screenshotPending: "Screenshot pending",
    result: "Result",
    live: "Live site",
    repo: "Repository",
    caseStudy: "Read the case study",
  },
  about: {
    kicker: "About",
    title:
      "I like the boring parts of frontend: load time, states, and copy that makes sense.",
    body: [
      "I started building for the web because I wanted to see a page I made on someone else's screen. That is still the part I like: shipping something small and finished, then watching where people get stuck.",
      "Most of my work is product frontend — dashboards, forms, checkout flows — where the job is less about novelty and more about making the obvious next step obvious. I write TypeScript, keep components small, and treat accessibility and performance as part of the definition of done rather than a later pass.",
    ],
    timelineTitle: "Experience",
  },
  testimonials: {
    kicker: "Words",
    title: "What people I've worked with say.",
    sample: "Sample",
  },
  stack: {
    kicker: "Stack",
    title: "Tools I reach for.",
    groups: [
      { label: "Core", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
      { label: "Comfortable", items: ["Node.js", "REST APIs", "Zod", "Framer Motion"] },
      { label: "Tooling", items: ["Git", "Vercel", "Figma", "Playwright"] },
    ],
  },
  writing: {
    kicker: "Writing",
    title: "Notes and case studies.",
    all: "All writing",
    empty: "No posts yet.",
    indexLead:
      "Longer notes on the work: what the problem was, what I chose, and what I would do differently.",
  },
  contact: {
    kicker: "Contact",
    title: "Got a role, a project, or a question?",
    lead: "Email is the fastest way to reach me. I read everything and reply within one or two working days.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    built: "Built with Next.js and Tailwind CSS",
  },
  post: {
    back: "All writing",
    readingTime: "min read",
    sample:
      "Sample content. This post exists to show the structure — replace it with your own writing.",
  },
};
