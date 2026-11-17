export type Localized = { en: string; id: string };

export type LocalizedList = { en: string[]; id: string[] };

export type Project = {
  slug: string;
  title: Localized;
  role: Localized;
  year: string;
  summary: Localized;
  result: Localized;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Slug of an MDX post in content/posts/<locale>/ that tells the longer story. */
  caseStudySlug?: string;
  cover: { from: string; to: string; initials: string };
  /** Marks sample data so the UI can label it honestly. */
  sample?: boolean;
};
